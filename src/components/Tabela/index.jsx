import { useState } from "react";

import styles from './Tabela.module.css';

const Tabela = ({imc}) => {


        const alteraCor = (min , max) => {
            if (imc === null) return '';
            const imcValue = parseFloat(imc);
            if (imcValue >= min && imcValue < max){
                return styles.selected;
            }
            return '';
        }
    
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                <th className={styles.th}>IMC</th>
                <th className={styles.th}>Classificação</th>
                <th className={styles.th}>Obesidade(GRAU)</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                <tr className={alteraCor(-Infinity, 18.4)}>
                    <td className={styles.td}>MENOR QUE 18,5</td>
                    <td className={styles.td}>MAGREZA</td>
                    <td className={styles.td}>0</td>
                </tr>
                <tr className={alteraCor(18.5 , 24.9)}>
                    <td className={styles.td}>ENTRE 18,5 E 24,9</td>
                    <td className={styles.td}>NORMAL</td>
                    <td className={styles.td}>0</td>
                </tr>
                <tr  className={alteraCor(25.0, 29.9)}>
                    <td className={styles.td}>ENTRE 25,0 E 29,9</td>
                    <td className={styles.td}>SOBREPESO</td>
                    <td className={styles.td}>I</td>
                </tr>
                <tr className={alteraCor(30.0, 39.9)}>
                    <td className={styles.td}>ENTRE 30,0 E 39,9</td>
                    <td className={styles.td}>OBESIDADE</td>
                    <td className={styles.td}>II</td>
                </tr>
                <tr className={alteraCor(40.0, Infinity)}>
                    <td className={styles.td}>MAIOR QUE 40,0</td>
                    <td className={styles.td}>OBESIDADE GRAVE</td>
                    <td className={styles.td}>III</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela;