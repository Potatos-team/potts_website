import React, { useState } from 'react';
import { Button, Card, Switch } from 'antd';
import TextArea from 'antd/es/input/TextArea';


const { Meta } = Card;



const ResultGeneratedPetition = () => {

    const [loading, setLoading] = useState(true);
    const [text, setText] = useState('Texto padrão');


    const onChange = (checked) => {
        setLoading(!checked);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
      };

    return (
        <>
            <div>
                <div style={{
                    marginBottom: 16,

                }}>
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Petições Geradas
                    </h2>
                </div>
                <Switch
                    defaultChecked
                    checked={!loading}
                    onChange={onChange}
                    style={{
                        backgroundColor: loading ? '#ccc' : ' #1677ff',
                        '&:hover': { backgroundColor: loading ? '#ccc' : ' #1677ff' },
                    }}
                />
            </div>
            <div>
                <TextArea
                    disabled={!loading}
                    style={{
                        marginTop: 16,
                        height: 400
                    }}
                    onChange={handleTextChange}
                    value={text}
                    rows={4} />
            </div>
            <div style={{
                marginTop: 16,
                display: 'flex',
                justifyContent: 'end',
            }}>
                <Button style={{ backgroundColor: ' #1677ff', color: '#fff' }}>
                    Salvar
                </Button>
            </div >
        </>
    );
};
export default ResultGeneratedPetition;