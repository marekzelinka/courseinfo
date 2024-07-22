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
      <Header course={course} />
      <main>
        <Content
          part1={part1}
          exercises1={exercises1}
          part2={part2}
          exercises2={exercises2}
          part3={part3}
          exercises3={exercises3}
        />
        <Total totalExercises={exercises1 + exercises2 + exercises3} />
      </main>
    </>
  )
}

export default App

function Header(props) {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

function Content({ part1, exercises1, part2, exercises2, part3, exercises3 }) {
  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  )
}

function Total({ totalExercises }) {
  return <p>Number of exercises {totalExercises}</p>
}
