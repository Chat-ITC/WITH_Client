import styles from './QuizSelect.module.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Bottom from '../../component/Bottom/Bottom';

const QuizSelect = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const location = useLocation();
    const { answer, content, title } = location.state;


    return (
        <>
            <header className={styles.Quiz_header}>
                <h1 className={styles.BackTitle}>{title}</h1>
            </header>

            <article className={styles.article}>
                {content}
            </article>

            <footer>

                <button className={styles.buttonO}>
                    O
                </button>

                <button className={styles.buttonX}>
                    X
                </button>

            </footer>
            <Bottom />
        </>
    )
};


export default QuizSelect;