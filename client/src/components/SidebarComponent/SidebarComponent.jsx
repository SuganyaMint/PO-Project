import { Layout, Menu } from "antd";
import React, { useState, useEffect } from "react";
const { Sider } = Layout;
import { Link, useNavigate } from "react-router-dom";

import { MenuAdmin, MenuUser, MenuMgr } from "./MenuArray";

function SidebarComponent(props) {
  const navigate = useNavigate();
  const role = props.role;

  const selectedKeys = window.location.pathname.split("/")[1];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        //   console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
      }}
    >
      <div className="logo" >
        <h2>PO Project</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        onClick={(key) => {
          if (key.key !== "home") {
            navigate(key.key);
          } else {
            navigate("/");
          }
        }}
        defaultSelectedKeys={[selectedKeys]}
        items={
          role === "admin" ? MenuAdmin : role === "user" ? MenuUser : role === "mgr" ? MenuMgr : []
        }
      />
    </Sider>
  );
}

export default SidebarComponent;
