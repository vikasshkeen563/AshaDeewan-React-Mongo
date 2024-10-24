import React from 'react'

export default function About() {
  return (
    <section class="about-section">
    <div class="about-container">
        {/* <!-- <div class="sec-title">
            <span class="title">About Company</span>
            <h2>We are leaders in <br />the industrial market</h2>
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
                        <div class="car">🚕🚚 &nbsp&nbsp&nbsp&nbsp 🚚</div>

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
  );
}
