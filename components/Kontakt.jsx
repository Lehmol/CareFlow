import Form from 'react-bootstrap/Form';
import '../src/index.css'

const Contact = () => {
    return ( 
    <>
        <h1 className="text-center">Kontakta oss</h1>
        <div className="form-container">
            <Form>
                <Form.Group>
                    <Form.Label>Namn</Form.Label>
                    <Form.Control type="text" placeholder="Ange ditt för- och efternamn" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>E-post</Form.Label>
                    <Form.Control type="email" placeholder="Ange din e-postadress" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Meddelande</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Skriv ditt meddelande här" />
                </Form.Group>
                <br />
                <button type="submit" className="btn btn-primary">Skicka</button>
            </Form>
        </div>
    </> );
}

export default Contact;