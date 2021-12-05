import { ITabItemProps } from "./IProps";

export const getTabItems = (currentParam: string): Array<ITabItemProps> => {
    return [
        {
            name: 'MY LIST',
            param:'list',
            backgroundColor : currentParam === 'list' ? 'rgba(0, 0, 0, 0.075)' : "transparent"
        },
        {
            name: 'VISITED',
            param:'visited',
            backgroundColor : currentParam === 'visited' ? 'rgba(0, 0, 0, 0.075)' : "transparent"
        },
        {
            name: 'TO VISIT',
            param:'to-visit',
            backgroundColor : currentParam === 'to-visit' ? 'rgba(0, 0, 0, 0.075)' : "transparent"
        }
    ]
}
