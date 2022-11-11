import React from "react";
import ConnectModal from "./components/ConnectModal";
// import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <div className="app-header">
        <ConnectModal />
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;
