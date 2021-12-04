import { IUser } from "pages/interfaces/IUser";

const signup = async (data: IUser) => {
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

  export {signup}