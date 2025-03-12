import Card from 'react-bootstrap/Card';

const Services = () => {
    return (
    <>
        <h1 className="text-center">Våra tjänster</h1>
        <div className="d-flex gap-3">
            <Card className="ms-4">
                <Card.Img variant="top"/>
                    <Card.Body>
                        <Card.Title className="text-center">Effektiv vård, enkel teknik - en app som alla kan använda</Card.Title>
                        <Card.Text>
                        Vi erbjuder en enkel app för vård- och omsorgspersonal som ska underlätta arbetet genom att ha allt samlat på ett och samma ställe.
                        Du som vårdgivare kan enkelt hålla koll på vad som ska göras nu, senare och under morgondagen för vårdtagaren. Appen kan användas av både vårdgivare, vårdtagare samt vårdtagares anhöriga.
                        </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="ms-4">
                <Card.Img variant="top"/>
                    <Card.Body>
                        <Card.Title className="text-center">Uppföljning</Card.Title>
                        <Card.Text>
                        Med CareFlow får du smidig uppföljning, tidrapportering och besöksstatistik genom en enkel incheckningsfunktion. 
                        Geoposition och besöksdata lagras för att säkerställa att besöket sker på rätt plats vid rätt tid. 
                        CareFlow ger ökad insikt och möjligheter till analys av uppdrag och arbetsflöden, med viktiga nyckeltal för en mer effektiv vård.
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    </>
    );
}

export default Services;