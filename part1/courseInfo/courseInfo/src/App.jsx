import React from 'react';
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  function Content({parts}) {
    return (
      <>
       {parts.map((part, index) => (
        <ul key = {index} >
          {part.name} has {part.exercises}</ul>
       ))}
      </>
    )
  }
  
function Header({course}) {
  return (
    <>
      Course {course}
    </>
  )
}

function Total({totalNum}) {
 const totalExersices = totalNum.reduce((sum, part) => sum + part.exercises, 0);
 return totalExersices
}

  return (
    <div>
      <Header course={course} />
      <br />
      <Content parts={parts} />
      <Total totalNum={parts} />
    </div>
  )
}





export default App