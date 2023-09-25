import React from "react";

export default function YellowBox({ type, cont }) {
  return (
    <div class="h-11 px-3 bg-yellow-200 rounded">
      <p class={type}>{cont}</p>
    </div>
  );
}
