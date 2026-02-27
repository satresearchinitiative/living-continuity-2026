'use client';

import * as React from "react";
import "../../app/living-continuity/welcomeModal.scss";

const LivingContinuityButton = React.memo(({ onClick }) => {
  return (
    <div className="living_continuity_button" onClick={onClick}>
      <div className="black_box">
        <h1 className="main_text">LIVING CONTINUITY</h1>
      </div>
      <span className="enter_text">enter</span>
    </div>
  );
});

LivingContinuityButton.displayName = 'LivingContinuityButton';

export default LivingContinuityButton;

