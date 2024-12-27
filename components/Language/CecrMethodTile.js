"use client";
import React from "react";

const CecrMethodTile = ({
  bgColor,
  isOpened,
  title,
  firstlevelheading,
  firstleveldesc,
  secondlevelheading,
  secondleveldesc,
}) => {
  const [show, setShow] = React.useState(isOpened || false);
  return (
    <div
      className="px-md-5 py-md-4 p-2 mb-2"
      style={{
        borderRadius: "6px",
        backgroundColor: bgColor,
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        onClick={() => setShow(!show)}
      >
        <p className="cecr-title m-0">
          <b>{title}</b>
        </p>
      </div>
      {show && (
        <div>
          <p className="cecr-title mt-3">
            <b>{firstlevelheading}</b>
            <br />
            {firstleveldesc}
            <br />
            <br />
            <b>{secondlevelheading}</b>
            <br />
            {secondleveldesc}
          </p>
        </div>
      )}
    </div>
  );
};

export default CecrMethodTile;
