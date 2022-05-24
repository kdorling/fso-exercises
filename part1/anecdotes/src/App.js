import { useState } from 'react'

const Button = ({eventHandler, text}) => (
  <button onClick={eventHandler}>
    {text}
  </button>
)

const Header = ({text}) => <h2>{text}</h2>

const Anecdote = ({text, numberOfVotes}) => ( 
  <div>
    <div>{text}</div>
    <div>has {numberOfVotes} votes</div>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNextAnecdoteClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVoteClick = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const maxVoteIndex = votes.reduce((maxIndex, vote, i) => vote > votes[maxIndex] ? i : maxIndex,  0)

  return (
    <>
      <Header text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} numberOfVotes={votes[selected]}/>
      <Button eventHandler={handleVoteClick} text='vote'/>
      <Button eventHandler={handleNextAnecdoteClick} text='next anecdote'/>

      <Header text='Anecdote with most votes' />
      <Anecdote text={anecdotes[maxVoteIndex]} numberOfVotes={votes[maxVoteIndex]}/>
    </>
  )
}

export default App