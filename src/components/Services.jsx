import React from "react";
import Card1 from "../assets/Website picture.png";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import OurPartner from "../assets/partners.jpg";

const Services = () => {
  return (
    <>
      <Fade>
        <div className="ser-main-01- container-fluid ">
          <Fade left>
            <Fade>
              <div className="container ">
                <h1 className="Ser-01-heading">Services</h1>
              </div>
            </Fade>
          </Fade>
        </div>
        <Fade left>
          <div className="main-section-head text-center pt-5 mt-5">
            <Fade>
              <h1 className="prohead pb-3">
                Our <span>Programs</span>
              </h1>
              <p className="HEad-para-main">
                For Management & Non-Management Teams
              </p>
            </Fade>
          </div>
        </Fade>
        <div className="container py-5 pt-5 mt-5">
          <div className="row">
            <div className="col-lg-4 ser-main-card">
              <img src={Card1} className="img-fluid" alt="" />
              <h3 className="ser-p-head-0">Time Managment</h3>
              <p className="ser-para01">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt commodi incidunt laborum quisquam, molestiae optio
                delectus ut aut consequuntur accusantium.
              </p>
              <button className="btn buy-now-btn">buy Now</button>
            </div>
            <div className="col-lg-4 ser-main-card">
              <img src={Card1} className="img-fluid" alt="" />
              <h3 className="ser-p-head-0">Time Managment</h3>
              <p className="ser-para01">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt commodi incidunt laborum quisquam, molestiae optio
                delectus ut aut consequuntur accusantium.
              </p>
              <button className="btn buy-now-btn">buy Now</button>
            </div>
            <div className="col-lg-4 ser-main-card">
              <img src={Card1} className="img-fluid" alt="" />
              <h3 className="ser-p-head-0">Time Managment</h3>
              <p className="ser-para01">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt commodi incidunt laborum quisquam, molestiae optio
                delectus ut aut consequuntur accusantium.
              </p>
              <button className="btn buy-now-btn">buy Now</button>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-4 ser-main-card">
              <img src={Card1} className="img-fluid" alt="" />
              <h3 className="ser-p-head-0">Time Managment</h3>
              <p className="ser-para01">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt commodi incidunt laborum quisquam, molestiae optio
                delectus ut aut consequuntur accusantium.
              </p>
              <button className="btn buy-now-btn">buy Now</button>
            </div>
            <div className="col-lg-4 ser-main-card">
              <img src={Card1} className="img-fluid" alt="" />
              <h3 className="ser-p-head-0">Time Managment</h3>
              <p className="ser-para01">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt commodi incidunt laborum quisquam, molestiae optio
                delectus ut aut consequuntur accusantium.
              </p>
              <button className="btn buy-now-btn">buy Now</button>
            </div>
            <div className="col-lg-4 ser-main-card">
              <img src={Card1} className="img-fluid" alt="" />
              <h3 className="ser-p-head-0">Time Managment</h3>
              <p className="ser-para01">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt commodi incidunt laborum quisquam, molestiae optio
                delectus ut aut consequuntur accusantium.
              </p>
              <button className="btn buy-now-btn">buy Now</button>
            </div>
          </div>
        </div>

        <footer className="bg-dark text-light py-5">
          <Container>
            <Row>
              <Col md={4}>
                {/* Social Links */}
                <div className="mb-4 ">
                  <h5 className="let-Connect">Let'Connect </h5>
                  <ul>
                    <li>
                      <a
                        className="Footer-links"
                        href="mailto:tedxlearning@gmail.com"
                      >
                        <i class="bi bi-envelope-at-fill"></i>{" "}
                        &nbsp;tedxlearning@gmail.com
                      </a>
                    </li>
                    <li>
                      <a className="Footer-links" href="tel: +923351234100">
                        <i class="bi bi-whatsapp"></i> &nbsp;+92 3351234100
                      </a>
                    </li>
                    <li>
                      <a
                        className="Footer-links"
                        href="https://www.facebook.com/tedxlearning"
                      >
                        <i class="bi bi-facebook"></i>
                        &nbsp; TEDX Learning
                      </a>
                    </li>
                    <li>
                      <a
                        className="Footer-links"
                        href="https://www.linkedin.com/company/learnwithtedx"
                      >
                        <i class="bi bi-linkedin"></i>
                        &nbsp; learnwithTEDX
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className="container ">
                  <div className="row ">
                    <div className="col-lg-7">
                      <Fade left>
                        <h1 className="6 pb-5 ">
                          Our <span>Partners</span>
                        </h1>
                      </Fade>
                      <Fade>
                        <p className="partner-para">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Id aut nam dolorem consectetur vitae ipsa atque
                          explicabo sint. Modi aperiam deleniti placeat adipisci
                          commodi perferendis cum delectus molestiae dolores.
                          Expedita aliquam iusto tenetur molestias vel provident
                          asperiores quia optio. Ea?
                        </p>
                      </Fade>
                    </div>
                    <div className="col-lg-4 py-5">
                      <Fade left>
                        <img className="img-fluid" src={OurPartner} alt="" />
                      </Fade>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </Fade>
    </>
  );
};

export default Services;
