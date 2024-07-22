function App() {
  let course = 'Half Stack application development'
  let part1 = { name: 'Fundamentals of React', exercises: 10 }
  let part2 = { name: 'Using props to pass data', exercises: 7 }
  let part3 = { name: 'State of a component', exercises: 14 }

  return (
    <>
      <Header course={course} />
      <main>
        <Content part1={part1} part2={part2} part3={part3} />
        <Total
          totalExercises={part1.exercises + part2.exercises + part3.exercises}
        />
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
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
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
  return <p>Number of exercises {props.totalExercises}</p>
}
