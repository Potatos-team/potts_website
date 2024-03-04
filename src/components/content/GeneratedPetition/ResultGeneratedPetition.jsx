import React, { useEffect, useState } from 'react';
import { Button, Skeleton, Switch } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ResultGeneratedPetition = (props) => {
    const [loading, setLoading] = useState(true);
    const [textPetition, setTextPetition] = useState('');
    const petition = props?.text?.petition;

    const onChange = (checked) => {
        setLoading(!checked);
    };

    const handleButtonClick = async () => {
        try {
            const response = await fetch('http://ec2-54-162-151-251.compute-1.amazonaws.com:4000/petitions/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ textPetition }),
            });

            if (response.ok) {
                // Adicionar componente de sucess
                console.log('Petição enviada com sucesso!');
            } else {
                // Adicionar componente de error
                console.error('Falha ao enviar a petição');
            }
        } catch (error) {
            console.error('Erro ao enviar a petição:', error);
        }
    };

    useEffect(() => {
        setTextPetition(petition);
    }, [petition]);

    const handleTextChange = (event) => {
        setTextPetition(event.target.value);
    };

    return (
        <>
            <div>
                <div style={{ marginBottom: 16 }}>
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Petições Geradas
                    </h2>
                </div>
                <Switch
                    defaultChecked
                    checked={!loading}
                    onChange={onChange}
                    style={{ backgroundColor: loading ? '#ccc' : ' #1677ff' }}
                />
            </div>
            <div>
                {!petition ? (
                    <div class="mt-4 mb-4">
                        <Skeleton />
                    </div>
                ) : (
                    <TextArea
                        disabled={!loading}
                        style={{ marginTop: 16, height: 400 }}
                        onChange={handleTextChange}
                        value={textPetition}
                        rows={4}
                    />
                )}
            </div>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'end' }}>
                <Button style={{ backgroundColor: '#1677ff', color: '#fff' }} onClick={handleButtonClick}>
                    Salvar
                </Button>
            </div>
        </>
    );
};

export default ResultGeneratedPetition;
