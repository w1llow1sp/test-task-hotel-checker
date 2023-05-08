import React, {useState} from 'react';

import styles from './Main.module.css';
import {DatePicker} from "./DatePicker/DatePicker";
import {Favorites} from "./Favorites/Favorites";

export const Main = () => {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <section className={styles.main}>
            <h2 className={styles.header}>Simple Hotel Check</h2>
            <div className={ styles.container}>
                {/*left first block*/}
                <div className={styles.picker}>
                    <DatePicker setSearchResults={setSearchResults} />
                </div>
                {/*left second block*/}
                <div className={styles.likes}>
                    <Favorites/>
                </div>
                {/*right main block*/}
                <div className={styles.board}></div>
            </div>
        </section>
    );
};
