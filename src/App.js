import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <body>
    {/* <!-- Start Header Area --> */}
    <header class="header_area">
      <div class="main-menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#"
            ><img src="./img/am logo.jpg" class="logo" alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="mr-auto"></div>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#"
                  >Home <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    {/* <!-- End Header Area --> */}

    {/* <!-- Start Main Area --> */}
    <main class="site-main">
      {/* <!-- Start Banner Area --> */}
      <section class="site-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 site-title">
              <h3 class="title-text">Hey</h3>
              <h1 class="title-text text-uppercase">I'm Austin</h1>
              <h4 class="title-text text-uppercase">
                Junior Front-end Web Developer
              </h4>
              <div class="site-buttons">
                <div class="d-flex flex-row flex-wrap">
                  <button
                    type="button"
                    class="btn button primary-button m4-4 text-uppercase"
                  >
                    hire me
                  </button>
                  <button
                    type="button"
                    class="btn button secondary-button text-uppercase"
                  >
                    Get Resume
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <img
                src="./img/me2.jpg"
                alt="placeholder banner img"
                class="img-fluid me"
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

    <section class="about-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="about-image">
              <img
                src="./img/me2.jpg"
                alt="About us"
                class="img-fluid aboutUsImage"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 about-title">
            <h2 class="text-uppercase pt-5">
              <span>Let me</span>
              <span>introduce</span>
              <span>myself</span>
            </h2>
            <div class="paragraph py-4 w-75">
              <p class="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis blanditiis nisi officia, harum eaque suscipit
                consectetur eos hic at pariatur?
              </p>
              <p class="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                pariatur veniam recusandae ipsum quod ullam eos quos ipsam alias
                deleniti.
              </p>
            </div>
            <button
              type="button"
              class="btn button primary-button text-uppercase"
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

    <section class="project-area">
        <div class="container">
            <div class="project-title pb-5">
                <h1 class="text-uppercase title-h1 text-center">Projects</h1>
            </div>
            <div class="button-group">
                <button type="button" class="active">All</button>
                <button type="button" data-filter=".latest">Latest</button>
                <button type="button" data-filter=".upcoming">Upcoming</button>
            </div>

            <div class="row grid portCards">
                <div class="col-lg-4 col-md-6 col-sm-12 element-item first latest">
                    <div class="our-project">
                        <div class="img">
                            <a class="text-popup-link" href="./img/ISS.png">
                                <img src="./img/ISS.png" alt="portfolio-1" />
                            </a>
                        </div>
                        <div class="title py-4">
                            <h4 class="text-uppercase">ISS Tracker</h4>
                            <span class="text-secondary">First Project</span>
                            <a href="https://github.com/ausmo/ISS-Tracker">github</a>
                        </div>
                    </div>
                </div>  
                <div class="col-lg-4 col-md-6 col-sm-12 element-item second latest">
                    <div class="our-project">
                        <div class="img">
                            <img src="./img/beerbuddies.png" alt="portfolio-2"/>
                        </div>
                        <div class="title py-4">
                            <h4 class="text-uppercase">Beer Buddies</h4>
                            <span class="text-secondary">Second Project</span>
                            <a href="https://github.com/ausmo/beer-buddies">github</a>
                            <a href="https://stark-ridge-23340.herokuapp.com/">heroku</a>
                        </div>
                    </div>
                </div>  
                <div class="col-lg-4 col-md-6 col-sm-12 element-item third upcoming">
                    <div class="our-project">
                        <div class="img">
                            <img src="./img/flexpanels2.jpg" alt="portfolio-3"/>
                        </div>
                        <div class="title py-4">
                            <h4 class="text-uppercase">Flex Panels</h4>
                            <span class="text-secondary">Upcoming Project</span>
                        </div>
                    </div>
                </div>  
                <div class="col-lg-4 col-md-6 col-sm-12 element-item fourth upcoming">
                    <div class="our-project">
                        <div class="img">
                            <img src="./img/clickdrag.jpg" alt="portfolio-4"/>
                        </div>
                        <div class="title py-4">
                            <h4 class="text-uppercase">Drag to Scroll</h4>
                            <span class="text-secondary">Upcoming Project</span>
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

    <section class="services-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center services-title">
            <h1 class="text-uppercase title-text">Services Offered</h1>
            <p class="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              laudantium deleniti quasi odio quisquam similique tempora hic
              repellendus deserunt amet?
            </p>
          </div>
        </div>
        <div class="container services-list">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="services">
                <div class="services-img text-center py-4">
                  <img src="./img/mouseicon.png" alt="services-1" />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title text-uppercase font-helvetica">
                    Web Developer
                  </h5>
                  <p class="card-text text-secondary">
                    I specialize in front-end web development
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="services">
                <div class="services-img text-center py-4">
                  <img src="./img/brain.jpg" alt="services-1" />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title text-uppercase font-helvetica">
                    Eager Learner
                  </h5>
                  <p class="card-text text-secondary">
                    I love coding and am constantly learning new things
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="services">
                <div class="services-img text-center py-4">
                  <img src="./img/growth.jpg" alt="services-1" />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title text-uppercase font-helvetica">
                    Future Growth
                  </h5>
                  <p class="card-text text-secondary">
                    I want to eventually learn back-end as well so I can be a bigger asset
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="services">
                <div class="services-img text-center py-4">
                  <img src="./img/detail.png" alt="services-1" />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title text-uppercase font-helvetica">
                    Attention to Detail
                  </h5>
                  <p class="card-text text-secondary">
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

    <footer class="footer-area">
        <div class="container">
            <div class="">
                <div class="site-logo text-center py-4">
                    <a href=""></a>
                </div>
                <div class="social text-center">
                    <h5 class="text-uppercase">Follow Me</h5>
                    <a href="https://github.com/ausmo"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/austin-moore-14134a1b/"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>

    {/* <!-- Jquery js file --> */}
    <script src="./js/jquery.3.6.1.js"></script>

    {/* <!-- bootstrap js file --> */}
    <script src="./js/bootstrap.min.js"></script>

    {/* <!-- isotope js library --> */}
    <script src="./vendor/isotope/isotope.min.js"></script>

    {/* <!-- Magnific Popup script file --> */}
    <script src="./vendor/Magnific-Popup/dist/jquery.magnific-popup.min.js"></script>

    {/* <!-- custom js file --> */}
      <script src="./js/main.js"></script>

  </body>

  )}


export default App;
