import { useState } from 'react'
import './App.css'


const StaticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <div>
        <p>{text}: {value} %</p>
      </div>
    ) 
  }
  return (
    <div>
      <p>{text}: {StaticLine}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => (  
<button onClick={handleClick}>    {text}  </button>
)

const Statistics = ({good, neutral, bad, all, totalScore}) => {
  if (all === 0) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )
  }
  return (
    <>
    <StaticLine text='good' value={good} />
    <StaticLine text='neutral' value={neutral} />
    <StaticLine text='bad' value={bad} />
    <StaticLine text='all' value={all} />
    <StaticLine text='average' value={totalScore/all} />
    <StaticLine text='positive' value={(good/ (all))*100}  />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => {       
    const updatedGood = good + 1;
    setGood(updatedGood)
    
  }
  const handleNeutralClick = () => {    
       
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    
  }

  const handleBadClick = () => {    
       
    const updatedBad = bad + 1;
    setBad(updatedBad);
    
  }
  const all =  good + bad + neutral 
  const totalScore =  (good * 1) + (neutral * 0) + (bad * -1)
  
  return (
    <div>
  <h2>Give Feedback</h2>
  <div>
    <Button handleClick={handleGoodClick} text="Good" />
    <Button handleClick={handleNeutralClick} text="Neutral" />
    <Button handleClick={handleBadClick} text="Bad" />
  </div>

  <h2>Statistics</h2>
  <table>
    <tbody>
      <Statistics />
    </tbody>
  </table>
</div>

  
  )
}

export default App