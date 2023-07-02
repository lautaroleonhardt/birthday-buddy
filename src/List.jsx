import React from 'react'
import Person from './Person'

const List = ({ people }) => {
  return (
    <>
      {people.length > 0 && (
        <ul>
          {people.map((person) => {
            return <Person key={person.id} {...person} />
          })}
        </ul>
      )}
    </>
  )
}

export default List
