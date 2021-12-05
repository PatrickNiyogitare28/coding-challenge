import { prisma } from 'lib/prisma';
import * as _ from 'lodash';
import { signToken } from '../utils/jwt';
import { verifyPassword } from '../utils/bcrypt';
import { IUser } from 'pages/interfaces/IUser';

export default async function handler (req: any, res: any) {
    const payload: ILoginWithEmailDto = req.body;
    const {email, password} = payload;
      try {
      const user: IUser | any = await prisma.user.findFirst({where: {email}})
      if(!user) return res.status(401).json({message: 'Invalid email or password'})
      const isPasswordValid: boolean = await verifyPassword(user?.password, password);
      if(!isPasswordValid) return res.status(401).json({message: 'Invalid email or password'});

      const token: string = signToken(user);
      const payload = _.pick(user, ['firstName', 'lastName', 'email', 'createdAt', 'updatedAt']);
      const accessToken = signToken(payload);
      res.status(200).json({
        success: true, 
        data: payload,
        accessToken
      });
    } catch (error) {
      res.status(400).json({
        message: `Something went wrong :/ ${error}`,
      });
    }
}

export interface ILoginWithEmailDto{
    email: string,
    password: string,
}