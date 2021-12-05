import { ILoginWithEmailDto } from "pages/api/auth/signinWithEmail";
import { ISignupWithEmailDto } from "pages/api/auth/signupWithEmail";
import { IUser } from "pages/interfaces/IUser";

const signup = async (data: ISignupWithEmailDto) => {
    try {
        let response: any = await fetch('http://localhost:3000/api/auth/signupWithEmail', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }).then((response) => response.json())
      .then((response) => {
        const {success, data, accessToken, message} = response;
        if(success) return {success, data, token: accessToken};
        return {success, message};
        
      });
      return response;
    } catch (error: any) {
      return {success: false, message: 'email already exisists'}
    }
  };

  const signin = async (data: ILoginWithEmailDto) => {
    try {
        let response: any = await fetch('http://localhost:3000/api/auth/signinWithEmail', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }).then((response) => response.json())
      .then((response) => {
        const {success, data, accessToken, message} = response;
        if(success) return {success, data, token: accessToken};
        return {success, message};
        
      });
      return response;
    } catch (error: any) {
      return {success: false, message: 'email already exisists'}
    }
  };

  export {signup, signin}