import React, { useState } from 'react'
import styles from './Calculator.module.css'

export default function Calculator() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(num1 + num2);
  }

  const subtract = () => {
    setResult(num1 - num2);
  }

  const multiply = () => {
    setResult(num1 * num2);
  }

  const divide = () => {
    setResult(num1 / num2);
  }

  return (
    <div className={styles.calculator}>
      <h1>Calculate</h1>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="number" placeholder="0" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
        <input className={styles.input} type="number" placeholder="0" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={add}>&#43;</button>
        <button className={styles.button} onClick={subtract}>&#8722;</button>
        <button className={styles.button} onClick={multiply}>&#215;</button>
        <button className={styles.button} onClick={divide}>&#247;</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  )
}