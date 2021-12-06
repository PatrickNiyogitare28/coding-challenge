export interface IFilterProps {
    show:boolean,
    label: string,
    selectOptions: Array<ISelectOption>
}
export interface ISelectOption{
    label: string,
    value: any
}