import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="App">
        <header className="banner">
          <h1>Welcome to <span style={{ color: "rgb(234, 152, 0)" }}>Sargam Musical Store</span></h1>
          <p>
            No.1 store for all indian classical and <br /> western instruments
          </p>
        </header>
        <main>
          <section className="content">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ultrices felis sit amet urna scelerisque, sit amet
              rutrum ante vehicula.
            </p>
          </section>
          <section className="content">
            <h2>Our Services</h2>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
