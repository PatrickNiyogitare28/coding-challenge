import * as jwt from 'jsonwebtoken';
import { IUser } from 'pages/interfaces/IUser';

export const signToken = (payload: IUser): string => {
    const JWT_KEY= process.env.JWT_KEY || 'bTFYEZhSnFri5gPIpU0UE734sYhqpbMbhbh0';
    return jwt.sign(payload, JWT_KEY);
}

export const decodeToken = (token: string) : any => {
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