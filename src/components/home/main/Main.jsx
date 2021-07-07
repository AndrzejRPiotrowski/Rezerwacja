import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeChair from "../../../images/homeChair.png";

const Main = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center pb-5">
        <Col md={5}>
          <h1 className="font-weight-bold">
            Twój nowy uśmiech zaczyna sie tutaj
          </h1>
          <p className="text-secondary">Jest to strona testowa</p>
          <Button
            variant="info"
            className="font-weight-bold"
            as={Link}
            to="/appointment"
          >
            Umów się na wizytę
          </Button>
        </Col>
        <Col md={7}>
          <img src={homeChair} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
