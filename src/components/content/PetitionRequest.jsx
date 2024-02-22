export default function PetitionRequest() {
  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="https://processosemadvogado.com.br/wp-content/uploads/2024/01/ASP-2-1-1024x407.png"
          alt="Your Company"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
              Segmento
            </label>
            <div className="mt-2">
            <input
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="w-full px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Turismo, Hospedagem, Logistica, Transporte aéreo..."
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                Assunto
              </label>
            </div>
            <div className="mt-2">
            <input
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="w-full px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Contrato, oferta, propaganda enganosa..."
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                Pedido
              </label>
            </div>
            <div className="mt-2">
              <input
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="w-full px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Restituir o valor pago, idenização por dano moral..."
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Fato
              </label>
            </div>
            <div className="mt-2">
              <textarea
                className="w-full h-40 px-4 py-2 border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Digite seu texto aqui..."
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Não é um membro?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Associe-se agora
          </a>
        </p>
      </div>
    </div>
  )
}
