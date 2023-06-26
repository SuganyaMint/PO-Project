import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import React, { useState } from "react";

function AddDataComponent() {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 20,
      },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 20,
        offset: 4,
      },
    },
  };
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,

          margin: "auto",
        }}
      >
        <Form.Item label="Sale Code Sap">
          <Input />
        </Form.Item>{" "}
        <Form.Item label="Sales Name">
          <Input />
        </Form.Item>
        <Form.Item label="Company">
          <Select>
            <Select.Option value="บริษัท ศรีขลธร จำกัด">
              บริษัท ศรีขลธร จำกัด
            </Select.Option>
            <Select.Option value="บริษัท ศรีขลธร จำกัด">
              บริษัท ศรีขลธร จำกัด
            </Select.Option>
            <Select.Option value="บริษัท อะโกรเทค เอ็นเนอร์ยี จำกัด">
              บริษัท อะโกรเทค เอ็นเนอร์ยี จำกัด
            </Select.Option>
            <Select.Option value="บริษัท ธนกร เอ็นจิเนียริ่ง 2016 จำกัด">
              บริษัท ธนกร เอ็นจิเนียริ่ง 2016 จำกัด
            </Select.Option>
            <Select.Option value="บริษัท ศรีขลธร จำกัด">
              บริษัท ศรีขลธร จำกัด
            </Select.Option>
            <Select.Option value="บริษัท วี เอ อาร์ เอส จำกัด">
              บริษัท วี เอ อาร์ เอส จำกัด
            </Select.Option>
            <Select.Option value="บริษัท ควินตัส เอจีแอล เมนเทนแนนซ์ เซอร์วิส จำกัด">
              บริษัท ควินตัส เอจีแอล เมนเทนแนนซ์ เซอร์วิส จำกัด
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="PO Date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="PO Number">
          <Input />
        </Form.Item>
        <Form.Item label="LOI Number">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="Contract Number">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="TYPE">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="Item">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="FG Code (MATNR)">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="FG Description">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="Qty Detial">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="Qty">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="Unit">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="Price">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="Total By Item">
          <Input defaultValue="AAAA" />
        </Form.Item>
        <Form.Item label="Total Remining By Item">
          <Input />
        </Form.Item>
        <Form.Item label="Delivery Date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Detail Delivery">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Project Code">
          <Input />
        </Form.Item>
        <Form.Item label="Project Name">
          <Input />
        </Form.Item>
      </Form>

      <Form
        name="dynamic_form_item"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,

          margin: "auto",
        }}
      >
        <Form.List
          name="names"
          // rules={[
          //   {
          //     validator: async (_, names) => {
          //       if (!names || names.length < 2) {
          //         return Promise.reject(new Error("At least 2 passengers"));
          //       }
          //     },
          //   },
          // ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message:
                        "Please input passenger's name or delete this field.",
                    },
                  ]}
                  style={{
                    marginTop: 8,
                  }}
                  label="Detail"
                >
                  <Input
                    placeholder="PO Number"
                    style={{
                      width: "60%",
                      marginBottom: 8,
                    }}
                  />
                  
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 14,
                }}
              >
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{
                    width: "60%",
                  }}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>

                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        {/* <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item> */}
      </Form>

      <Button
        type="primary"
        style={{
          display: "flex",
          margin: "auto",
        }}
      >
        Button
      </Button>
    </>
  );
}

export default AddDataComponent;
