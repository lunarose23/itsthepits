<template>
  <div class="surround">
    <h2>Catering Menu & Large Pickup Orders</h2>
    <div class="items">
      <div class="internal brisket">
        <div class="overlay">
          <div class="center">
            <h2>Meats</h2>
          </div>
        </div>
      </div>
      <div class="internal">
        <p>Pulled Pork</p>
        <p>Baby Back Ribs</p>
        <p>St. Louis Ribs</p>
        <p>Pork Belly</p>
        <p>Whole Pig</p>
        <p>Sliced Brisket</p>
        <p>Beef Ribs</p>
        <p>Leg of Lamb</p>
        <p>Chicken Thighs</p>
        <p>Chicken Wings</p>
        <p>Salmon</p>
        <p>Turkey Breast</p>
        <p>* Served with our homemade Peach Barbeque Sauce</p>
      </div>
      <div class="internal sides">
        <div class="overlay">
          <div class="center">
            <h2>Sides</h2>
          </div>
        </div>
      </div>
      <div class="internal">
        <p>Mexican Street Corn</p>
        <p>Green Bean Salad</p>
        <p>Summer Squash Salad with Lemon Citronette</p>
        <p>Boston Baked Beans</p>
        <p>Greek Pasta Salad</p>
        <p>Potato Salad</p>
        <p>Cole Slaw</p>
      </div>
    </div>
  </div>
</template>
<style>
.center h2 {
  font-family: "Raleway", sans-serif !important;
  font-weight: normal;
  color: antiquewhite;
}
.brisket {
  background-image: url("../assets/brisket.jpeg");
}
.sides {
  background-image: url("../assets/sides.jpeg");
}
.brisket,
.sides {
  width: 45vw;
  background-size: cover;
  background-position: 50% 50%;
  height: 40vh;
  -webkit-animation: filter-animation 5s infinite;
  padding: 1em;
  color: antiquewhite;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  border: 1px solid antiquewhite;
}

.center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -100%;
}
</style>
