//import { useState } from 'react'

function App() {
  const now = Date()
  // "new Data()" returns an object, "Data()" return a string
  const a = 10
  const b = 20
  console.log(now, a+b)
  const age = 3

  return (
    <div>
      <p>Hi from there! Now: {now}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello/>
      <Hello name="Name" age = {age}/>
      <Array/>
    </div>
  )
}

const Hello = (props) => {
  console.log(props)
  return (
    <>
      <h3>
        The second component.
        <br/>
        {props.name} is the first props.
        <br/>
        {props.age} is the age value of the props
      </h3>
    </>
  )
}

const Array = () => {
  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}
export default App
