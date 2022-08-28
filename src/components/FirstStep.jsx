import { Button, Form, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../actions';

const FirstStep = ({ }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const initialValues = useSelector(state => ({ fullName: state.app?.fullName || '', displayName: state.app?.displayName || '' }));

    const handleOnSubmit = (values) => {
        dispatch(updateState({ ...values, currentStep: 1 }));
    }
    console.log('in initial values', initialValues)
    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={handleOnSubmit}
        >
            <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please input your Full Name!' }]}>
                <Input placeholder="Steve Jobs" />
            </Form.Item>
            <Form.Item label="Display Name" name="displayName" rules={[{ required: true, message: 'Please input your Display Name!' }]}>
                <Input placeholder="Steve" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block>Create Workspace</Button>
            </Form.Item>
        </Form>
    )
}

export default FirstStep