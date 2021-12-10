import React, { useEffect } from "react";

import { Container } from "@components";
import styles from './styles.module.scss';
import { Signup } from "./auth";
import { useAppDispatch } from "@redux/store";

const Home: React.FC = () => {
    const dispath: any = useAppDispatch();
    useEffect(() => {
        const theme: any = (typeof window !== 'undefined') ? localStorage.getItem('theme') : 'light';
        document.body.dataset.theme = theme
    },[dispath])
    return (
        <Container>
           <Signup />
        </Container>
    );
};

export default Home;
