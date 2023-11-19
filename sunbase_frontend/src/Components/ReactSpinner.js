import React from 'react'
import { Spinner } from 'react-bootstrap'
export default function ReactSpinner() {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  )
}
