import "./Home.css"

const Section8=()=>{
  const video = document.getElementsByClassName("video");
  const faqs = document.querySelectorAll("divfaq-box-question");
  let i;
  for (i = 0; i < video.length; i++) {
    video[i].addEventListener("click", function () {
      const controls = this.nextElementSibling;
      if (controls.innerHTML === "▶") {
        controls.innerHTML = "| |";
        this.play();
      } else {
        controls.innerHTML = "▶";
        this.pause();
      }
    });
    video[i].addEventListener("mouseout", function () {
      const controls = this.nextElementSibling;
      if (!this.paused) {
        controls.style.display = "none";
      }
    });
    video[i].addEventListener("mouseover", function () {
      const controls = this.nextElementSibling;
      controls.style.display = "flex";
    });
    video[i].addEventListener(
      "ended",
      function () {
        const controls = this.nextElementSibling;
        controls.style.display = "flex";
        controls.innerHTML = "▶";
      },
      false
    ); 

    faqs.forEach((faq)=>{
      faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
      });
    });

  }
    return(
    <>
      {/* real-estate-item */}
          <div className="frame-parent9">
            <div className="what-our-pharma-partners-say-parent">
            <b>What Our Pharma Partners Say</b>
              <div className="tailored-solutions-name">
                Driving Transformations, One Brand at a Time
              </div>
            </div>
            <div className="testimonial-card">
              <div className="video-parent">
                <div >
                  <video className="video">
                  <source src="/video.mp4" type="video/mp4" />
                  </video>
                  <div class="custom-video__control">▶</div>
                </div>
                <div className="frame-parent10">
                  <div className="divall-testimonials-box-nam-parent">
                    <div className="divall-testimonials-box-nam">
                      <img
                        className="avatar-of-team"
                        alt=""
                        src="/avatar-of-team@2x.png"
                      />
                    <div className="span">
                    <b className="heading-4">Tabish khan</b>
                  </div>
                </div>
                <div className="symbol">
                  <img alt="" src="/Symbol.png"/>
                </div>
              </div>
              <div className="p">
                <div className="osumares-expertise-in">
                  Osumare's expertise in pharma marketing is unparalleled. Their
                  strategies helped us navigate complex regulations while
                  driving remarkable growth.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-buttion-parent">
          <img
            alt=""
            src="/scroll_lefftbutton.png"
          />
          <img
            alt=""
            src="/scroll_rightbutton.png"
          />
        </div>
        <div className="frame-parent11">
          <div className="frequently-asked-questions-parent">
            <b>Frequently Asked Questions</b>
            <div className="pinpoint-your-audience">
              Pinpoint your audience with precision, ensuring your marketing
              efforts reach those most likely to engage with your brand.
            </div>
          </div>
          
          <div className="faq">
            <div className="divfaq-box-question">
              {/* <div className="div"> */}
              <div className="how-does-osumare">
                  1. How does Osumare measure campaign success?
              </div>
                    {/* <div className="ifa-solid"> */}
                    {/* <button className="symbol1">
                    {/* <img alt="" src="i.fa-solid.png"/> */}
                    {/* <i class="fa-solid fa-chevron-down"></i> */}
                    {/* </button> */} 
                   
                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41406 14.2891L12.7266 8.97656C13.1172 8.58594 13.1172 8 12.7266 7.64844L11.8672 6.75C11.4766 6.39844 10.8906 6.39844 10.5391 6.75L6.78906 10.5391L3 6.75C2.64844 6.39844 2.0625 6.39844 1.67188 6.75L0.8125 7.64844C0.421875 8 0.421875 8.58594 0.8125 8.97656L6.125 14.2891C6.47656 14.6406 7.0625 14.6406 7.41406 14.2891Z" fill="#010103"/>
                </svg>
                  
               
                {/* </div> */}
               
                {/* </div> */}
            </div>
            <div className="answer">
              <p>
                We believe in measurable results. Our data-driven approach
                  means that every campaign's performance is tracked, analyzed,
                  and refined for optimal outcomes. We provide regular reports
                  that detail key metrics, giving you clear insights into how
                  our strategies are driving growth for your brand.
              </p>
            </div>
          </div>
          <div className="faq">
            <div className="divfaq-box-question">
              {/* <div className="div"> */}
              <div className="how-does-osumare">
                2. How does Osumare measure campaign success?
              </div>
                    {/* <div className="ifa-solid"> */}
                    {/* <button className="symbol1">
                    {/* <img alt="" src="i.fa-solid.png"/> */}
                    {/* <i class="fa-solid fa-chevron-down"></i> */}
                    {/* </button> */} 
                    
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41406 14.2891L12.7266 8.97656C13.1172 8.58594 13.1172 8 12.7266 7.64844L11.8672 6.75C11.4766 6.39844 10.8906 6.39844 10.5391 6.75L6.78906 10.5391L3 6.75C2.64844 6.39844 2.0625 6.39844 1.67188 6.75L0.8125 7.64844C0.421875 8 0.421875 8.58594 0.8125 8.97656L6.125 14.2891C6.47656 14.6406 7.0625 14.6406 7.41406 14.2891Z" fill="#010103"/>
                </svg>
                {/* </div> */}
               
                {/* </div> */}
            </div>
            <div className="answer">
              <p>
                We believe in measurable results. Our data-driven approach
                  means that every campaign's performance is tracked, analyzed,
                  and refined for optimal outcomes. We provide regular reports
                  that detail key metrics, giving you clear insights into how
                  our strategies are driving growth for your brand.
              </p>
            </div>
          </div>
          <div className="faq">
            <div className="divfaq-box-question">
              {/* <div className="div"> */}
              <div className="how-does-osumare">
                3. How does Osumare measure campaign success?
              </div>
                    {/* <div className="ifa-solid"> */}
                    {/* <button className="symbol1">
                    {/* <img alt="" src="i.fa-solid.png"/> */}
                    {/* <i class="fa-solid fa-chevron-down"></i> */}
                    {/* </button> */} 
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41406 14.2891L12.7266 8.97656C13.1172 8.58594 13.1172 8 12.7266 7.64844L11.8672 6.75C11.4766 6.39844 10.8906 6.39844 10.5391 6.75L6.78906 10.5391L3 6.75C2.64844 6.39844 2.0625 6.39844 1.67188 6.75L0.8125 7.64844C0.421875 8 0.421875 8.58594 0.8125 8.97656L6.125 14.2891C6.47656 14.6406 7.0625 14.6406 7.41406 14.2891Z" fill="#010103"/>
                </svg>
                {/* </div> */}
               
                {/* </div> */}
            </div>
            <div className="answer">
              <p>
                We believe in measurable results. Our data-driven approach
                  means that every campaign's performance is tracked, analyzed,
                  and refined for optimal outcomes. We provide regular reports
                  that detail key metrics, giving you clear insights into how
                  our strategies are driving growth for your brand.
              </p>
            </div>
          </div>
            {/* <div className="divfaq-box">
              <div className="divfaq-box-question1">
                <div className="how-does-osumare-measure-campa-parent">
                  <div className="how-does-osumare">
                    2. How does Osumare measure campaign success?
                  </div>
                  {/* <div className="ifa-solid">
                    <div className="symbol1">
                    <img alt="" src="i.fa-solid.png"/>
                    </div>
                  </div> }
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.41406 14.2891L12.7266 8.97656C13.1172 8.58594 13.1172 8 12.7266 7.64844L11.8672 6.75C11.4766 6.39844 10.8906 6.39844 10.5391 6.75L6.78906 10.5391L3 6.75C2.64844 6.39844 2.0625 6.39844 1.67188 6.75L0.8125 7.64844C0.421875 8 0.421875 8.58594 0.8125 8.97656L6.125 14.2891C6.47656 14.6406 7.0625 14.6406 7.41406 14.2891Z" fill="#010103"/>
                  </svg>
                </div>
                <div className="p1" />
              </div>
            </div>
            <div className="divfaq-box1">
              <div className="divfaq-box-question2">
                <div className="how-does-osumare-measure-campa-parent">
                  <div className="how-does-osumare2">
                    3. How does Osumare measure campaign success?
                  </div>
                  {/* <div className="ifa-solid">
                    <div className="symbol3">
                    <img alt="" src="i.fa-solid.png"/>
                    </div>
                  </div> }
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.41406 14.2891L12.7266 8.97656C13.1172 8.58594 13.1172 8 12.7266 7.64844L11.8672 6.75C11.4766 6.39844 10.8906 6.39844 10.5391 6.75L6.78906 10.5391L3 6.75C2.64844 6.39844 2.0625 6.39844 1.67188 6.75L0.8125 7.64844C0.421875 8 0.421875 8.58594 0.8125 8.97656L6.125 14.2891C6.47656 14.6406 7.0625 14.6406 7.41406 14.2891Z" fill="#010103"/>
                  </svg>
                </div>
                <div className="p2" />
              </div>
              <div className="divfaq-box-answer">
                <div className="we-believe-in">
                  We believe in measurable results. Our data-driven approach
                  means that every campaign's performance is tracked, analyzed,
                  and refined for optimal outcomes. We provide regular reports
                  that detail key metrics, giving you clear insights into how
                  our strategies are driving growth for your brand.
                </div>
              </div>
            </div>
          </div> */}
         
          {/* <div className="faq">
            <div className="question">
              <h3>
              1. How does Osumare measure campaign success?
              </h3>
              <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41406 14.2891L12.7266 8.97656C13.1172 8.58594 13.1172 8 12.7266 7.64844L11.8672 6.75C11.4766 6.39844 10.8906 6.39844 10.5391 6.75L6.78906 10.5391L3 6.75C2.64844 6.39844 2.0625 6.39844 1.67188 6.75L0.8125 7.64844C0.421875 8 0.421875 8.58594 0.8125 8.97656L6.125 14.2891C6.47656 14.6406 7.0625 14.6406 7.41406 14.2891Z" fill="#010103"/>
              </svg>


            </div>
          </div> */}
        </div>
      </div>

    </>
    );
}

export default Section8;