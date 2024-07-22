export function Course({ course }) {
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
