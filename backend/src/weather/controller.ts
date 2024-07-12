import { Request, Response } from 'express';
import * as service from './service';

class WeatherController {

  async get(req: Request, res: Response): Promise<void> {
    const result = await service.findAll();
    res.send(result);
  }

  // async getOne(req: Request, res: Response): Promise<void> {
  //   const result = await service.findOneById(parseInt(req.params.tourId));
  //   res.send(result);
  // }
}

export default new WeatherController();