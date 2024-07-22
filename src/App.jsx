function App() {
  let course = 'Half Stack application development'
  let parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ]

  return (
    <>
      <Header course={course} />
      <main>
        <Content parts={parts} />
        <Total parts={parts} />
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

function Content(props) {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

function Part(props) {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

function Total(props) {
  let exercisesTotal =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises

  return <p>Number of exercises {exercisesTotal}</p>
}
