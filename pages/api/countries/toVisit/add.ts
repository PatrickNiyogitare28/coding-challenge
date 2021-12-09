import { prisma } from 'lib/prisma';
import * as _ from 'lodash';

/*Todo protecting with middleware*/
export default async function handler (req: any, res: any) {
    const payload: IAddToVisitDto = req.body;
    const {countryName, userId} = payload;
    const existsByName: boolean = await _existsByName(userId, countryName)
      if(existsByName) {
        const visited:any =  await prisma.visits.updateMany({
          where: {user: userId, countryName},
          data: {status: 'VISITED'}
        });
        return res.status(200).json({
          success: true,
          message: `${countryName} successfully added to visited list`,
          data: visited
        })
      }
      else
      try {
       const toVisit:any = await prisma.visits.create({
        data: {countryName, user: userId}
       })
       return res.status(201).json({
         success: true,
         message: `${countryName} successfully added to visit list 1`,
         data: toVisit
       })
    } catch (error) {
      res.status(400).json({
        message: `Something went wrong :/ ${error}`,
      });
    }
}

const _existsByName = async(user: string, countryName: string) : Promise<boolean> => {
  const existsCount: any = await prisma.visits.count({where: {user, countryName, status: 'VISIT_PENDING'}});
  if(existsCount > 0) return true;
  return false;
}
export interface ILoginWithEmailDto{
    email: string,
    password: string,
}

export interface IAddToVisitDto {
  countryName: string,
  userId: string
}
