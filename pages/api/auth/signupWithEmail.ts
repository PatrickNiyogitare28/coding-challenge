import { prisma } from 'lib/prisma';
import * as _ from 'lodash';
import { hashPassword } from '../utils/bcrypt';
import { signToken } from '../utils/jwt';

export default async function handler (req: any, res: any)  {
  const payload: ISignupWithEmailDto = req.body;
  const {firstName, lastName, email, password} = payload;
  const existsByEmail: boolean = await _existsByEmail(email);
  if(existsByEmail) return res.status(200).json({
    success: false, 
    message: 'Email already exists'
  });
  const hashedPassword: string = await hashPassword(password)
    try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword
      },
    });
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

const _existsByEmail = async(email: string) : Promise<boolean> => {
   const existsCount: any = await prisma.user.count({where: {email}});
   if(existsCount > 0) return true;
   return false;
}

export interface ISignupWithEmailDto{
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
export interface IUser{
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
    createdAt: Date,
    updatedAt: Date
}
