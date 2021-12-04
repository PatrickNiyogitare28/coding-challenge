import * as bcrypt from 'bcrypt';
export const hashPassword = (password: string) : Promise<string> => {
    const BCRYPT_SALT_ROUNDS: number =  10;
    const salt:string | number = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS)
    return bcrypt.hash(password, salt);
}

export const verifyPassword = (hashedPassword: string, password: string) : Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
}