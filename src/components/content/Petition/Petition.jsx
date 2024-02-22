import { useState } from "react";

export default function Petition() {


    const InputExample = () => {
        const [texto, setTexto] = useState('');

        const handleChange = (e) => {
            setTexto(e.target.value);
            console.log(texto)
        };
    }

    return (
        <div>
            <div>
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
