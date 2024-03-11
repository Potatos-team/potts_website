import React from "react";
import { Layout, Result } from "antd";
import CheckoutCredits from "./CheckoutCredits";
import { useParams } from "react-router-dom";
const { Header } = Layout;
export default function ForbiddenPage() {
  const params = useParams();
  return (
    <>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a
              href="https://processosemadvogado.com.br"
              class="flex items-center"
            >
              <img
                src="https://processosemadvogado.com.br/wp-content/uploads/2024/01/Camada-2.png"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
            </a>
            <div class="flex items-center lg:order-2">
              <a
                href="https://processosemadvogado.com.br"
                class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Comprar mais créditos
              </a>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="https://processosemadvogado.com.br/minha-conta/"
                    class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href={"/petition/" + params.customer_id}
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Minhas petições
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

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
  );
}
