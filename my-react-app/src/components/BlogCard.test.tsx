import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { BlogCard } from './BlogCard'

test('navigates to the blog post when clicked', async () => {
  const history = createMemoryHistory()
  render(
    <Router location={history.location} navigator={history}>
      <ul>
        <BlogCard slug="001" title="Test Post" date="2024-01-01" cover="/img.jpg" />
      </ul>
    </Router>
  )

  await userEvent.click(screen.getByRole('link', { name: /test post/i }))
  expect(history.location.pathname).toBe('/blog/001')
})
