import { Request, Response } from 'express';
// import * as service from './service';
class AuthController {

  async post(req: Request, res: Response): Promise<void> {
    // const result = await service.findAll();
    // res.send(result);
    console.log('inside controller to login');
    res.redirect('/');
  }
}

export default new AuthController();