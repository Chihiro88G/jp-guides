import { Request, Response } from 'express';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { LoginInput, SignupInput, UpdatePasswordInput } from './type';
import * as service from './service';
import { resetEmail } from '../mail';
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

  async postReset(req: Request, res: Response): Promise<void> {
    const user = await service.findOneByEmail(req.body.email);
    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Email not found in db'
      });
      return;
    };

    crypto.randomBytes(32, (async (err, buffer) => {
      if (err) {
        console.log(err);
        res.redirect('/reset');
      } 

      const token = buffer.toString('hex');
      await service.updatePasswordResetToken(token, user.id);
      resetEmail(user.email, token);

      res.status(200).json({
        success: true,
        message: 'Reset ready',
      });
    }))
  }

  async getCheckToken(req: Request, res: Response): Promise<void> {
    const token = req.query.token?.toString();
    console.log(token);
    if (!token) {
      res.status(401).json({
        success: false,
        message: 'Token not found in db'
      });
      return;
    }

    const user = await service.findOneByToken(token);
    if (!user) {
      res.status(401).json({
        success: false,
        message: 'User not found with the tokens'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'User found with requested token',
    });
  }

  async postUpdate(req: Request, res: Response): Promise<void> {
    console.log(req.body.user.token)
    const user = await service.findOneByToken(req.body.user.token);
    if (!user) {
      res.status(401).json({
        success: false,
        message: 'User not found with the tokens'
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.user.password, salt);

    const userToUpdate: UpdatePasswordInput = {
      id: user.id,
      newPassword: hashedPassword,
    };

    await service.updatePassword(userToUpdate);

    res.status(200).json({
      success: true,
      message: 'Password Changed',
    });
  }
}

export default new AuthController();