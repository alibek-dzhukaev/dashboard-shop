import { FloatButton, Form, Input, Modal, List } from 'antd';
import { FC, useState } from 'react';
import { Product } from '../../types.ts';
import { useModal } from '../../hooks/useModal.ts';
import { BaseList } from '../../components/BaseList/BaseList.tsx';
import { LoadMore } from '../../components/LoadMore/LoadMore.tsx';
import { PlusOutlined } from '@ant-design/icons';

const { Item } = List;

interface Props {}

const Products: FC<Props> = () => {
  const [form] = Form.useForm();

  const isLoading = false;
  const [dataSource, setDataSource] = useState<Array<Product>>([]);

  const { isVisible, showModal, hideModal } = useModal();

  const onSubmit = () => {
    const productName = form.getFieldValue('productName');
    const categoryId = form.getFieldValue('categoryId');
    const manufactureId = form.getFieldValue('manufactureId');

    form.resetFields(['productName', 'categoryId', 'manufactureId']);
    setDataSource((prevState) => [
      ...prevState,
      {
        productId: Date.now().toString(),
        productName,
        categoryId,
        manufactureId,
      },
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
          <Item key={manufacturer.productId}>{manufacturer.productName}</Item>
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
            name="manufacturerName"
            label="Manufacturer name"
            rules={[{ required: true }, { type: 'string', min: 3 }]}
          >
            <Input placeholder="Provide manufacturer name" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Products;
