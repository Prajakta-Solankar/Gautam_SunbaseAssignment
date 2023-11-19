import React from "react";
import CustomerTable from "../Components/CustomerTable";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import AddCustomer from "../Components/AddCustomer";
import ReactSpinner from "../Components/ReactSpinner";
import UpdateCustomer from "../Components/UpdateCustomer";
export default function Mainpage() {
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let AddCustomerHandler = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      {isLoading ? (
        <ReactSpinner />
      ) : (
        <div>
          <Navbar className="bg-body-tertiary justify-content-between">
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Button
                    style={{ marginLeft: "2px" }}
                    onClick={AddCustomerHandler}
                  >
                    Add Customer{" "}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Navbar>

          {show ? <AddCustomer setShow={setShow} /> : <CustomerTable />}
        </div>
      )}
    </>
  );
}
