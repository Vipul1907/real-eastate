import "./Home.css"

const Section9=()=>{
    return(
    <>
      {/* Form Section */}
      <div className="form-section">
        <div className="connect-with-our-digital-marke-parent">
          <div className="connect-with-our">
            Connect with Our Digital Marketing Experts
          </div>
          <div className="tailored-solutions-name">
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together
          </div>
        </div>
        <div className="form">
          <div className="frame-parent12">
            <div className="frame-parent13">
              <div className="frame-parent14">
                <div className="name-parent">
                  <div className="name">Name</div>
                  <input type="text" className="enter-your-name enter-your-name-wrapper" placeholder="Enter your name"/>
                </div>
                <div className="name-parent">
                  <div className="name">Phone</div>
                    <input type="text" className="enter-your-number enter-your-number-wrapper" placeholder="Enter your Number"/>
                </div>
                <div className="name-parent">
                  <div className="name">Email</div>
                    <input type="text" className="enter-your-name enter-your-name-wrapper" placeholder="Enter your Email Id:"/>
                </div>
              </div>
              <div className="frame-wrapper2">
                <div className="message-parent">
                  <div className="name">Message</div>
                    <input type="textarea" className="enter-your-message enter-your-message-wrapper" placeholder=" Enter your Message."/>
                </div>
              </div>
            </div>
            <button class="large-button1">Get Started</button>
          </div>
        </div>
      </div>
    </>
    );
}

export default Section9;