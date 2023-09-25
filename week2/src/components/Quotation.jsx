import React from "react";

export default function Quotation({ type, cont }) {
  return (
    <div class="px-3 border-solid border-black border-l-4">
      <p class={type}>{cont}</p>
    </div>
  );
}
