import { Request, Response } from 'express';
import * as service from './service';
class ToursController {

  async get(req: Request, res: Response): Promise<void> {
    const result = req.query.popular
                    ? await service.findPopular()
                    : await service.findAll();
    res.send(result);
  }

  async getOne(req: Request, res: Response): Promise<void> {
    const result = await service.findOneById(parseInt(req.params.tourId));
    res.send(result);
  }
}

export default new ToursController();