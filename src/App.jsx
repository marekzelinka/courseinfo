function App() {
  let course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      { id: 1, name: 'Fundamentals of React', exercises: 10 },
      { id: 2, name: 'Using props to pass data', exercises: 7 },
      { id: 3, name: 'State of a component', exercises: 14 },
    ],
  }

  return <Course course={course} />
}

export default App

function Course({ course }) {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

function Header({ name }) {
  return <h2>{name}</h2>
}

function Content({ parts }) {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

function Total({ parts }) {
  let exercisesCount = parts.reduce((total, part) => total + part.exercises, 0)

  return <p style={{ fontWeight: 600 }}>Number of exercises {exercisesCount}</p>
}
