import { TOOLS } from "./data/data";
import ToolCard from "./components/ToolCard";
import { Container, Row, Col } from "reactstrap";

function Home() {

    return (
        <Container className="containerplus">
            <Row>
                {TOOLS.map((tool, index) => {
                    return (
                    <Col md={4} key={index}>
                        <ToolCard tool={tool}/>
                    </Col>)}
                )}
            </Row>
        </Container>
    );
  }
  
  export default Home;