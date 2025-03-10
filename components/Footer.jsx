import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return ( 
        <>
            <footer className="pt-5">
                <div className="links">
                    <Link to="https://www.linkedin.com/in/linn%C3%A9a-lehmann-molander-554160328" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></Link>
                    <Link to="https://github.com/Lehmol/" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></Link>
                    <Link to="mailto:linnealehmann7@gmail.com"><i class="bi bi-envelope-at-fill"></i></Link>
                </div>
                <br />
                <p className="fst-italic handwriting">Project by Linnéa Lehmann Molander</p>
            </footer>
        </>
        );
}

export default Footer;