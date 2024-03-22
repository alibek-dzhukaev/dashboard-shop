import { FloatButton, Form, Input, List, Modal } from 'antd';
import { useState } from 'react';
import { Manufacturer } from '../../types.ts';
import { useModal } from '../../hooks/useModal.ts';
import { BaseList } from '../../components/BaseList/BaseList.tsx';
import { LoadMore } from '../../components/LoadMore/LoadMore.tsx';
import { PlusOutlined } from '@ant-design/icons';

const { Item } = List;

const Manufactures = () => {
  const [form] = Form.useForm()

  const isLoading = false;
  const [dataSource, setDataSource] = useState<Array<Manufacturer>>([])

  const { isVisible, showModal, hideModal } = useModal();

  const onSubmit = () => {
    const manufacturerName = form.getFieldValue('manufacturerName')
    form.resetFields(['manufacturerName'])
    setDataSource((prevState) => [
      ...prevState,
      {manufacturerId: Date.now().toString(), manufacturerName}
    ])
    hideModal()
  }


  return (
    <>
      <BaseList loading={isLoading} loadMore={<LoadMore />} dataSource={dataSource}>
        {(manufacturer) => <Item key={manufacturer.manufacturerId}>{manufacturer.manufacturerName}</Item>}
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
            rules={[{required: true}, {type: 'string', min: 3}]}
          >
            <Input placeholder="Provide manufacturer name" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
};

export default Manufactures;
