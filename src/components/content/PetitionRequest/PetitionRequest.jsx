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
    fato: "",
  });

  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [userDataResponse, setCustomerResponse] = useState(null)
  const [ setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valuetextArea, setvaluetextArea] = useState();
  const params = useParams()
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://ec2-54-162-151-251.compute-1.amazonaws.com:4000/petitions/generate",
        formData
      );
      setResponse(response);
      console.log('>>>>>>>>>', response)
    }
    catch (error) {
      setError(
        error.response || "Ocorreu um erro ao enviar a solicitação"
      );
    }
  };

  const getCustomerData = async() => {
    try {
      const response = await axios.get(
        "http://ec2-54-162-151-251.compute-1.amazonaws.com:4000/"+ params.customer_id
      );
      setCustomerResponse(response);
      console.log('>>>>>>>>>', response?.data[0]?.OrderID)
      if(response.data.length == 0) {
        navigate("/forbidden");
      }
    }
    catch (error) {
      setError(
        error.response || "Ocorreu um erro ao enviar a solicitação"
      );
    }
  }
  useEffect( () => {
     getCustomerData()
    setvaluetextArea(response?.data);
  }, [response?.data]);

  return (
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
                  type="text"
                  autoComplete="text"
                  required
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
                  type="text"
                  autoComplete="text"
                  required
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
                  name="pedido"
                  type="text"
                  autoComplete="text"
                  required
                  className="w-full px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Restituir o valor pago, idenização por dano moral..."
                  value={formData.pedido}
                  onChange={handleChange}
                />
              </div>
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

                {isModalOpen ? <LoadingOutlined /> : 'Enviar'}
              </button>
              {<ModalResultPetition isModalOpen={isModalOpen} onClick={handleCloseModal} textArea={valuetextArea} orderID={userDataResponse?.data[0]?.OrderID} customerID={params.customer_id}/>}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Não é um membro?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Associe-se agora
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
