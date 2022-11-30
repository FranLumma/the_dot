import Header from "../Components/header";
import Nav from "../Components/NavBar";
import "../css/AboutPage.css";

const About = () => {
  const copyContent = async (e) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText("camilinzye@gmail.com");
    }
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="abt_content center">
          <div className="abt_grid">
            <div className="description_cont">
              <h2>
                Hi i'm <span>k</span>
                cami
              </h2>
              <p style={{fontFamily: "circulation"}}>
              many fall in the face of chaos, but not this one. not today.
              </p>
            </div>
            <div className="contact_cont">
              <div>
                <h3>Contacts</h3>
                <p>
                  <span>Email: </span>
                  <span
                    onClick={() => {
                      copyContent();
                    }}
                  >
                    camilinzye@gmail.com
                  </span>
                </p>
                <p>
                  <span>Twitter: </span>
                  <a
                    href="http://twitter.com/FranKamiLumma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @FranKamiLumma
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
