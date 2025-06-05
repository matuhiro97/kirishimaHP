import { render, screen } from '@testing-library/react'
import App from './App'

test('unknown path shows 404 page', () => {
  window.history.pushState({}, '', '/does-not-exist')
  render(<App />)
  expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument()
})
