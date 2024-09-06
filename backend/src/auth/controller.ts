import { Request, Response } from 'express';
import { LoginInput } from './type';
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
}

export default new AuthController();