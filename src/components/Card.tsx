import React from 'react';

function Card() {
  return (
    <div>
      <div className="w-3/12 h-auto border border-black">
        <div className="border border-black p-2 m-2">
          <span className="mx-2">username</span>
          <span className="ml-6">Location</span>
        </div>
        <div>
          <img
            src="https://wallpapercave.com/indian-men-wallpapers"
            className="w-full h-auto"
          />
          <p>tag</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
