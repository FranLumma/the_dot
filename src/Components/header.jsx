import Logo from "../assets/My_place.gif";

const Header = () => {
  return (
    <header className="header_bar">
      <div className="logo_container">
        <img src={Logo} alt="yo" />
      </div>
    </header>
  );
};

export default Header;
