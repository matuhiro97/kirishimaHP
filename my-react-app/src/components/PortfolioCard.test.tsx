import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { PortfolioCard } from './PortfolioCard'

test('navigates to the portfolio post when clicked', async () => {
  const history = createMemoryHistory()
  render(
    <Router location={history.location} navigator={history}>
      <ul>
        <PortfolioCard
          slug="001"
          img="/kirishima.png"
          title="Project"
          description="desc"
          tags={[]}
          date="2024-01-01"
        />
      </ul>
    </Router>
  )

  await userEvent.click(screen.getByRole('link', { name: /project/i }))
  expect(history.location.pathname).toBe('/portfolio/001')
})
