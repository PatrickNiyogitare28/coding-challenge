import React from "react";

import { Container } from "@components";
import styles from './styles.module.scss';
import { Signup } from "./auth";

const Home: React.FC = () => {
    return (
        <Container>
           <Signup />
        </Container>
    );
};

export default Home;
