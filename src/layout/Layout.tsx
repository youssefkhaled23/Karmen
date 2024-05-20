import { Outlet, useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Container, Row } from "react-bootstrap";
import Categoryfilter from "../components/categoryfilter/Categoryfilter";

const Layout = () => {
  const [searchParams] = useSearchParams();
  return (
    <>
      <div>
        {/* Header */}
        <Header />
        <Container className="mt-2">
          {searchParams.get("message") ? (
            <Outlet />
          ) : (
            <Row>
              <div className="col-lg-3 col-sm-6 mt-5">
                <Categoryfilter />
              </div>
              <div className="col-lg-8 col-sm-6">
                <div>
                  <Outlet />
                </div>
              </div>
            </Row>
          )}
        </Container>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
