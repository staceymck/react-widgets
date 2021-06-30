import React, { useState, useEffect } from 'react'
import styles from './BoxMove.module.css'

export default function BoxMove() {

  const [offsetY, setOffsetY] = useState(0)
  const [offsetX, setOffsetX] = useState(0)

  useEffect(() => {
    function handleKeydown(e) {
      const listener = keyMap.get(e.keyCode);
      return listener && listener(e)
    }
    document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  })

  const moveUp = () => {
    setOffsetY(offsetY - 10)
    console.log(offsetY)
  }

  const moveDown = () => {
    setOffsetY(offsetY + 10)
  }

  const moveRight = () => {
    setOffsetX(offsetX + 10)
  }

  const moveLeft = () => {
    setOffsetX(offsetX - 10)
  }

  const keyMap = new Map([
    [38, moveUp],
    [40, moveDown],
    [39, moveRight],
    [37, moveLeft]
  ])

  document.addEventListener("keydown", console.log(`${offsetX} + ${offsetY}`))

  return (
    <div className={styles.container}>
      <h1>Move the box</h1>
      <p>Use the arrow keys to shift the solid box on top of the star </p>
      <div className={styles.box} style={{transform: `translate(${offsetX}px, ${offsetY}px)`}}></div>
      <div className={styles.goal}>&#9733;</div>
    </div>
  )
}