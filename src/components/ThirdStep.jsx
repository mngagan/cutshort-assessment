import React from 'react'
import { Col, Row, Typography, Space, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { TeamOutlined, UserOutlined } from '@ant-design/icons'
import { updateState } from '../actions'

function ThirdStep() {
    const appUsage = useSelector(state => state.app?.appUsage || 'single')
    const [activeCard, setActiveCard] = React.useState('single')
    const dispatch = useDispatch()
    const handleCardClick = (test) => {
        console.log('in handle card click', test)
        dispatch(updateState({ appUsage: activeCard, currentStep: 3 }))
    }
    React.useEffect(() => { setActiveCard(appUsage) }, [appUsage])
    return (
        <Row gutter={10} className='text-start'>
            <Col md={12} sm={12} xs={24} className='pt-20'>
                <Row className={`third-step-card ${activeCard === 'single' ? 'active-card' : ''}`} onClick={() => setActiveCard('single')}>
                    <Col span={24} className={`${activeCard === 'single' ? 'active-icon' : ''}`}><UserOutlined /></Col>
                    <Col span={24}>
                        <Typography.Text strong>
                            For myself
                        </Typography.Text>
                    </Col>
                    <Col span={24}>
                        <Typography.Text strong type="secondary">
                            Write better. Think more clearly. Stay organized
                        </Typography.Text>
                    </Col>
                </Row>
            </Col>
            <Col md={12} sm={12} xs={24} className='pt-20'  >
                <Row className={`third-step-card ${activeCard === 'team' ? 'active-card' : ''}`} onClick={() => setActiveCard('team')}>
                    <Col span={24} className={`${activeCard === 'team' ? 'active-icon' : ''}`}><TeamOutlined /></Col>
                    <Col span={24}>
                        <Typography.Text strong>
                            With my team
                        </Typography.Text>
                    </Col>
                    <Col span={24}>
                        <Typography.Text strong type="secondary">
                            Wikis, docs, tasks & projects, all in one place.
                        </Typography.Text>
                    </Col>
                </Row>
            </Col>
            <Col span={24} className='pt-20'>
                <Button block type='primary' onClick={handleCardClick}>Create Workspace</Button>
            </Col>
        </Row>
    )
}

export default ThirdStep