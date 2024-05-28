import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import robotcourse from "../../components/Cards/ImagesCards/robotcourse.jpg";
import "./CardsControl.css";
import { Container } from "react-bootstrap";
import DeleteIcon from "./DeleteIcon";

function CardUsuario() {
  return (
    <Container className="my-5">
      <Row sm={1} md={2} lg={3} xl={3} xxl={4} className="g-5">
        {Array.from({ length: 4 }).map((__, idx) => (
          <Col key={idx}>
            <Card className="" style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "10rem", objectFit: "cover" }}
                src={robotcourse}
              />
              <Card.Body>
                <Card.Title>
                  <a
                    href=""
                    className="text-reset link-offset-2 link-underline link-underline-opacity-0">
                    Título
                  </a>
                </Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <div className="d-flex justify-content-between">
                  <Button className="btndelete">
                    <DeleteIcon />
                  </Button>
                  <Button class="btnedit">
                    Editar
                    <i class="edit bi bi-pencil-fill"></i>
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between">
                  <div>
                    {" "}
                    <i className="bi bi-clock"></i> 7.5 hrs{" "}
                  </div>
                  <p className="fs-4 text" style={{ color: "#1ECAB8" }}>
                    000€
                  </p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardUsuario;
