import React, { useState } from "react";
import { Layout, Button } from "antd";
const { Header } = Layout;

function NavbarComponent(props) {
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    localStorage.removeItem("selectKey");
    window.location.href = "/login";
  };
  return (
    <Header
      style={{
        padding: 0,
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "0 24px",
          float: "right",
          alignItems: "center",
          height: "64px",
        }}
      >
        <h3
          style={{
            marginRight: "20px",
          }}
        >
          {" "}
          Name: {props.name} {props.surname} : <b style={{
            color: "#409E60"
          }}>({props.role})</b>
        </h3>
        <Button type="dashed" onClick={onLogout} danger>
          Logout
        </Button>
      </div>
    </Header>
  );
}

export default NavbarComponent;
