import React from "react";

const ShuttleAnimation = () => {
  return (
    <div className="shuttle-field">

      {/* LEFT → RIGHT */}
      <div className="shuttle shuttle-one">
        <div className="shuttle-body">
          <span></span>
        </div>
      </div>

      {/* RIGHT → LEFT */}
      <div className="shuttle shuttle-two">
        <div className="shuttle-body">
          <span></span>
        </div>
      </div>

      {/* DIAGONAL */}
      <div className="shuttle shuttle-three">
        <div className="shuttle-body">
          <span></span>
        </div>
      </div>

      {/* FAST */}
      <div className="shuttle shuttle-four">
        <div className="shuttle-body">
          <span></span>
        </div>
      </div>

      {/* FLOAT */}
      <div className="shuttle shuttle-five">
        <div className="shuttle-body">
          <span></span>
        </div>
      </div>

    </div>
  );
};

export default ShuttleAnimation;