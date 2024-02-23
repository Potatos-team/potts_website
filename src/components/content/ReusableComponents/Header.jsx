import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Petition from '../Petition/Petition';
import CallToAction from '../CallToAction/CallToAction';
import PetitionRequest from '../PetitionRequest/PetitionRequest';

const { Header, Content } = Layout;

const MenuPetitions = ['Gerar Petição', 'Petição', 'Resultado da Petição'];

const TopHeader = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [selectedMenu, setSelectedMenu] = useState('Gerar Petição');

    const handleClick = ({ key }) => {
        setSelectedMenu(key);
    };

    const renderContent = () => {
        switch (selectedMenu) {
            case 'Petição':
                return <Petition />;
            case 'Gerar Petição':
                return <PetitionRequest />;
            case 'Resultado da Petição':
                return <div>Conteúdo para Resultado da Petição</div>;
            default:
                return null;
        }
    };

    return (
        <Layout style={{ height: '100%' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[selectedMenu]}
                    onClick={handleClick}
                    style={{ flex: 1, minWidth: 0 }}
                >
                    {MenuPetitions.map((name) => (
                        <Menu.Item key={name}>{name}</Menu.Item>
                    ))}
                </Menu>
            </Header>
            <CallToAction />
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>Header</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: '24px',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {renderContent()}
                </div>
            </Content>
        </Layout>
    );
};

export default TopHeader;
