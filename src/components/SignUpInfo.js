import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <p className="name-placement"><b>Full Name</b></p>
      <input
        type="text"
        placeholder="Vivek Maddeshiya"
        value={formData.fullName}
        onChange={(event) =>
          setFormData({ ...formData, fullName: event.target.value })
        }
      />
      <p className="name-placement"><b>Display Name</b></p>
      <input
        type="text"
        placeholder="Vivek"
        value={formData.displayName}
        onChange={(event) =>
          setFormData({ ...formData, displayName: event.target.value })
        }
      />
     
    </div>
  );
}

export default SignUpInfo;
