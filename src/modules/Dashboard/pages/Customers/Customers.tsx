import { FloatButton, Form, Input, List, Modal } from 'antd';
import { FC, useState } from 'react';
import { Customer } from '../../types.ts';
import { useModal } from '../../hooks/useModal.ts';
import { BaseList } from '../../components/BaseList/BaseList.tsx';
import { PlusOutlined } from '@ant-design/icons';

const { Item } = List;

interface Props {}

const Customers: FC = () => {
  const [form] = Form.useForm();

  const isLoading = false;
  const [dataSource, setDataSource] = useState<Array<Customer>>([]);

  const { isVisible, showModal, hideModal } = useModal();
}
  return (
    <>
      <BaseList loading={isLoading} loadMore={} dataSource={}>
        {() => <Item/>}
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
            name="categoryName"
            label="Category name"
            rules={[{ required: true }, { type: 'string', min: 3 }]}
          >
            <Input placeholder="Provide category name" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
};

export default Customers;
