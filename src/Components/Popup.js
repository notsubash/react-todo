import React from 'react';

import { Modal, Button,Form } from 'react-bootstrap';

const Popup = ({ show,handleClose,inputText, setInputText, setTodos,todos,inputCategory, setCategory}) => {

    const inputCategoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const submitTodoHandler = () => {
        setTodos([
            ...todos,
            {text: inputText,
            category: inputCategory,
            completed: false,
            id: Math.random() * 1000
            }
        ])
        setInputText("");
        setCategory("");
        handleClose();
    }

    return(
        <Modal 
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={handleClose} >
                <Modal.Title id="contained-modal-title-vcenter">
                Add Category
                </Modal.Title>        
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitTodoHandler}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" value={inputCategory} onChange={inputCategoryHandler}>
                            <option value="Choose a Category">Choose a Category</option>
                            <option value="very-important">Very Important</option>
                            <option value="important" >Important</option>
                            <option value="not-important" >Not Important</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>        
                    </Form.Group>       
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
    )


}

export default Popup;