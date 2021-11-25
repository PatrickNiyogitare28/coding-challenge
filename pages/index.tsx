import React from "react";

import { Container } from "@components";
import styles from './styles.module.scss';

const Home: React.FC = () => {
    return (
        <Container>
           <div className={styles.container}>
                <h1><code>BAG Innovation</code>  Challenge</h1>
           </div>
        </Container>
    );
};

export default Home;
