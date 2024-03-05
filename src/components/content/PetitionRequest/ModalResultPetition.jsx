import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ResultGeneratedPetition from '../GeneratedPetition/ResultGeneratedPetition';


const ModalResultPetition = (props) => {

    

    return (
        <>
            <Modal orderID={props.orderID} customerID={props.customerID} open={props.isModalOpen} onCancel={props.onClick} footer={null}>
                <ResultGeneratedPetition text={props.textArea} orderID={props.orderID} customerID={props.customerID}  />
            </Modal>
        </>
    );

};
export default ModalResultPetition;