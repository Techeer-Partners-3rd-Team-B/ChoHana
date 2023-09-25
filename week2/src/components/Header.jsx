import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div class="h-14 border-b-4 px-20 flex items-center z-50">
        <ul class="flex items-center">
          <Link to="/">
            <li class="text-2xl font-medium">💻</li>
          </Link>
          <p class="w-10"></p>
          <Link to="/week1">
            <li class="text-2xl font-medium">React-Component</li>
          </Link>
          <p class="w-10"></p>
          <Link to="/week2">
            <li class="text-2xl font-medium">React-Router</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
