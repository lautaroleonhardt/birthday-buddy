import { render, screen } from '@testing-library/react'
import Person from '../Person'
import data from '../data'

describe('Person', () => {
  it('should render component', () => {
    const [firstPerson] = data
    render(<Person {...firstPerson} />)

    const personName = screen.getByRole('heading', { name: firstPerson.name })
    const personAge = screen.getByText(new RegExp(`${firstPerson.age} years`))
    const personImage = screen.getByRole('img', { name: firstPerson.name })

    expect(personName).toBeInTheDocument()
    expect(personAge).toBeInTheDocument()
    expect(personImage).toBeInTheDocument()
  })

  it('image should render with alt text', () => {
    const [firstPerson] = data
    render(<Person {...firstPerson} />)

    const personImage = screen.getByRole('img', { name: firstPerson.name })

    expect(personImage).toHaveAttribute('alt', firstPerson.name)
  })

  it('image should render with src', () => {
    const [firstPerson] = data
    render(<Person {...firstPerson} />)

    const personImage = screen.getByRole('img', { name: firstPerson.name })

    expect(personImage).toHaveAttribute('src', firstPerson.image)
  })

  it('should render component with default image', () => {
    const [firstPerson] = data
    render(<Person {...firstPerson} />)

    const personImage = screen.getByRole('img', { name: firstPerson.name })
    expect(personImage).toHaveAttribute('src', firstPerson.image)
  })
})
