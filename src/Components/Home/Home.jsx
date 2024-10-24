import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import ContactForm from './ContactUs/ContactForm/ContactForm';
import FAQ from './ContactUs/Faq/FAQ';
import ContactUs from './ContactUs/ContactUs';
import Carousel from './CardData/CardData';
import OurProductsSection from './CardData/Section';

export default function Home() {
    return (
        <>
        {/* <!-- Main Section --> */}
    <main class="main">
        <section class="section banner banner-section">
            <div class="container banner-column">
                <img class="banner-image" src="./Assets/img/hero-img.png" alt="banner"></img>
                <div class="banner-inner">
                    <h1 class="heading-xl">
                        {/* <!-- Experience Media Like Never Before --> */}
                        ASHA DEEWAN EXPORTS
                    </h1>
                    <p class="paragraph">
                        {/* <!-- Enjoy award-winning stereo beats with wireless listening freedom and sleek,
                        streamlined playback with premium sound quality. --> */}
                        We are a company based in India dedicated to supply a wide range
                        of products tailored to meet
                        your unique needs.
                    </p>
                    <button class="btn btn-darken btn-inline" onclick="location.href=;">
                        Contact us<i class="bx bx-right-arrow-alt"></i>
                    </button>
                </div>
                <div class="banner-links">
                    <a href="#" title=""><i class="bx bxl-facebook"></i></a>
                    <a target="_blank" href="https://www.instagram.com/asha.deewan.exports/" title=""><i
                            class="bx bxl-instagram"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/govind-kumar-yadav-b04587215" title=""><i
                            class="bx bxl-linkedin"></i></a>
                    <a href="#" title=""><i class="bx bxl-youtube"></i></a>
                </div>
            </div>
        </section>
    </main>





    <section class="about-section">
        <div class="about-container">
            {/* <!-- <div class="sec-title">
                <span class="title">About Company</span>
                <h2>We are leaders in <br>the industrial market</h2>
            </div> --> */}
            <div class="sec-title">
                <span class="title">About Company</span>
                <h2>We are your trusted <br /> trade partner </h2>
            </div>
            <div class="about-row">
                <div class="content-column">
                    <div class="inner-column">
                        <div class="text">
                            {/* <!-- At the forefront of the industrial market,
                            Asha Deewan Export provides top-notch import and export services.
                            Our dedication to excellence and customer satisfaction has made us a
                            trusted name in the industry. We pride ourselves on: --> */}
                            Our ultimate goal is to provide quality products
                            <br />
                            Unlock the benefits of global trade with us
                        </div>
                        <ul class="list-style-one">
                            {/* <!-- <li>Reliable and efficient logistics solutions</li> --> */}
                            <li>Access to global markets with strategic partnerships</li>
                            <li>Expert handling of all customs and regulatory requirements</li>
                            <li>Comprehensive supply chain management</li>
                            <li>Tailored solutions to meet your unique needs</li>
                            <li>Dedicated customer support team to assist you</li>
                        </ul>
                        <div class="text">We ensure the seamless movement of goods across borders.
                            Partner with us for your import and export needs and experience the difference.</div>
                    </div>
                    <div class="car-animation">
                        <div class="car-movement">
                            <div class="car">🚕🚚 <img className="car-between" src="./Assets/img/logo.png" alt="Logo" /> 🚚</div>

                        </div>
                        <div class="road"></div>
                    </div>
                </div>

                {/* <!-- Image Column --> */}
                <div class="image-column ">
                    <div class="inner-column wow fadeInLeft">
                        <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img
                                    src="./Assets/img/image-1.jpg" alt="" /></a></figure>
                        <figure class="image-2"><a href="#" class="lightbox-image" data-fancybox="images"><img
                                    src="./Assets/img/image-2.jpg" alt="" /></a></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section class=" feature-section img-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center heading-main heading-main-white">
                    <h2 class="heading">OUR SERVICES</h2>
                    <div class="separator"><i class="fa fa-home below-line-about-icon"></i></div>

                </div>
            </div>
            <div class="row services-list">
                <div class="col-md-4 feature-back">
                    <div class="features-div">
                        <i class="fa fa-university"></i>
                        <h2 class="features-heading">Global Sourcing</h2>
                        <p>
                            We excel in finding the best products from around the world to meet your needs.
                            With our extensive network, we ensure top quality and competitive pricing.
                        </p>
                    </div>
                </div>
                {/* <!-- <div class="col-md-4 feature-back">
                    <div class="features-div">
                        <i class="fa fa-bullseye"></i>

                        <h2 class="features-heading">Logistics Management</h2>
                        <p>
                            Our comprehensive logistics services include shipping, warehousing,
                            and distribution, ensuring your goods are handled efficiently and delivered on time.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 feature-back">
                    <div class="features-div">
                        <i class="fa fa-briefcase"></i>
                        <h2 class="features-heading">Trade Compliance</h2>
                        <p>
                            Stay compliant with international trade regulations.
                            We handle all documentation and customs requirements to
                            smooth your import and export processes.
                        </p>
                    </div>
                </div> --> */}
                <div class="col-md-4 feature-back">
                    <div class="features-div">
                        <i class="fa  fa-folder-open"></i>
                        <h2 class="features-heading">Competitive Pricing</h2>
                        <p>
                            We offer the best prices in the market without compromising on quality.
                            Our goal is to provide cost-effective solutions
                            for all your import/export needs.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 feature-back">
                    <div class="features-div">
                        <i class="fa fa-undo"></i>
                        <h2 class="features-heading">Guaranteed Quality</h2>
                        <p>
                            We ensure that all products meet the highest standards of quality.
                            Our rigorous inspection processes guarantee that you receive exactly
                            what you ordered.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 feature-back">
                    <div class="features-div">
                        <i class="fa fa-envelope"></i>
                        <h2 class="features-heading">24/7 Customer Support</h2>
                        <p>
                            Our dedicated support team is available around the clock to assist you
                            with any queries or concerns. We are here to ensure your satisfaction
                            and success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <br />


    <OurProductsSection />


    <div class="col-md-12 text-center heading-main heading-main-white">
        <h2 class="heading">CONTACT</h2>
        <div class="separator"><i class="fa fa-phone below-line-about-icon"></i></div>

    </div>


    {/* <!-- <div class="service" style="margin-top: 40px;">
        <span class="service-title">
            <h1>#2</h1>
        </span>
        <span class="service-txt">
            <h2>Freight Forwarding</h2>
            <h3>We provide / arrange freight forwarding through Sea Shipments from Various World.</h3>
        </span>
    </div>
    <div class="service" style="margin-top: 40px;">
        <span class="service-title">
            <h1>#3</h1>
        </span>
        <span class="service-txt">
            <h2>Custom Clearance</h2>
            <h3>We get the goods cleared through customs along Custom Duty Payments.</h3>
        </span>
    </div> --> */}

    <ContactUs />
    
    
    

        </>
    );
}
