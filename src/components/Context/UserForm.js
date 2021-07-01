import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import styles from './UserForm.module.css';

export default function UserForm() {
  //get context data to use in form

  const user = useContext(UserContext);
  const [name, setName] = useState(user.name)
  const [occupation, setOccupation] = useState(user.occupation)

  const handleSubmit = e => {
    e.preventDefault()
    user.setName(name)
    user.setOccupation(occupation)
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.field}>
          <label className={styles.label}>Name:</label>
          <input className={styles.input} value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Occupation:</label>
          <input className={styles.input} value={occupation} onChange={e => setOccupation(e.target.value)}/>
        </div>
        <input className={styles.submit} type="submit" />
      </form>
    </div>
  )
}