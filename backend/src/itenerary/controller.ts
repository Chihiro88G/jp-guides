import { Request, Response } from 'express';
import * as service from './service';

class IteneraryController {

  async getOne(req: Request, res: Response): Promise<void> {
    const result = await service.findOneByTourId(parseInt(req.params.tourId));
    res.send(result);
  }
}

export default new IteneraryController();