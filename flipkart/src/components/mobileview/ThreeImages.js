import React from "react";

import "./ThreeImages.css";

function ThreeImages(props) {
  const {threeImagesList} = props;

  return (
    <>
      <div className="img-list">
        {threeImagesList.map((item, idx) => {
          return <img src={item.image} alt="image"/>;
        })}
      </div>
    </>
  );
}

export default ThreeImages;
