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

    const buttonOHandle = () =>{
        if(answer === '참'){
            alert("정답입니다!!");

        }
        else {
            alert("오답입니다!!");
        }


    };

    const buttonXHandle = () =>{
        if(answer === '거짓'){
            alert("정답입니다!!");

        }
        else {
            alert("오답입니다!!");
        }


    };

 


    return (
        <>
            <header className={styles.Quiz_header}>
                <p className={styles.BackTitle}>{title}</p>
            </header>

            <article className={styles.article}>
                {content}
            </article>

            <footer className={styles.footer}>

                <button className={styles.buttonO} onClick={buttonOHandle}>
                    O
                </button>

                <button className={styles.buttonX} onClick={buttonXHandle}>
                    X
                </button>

            </footer>
            <Bottom />
        </>
    )
};


export default QuizSelect;