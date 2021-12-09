export interface ICountryName{
    common: string,
    nativeName: Object
}
export interface ICountryFlag{
    png: string,
    svg: string
}
export interface ICountry {
    name: ICountryName,
    capital: Array<string>,
    region: string,
    subregion: string,
    flags: ICountryFlag,
    population: number,
    currencies: Object,
    languages: Object,
    borders: Array<string>
    tld: Array<string>
}