import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <Link href="/">
            Home
        </Link>
        <Link href="/about">
            About Dennis
        </Link>
        <Link href="/resume">
            Resume
        </Link>
  </nav>
  );
}