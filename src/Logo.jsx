import logo from "./assets/Movie Pickr Logo.svg";

console.log(logo);

const Logo = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />;
    </header>
  );
};

export default Logo;
