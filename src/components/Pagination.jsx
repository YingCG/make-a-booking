import React, { useState } from "react";

export default function Pagination(content) {
  return (
    <div>
      <button
        className="button bg-emerald-500 p-2 px-4 text-white text-base hover:bg-amber-600"
        onPageChange={content.displayArtProject}
      >
        Art
      </button>
      <button
        className="button bg-emerald-600 p-2 px-4 text-white text-base hover:bg-amber-600"
        onPageChange={content.displayTechProject}
      >
        Tech
      </button>
      <button
        className="button bg-emerald-700 p-2 px-4 text-white text-base hover:bg-amber-600"
        onPageChange={content.displayOtherProject}
      >
        Other
      </button>
    </div>
  );
}
