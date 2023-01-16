import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component{




render(){
    console.log('SelectedBeast are you there?', this.props.description)
    return (
        <>
        <Modal 
        show={this.props.showModal} 
        onHide={this.props.onClick}
        dialogClassName= {"modal-90w"}
        className={"bg-grey text-purple"}>
        <Modal.Header closeButton
        className={"bg-dark text-white"}>
        <Modal.Title>{this.props.SelectedBeast}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={"bg-dark text-white"}>
        <img src={this.props.image_url} alt={this.props.title}/>
        <div>{this.props.description}</div>
        </Modal.Body>
        </Modal>
        
        
        
        
        
        </>
    );
}

}


export default SelectedBeast;