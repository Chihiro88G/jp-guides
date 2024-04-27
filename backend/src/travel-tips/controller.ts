import { Request, Response } from 'express';

class TravelTipsController {

  async get(req: Request, res: Response): Promise<any> {
    res.send('get travel tips')
    console.log('inside get travel tips')
  }
}

export default new TravelTipsController();