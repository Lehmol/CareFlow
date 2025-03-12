import { useNavigate } from 'react-router-dom';
import '../src/index.css'
import '../src/appen.css'
import Dropdown from 'react-bootstrap/Dropdown';


const LoginCard = () => {
    const navigate = useNavigate();

    return ( 
    <>
        <div className="loginContainer">
            <div className="loginCard">
                <h1>CareFlow</h1>
                <h2>Välkommen</h2>
                <br />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Logga in som...
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate('/vardgivare')}>Vårdgivare</Dropdown.Item>
                        <Dropdown.Item>Vårdtagare</Dropdown.Item>
                        <Dropdown.Item>Anhörig</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <p className="text-center">Genom att logga in bekräftar jag att jag har läst och godkänner Integritetspolicy och Cookies</p>
            </div>
        </div>
    </> 
    );
}

export default LoginCard;