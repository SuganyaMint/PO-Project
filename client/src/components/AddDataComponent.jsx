import { PlusOutlined } from "@ant-design/icons";
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
          <Input />
        </Form.Item>
        <Form.Item label="Item">
          <Input />
        </Form.Item>
        <Form.Item label="FG Code (MATNR)">
          <Input />
        </Form.Item>
        <Form.Item label="FG Description">
          <Input />
        </Form.Item>
        <Form.Item label="Qty Detial">
          <Input />
        </Form.Item>
        <Form.Item label="Qty">
          <Input />
        </Form.Item>
        <Form.Item label="Unit">
          <Input />
        </Form.Item>
        <Form.Item label="Price">
          <Input />
        </Form.Item>
        <Form.Item label="Total By Item">
          <Input />
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
