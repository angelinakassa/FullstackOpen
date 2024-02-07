const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  // Props are in a local scope
  function Content() {
    return (
      <>
        <Part
          name={part1} exercises = {exercises1} 
        /> <br/>
         <Part
          name={part2} exercises = {exercises2}
        /> <br/>
         <Part
          name={part3} exercises = {exercises3}
        />
        {/* Part 1 {props.part1} has {props.exercises1} exercises.
        Part 2 {props.part2} has {props.exercises2} exercises.
        Part 3 {props.part3} has {props.exercises3} exercises. */}

      </>
    )
  }

  return (
    <div>
      <Header course={course} />
      <br />
      <Content/>
      {/* <Content
      part1={part1} part2 ={part2} part3={part3}
      exercises1={exercises1} exercises2 = {exercises2} exercises3={exercises3}
      /> */}
      <Total totalNum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

function Header(props) {
  return (
    <>
      Course {props.course}
    </>
  )
}

function Total(props) {
  return (
    <>
    <br/>
      Number of exercises is {props.totalNum}
    </>
  )
}

function Part(props) {
  const { name } = props;
  const {exercises} = props;
  return (
    <>
      {name} has {exercises}
    </>
  )
}

export default App