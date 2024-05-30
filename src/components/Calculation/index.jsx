import { useState } from "react";

import styles from './Calculation.module.css';

const Calculation = ({ calculationIMC, imc, clearInputs }) => {

    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const calculate = () => {
        calculationIMC(altura, peso);
    }



    return (
        <header className={styles.header}>
            <h1>Calculando IMC</h1>
            <input className={styles.inputs} onChange={e => setAltura(parseFloat(e.target.value))} type="number" placeholder="Digite sua altura" step={0.01} min={0} />
            <input className={styles.inputs} onChange={e => setPeso(parseFloat(e.target.value))} type="number" placeholder="Digite seu peso" step={0.1} min={0} />
            <button className={styles.button} type="button" onClick={calculate}>Calcular</button>
            {imc !== null ? <p className={styles.text}>IMC: {imc}</p> : <p className={styles.text}>Espaços em brancos</p>}

        </header>
    )

}

export default Calculation;