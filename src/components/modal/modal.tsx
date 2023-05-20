
import  { useState } from 'react';
import { Button, Modal } from 'antd';

 type Props={
    children:JSX.Element,
    type:String,

}

const ModalComponent=({children,type}:Props)=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const titleType=  type==='post'?'Add seller':'Update Seller'
  const modalType=  type==='post'?'Add ':'Update '

 return(
    <>
      <Button type="primary" onClick={showModal}>
        {modalType}
      </Button>
      <Modal title={titleType} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {children}
      </Modal>
    </>
 )
}

export default ModalComponent;
