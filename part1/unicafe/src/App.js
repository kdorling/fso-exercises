import { useState } from 'react'

const Button = ({eventHandler, text}) => (
  <button onClick={eventHandler} >
    {text}
  </button>  
)

const StatisticLine = ({text, value, percent=false}) => {
  if (percent === true) return (
    <tr>
      <td>{text}</td>
      <td>{value} %</td>
    </tr>
  )

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100

  if (total === 0) return (
    <div>
      No feedback given
    </div>
  )

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={positive} percent={true}/>
      </tbody>
    </table>
  )
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  return (
    <>
      <h2>give feedback</h2>
      <div>
        <Button eventHandler={handleGoodClick} text='good' />
        <Button eventHandler={handleNeutralClick} text='neutral' />
        <Button eventHandler={handleBadClick} text='bad' />
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
