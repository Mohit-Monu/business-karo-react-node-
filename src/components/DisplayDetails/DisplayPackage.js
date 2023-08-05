import "./DisplayPackage.css";

function DisplayPackage(props) {
  return (
    <div class="container-pack">
      <div class="product" style={{ backgroundColor: `${props.theme === "dark" ? "#38598b" : "#CD7F32"}` }}>
        <h2 class="name">Bronze Pack</h2>
        <hr></hr>
        <p class="price">Rs.100</p>
        <p class="description">
          1. On the stage 1 referral you will get Rs.50 everytime
        </p>
        <p class="description">
          2. On the stage 2 referral you will get Rs.25 everytime
        </p>
        <p class="description">3. Non cancellable </p>
        <button class="btn">
          <span>Buy Now</span>
        </button>
      </div>
      <div class="product" style={{ backgroundColor: `${props.theme === "dark" ? "#38598b" : "#C0C0C0"}` }}>
        <h2 class="name">Silver Pack</h2>
        <hr></hr>

        <p class="price">Rs.500</p>

        <p class="description">
          1. On the stage 1 referral you will get Rs.250 everytime
        </p>
        <p class="description">
          2. On the stage 2 referral you will get Rs.125 everytime
        </p>
        <p class="description">3. Half Refund On cancel </p>
        <button class="btn">
          <span>Buy Now</span>
        </button>
      </div>
      <div class="product" style={{ backgroundColor: `${props.theme === "dark" ? "#38598b" : "#FFD700"}` }}>
        <h2 class="name">Gold pack</h2>
        <hr></hr>

        <p class="price">Rs.1000</p>
        <p class="description">
          1. On the stage 1 referral you will get Rs.500 everytime
        </p>
        <p class="description">
          2. On the stage 2 referral you will get Rs.250 everytime
        </p>
        <p class="description">3. Full Refund On cancel </p>
        <button class="btn">
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  );
}
export default DisplayPackage;
