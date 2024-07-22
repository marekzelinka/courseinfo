function App() {
  let course = 'Half Stack application development'
  let part1 = 'Fundamentals of React'
  let exercises1 = 10
  let part2 = 'Using props to pass data'
  let exercises2 = 7
  let part3 = 'State of a component'
  let exercises3 = 14

  return (
    <>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

export default App
