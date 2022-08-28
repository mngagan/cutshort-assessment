import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../actions';

const SecondStep = ({ }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const initialValues = useSelector(state => ({ workspaceName: state.app?.workspaceName || '', workspaceURL: state.app?.workspaceURL || '' }));

    const handleOnSubmit = (values) => {
        dispatch(updateState({ ...values, currentStep: 2 }));
    }

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={handleOnSubmit}
        >
            <Form.Item label="Workspace Name" name="workspaceName" rules={[{ required: true, message: 'Please input your Workspace Name!' }]}>
                <Input placeholder="Eden" />
            </Form.Item>
            <Form.Item label={<div>Workspace URL<Typography.Text type="secondary">(Optional)</Typography.Text></div>} name="workspaceURL" >
                <Input placeholder="Example" addonBefore={<div>www.eden.com/</div>} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block>Create Workspace</Button>
            </Form.Item>
        </Form>
    )
}

export default SecondStep