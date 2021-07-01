import React from 'react'
import styles from './Context.module.css'
import UserForm from './UserForm'
import Name from './Name'
import Occupation from './Occupation'

export default function Context() {
  return (
    <div className={styles.container}>
      <h1>Context</h1>
      <p>This section utilizes Context to pass and receive data between components.</p>
      <div>
        <UserForm />
        <h2>User info displayed in sibling components:</h2>
        <Name />
        <Occupation />
      </div>
    </div>
  )
}