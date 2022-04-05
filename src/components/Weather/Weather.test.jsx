import React from 'react'
import Weather from './Weather'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("weather render sunny", async() => {
  const {findByRole} = render(<Weather temperature={10} state="clear"/>)
  const temp = await findByRole("heading")
  expect(temp).toHaveTextContent("10")
})
test("weather render cloud", async() => {
  const {findByRole} = render(<Weather temperature={10} state="clouds"/>)
  const temp = await findByRole("heading")
  expect(temp).toHaveTextContent("10")
})