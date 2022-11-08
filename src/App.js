import React from "react";
import logo from "./logo.svg";
// import './css/bootstrap.min.css';
// import './css/all.min.css';
// import './css/style.css';
// import './vendor/Magnific-Popup/dist/magnific-popup.css';
import "bootstrap/dist/css/bootstrap.min.css";
import iss from "./img/ISS.png";
import me from "./img/me2.jpg";
import beerbuddies from "./img/beerbuddies.png";
import flex from "./img/flexpanels2.jpg";
import clickdrag from "./img/clickdrag.jpg";
import mouseicon from "./img/mouseicon.png";
import growth from "./img/growth.jpg";
import brain from "./img/brain.jpg";
import detail from "./img/detail.png";

function App() {
  return (
    <body>
      {/* <!-- Start Header Area --> */}
      <header className="header_area">
        <div className="main-menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src="./img/am logo.jpg" className="logo" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="mr-auto"></div>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- End Header Area --> */}

      {/* <!-- Start Main Area --> */}
      <main className="site-main">
        {/* <!-- Start Banner Area --> */}
        <section className="site-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 site-title">
                <h3 className="title-text">Hey</h3>
                <h1 className="title-text text-uppercase">I'm Austin</h1>
                <h4 className="title-text text-uppercase">
                  Junior Front-end Web Developer
                </h4>
                <div className="site-buttons">
                  <div className="d-flex flex-row flex-wrap">
                    <button
                      type="button"
                      className="btn button primary-button m4-4 text-uppercase"
                    >
                      hire me
                    </button>
                    <button
                      type="button"
                      className="btn button secondary-button text-uppercase"
                    >
                      Get Resume
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <img
                  src={me}
                  alt="placeholder banner img"
                  className="img-fluid me"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Banner Area --> */}
      </main>
      <br />
      <br />
      <br />
      {/* <!-- About Area --> */}

      <section className="about-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="./img/me2.jpg"
                  alt="About us"
                  className="img-fluid aboutUsImage"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 about-title">
              <h2 className="text-uppercase pt-5">
                <span>Let me</span>
                <span>introduce</span>
                <span>myself</span>
              </h2>
              <div className="paragraph py-4 w-75">
                <p className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis blanditiis nisi officia, harum eaque suscipit
                  consectetur eos hic at pariatur?
                </p>
                <p className="para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum pariatur veniam recusandae ipsum quod ullam eos quos
                  ipsam alias deleniti.
                </p>
              </div>
              <button
                type="button"
                className="btn button primary-button text-uppercase"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End About Area --> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <!-- Project Area --> */}

      <section className="project-area">
        <div className="container">
          <div className="project-title pb-5">
            <h1 className="text-uppercase title-h1 text-center">Projects</h1>
          </div>
          <div className="button-group">
            <button type="button" className="active">
              All
            </button>
            <button type="button" data-filter=".latest">
              Latest
            </button>
            <button type="button" data-filter=".upcoming">
              Upcoming
            </button>
          </div>

          <div className="row grid portCards">
            <div className="col-lg-4 col-md-6 col-sm-12 element-item first latest">
              <div className="our-project">
                <div className="img">
                  <a className="text-popup-link" href="./img/ISS.png">
                    <img src={iss} alt="portfolio-1" />
                  </a>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">ISS Tracker</h4>
                  <span className="text-secondary">First Project</span>
                  <a href="https://github.com/ausmo/ISS-Tracker">github</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item second latest">
              <div className="our-project">
                <div className="img">
                  <img src={beerbuddies} alt="portfolio-2" />
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Beer Buddies</h4>
                  <span className="text-secondary">Second Project</span>
                  <a href="https://github.com/ausmo/beer-buddies">github</a>
                  <a href="https://stark-ridge-23340.herokuapp.com/">heroku</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item third upcoming">
              <div className="our-project">
                <div className="img">
                  <img src={flex} alt="portfolio-3" />
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Flex Panels</h4>
                  <span className="text-secondary">Upcoming Project</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item fourth upcoming">
              <div className="our-project">
                <div className="img">
                  <img src={clickdrag} alt="portfolio-4" />
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Drag to Scroll</h4>
                  <span className="text-secondary">Upcoming Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Emd Project Area --> */}

      <br />
      <br />
      <br />

      {/* <!-- Services Area --> */}

      <section className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center services-title">
              <h1 className="text-uppercase title-text">Services Offered</h1>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                laudantium deleniti quasi odio quisquam similique tempora hic
                repellendus deserunt amet?
              </p>
            </div>
          </div>
          <div className="container services-list">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img src={mouseicon} alt="services-1" />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-helvetica">
                      Web Developer
                    </h5>
                    <p className="card-text text-secondary">
                      I specialize in front-end web development
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img src={brain} alt="services-1" />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-helvetica">
                      Eager Learner
                    </h5>
                    <p className="card-text text-secondary">
                      I love coding and am constantly learning new things
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img src={growth} alt="services-1" />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-helvetica">
                      Future Growth
                    </h5>
                    <p className="card-text text-secondary">
                      I want to eventually learn back-end as well so I can be a
                      bigger asset
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img src={detail} alt="services-1" />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-helvetica">
                      Attention to Detail
                    </h5>
                    <p className="card-text text-secondary">
                      I won't bother you with broken code due to a missing comma
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Services Area --> */}

      {/* <!-- End Main Area --> */}

      <footer className="footer-area">
        <div className="container">
          <div className="">
            <div className="site-logo text-center py-4">
              <a href=""></a>
            </div>
            <div className="social text-center">
              <h5 className="text-uppercase">Follow Me</h5>
              <a href="https://github.com/ausmo">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/austin-moore-14134a1b/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Jquery js file --> */}
      {/* <script src="./js/jquery.3.6.1.js"></script> */}

      {/* <!-- bootstrap js file --> */}
      {/* <script src="./js/bootstrap.min.js"></script> */}

      {/* <!-- isotope js library --> */}
      {/* <script src="./vendor/isotope/isotope.min.js"></script> */}

      {/* <!-- Magnific Popup script file --> */}
      {/* <script src="./vendor/Magnific-Popup/dist/jquery.magnific-popup.min.js"></script> */}

      {/* <!-- custom js file --> */}
      {/* <script src="./js/main.js"></script> */}
    </body>
  );
}

export default App;
