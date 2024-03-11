import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../ReusableComponents/Container";
import ModalResultPetition from "./ModalResultPetition";
import { LoadingOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PetitionRequest() {
  const [formData, setFormData] = useState({
    segmento: "",
    assunto: "",
    pedido: "",
    empresa_re: "",
    fato: "",
  });

  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [userDataResponse, setCustomerResponse] = useState(null);
  const [cnpjResponse, setCnpjResponse] = useState(null);
  const [respError, setRespError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cnpjIsReady, setCnpjIsReady] = useState(false);
  const [valuetextArea, setvaluetextArea] = useState();
  const params = useParams();
  const handleSendClickCnpj = async () => {
    var cnpj = formData.empresa_re.replace(/[^0-9]/g, "");
    try {
      const response = await axios.get(
        "http://ec2-44-211-193-108.compute-1.amazonaws.com:4000/api/company/cnpj/" +
          cnpj
      );
      setCnpjResponse(response?.data?.data);
      console.log(response?.data?.data);
    } catch (error) {
      setRespError(error.response || "Ocorreu um erro ao enviar a solicitação");
    }
  };

  const handleSendClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const cnpjMask = (value) => {
    return value
      .replace(/\D+/g, "") // não deixa ser digitado nenhuma letra
      .replace(/(\d{2})(\d)/, "$1.$2") // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2") // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura os dois últimos 2 números, com um - antes dos dois números
  };

  const handleChangeEmpresaRe = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (value.length == 18) setCnpjIsReady(true);
    else setCnpjIsReady(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var reqBody = {
        ...formData,
        nome_empresa: cnpjResponse?.nome,
        cnpj_empresa: cnpjResponse?.cnpj,
      };
      console.log(reqBody);
      const response = await axios.post(
        "http://ec2-54-162-151-251.compute-1.amazonaws.com:4000/petitions/generate",
        reqBody
      );
      setResponse(response);
    } catch (error) {
      setRespError(error.response || "Ocorreu um erro ao enviar a solicitação");
    }
  };

  const getCustomerData = async () => {
    try {
      const response = await axios.get(
        "http://ec2-54-162-151-251.compute-1.amazonaws.com:4000/" +
          params.customer_id
      );
      setCustomerResponse(response);
      console.log(">>>>>>>>>", params?.customer_id);
      if (response?.data?.length == 0) {
        navigate("/forbidden/" + params?.customer_id);
      }
    } catch (error) {
      setRespError(
        error?.response || "Ocorreu um erro ao enviar a solicitação"
      );
    }
  };

  useEffect(() => {
    getCustomerData().catch(console.error);
    setvaluetextArea(response?.data);
  }, [response?.data]);

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
      <Container>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="https://processosemadvogado.com.br/wp-content/uploads/2024/01/ASP-2-1-1024x407.png"
              alt="Your Company"
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="segmento"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Segmento
                </label>
                <div className="mt-2">
                  <input
                    id="segmento"
                    name="segmento"
                    required
                    type="text"
                    autoComplete="text"
                    className="w-full px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Turismo, Hospedagem, Logistica, Transporte aéreo..."
                    value={formData.segmento}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Assunto
                </label>
                <div className="mt-2">
                  <input
                    id="assunto"
                    name="assunto"
                    required
                    type="text"
                    autoComplete="text"
                    className="w-full px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Contrato, oferta, propaganda enganosa..."
                    value={formData.assunto}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="pedido"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pedido
                </label>
                <div className="mt-2">
                  <input
                    id="pedido"
                    required
                    name="pedido"
                    type="text"
                    autoComplete="text"
                    className="w-full px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Restituir o valor pago, idenização por dano moral..."
                    value={formData.pedido}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="empresa_re"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CNPJ (empresa ré)
                </label>
                <div className="mt-2">
                  <input
                    id="empresa_re"
                    name="empresa_re"
                    required
                    type="text"
                    autoComplete="text"
                    className="w-full px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="03.212.320/0001-01"
                    value={cnpjMask(formData.empresa_re)}
                    onChange={handleChangeEmpresaRe}
                  />
                  {cnpjIsReady ? (
                    <button
                      onClick={handleSendClickCnpj}
                      className="flex mt-2 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Pesquisar empresa
                    </button>
                  ) : (
                    <p className="tblock text-sm font-medium leading-6 text-gray-400">
                      Digite o CNPJ da empresa para continuar
                    </p>
                  )}
                </div>

                <p className="tblock text-sm font-medium leading-6 text-green-700">
                  {cnpjResponse?.nome}
                </p>
              </div>

              <div>
                <label
                  htmlFor="fato"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Fato
                </label>
                <div className="mt-2">
                  <textarea
                    id="fato"
                    name="fato"
                    required
                    className="w-full h-40 px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Digite seu texto aqui..."
                    value={formData.fato}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSendClick}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isModalOpen ? <LoadingOutlined /> : "Enviar"}
                </button>
                {
                  <ModalResultPetition
                    isModalOpen={isModalOpen}
                    onClick={handleCloseModal}
                    textArea={valuetextArea}
                    orderID={userDataResponse?.data[0]?.OrderID}
                    customerID={params.customer_id}
                  />
                }
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
