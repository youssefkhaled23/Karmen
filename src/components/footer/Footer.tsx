import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const { footer, h4 } = style;
const Footer = () => {
  return (
    <>
      <div className={footer}>
        <Container className="mt-3 p-3 text-center text-lg-start ">
          <Row className="g-2">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="about">
                <h4 className={h4}>ABOUT THE SHOP</h4>
                <p className="mb-0 mt-3 fw-semibold">
                  An accessories store offers a wide range of items that
                  complement and enhance one's appearance or lifestyle
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 ps-0 ps-lg-5 ">
              <div className="menu ">
                <h4 className={h4}>Menu</h4>
                <ul className="list-unstyled">
                  <li className=" mb-2 fw-semibold">Home</li>
                  <li className=" mb-2 fw-semibold">Necklaces</li>
                  <li className=" mb-2 fw-semibold">Braceletes</li>
                  <li className=" mb-2 fw-semibold">Rings</li>
                  <li className=" mb-2 fw-semibold">Earrings</li>
                  <li className=" mb-2 fw-semibold">Watches</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="support">
                <h4 className={h4}>Support</h4>
                <ul className="list-unstyled">
                  <li className="fw-semibold mb-2">Frequently Asked Qustion</li>
                  <li className="fw-semibold mb-2">Returns and refunds</li>
                  <li className="fw-semibold mb-2">CGV</li>
                  <li className="fw-semibold mb-2">Legal Notice</li>
                  <li className="fw-semibold mb-2">Track my order</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="reachable">
                <h4 className={`fw-semibold ${h4}`}>REACHABLE 24/7</h4>
                <p className="fw-semibold">
                  A question? we can be reached by email 24/7 do not hesitate to
                  send us a message for any request{" "}
                </p>
                <Link
                  to="/"
                  className="text-decoration-none text-black fw-bold"
                >
                  Karmen.com
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
