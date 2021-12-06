import { IContainerProps } from "@components/IProps";

export const Container:React.FC <IContainerProps>= ({ children}) => {
    return <div className="min-h-screen flex flex-col">{children}</div>;
};
