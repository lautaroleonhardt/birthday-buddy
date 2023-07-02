import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from '../App'
import React from 'react'
import data from '../data'

describe('App', () => {
  it('should display the correct number of birthdays in the title', () => {
    render(<App />)

    const title = screen.getByRole('heading', { name: `${data.length} birthdays today` })
    expect(title).toBeInTheDocument()
  })

  it('should render the list of people', () => {
    render(<App />)

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('should remove all birthdays when the clear all button is clicked', async () => {
    render(<App />)

    const button = screen.getByRole('button', { name: 'clear all' })
    await user.click(button)
    const title = screen.getByRole('heading', { name: '0 birthdays today' })

    expect(title).toBeInTheDocument()
    expect(screen.queryByRole('list')).toBeNull()
    expect(button).toBeDisabled()
  })
})
