import React from "react";

import { Container } from "@components";
import styles from './styles.module.scss';
import { Signup } from "./auth";

const Home: React.FC = () => {
    return (
        <Container>
           {/* <div className={styles.container}>
                <h1><code>BAG Innovation</code> Coding Challenge</h1>
           </div> */}
           <Signup />
        </Container>
    );
};

export default Home;
