import { prisma } from 'lib/prisma';
import * as _ from 'lodash';

/*Todo protecting with middleware*/
export default async function handler (req: any, res: any) {
  const {pid} = req.query;
    try{
      const countries: Array<any> = await prisma.visits.findMany({where: {user: pid, status: 'VISIT_PENDING'}});
      return res.status(200).json({
        success: true,
        data: countries
      });
    }
    catch(e){
      return res.status(400).json({
        success: false,
        message: 'can not get to visit list'
      })
    }
}

