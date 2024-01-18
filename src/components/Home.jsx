import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../assets/Agha Khan Hospital.png";
import Logo1 from "../assets/Artistic Milliners.png";
import Logo2 from "../assets/Atlas_Honda_Pakistan_logo.png";

import Logo4 from "../assets/British Overseas School.jpg";
import Logo5 from "../assets/CCL-logo.png";
import Logo6 from "../assets/Dawood Hercules_logo.jpg";
import Logo8 from "../assets/Getz-Pharma-Logo.png";
import Logo9 from "../assets/HRSG.jpg";
import Logo10 from "../assets/Hawa wind Power.png";
import Logo11 from "../assets/Hilton.png";
import Logo12 from "../assets/IBA.png";
import Logo13 from "../assets/IBEX.png";
import Logo14 from "../assets/ICAP.png";
import Logo15 from "../assets/IWEL indus wind energy.jpeg";
import Logo16 from "../assets/JS bank.png";
import Logo17 from "../assets/Mental Well Being Poster.png";
import Logo18 from "../assets/NCCPL.png";
import Logo19 from "../assets/NIBAF.jpg";
import Logo20 from "../assets/ORIX.jpg";
import Logo21 from "../assets/PIM.png";
import Logo22 from "../assets/Saphire wind power SWPCL.png";
import Logo23 from "../assets/Searle.jpg";
import Logo24 from "../assets/Shan-Logo-PNG.png";
import Logo25 from "../assets/State_Bank_of_Pakistan_logo.svg.png";
import Logo26 from "../assets/TCF.png";
import Logo27 from "../assets/TGL wind power.jpeg";
import Logo28 from "../assets/TPL Holdings.jpg";
import Logo29 from "../assets/TPL Properties.jpg";
import Logo30 from "../assets/TPL insurance.png";
import Logo31 from "../assets/TPL tracker.jpg";
import Logo32 from "../assets/TPL.png";
import Logo33 from "../assets/adamjee engineering.jpg";
import Logo34 from "../assets/adamjee life.png";
import Logo35 from "../assets/atco lab logo.png";
import Logo36 from "../assets/bank alfalah.png";
import Logo37 from "../assets/bankislami logo.png";
import Logo38 from "../assets/catcos.png";
import Logo39 from "../assets/engro.png";
import Logo40 from "../assets/far estern impex.png";
import Logo41 from "../assets/hino.png";
import Logo42 from "../assets/indus hospital logo.png";
import Logo43 from "../assets/integration xperts.jpg";
import Logo44 from "../assets/jero-section.avif";
import Logo45 from "../assets/jhimpir-power-logo.png";
import Logo46 from "../assets/logo.png";
import Logo47 from "../assets/master wind energy.jpeg";
import Logo48 from "../assets/mpcl logo.png";
import Logo49 from "../assets/national_foods_ltd_pakistan_logo.jpg";
import Logo50 from "../assets/nestle.png";
import Logo51 from "../assets/parco logo.png";
import Logo52 from "../assets/shirazi_investments_pvt_limited_logo.jpg";
import Logo53 from "../assets/sybrid-logo.jpeg";
import Logo54 from "../assets/tameer bank.png";
import Logo55 from "../assets/ubl_fund_managers_logo.jpg";
import Logo56 from "../assets/wateen.jpg";

// Programms
import Pro01 from "../assets/programs/Boxless Thinking_linkedon poster.jpg";
import Pro02 from "../assets/programs/Emotional Resilience _ By Dr.Mana.png";
import Pro03 from "../assets/programs/Fixed Mindset vs Growth Mindset.png";
import Pro04 from "../assets/programs/Mental Well Being Poster.png";
import Pro05 from "../assets/programs/Reframing Mindset_linkedin poster.jpg";
import Pro06 from "../assets/programs/Serving Etiquette & Hygiene - TEDX.jpg";
import Pro07 from "../assets/programs/Training For Kitchen & Housekeeping Poster.png";
import Pro08 from "../assets/programs/Training for Houskeeping Staff_Poster.png";

// OurPartners
import OurPartner from "../assets/partners.jpg";
import MainLogo from "../assets/ted2 Horizontal Logo.png";
import HeroImg from "../assets/hero.avif";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { HashLink as Link } from "react-router-hash-link";
const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the speed of the typewriter effect by changing the interval time

    return () => clearInterval(intervalId);
  }, [text, currentIndex]);

  return <p className="Hero-para">{displayText}</p>;
};

// Your main component
const YourComponent = () => {
  const [cards, setCards] = useState([
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    // Add more cards as needed
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextClick, 3000); // Adjust the interval time (milliseconds) for automatic sliding

    return () => clearInterval(intervalId);
  }, [cards.length]);

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const logos = [
    Logo,
    Logo1,
    Logo2,
    Logo4,
    Logo5,
    Logo6,
    Logo8,
    Logo9,
    Logo10,
    Logo11,
  ];

  return (
    <>
      <Fade>
        <section className="hero-section container-fluid">
          <div className="container  py-5">
            <div className="row py-5">
              <Fade left>
                <div className="col-lg-6 pt-5 bg-light p-5">
                  <Fade left>
                    {/* <h1 className="Hero-head">TEDX Learning</h1> */}
                    <img className="img-fluid" src={MainLogo} alt="" />
                  </Fade>
                  <Fade>
                    <Typewriter text="Learn | Unlearn | Relearn | Master | Share" />
                  </Fade>
                  <Fade>
                    <button className="Hero-btn">Learn More</button>
                  </Fade>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        <Fade left>
          <div>
            <div className="main-section-head text-center pt-5 mt-5">
              <h1 className="prohead pb-3">
                Our <span>Programs</span>
              </h1>
              <p className="HEad-para-main">
                For Management & Non-Management Teams
              </p>
            </div>
            <div className="container py-5 pt-5 mt-5">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper py-5"
                breakpoints={{
                  // Set the configuration for smaller screens (e.g., mobile)
                  1280: {
                    slidesPerView: 3,
                  },

                  600: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="col">
                    <img className="img-fluid" src={Pro01} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col">
                    <img className="img-fluid" src={Pro02} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col">
                    <img className="img-fluid" src={Pro03} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col">
                    <img className="img-fluid" src={Pro04} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col">
                    <img className="img-fluid" src={Pro05} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col">
                    <img className="img-fluid" src={Pro06} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col">
                    <img className="img-fluid" src={Pro07} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col">
                    <img className="img-fluid" src={Pro08} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="container-fluid about-us p-5">
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
          <div className="container">
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
          <div className="container ml-5">
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

        <div className="container-fluid py-5 mt-5">
          <h1 main-head className="our-client pb-5 py-5 mb-5 text-center">
            Our <span>Clients</span>
          </h1>
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="slide">
                <img className="LOGO-01" src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </Slider>
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

export default YourComponent;
