import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {




    render() {
        console.log('SelectedBeast are you there?', this.props.description)
        return (
            <>
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.onClick}
                    dialogClassName={"modal-90w"}>
                    <Modal.Header closeButton
                        className={"bg-dark text-white"}>
                        <Modal.Title
                            className='title'>{this.props.SelectedBeast}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modalBody'
                    >
                        <img src={this.props.image_url} alt={this.props.title} />
                        <div>{this.props.description}</div>
                    </Modal.Body>
                </Modal>





            </>
        );
    }

}


export default SelectedBeast;