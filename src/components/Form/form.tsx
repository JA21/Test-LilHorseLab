
import { Button, Form, Input, InputNumber } from 'antd';
import ApiCrud from '../../services/ApiCrud'


type Props = {
  type: String,
  data: any,
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
type formProps = {
  name: String,
  lastName: String,
  email: String,
  age: Number,
  phoneNumber: Number,
  _id:Number
}




const PutFormData = (data: formProps) => {
  const {
    age,
    email,
    lastName,
    name,
    phoneNumber,
    _id
  } = data
  console.log(_id,'aquiId')
 
  const onFinish = (values: any) => {
   
    console.log(values);
    ApiCrud({ type: 'put', param: _id, data: values }).then(res=>{
      if(res?.status===200) {
        alert('Actualizado correctamente') }
    }).catch(error=>{console.error(error)})

  };
  return <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={'name'} label="Name" rules={[{ required: true }]} initialValue={name}>
      <Input />
    </Form.Item>
    <Form.Item name={'lastName'} label="Apellido" rules={[{ required: true }]} initialValue={lastName}>
      <Input />
    </Form.Item>
    <Form.Item name={'email'} label="Email" rules={[{ type: 'email' }]} initialValue={email}>
      <Input />
    </Form.Item>
    <Form.Item name={'age'} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]} initialValue={age}>
      <InputNumber />
    </Form.Item>
    <Form.Item name={'phoneNumber'} label="Phone" rules={[{ type: 'number', min: 0, max: 99 }]} initialValue={phoneNumber}>
      <InputNumber />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

}

const TypeForm = ({ type, data }: Props): JSX.Element => {

  const onFinish = (values: any) => {
    console.log(values);
    ApiCrud({ type: 'post', param: '', data: values }).then(res => {
      if(res.status===200) {
        
        alert('Actualizado correctamente')}
      console.log(res)
    }).catch(error => { console.error(error) })
  };
  if (type === 'post') {
    return <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item name={'name'} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={'lastName'} label="Apellido" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={'email'} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={'age'} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={'phoneNumber'} label="Phone" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  }
  return PutFormData(data)
}

const FormComponent = ({ type, data }: Props) => TypeForm({ type, data })



export default FormComponent;