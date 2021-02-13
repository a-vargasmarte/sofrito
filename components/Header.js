import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1>
        <span className={headerStyles.title}>Sofrito</span>
      </h1>
      <p className={headerStyles.description}>
        Cooking info, tips, and tricks!
      </p>
    </div>
  );
};

export default Header;
