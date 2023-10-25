import "./styles.scss";
import koala from "../../assets/koala.jpg";
import veg from "../../assets/veg.png";
import Logo from "../Logo/Logo";

const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-container">
        <div className="cover__content">
          <Logo />
          <div className="cover__content-text">
            <h1>Would you like to cook like a chef</h1>
            <p> Cook dishes from all over the world with us</p>
          </div>

          <div className="cover__content-img">
            <img src={veg} />
          </div>
        </div>

        <div className="cover__img">
          <img src={koala} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
