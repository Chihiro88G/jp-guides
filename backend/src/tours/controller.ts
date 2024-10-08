import { NextFunction, Request, Response } from 'express';
import * as service from './service';
class ToursController {

  async get(req: Request, res: Response): Promise<void> {
    const result = req.query.popular
                    ? await service.findPopular()
                    : await service.findAll();
    // res.send(result);

    res.status(200).json({
      success: true,
      data: result,
    });

  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    const tourId = parseInt(req.params.tourId);

    try {
      const result = await service.findOneById(tourId);

      if (!result) {
        res.status(404).json({
          success: false,
          message: 'Tour not found: id ' + tourId
        });
        return;
      } 
  
      res.status(200).json({
        success: true,
        data: result,
      });

      // res.send(result);

    } catch (error) {
      const err = new Error(error as string);
      next(err);
    }
  }
}

export default new ToursController();