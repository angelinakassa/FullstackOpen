import { useState } from "react"

const App = () => {
  // counter - initial value
  const [counter, setCounter] = useState(0)

  const plusOne = () => {
    setCounter(counter + 1)
  }

  const plusTwo = () => {
    setCounter(counter + 2)
  }
  return (
    <>
      <Display counter={counter} />
      <Button onClick={plusOne} text="plus 1" />
      <Button onClick={plusTwo} text="plus 2" />
      {/* NOT good pratice 
    <div>{counter}</div> 
     <button onClick={plusOne}>
      plus 1
    </button> 
    <button onClick ={plusTwo}>
      plus 2
    </button>
    <div>
     <button onClick={() => setCounter(0)}>
      zero
    </button>
    </div>
   <div>
    <button onClick = {()=>setCounter(counter -1)}>
    minus
    </button>
   </div> */}
    </>
  )
}

const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
export default App

// As we have only 1 property, we don't need "props.conter" and also contains only return statement
// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }


// Refactored version above
//  const Button = (props) => {
//   return (
//     <button onClick = {props.onClick}>
//       {props.text}
//     </button>
//   )
// }