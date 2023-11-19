import LoginForm from "../Components/LoginForm";
import React from "react";

export default function Login() {
  return (
    <div
      style={{
        display: "flex ",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ border: "2px solid #ddd", borderRadius: "8px", width:"40vw", height:"50vh", marginTop:"20vh"}}>
        <div style={{ width: "30vw", height: "40vh" , marginLeft:"5vw", marginTop:"8vh"}}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
