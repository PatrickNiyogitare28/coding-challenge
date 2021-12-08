import { prisma } from 'lib/prisma';

/*Todo protecting with middleware*/
/*Doing validations*/
export default async function handler (req: any, res: any) {
  const {pid} = req.query;
    try{
      await prisma.visits.delete({where: {id: pid}});
      return res.status(200).json({
        success: true,
        message: 'Successfully removed from visit list'
      });
    }
    catch(e){
      console.log(e);
      return res.status(400).json({
        success: false,
        message: 'Can not remove from visit list'
      })
    }
}

