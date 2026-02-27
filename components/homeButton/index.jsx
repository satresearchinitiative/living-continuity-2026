'use client';

import * as React from "react";
import Link from "next/link";
import "./homeButton.scss";

export default function HomeButton() {
  return (
    <div className="home_button_wrapper">
      <Link href="/" className="home_button">
        Living Continuity
      </Link>
    </div>
  );
}

