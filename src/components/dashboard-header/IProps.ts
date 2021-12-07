export interface IFilterProps {
    show:boolean,
    label: string,
    selectOptions: Array<ISelectOption>,
    onSelectChanged: any
}
export interface ISelectOption{
    label: string,
    value: any
}
export interface ISearchInputProps{
    onChange: any
}
export interface IDashboardHeaderProps{
    onSearchInputChanged: any,
    onSelectInputChanged: any
}