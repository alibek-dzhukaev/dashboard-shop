import { FloatButton, Form, Input, List, Modal } from 'antd';
import { FC, useState } from 'react';
import { Customer } from '../../types.ts';
import { useModal } from '../../hooks/useModal.ts';
import { BaseList } from '../../components/BaseList/BaseList.tsx';
import { PlusOutlined } from '@ant-design/icons';
import { LoadMore } from '../../components/LoadMore/LoadMore.tsx';

const { Item } = List;

interface Props {}

const Customers: FC<Props> = () => {
  const [form] = Form.useForm();

  const isLoading = false;
  const [dataSource, setDataSource] = useState<Array<Customer>>([]);

  const { isVisible, showModal, hideModal } = useModal();

  const onSubmit = () => {
    const customerFname = form.getFieldValue('customerFname');
    const customerLname = form.getFieldValue('customerLname');
    form.resetFields(['customerFname', 'customerLname']);

    setDataSource((prevState) => [
      ...prevState,
      { customerId: Date.now().toString(), customerFname, customerLname },
    ]);
    hideModal();
  };

  return (
    <>
      <BaseList
        loading={isLoading}
        loadMore={<LoadMore />}
        dataSource={dataSource}
      >
        {(customer) => (
          <Item key={customer.customerId}>
            {customer.customerFname} {customer.customerLname}
          </Item>
        )}
      </BaseList>
      <FloatButton icon={<PlusOutlined />} onClick={showModal} />
      <Modal
        title="Create Category"
        open={isVisible}
        onOk={onSubmit}
        confirmLoading={false}
        onCancel={hideModal}
      >
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item
            name="customerFname"
            label="Customer first name"
            rules={[{ required: true }, { type: 'string', min: 3 }]}
          >
            <Input placeholder="Provide first name" />
          </Form.Item>
          <Form.Item
            name="customerLname"
            label="Customer last name"
            rules={[{ required: true }, { type: 'string', min: 3 }]}
          >
            <Input placeholder="Provide last name" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Customers;
