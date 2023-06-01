import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonsGroup from './ButtonsGroup';
import 'bootstrap/dist/css/bootstrap.css';
const CEMappingHome = () => {

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Optional - adjust based on your requirements
  };
    return ( 
      <div>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
      
          </Card.Body>
        </Card>
        <div style={containerStyles}>
        <ButtonsGroup></ButtonsGroup>
        </div>

        </div>
      );

};

export default CEMappingHome;