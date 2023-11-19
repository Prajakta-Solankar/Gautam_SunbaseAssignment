import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import UpdateCustomer from "./UpdateCustomer";
import { useEffect } from "react";
import axios from "axios";
export default function CustomerTable() {
  const url = "http://localhost:8443/api/get/all";
  const [showUpdate, setShowUpdate] = useState(false);
  const deleteHandler = (e) => {
    e.preventDefault();
    alert("delete clicked");
  };
  const updateHandler = (e) => {
    e.preventDefault();
    setShowUpdate(true);
  };
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get(url);
      setList(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {showUpdate ? (
        <UpdateCustomer setShowUpdate={setShowUpdate} />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={deleteHandler}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button style={{ marginLeft: "2px" }} onClick={updateHandler}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
