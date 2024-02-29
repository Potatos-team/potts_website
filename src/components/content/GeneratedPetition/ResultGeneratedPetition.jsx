import React, { useEffect, useState } from 'react';
import { Button, Card, Skeleton, Switch } from 'antd';
import TextArea from 'antd/es/input/TextArea';


const { Meta } = Card;



const ResultGeneratedPetition = (props) => {

    const [loading, setLoading] = useState(true);
    const [textPetition, setTextPetition] = useState();
    const petition = props?.text?.petition


    const onChange = (checked) => {
        setLoading(!checked);
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
                {
                    !petition
                        ?
                        <div class="mt-4 mb-4">
                            <Skeleton />
                        </div>
                        :
                        <TextArea
                            disabled={!loading}
                            style={{
                                marginTop: 16,
                                height: 400
                            }}
                            onChange={handleTextChange}
                            value={textPetition}
                            rows={4} />
                }

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