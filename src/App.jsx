import { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const clearAll = () => {
    setPeople([])
    setButtonDisabled(true)
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type='button'
          className={`btn btn-block ${buttonDisabled && 'btn-disabled'}`}
          onClick={clearAll}
          disabled={buttonDisabled}>
          clear all
        </button>
      </section>
    </main>
  )
}

export default App
