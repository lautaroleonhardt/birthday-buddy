import { render, screen } from '@testing-library/react'
import List from '../List'
import data from '../data'

describe('List', () => {
  it('should render the list of people', () => {
    render(<List people={data} />)

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('should not render the list of people with an empty array', () => {
    render(<List people={[]} />)

    const list = screen.queryByRole('list')
    expect(list).not.toBeInTheDocument()
  })

  it('should render the list of people with a single person', () => {
    render(<List people={[data[0]]} />)

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })
})
