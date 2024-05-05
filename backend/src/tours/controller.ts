import { Request, Response } from 'express';
import * as service from './service';

class ToursController {

  async get(req: Request, res: Response): Promise<any> {
    const result = await service.findAll();
    res.send(result);
  }

  async getOne(req: Request, res: Response): Promise<any> {
    const result = await service.findOne(parseInt(req.params.tourId));
    res.send(result);
  }
}

export default new ToursController();