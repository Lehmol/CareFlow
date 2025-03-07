import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomeContent = () => {
    return ( 
    <>
        <div className="home-content">
            <h1>Den digitala plattformen för framtidens hemtjänst.</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>CareFlow Appen</Card.Title>
                    <Card.Text> Vårdpersonalen kan smidigt kommunicera med dig som omsorgstagare eller anhörig. För ökad trygghet får du en notis som bekräftar vem som kommer innan besöket.
                    </Card.Text>
                    <Button variant="primary">Läs mer</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>Avvikelsehantering</Card.Title>
                    <Card.Text> Vårdpersonalen kan enkelt rapportera avvikelser direkt i systemet och se statistik, vilket säkerställer snabb hantering och ökad trygghet för omsorgstagaren.
                    </Card.Text>
                    <Button variant="primary">Läs mer</Button>
                </Card.Body>
            </Card>
        </div>
    </> );
}
 
export default HomeContent;