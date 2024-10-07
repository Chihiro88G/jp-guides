import { NextFunction, Request, Response } from 'express';
import * as service from './service';
class ToursController {

  async get(req: Request, res: Response): Promise<void> {
    const result = req.query.popular
                    ? await service.findPopular()
                    : await service.findAll();
    res.send(result);
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    const tourId = parseInt(req.params.tourId);

    try {
      const result = await service.findOneById(parseInt(req.params.tourId));

      if (!result) {
        res.status(404).json({
          success: false,
          message: 'Tour not found: id ' + tourId
        });
        return;
      } 
  
      res.send(result);
        
    } catch (error) {
      next(error);
    }
  }
}

export default new ToursController();