import { useState, useEffect } from "react"
import { Space, Table,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ApiCrud from "../../services/ApiCrud";
import ModalComponent from "../modal/modal";
import FormComponent from "../Form/form";
import SelleRHook from "./hook";
interface DataType {
  key:String
  name: String,
  lastName: String,
  email: String,
  age: Number,
  phoneNumber: Number
}



const deleteSeller=(data:any)=>{
  const {_id}=data;
 
   ApiCrud({ type: 'delete', param: _id, data: {} }).then(res=>{
    if(res?.status===200) alert('Eliminado correctamente')

  }).catch(error=>{console.error(error)})
 }

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',

  },
  {
    title: 'lastname',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'phoneNumber',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_,data) => (
      <Space size="middle">
        
        <ModalComponent type={'put'} >
                <FormComponent type={'put'} data={data} />
            </ModalComponent>
        <Button type="primary" onClick={()=>deleteSeller(data)}  danger>
          Primary
        </Button>
      </Space>
    ),
  },
];

const dataSource:DataType[] = [
  {
    key: '1',
    name: 'Mike',
    lastName: 'Mike',
    age: 32,
    email: '1111',
    phoneNumber: 11,
  },
  {
    key: '2',
    name: 'John',
    lastName: 'Mille',
    age: 42,
    email: '00000',
    phoneNumber: 30,
  },
];
const TableComponent = () => {
  const {data}=SelleRHook()
  
  
  return <Table columns={columns} dataSource={data} />
}

export default TableComponent;