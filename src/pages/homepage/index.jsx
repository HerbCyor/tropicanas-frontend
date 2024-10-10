import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <>
            <Container>
                <Row>
                    <Card style={{ width: "30rem", border: "none" }}>
                        <Link to="/confeitaria"><Card.Img src="/images/logo.png" ></Card.Img></Link>
                        <Card.Body>
                            Bolos e Doces
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "30rem", border: "none" }}>
                        <Link to="/congelados"><Card.Img src="/images/logo2.jpg" ></Card.Img></Link>
                        <Card.Body>
                            Congelados
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}