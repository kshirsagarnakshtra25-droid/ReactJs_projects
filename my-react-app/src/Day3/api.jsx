
import axios from "axios"
import React, { useEffect, useState } from "react"

const Api = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setStudents(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">
          Students List
        </h1>
        <p className="text-muted">
          Student information fetched using API
        </p>
      </div>

      {/* Table Card */}
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

        <div className="card-header bg-primary text-white p-3">
          <h4 className="mb-0">
            📚 Student Details
          </h4>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">

            <thead className="table-dark">
              <tr>
                <th className="p-3">Post ID</th>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Comment</th>
              </tr>
            </thead>

            <tbody>
              {students.map((e) => (
                <tr key={e.id}>

                  <td className="p-3">
                    <span className="badge bg-primary rounded-pill">
                      {e.postId}
                    </span>
                  </td>

                  <td className="p-3 fw-bold">
                    {e.id}
                  </td>

                  <td className="p-3 fw-semibold text-dark">
                    {e.name}
                  </td>

                  <td className="p-3">
                    <a
                      href={`mailto:${e.email}`}
                      className="text-decoration-none text-primary"
                    >
                      {e.email}
                    </a>
                  </td>

                  <td className="p-3 text-muted">
                    {e.body}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Total Records */}
      <div className="text-center mt-3">
        <span className="badge bg-secondary fs-6 p-2">
          Total Records: {students.length}
        </span>
      </div>

    </div>
  )
}

export default Api

