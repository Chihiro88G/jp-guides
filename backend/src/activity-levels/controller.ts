import { Request, Response } from 'express';
import * as service from './service';
class ActivityLevelController {

  async get(req: Request, res: Response): Promise<void> {
    const result = await service.findAll();
    res.send(result);
  }
}

export default new ActivityLevelController();