const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <br/>
    
      <Content
      part1={part1} part2 ={part2} part3={part3}
      exercises1={exercises1} exercises2 = {exercises2} exercises3={exercises3}
      />

      <Total totalNum={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

function Header (props) {
  return (
      <>
        Course {props.course}
      </>
  )
}

function Content (props) {
  return (
    <>
      Part 1 {props.part1} has {props.exercises1} exercises. <br/>
      Part 2 {props.part2} has {props.exercises2} exercises.<br/>
      Part 3 {props.part3} has {props.exercises3} exercises.<br/>
    </>
  )
}

function Total(props) {
  return (
    <>
    Number of exercises {props.totalNum}
  </>
  )
}

export default App