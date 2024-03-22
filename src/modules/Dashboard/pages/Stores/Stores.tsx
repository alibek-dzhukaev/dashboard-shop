import { BaseList } from '../../components/BaseList/BaseList.tsx';
import { LoadMore } from '../../components/LoadMore/LoadMore.tsx';
import { FloatButton, Form, Input, List, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Store } from '../../types.ts';
import { useModal } from '../../hooks/useModal.ts';

const { Item } = List;

const Stores = () => {
  const [form] = Form.useForm();

  const isLoading = false;
  const [dataSource, setDataSource] = useState<Array<Store>>([]);

  const { isVisible, showModal, hideModal } = useModal();

  const onSubmit = () => {
    const storeName = form.getFieldValue('storeName');
    form.resetFields(['storeName']);

    setDataSource((prevState) => [
      ...prevState,
      { storeId: Date.now().toString(), storeName },
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
        {(manufacturer) => (
          <Item key={manufacturer.storeId}>{manufacturer.storeName}</Item>
        )}
      </BaseList>
      <FloatButton icon={<PlusOutlined />} onClick={showModal} />

      <Modal
        title="Create Manufacturer"
        open={isVisible}
        onOk={onSubmit}
        confirmLoading={false}
        onCancel={hideModal}
      >
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item
            name="storeName"
            label="Store name"
            rules={[{ required: true }, { type: 'string', min: 3 }]}
          >
            <Input placeholder="Provide store name" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Stores;
