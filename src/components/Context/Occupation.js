import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export default function Occupation() {
  const user = useContext(UserContext)
  //because this component pulls data from the UserContext, whenever
  //that context is updated, this component will receive an update too
  return (
    <div>
      <p>
        <strong>Occupation:</strong> {user.occupation}
      </p>
    </div>
  )
}