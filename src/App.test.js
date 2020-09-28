import React from 'react'
import render from '@testing-library/react'
import App from './App'

test('expects stopwatch to render', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/React Stopwatch/i)
  expect(linkElement).toBeInTheDocument()
})
