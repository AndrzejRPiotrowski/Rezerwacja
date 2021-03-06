import {
  faClock,
  faMapMarkerAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import "./BusinessInfo.css";

const BusinessInfo = () => {
  const infoData = [
    {
      icon: faClock,
      title: "Godziny Otwarcia",
      description: "Jesteśmy dostępni od Poniedziałku do Piątku",
      backgroundColor: "primary"
    },
    {
      icon: faMapMarkerAlt,
      title: "Gabinet znajduje się",
      description: "Gdańsk, ul. Komdey 2a",
      backgroundColor: "dark"
    },
    {
      icon: faPhone,
      title: "Telefon do Nas",
      description: "+000 123 456789",
      backgroundColor: "primary"
    }
  ];

  return (
    <Row className="mt-5 pt-5 text-white w-75" style={{ margin: "0 auto" }}>
      {infoData.map((info) => (
        <Col
          md={4}
          className={`d-flex align-items-center justify-content-center p-4 border-left ${info.backgroundColor}`}
        >
          <div className="mr-4">
            <FontAwesomeIcon icon={info.icon} style={{ fontSize: "3rem" }} />
          </div>
          <div>
            <p>{info.title}</p>
            <p>{info.description}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default BusinessInfo;
