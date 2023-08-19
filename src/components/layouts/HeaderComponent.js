import { Layout, Menu, Avatar } from 'antd';
import { HomeOutlined, LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../../styles/layouts/header.css';

const { Header } = Layout;
const HeaderComponent = () => {
    return (
        <Header className='header'>
            <h1 style={{ margin: 0 }}><Link className='header-title' to="/login">Tokopedia Play</Link></h1>
            <Menu className='menu-left'
                theme="dark"
                mode="horizontal"
                selectable={false}
            >
                <Menu.Item key="1" icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
            </Menu>
            {!sessionStorage.getItem('user') ?
                <Menu className='menu-right'
                    theme="dark"
                    mode="horizontal"
                    selectable={false}
                >
                    <Menu.Item key={1}><Link to="/login">Login</Link></Menu.Item>
                </Menu>
                :
                <>
                    <Menu className='menu-right'
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                        items={[
                            {
                                label: 'Welcome, ' + JSON.parse(sessionStorage.getItem('user')).userName,
                                key: 'SubMenuLogin',
                                children: [
                                    {
                                        label: <Link to="/logout">Log out</Link>,
                                        key: 'Log Out',
                                        icon: <LoginOutlined />,
                                    }
                                ],
                            }
                        ]}
                    />
                    <Avatar size="large" src={<img src={JSON.parse(sessionStorage.getItem('user')).profilePicture} alt="avatar" />} />
                </>
            }
        </Header>
    );
};

export default HeaderComponent;