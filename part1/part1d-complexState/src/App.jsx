import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
 // const [total, setTotal] =useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left +1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
    // State update happens asynchronousle
    // console.log('left before', left)
    // setLeft(left + 1)
    // console.log('left after', left)
    setTotal(left+right)
  }


  const handleRightClick = () => {
    // "concat" adds a new value without changing the initial data
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  return (
    <div>
      {left}
      {/* <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button> */}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      {/* "join" creates and return a new string
          <p>{allClicks.join(' ')}</p>
      */}
      
      <History allClicks={allClicks} />
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App
