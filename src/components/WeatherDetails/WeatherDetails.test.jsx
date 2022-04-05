import React from 'react'
import WeatherDetails from './WeatherDetails'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("WeatherDetails render", async() => {
  const {findByText} = render(<WeatherDetails humidity={10} wind={9}/>)
  const humidity = await findByText(/10/)
  const wind = await findByText(/9/)
  expect(humidity).toHaveTextContent("Humedad: 10%")
  expect(wind).toHaveTextContent("Viento: 9km/h")
})
