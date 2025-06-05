import { render, screen } from '@testing-library/react'
import { PortfolioCard } from './PortfolioCard'

test('renders portfolio card data', () => {
  render(
    <PortfolioCard
      img="/img.jpg"
      title="Project Title"
      description="Project description"
      tags={['React', 'TypeScript']}
      date="2024-06-01"
    />
  )

  expect(screen.getByRole('img', { name: /project title/i })).toBeInTheDocument()
  expect(screen.getByText('Project Title')).toBeInTheDocument()
  expect(screen.getByText('Project description')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('TypeScript')).toBeInTheDocument()
  expect(screen.getByText('2024-06-01')).toBeInTheDocument()
})
