import CryptoJS from 'crypto-js';

const PRIVATE_KEY = process.env.NEXT_PUBLIC_ENV_PRIVATE_KEY || 'MIIBOQIBAAJAV/qchAcsRKilxDIDYorkpOX4yphTL2K';
const encrypt = (data:any) => {
    const cipherText  = CryptoJS.AES.encrypt(JSON.stringify(data), PRIVATE_KEY).toString();
    return cipherText;
}

const decrypt = (cipherText:any) =>  {
    const bytes  = CryptoJS.AES.decrypt(cipherText, PRIVATE_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}

export const crypto = {encrypt, decrypt};