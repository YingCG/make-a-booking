import React from "react";

export default function Pagination({showArt}) {

  return (
    <div>
      <button
        className="button bg-emerald-500 p-2 px-4 text-white text-base hover:bg-amber-600" onClick={showArt}
      >
        Art
      </button>
      <button
        className="button bg-emerald-600 p-2 px-4 text-white text-base hover:bg-amber-600"
        
      >
        Tech
      </button>
      <button
        className="button bg-emerald-700 p-2 px-4 text-white text-base hover:bg-amber-600"
      >
        Other
      </button>
    </div>
  );
}
