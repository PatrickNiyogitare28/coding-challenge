import { prisma } from 'lib/prisma';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const signupWithEmail = async (req: any, res: any) => {
  const payload: ISignupWithEmailDto = req.body;
  const {firstName, lastName, email, password} = payload;
  const hashedPassword: string = await _hashPassword(password)
    try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      message: `Something went wrong :/ ${error}`,
    });
  }
}

const loginWithEmail = async(req: any, res: any) => {
    const payload: ILoginWithEmailDto = req.body;
    const {email, password} = payload;
      try {
      const user: IUser | any = await prisma.user.findFirst({where: {email}})
      if(!user) return res.status(401).json({message: 'Invalid email or password'})
      const isPasswordValid: boolean = await _verifyPassword(user?.password, password);
      if(!isPasswordValid) return res.status(401).json({message: 'Invalid email or password'});

      const token: string = _signToken(user);
      res.status(200).json({user, accessToke: token});
    } catch (error) {
      res.status(400).json({
        message: `Something went wrong :/ ${error}`,
      });
    }
}

const _hashPassword = (password: string) : Promise<string> => {
    const KEY = process.env.BCRYPT_KEY || 'IpUaUsYhqpbMbhbh0bTFYEZhSnFri5gP';
    return bcrypt.hash(password, KEY);
}

const _verifyPassword = (hashedPassword: string, password: string) : Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
}

const _signToken = (payload: IUser): string => {
    const JWT_KEY= process.env.JWT_KEY || 'bTFYEZhSnFri5gPIpU0UE734sYhqpbMbhbh0';
    return jwt.sign(payload, JWT_KEY);
}
const _decodeToken = (token: string) : any => {
  const JWT_KEY= process.env.JWT_KEY || 'bTFYEZhSnFri5gPIpU0UE734sYhqpbMbhbh0';
  try{
    const decode: IUser | any = jwt.verify(token, JWT_KEY);
    if(!decode) return false;
    return decode;
  }
  catch(e){
      return false;
  }
}

export interface ILoginWithEmailDto{
    email: string,
    password: string,
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

export {signupWithEmail, loginWithEmail}