import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component{




render(){
    console.log('SelectedBeast are you there?', this.props.showModal)
    return (
        <>
        <Modal show={this.props.showModal} 
        onHide={this.props.onClick}>
        <Modal.Header closeButton>
        <Modal.Title>{this.props.SelectedBeast}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        </Modal>
        
        
        
        
        
        </>
    );
}

}


export default SelectedBeast;