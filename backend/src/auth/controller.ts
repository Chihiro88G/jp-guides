import { Request, Response } from 'express';
import { LoginInput, SignupInput } from './type';
import * as service from './service';
class AuthController {

  async postLogin(req: Request, res: Response): Promise<void> {
    try {
      const userInput: LoginInput = {
        email: req.body.email,
        password: req.body.password,
      }

      const user = await service.findOneByEmailAndPw(userInput);

      if (user) {
        res.status(200).json({
          success: true,
          message: 'Login successful',
          user: user,

        });
      } else {
        res.status(401).json({
          success: false,
          message: 'Invalid email or password'
        });
      }

    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred during login'
      });
    }
  }

  async postRegister(req: Request, res: Response): Promise<void> {
    try {
      const newUser: SignupInput = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      // validation check
      // if the user is already registered (by email)

      const registeredUser = await service.insert(newUser);

      if (registeredUser) {
        res.status(200).json({
          success: true,
          message: 'Register successful',
          user: registeredUser,

        });
      } else {
        res.status(401).json({
          success: false,
          message: 'Wrong Input(s)'
        });
      }

    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred during login'
      });
    }
  }
}

export default new AuthController();