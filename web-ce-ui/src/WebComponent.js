import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonsGroup from './ButtonsGroup';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
const WebComponent = () => {

  const [ceMappingData, setceMappingData]=useState(
    {
      contextname:'',
      username: '',
      password: '',
    }
  )

  const handleInputChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setceMappingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = ()=>{

    console.log("test..")
    console.log(ceMappingData)



  }
  return (
    <div>
      <Card className='w-50'>
        <Card.Header>Context and element mapping</Card.Header>
        <Card.Body>
          <Card.Title>DemoBank</Card.Title>
          <Card.Text>
            <Form className='w-25'>
              <Form.Group className="mb-30" controlId="formBasicEmail">
                <Form.Label>Context Name:</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} value={ceMappingData.contextname}/>
               
              </Form.Group>
              <br/>
              <Form.Label>Elements:</Form.Label>
              <Form.Group className="mb-30" controlId="formBasicPassword">
                <Form.Label>UserName </Form.Label>
                <Form.Control type="text" onChange={handleInputChange} value={ceMappingData.username}/>
              </Form.Group>
              <Form.Group className="mb-30" controlId="formBasicPassword">
                <Form.Label>Password </Form.Label>
                <Form.Control type="text" onChange={handleInputChange} value={ceMappingData.password}/>
              </Form.Group>
              <br/>
              <Button className="mb-50" variant="primary"
              onClick={submitHandler}
              >
                Submit
              
              </Button>
            </Form>
          </Card.Text>
          
        </Card.Body>
      </Card>
      {/* Your form and other components */}
    </div>
  );
};

export default WebComponent;