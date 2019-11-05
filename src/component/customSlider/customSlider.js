import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class CustomSlider extends React.Component{
    render(){
        return(
          
            <Menu theme="dark" defaultSelectedKeys={['1']}  mode="inline">
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                </Menu.Item>
                
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            <span>User</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">Tom</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}
export default CustomSlider
