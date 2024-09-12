import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { LoginInput, SignupInput } from './type';
import * as service from './service';
class AuthController {

  async postLogin(req: Request, res: Response): Promise<void> {
    try {
      const user = await service.findOneByEmail(req.body.email);
      if (!user) res.redirect('/login');

      const checkedPassword = await bcrypt.compare(req.body.password, user.password);
      if (checkedPassword) {
        req.session.isLoggedIn = true;
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
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser: SignupInput = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      };

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
      console.error('Register error:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred during register'
      });
    }
  }

  async postLogout(req: Request, res: Response): Promise<void> {
    req.session.destroy(error => {
      console.log(error);
      res.redirect('/');
    });
  }
}

export default new AuthController();