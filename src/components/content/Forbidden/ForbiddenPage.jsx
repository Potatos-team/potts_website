import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content } = Layout;
export default function ForbiddenPage() {
    return (
        <>
   
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                </Header>
        
        <div className="h-screen flex items-center justify-center">     
                <h1 className="italic text-xl">Você não tem créditos suficientes. </h1>
                <p><a href="https://processosemadvogado.com.br/" className="text-blue-600"> Voltar para página principal</a></p>
        </div>

        </>
    )
}
