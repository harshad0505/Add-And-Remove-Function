import React from "react";

export default function PhotoShow({ photos }) {
  return (
    //Here Displaying the Whole Content 
    <>
      <div className="container" key={photos.id}>
        <img
          className="img"
          src={photos.photo}
          style={{ width: `${photos.width}` + "px" }}
        />
      </div>
    </>
  );
}
