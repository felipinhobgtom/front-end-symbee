import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <section className="section-two">
      <div className="liquify-section2">
        <img src="./public/liquify.svg" />
      </div>

      <div className="info">
        <div className="broche">
          <img src="./broche.svg" width={"100%"} height={"100%"} />
        </div>

        <div className="why">
          <h1>
            <strong>Porque SymBee?</strong>
          </h1>
          <h3>Assim como em uma colmeia, a <strong>SymBee</strong> desenvolve a mutualidade</h3>
          <img src="./crumpled paper.png" />
          <img src="./notebook.png" class="caderno" />
        </div>
      </div>

      <div className="liquify-section2">
        <img src="./public/lower-liquify-section2.svg" />
      </div>
    </section>
  );
}

export default Section2;
