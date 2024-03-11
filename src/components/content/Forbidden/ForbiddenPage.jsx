import React from 'react';
import { Layout, Result } from 'antd';
import CheckoutCredits from './CheckoutCredits';
const { Header } = Layout;
export default function ForbiddenPage() {
    return (
        <>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
            </Header>


            <CheckoutCredits />

            {/* <div className="h-screen flex items-center justify-center">
                <Result
                    status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
                />
                <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">

                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Você não tem créditos suficientes.</h1>3
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://processosemadvogado.com.br/"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Voltar para página principal
                            </a>
                            <a href="#" className="text-sm font-semibold text-gray-900">
                                Contact support <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </main>
                <h1 className="italic text-xl">Você não tem créditos suficientes. </h1>
                <p><a href="https://processosemadvogado.com.br/" className="text-blue-600"> Voltar para página principal</a></p>
            </div> */}

        </>
    )
}
