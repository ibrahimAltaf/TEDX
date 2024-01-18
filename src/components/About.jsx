import React from "react";
import Card1 from "../assets/Website picture.png";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import OurPartner from "../assets/partners.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const About = () => {
  return (
    <>
      <Fade>
        <div className="ser-main-01- container-fluid ">
          <Fade left>
            <Fade>
              <div className="container ">
                <h1 className="Ser-01-heading">About US</h1>
              </div>
            </Fade>
          </Fade>
        </div>
        <Fade>
          <div className="container-fluid about-us mt-5  py-5">
            <div className="row gap-5">
              <Fade left>
                <div className="col-lg-6 card-01">
                  <h1 className="main-head about-head">About Us</h1>
                  <p className="about-para">
                    Welcome to TEDX Learning, a trailblazer in corporate
                    training programs that redefine the way organizations
                    approach learning and development. With a rich history of 10
                    years, we have emerged as a beacon of innovation, empowering
                    businesses to unleash the full potential of their teams.
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="col-lg-5 card-01">
                  <h2 className="vision-head">Our Vision</h2>
                  <p className="vision-para">
                    At TEDX Learning we envision a future where organizations
                    thrive through a culture of continuous learning, where every
                    employee is equipped with the skills to navigate challenges
                    and drive success.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </Fade>
        <Fade left id="programs">
          <div className="container py-5 mt-5 pt-5">
            <h1 className="train-head py-5 mt-5 pt-5">What Sets Us Apart</h1>
            <div className="col-lg-4">
              {" "}
              <p className="training-para"></p>
            </div>
            <div className="row">
              <div className="col-lg-4 Main-card">
                <p className="mangement-head">Management Excellence</p>
                <p className="manage--89">
                  our management programs are crafted to cultivate leadership
                  prowess, strategic thinking, and effective decision-making.
                  From executive leadership to mid-level management, we prepare
                  your leaders to steer your organization towards unparalleled
                  success.
                </p>
              </div>
              <div className="col-lg-4 Main-card">
                <p className="mangement-head">Team Empowerment:</p>
                <p className="manage--89">
                  Recognizing the value of every team member, our non-management
                  programs focus on enhancing essential skills, fostering
                  collaboration, and nurturing a high-performance culture. We
                  believe that a well-equipped and engaged workforce is the
                  foundation of a thriving organization.
                </p>
              </div>
              <div className="col-lg-4 Main-card">
                <p className="mangement-head">
                  Tailored Training for Every Tier
                </p>
                <p className="manage--89">
                  We pride ourselves on being a comprehensive solution provider,
                  offering bespoke training programs for both management and
                  non-management teams. This distinctive approach ensures that
                  every level of your organization receives targeted and
                  relevant development opportunities.
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="container py-5 mt-5 pt-5">
            <h1 className="train-head py-5 mt-5 pt-5">Why Choose ?</h1>
            <div className="col-lg-4">
              {" "}
              <p className="training-para"></p>
            </div>
            <div className="row">
              <div className="col-lg-4 Main-card">
                <p className="mangement-head">Tailored Approach</p>
                <p className="manage--89">
                  Our programs are not one-size-fits-all. We work closely with
                  each client to understand their unique challenges and
                  objectives, tailoring our training solutions accordingly.
                </p>
              </div>
              <div className="col-lg-4 Main-card">
                <p className="mangement-head">Industry Expertise</p>
                <p className="manage--89">
                  Benefit from the knowledge and insights of our seasoned
                  experts who bring real-world experience to the training room,
                  ensuring that your teams learn from the best in the business.
                </p>
              </div>
              <div className="col-lg-4 Main-card">
                <p className="mangement-head">Cutting-Edge Methodologies</p>
                <p className="manage--89">
                  tay ahead of the curve with our dynamic and interactive
                  learning methodologies. We leverage the latest tools and
                  techniques to create engaging, memorable, and impactful
                  learning experiences.
                </p>
              </div>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="container ">
            <div className="col-lg-6 ">
              <h1 className="Join">Join us at TEDX Learning</h1>
              <p className="join-para">
                where innovation meets education, and together, let's chart a
                course towards a future of unparalleled organizational
                excellence. Transforming today's teams into tomorrow's leaders,
                we are your strategic partner in the pursuit of greatness.
              </p>
            </div>
          </div>
          <div className="container ml-5 py-5">
            <div className="row ">
              <div className="col-lg-6 ml-3">
                <Form>
                  <Form.Group className="mb-3 py-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 py-2"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Phone Number"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 py-2"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Organization Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Organization Name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 py-2"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Your Designation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Designation"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 py-2"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your City" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 py-2"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Interested in</Form.Label>
                    <Form.Control type="text" placeholder="Interested in  " />
                  </Form.Group>
                  <Form.Label>Message</Form.Label>

                  <InputGroup className="pb-4">
                    <Form.Control
                      as="textarea"
                      aria-label="With textarea"
                      placeholder="Enter Your Message"
                    />
                  </InputGroup>

                  <Button variant="primary btn-send-Message" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Fade>
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

export default About;
