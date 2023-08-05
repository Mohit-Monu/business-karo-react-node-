import classes from "./DisplayTop.module.css";

function DisplayTop(props) {
  return (
    <div className={classes.bigdiv}>
      <img
        src="https://affise.com/wp-content/uploads/2021/11/12-Best-referral-software-tools-every-marketer-needs-to-know-about.png"
        className={classes.img}
        style={{
          filter: `grayscale(${props.theme === "dark" ? "100%" : "0%"})`,
        }}
      ></img>
      <div
        className={classes.header + " " + "container"}
        style={{ backgroundColor: props.theme === "dark" ? "black" : "blue" }}
      >
        <h1>{props.children} </h1>
      </div>
    </div>
  );
}
export default DisplayTop;
