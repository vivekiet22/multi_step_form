import React, { useState ,createContext} from "react";
import SignUpInfo from "./SignUpInfo";
import WorkspaceInfo from "./WorkspaceInfo"
import OtherInfo from "./OtherInfo";
import LastPage from "./LastPage";
import Progress from "./Progress";
import { StyledEngineProvider } from '@mui/material/styles';
// import img from '../assets/img.png'
const UserContext = createContext()

function Form(props) {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    forWhom: "",
    
  });

  const FormTitles = ["Welcome! First things first...", "Let's set up a home for all your work", "How are you planning to use Eden?",""];
  const FormDesc = ["You can always change them later.","You can always Create another workspace later.","We'll streamline your setup experience accordingly.",""]
  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      
      return <WorkspaceInfo formData={formData} setFormData={setFormData} />;
    } else if (page===2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
    else{
      return <LastPage/>
    }
  };

  return (
    <div className="form">
      {/* <h1> */}
    <img className="image" src={process.env.PUBLIC_URL+"img.png"} />

      <div className="progressbar">
        <Progress page={page} setPage={setPage} />
      {/* <StyledEngineProvider injectFirst>
    </StyledEngineProvider> */}
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
          <p>{FormDesc[page]}</p>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          
          <button style={{width:"100%",backgroundColor:"rgb(100,50,205)"}}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("Welcome");
                console.log(formData);
              } else {
                
                }
                setPage((currPage) => currPage + 1);
              
            }}
          >
            {page === FormTitles.length - 1 ? "Launch Eden" : "Create Workspace"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
