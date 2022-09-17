import React from "react";

function WorkspaceInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <p className="name-placement"><b>Workspace Name</b></p>
      <input
        type="text"
        placeholder="First Name..."
        value={formData.workspaceName}
        onChange={(e) => {
          setFormData({ ...formData, workspaceName: e.target.value });
        }}
      />
      <p className="name-placement"><b>Workspace URL</b></p>
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.workspaceUrl}
        onChange={(e) => {
          setFormData({ ...formData, workspaceUrl: e.target.value });
        }}
      />
      
    </div>
  );
}

export default WorkspaceInfo;
