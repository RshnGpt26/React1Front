import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {
  const [students, setStudents] = useState([])
  useEffect(() => {
    const getAllStudent = async () => {
      try {
        // const students = await axios.get('http://localhost:8000/api/student') // without using "proxy" key package.json
        const students = await axios.get('/api/student') // with using "proxy" key package.json
        // console.log(students.data)
        setStudents(students.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAllStudent()
  }, [])
  return (
    <div className="App">
      <h1>Connect React JS to Express JS</h1>
      {
        students.map((student, index) => {
          return (
            <div key={ index }>
              <h1>{ student.studentName }</h1>
              <h2>{ student.email }</h2>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
