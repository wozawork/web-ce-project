import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const ButtonsGroup = () => {
    const navigate = useNavigate();
    return (

        <div>
                <Button variant="outline-primary" onClick={() => navigate("/web")}>Web</Button>{' '}
                <Button variant="outline-primary" onClick={() => navigate("/ios")}>ios</Button>{' '}
                <Button variant="outline-primary" onClick={() => navigate("/android")}>Android</Button>{' '}
            
        </div>
      );

};

export default ButtonsGroup;