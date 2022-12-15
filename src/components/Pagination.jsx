import React, { useState } from "react";

export default function Pagination({ booking, art, tech, other }) {
  const handleDisplayArtProject = () => {
    console.log(art.value);
  };

  const handleDisplayTechProject = () => {};

  const handleDislayOtherProject = () => {};
  return (
    <div>
      <button
        className="button bg-emerald-500 p-2 px-4 text-white text-base hover:bg-amber-600"
        onClick={handleDisplayArtProject}
      >
        Art
      </button>
      <button
        className="button bg-emerald-600 p-2 px-4 text-white text-base hover:bg-amber-600"
        onClick={handleDisplayTechProject}
      >
        Tech
      </button>
      <button
        className="button bg-emerald-700 p-2 px-4 text-white text-base hover:bg-amber-600"
        onClick={handleDislayOtherProject}
      >
        Other
      </button>
    </div>
  );
}
