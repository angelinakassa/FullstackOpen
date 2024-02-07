const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <br />
      <Content parts={part1.name} exercises= {part1.exercises} />
      <Content  parts={part2.name} exercises= {part2.exercises} />
      <Content parts={part3.name} exercises= {part3.exercises} />
   
      <Total totalNum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}


function Content(props) {
  return (
      <>
        {props.parts} has {props.exercises} exercises <br/>
       </>
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
      Number of exercises is {props.totalNum}
    </>
  )
}

export default App