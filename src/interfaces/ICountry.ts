export interface ICountryName{
    common: string
}
export interface ICountryFlag{
    png: string,
    svg: string
}
export interface ICountry {
    name: ICountryName,
    capital: Array<string>,
    region: string,
    flags: ICountryFlag,
    population: number,
    currencies: Object
}