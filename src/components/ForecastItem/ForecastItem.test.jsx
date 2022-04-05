import React from 'react'
import ForecastItem from './ForecastItem'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("ForecastItem render", async () => {
  const {findByText} = render(<ForecastItem weekDay={"Martes"} hour={9} temperature={10}/>)
  const weekDay = await findByText(/Martes/)
  const hour = await findByText(/9/)
  const temperature = await findByText(/10/)

  expect(weekDay).toHaveTextContent("Martes")
  expect(hour).toHaveTextContent("9")
  expect(temperature).toHaveTextContent("10")
})
