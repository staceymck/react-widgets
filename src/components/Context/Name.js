import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export default function Name() {
  const user = useContext(UserContext)

  return (
    <div>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
    </div>
  )
}
