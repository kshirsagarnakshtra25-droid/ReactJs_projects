import React, { useEffect, useState } from 'react'
import axios from 'axios'

const StudentsGEt = () => {

    const [student1, setStudent1] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:5000/api/students`)
            .then((res) => {
                console.log("API DATA:", res.data)
                setStudent1(res.data)
            })
            .catch((err) => {
                console.log("ERROR:", err)
            })

    }, [])

    return (
        <div>

            <h2>Student List</h2>

            {
                student1.length > 0 ? (

                    student1.map((std) => (
                        <div key={std.id}>
                            <p>ID: {std.id}</p>
                            <p>Name: {std.name}</p>
                            <p>Course: {std.course}</p>
                            <hr />
                        </div>
                    ))

                ) : (

                    <p>No students found</p>

                )
            }

        </div>
    )
}

export default StudentsGEt