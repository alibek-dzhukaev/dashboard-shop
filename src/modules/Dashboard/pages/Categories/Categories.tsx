import { BaseList } from '../../components/BaseList/BaseList.tsx';
import { FloatButton, Form, Input, List, Modal } from 'antd';
import { useState } from 'react';
import { Category } from '../../types.ts';
import { PlusOutlined } from '@ant-design/icons';
import { useModal } from '../../hooks/useModal.ts';

const { Item } = List;

const Categories = () => {
  const [form] = Form.useForm();

  const isLoading = false;
  const [dataSource, setDataSource] = useState<Array<Category>>([]);

  const { isVisible, showModal, hideModal } = useModal();

  const onSubmit = () => {
    const categoryName = form.getFieldValue('categoryName');
    form.resetFields(['categoryName']);
    setDataSource((prevState) => [
      ...prevState,
      { categoryId: Date.now().toString(), categoryName },
    ]);
    hideModal();
  };

  const loadMore = (
    <div>
      <button>Load more</button>
    </div>
  );

  return (
    <div>
      <BaseList loading={isLoading} loadMore={loadMore} dataSource={dataSource}>
        {(item) => <Item key={item.categoryId}>{item.categoryName}</Item>}
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
    </div>
  );
};

export default Categories;