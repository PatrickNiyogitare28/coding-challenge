import { prisma } from 'lib/prisma';

/*Todo protecting with middleware*/
export default async function handler (req: any, res: any) {
  const {pid} = req.query;
    try{
      const countries: Array<any> = await prisma.visits.findMany({where: {user: pid, status: 'VISITED'}});
      return res.status(200).json({
        success: true,
        data: countries
      });
    }
    catch(e){
      return res.status(400).json({
        success: false,
        message: 'can not get to visited list'
      })
    }
}

