import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ResultGeneratedPetition from '../GeneratedPetition/ResultGeneratedPetition';


const ModalResultPetition = (props) => {

    

    return (
        <>
            <Modal open={props.isModalOpen} onCancel={props.onClick} footer={null}>
                <ResultGeneratedPetition text={props.textArea} />
            </Modal>
        </>
    );

};
export default ModalResultPetition;