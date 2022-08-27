import { Col, Layout, Row, Typography } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './index.scss';
import { StarOutlined, StarFilled, StarTwoTone, ThunderboltTwoTone } from '@ant-design/icons';
const { Title } = Typography;
const COMPANY_NAME = 'Eden';

const Index = () => {
    return (
        <div className='text-center'>
            <Row>
                <Col span={24}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Title level={1}><ThunderboltTwoTone />{COMPANY_NAME}</Title>
                        </Col>
                        <Col span={24}>2</Col>
                        <Col span={24}>3</Col>
                    </Row>
                </Col>

            </Row>
        </div>
    );
};

export default Index;