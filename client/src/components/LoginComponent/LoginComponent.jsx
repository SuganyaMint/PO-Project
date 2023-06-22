import React, {useState, useEffect} from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, message, Form, Input } from "antd";
import "../../assets/scss/login.scss";
import IMGLOGIN from "../../assets/images/loginpage.jpg";

import API from '../../api/ApiUrl'
import { ApiRouter } from "../../api/ApiRouter";

import { useNavigate } from "react-router-dom";


function LoginComponent() {
  const [messageApi, contextHolder] = message.useMessage();

  const success = ({mes}) => {
    messageApi.open({
      type: 'success',
      content: mes,
    });
  };
  const error = ({mes}) => {
    messageApi.open({
      type: 'error',
      content: mes,
    });
  };
  const onFinish = async (values) => {
    await API.post(ApiRouter.Login, values).then((res) => {
      if(res.data.status === 200){
        success({ mes: res.data.message });
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }else{
        error({ mes: res.data.message });
      }
    }).catch((err) => {
      error({ mes: err.message });
    });
  };

  
  return (
    <>
      {contextHolder}
      <div className="login_page">
        <div className="login_card">
          <div className="login_img">
            <img src={IMGLOGIN} alt="" />
          </div>
          <div className="login_form">
            <h4>Login System</h4>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
               
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or <a href="https://teams.microsoft.com/l/call/0/0?users=sabtawee_s@veninecable.com">ติดต่อผู้ดูแลระบบ</a>
                {/* Or <a href="mailto:sabtawee_s@veninecable.com">ติดต่อผู้ดูแลระบบ</a> */}
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
