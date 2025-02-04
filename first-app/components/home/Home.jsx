import style from "./Home.module.css";
import stye from "../card/Card.module.css";

export const Home = () => {
  return (
    <div>
      <div className={style.home}>
        Home component
        <div className={stye.card}>Card component</div>
      </div>
    </div>
  );
};
