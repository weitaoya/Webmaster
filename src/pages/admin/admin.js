import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import CustomSlider from '../../component/customSlider/customSlider'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Admin extends React.Component {
    render() {
        return (
                
                <Layout style={{ minHeight: '100vh' }}>
                      <Sider collapsible >
                            <CustomSlider></CustomSlider>
                      </Sider>
                    
                    <Layout>
                        <Header style={{ background: '#000', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> admin{this.props.children}</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
        )
    }
}
export default Admin