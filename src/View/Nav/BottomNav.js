import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu, Space, Badge } from 'antd';
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons'

const BottomNav = () => {

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            1st menu item
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            2nd menu item (disabled)
                        </a>
                    ),
                    icon: <SmileOutlined />,
                    disabled: true,
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                            3rd menu item (disabled)
                        </a>
                    ),
                    disabled: true,
                },
                {
                    key: '4',
                    danger: true,
                    label: 'a danger item',
                },
            ]}
        />
    );

    return (
        <div className='container'>
            <div className="row py-3 align-items-center">
                <div className="col-3">
                    <div className="sara-logo">
                        <img src="/assets/images/web_black.png" alt="" height={50}/>
                    </div>
                </div>
                <div className="col-6 text-center">
                    <ul className='nav'>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">Home</Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">Men</Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">Women</Link></li>
                        <li className='nav-link position-relative'>
                            <Badge.Ribbon text="Latest" color="red" style={{top:"-20px", right:"-10px"}}>
                            <Link to={""} className="text-decoration-none text-dark">
                                Kids Collection
                            </Link>
                            </Badge.Ribbon>
                        </li>
                        <li className='nav-link'>
                            <Dropdown overlay={menu}>
                                <Space className='text-dark'>
                                    Categories
                                    <DownOutlined />
                                </Space>
                            </Dropdown>
                        </li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className='nav'>
                        <li className='nav-link  ms-auto'><Link to={""} className="text-decoration-none text-dark">
                            <SearchOutlined className='fs-4' />
                        </Link></li>
                        <li className='nav-link'>
                            <Link to={""} className="text-decoration-none text-dark">
                                <Badge count={2}>
                                    <ShoppingCartOutlined className='fs-4' />
                                </Badge>
                            </Link>
                        </li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">
                            <UserOutlined className='fs-4' />
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BottomNav
