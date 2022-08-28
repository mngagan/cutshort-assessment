import { StarTwoTone } from '@ant-design/icons';
import { Button, Col, Row, Steps, Typography } from 'antd';
import 'antd/dist/antd.css';
import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

import './index.scss';
import ThirdStep from './ThirdStep';

const { Title, Text } = Typography;
const { Step } = Steps;


let defaultMotion = {
    animate: { x: 0, opacity: 1 }, initial: { x: 50, opacity: 0 },
    transition: {
        default: { ease: "linear" }
    }
}

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

const Index = () => {
    const currentStep = useSelector(state => state.data.currentStep);
    const companyName = useSelector(state => state.data.companyName);
    const displayName = useSelector(state => state.data.displayName);
    const stepTitle = useSelector(state => state.data.stepTitle[currentStep] || '');
    const stepSubTitle = useSelector(state => state.data.stepSubTitle[currentStep] || '');
    const updateTitle = (title) => {
        return title.split('__displayName__').join(titleCase(displayName));
    }
    return (
        <div className='text-center'>
            <Row justify="center">
                <Col xl={8} lg={8} md={20} sm={24} xs={24}>
                    <Row gutter={16} className='pt-20'>
                        <Col span={24} className='pt-20'>
                            <Title level={3}><StarTwoTone />{companyName}</Title>
                        </Col>
                        <Col span={24} className='pt-20'>
                            <Row justify='center' >
                                <Col >
                                    <Steps current={currentStep} >
                                        <Step />
                                        <Step />
                                        <Step />
                                        <Step />
                                    </Steps>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} className='pt-20'>
                            <Title level={4}>
                                <motion.div {...defaultMotion} className='cursor-default' key={stepTitle}>{updateTitle(stepTitle)}</motion.div>
                            </Title>
                            <Text type="secondary">
                                <motion.div {...defaultMotion} className='cursor-default' key={stepSubTitle}>{stepSubTitle}</motion.div>
                            </Text>
                        </Col>
                        <Col span={24} className='pt-20'>
                            <Row justify='center'>
                                <Col span={16}>
                                    {{
                                        0: <motion.div {...defaultMotion} key={currentStep}><FirstStep /></motion.div>,
                                        1: <motion.div {...defaultMotion} key={currentStep}><SecondStep /></motion.div>,
                                        2: <motion.div {...defaultMotion} key={currentStep}><ThirdStep /></motion.div>,
                                    }[currentStep] || <motion.div {...defaultMotion} key={currentStep}>
                                            <Button block type='primary'>{`Launch ${companyName}`}</Button>
                                        </motion.div>}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Index;