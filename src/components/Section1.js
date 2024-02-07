import "./Home.css"

const Section1 = () => {
  return (
    <>
      <div className="frame-parent">
        <div className="real-estate-container">
          <span className="elevate">{`Elevate `}</span>
          <b className="real-estate-name">Real Estate Success</b>
          <span className="elevate"> with Osumare's Digital Expertise</span>
        </div>
        <div className="tailored-solutions-name">
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </div>
        <button class="get-large-button">Get Started</button>
      </div>
      <div className="home-header-image">
        <img alt="" src="/header_image.png" />
      </div>
    </>
  );
}

export default Section1;