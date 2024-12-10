import './App.css'

const Header = ({courses}) => {
  
return (
  <div>
  {courses.map(course => <h1 key={course.id}>{course.name}</h1>)}
  </div>
)}

const Content = ({course}) => {
  return (
    <ul>
            {course.parts.map((part) => (
              <Part key={part.id} part={part}/>
            ))}
    </ul>
  )
}
const Part = ({part}) => {
  return (
    <>
      <li >
        {part.name} {part.exercises}
      </li>
    </>
  )
}

const Total = ({parts}) => {
  
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <p>Number of exercises: {total}</p>
    </div>
  )
}

const Course = ({courses}) => {
  return (
    <div>
      <Header courses={courses} />
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <Content course={course}/>
          <Total parts={course.parts} />
        </div>
      ))}
      
      
    </div>
  )

}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <Course courses={courses} parts={courses.parts} />
    
  )
}

export default App
