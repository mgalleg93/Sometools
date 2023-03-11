import { Container, Row, Col } from "reactstrap";

const LoanCalculator = () => {

    return(
        <Container>
            <Row>
                <Col md={4} className="center">Form Goes Here</Col>

                <Col md={8} className="center">Graph Goes Here</Col>
            </Row>
            <Row>
                <Col className="center">Ammoratization Table goes here</Col>
            </Row>
        </Container>
    ); 
}

export default LoanCalculator;