import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <div>
      <span>
      <img className="image" src={process.env.PUBLIC_URL+"left.png"} />
      </span>
      <span>
      <img className="image" src={process.env.PUBLIC_URL+"right.png"} />
      </span>
      </div>
      {/* <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      /> */}
      {/* <input
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      /> */}
    </div>
  );
}

export default OtherInfo;
