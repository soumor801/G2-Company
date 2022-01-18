import { useState, useEffect } from 'react'
import './votingFeature.css'

const VotingFeature = (props) => {
  const storedValueAsNumber = Number(localStorage.getItem(`${props.id}`))
  const [count, setCount] = useState( Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0);
  useEffect(() => {
    localStorage.setItem(`${props.id}`, String(count))
  }, [count])
  const addLike = () => {
    setCount(count + 1)
  }
  return (
    <div className="v">
      <div className='v-text'>Want to work with  {props.el?.name} ? <img onClick={() => addLike()} className='v-img' src="https://i.imgur.com/TuHj4p3.png"/> <span>Yes!</span></div>
      <div>{count} people have said Yes!</div>
      
    </div>
  )
}

export default VotingFeature
