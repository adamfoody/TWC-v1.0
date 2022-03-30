import React, { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import  {AdminTable } from "./AdminTable.js";

const { apiOrigin = "http://localhost:3001" } = {
    "domain": "dev-a8av2d02.us.auth0.com",
    "clientId": "G3z6RKunTIbQH7fHfrb9PVan5kcgrUEk",
    "audience": "https://userapi/"
  }

;





const ExternalApiComponent = () => {
  const [state, setState] = useState({
    showResult: false,
    endpointMessage: "",
    error: null
  });

  const {
    loginWithPopup,
    getAccessTokenWithPopup,
    getAccessTokenSilently
  } = useAuth0();

  const handleConsent = async () => {
    try {
      await getAccessTokenWithPopup();
      setState({
        ...state,
        error: null
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error
      });
    }
  };

  const handleLoginAgain = async () => {
    try {
      await loginWithPopup();
      setState({
        ...state,
        error: null
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error
      });
    }

    await callPublicEndpoint();
  };

  const callProtectedEndpoint = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(`${apiOrigin}/api/protected`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const responseData = await response.json();
      setState({
        ...state,
        showResult: true,
        endpointMessage: responseData
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error
      });
    }
  };

  const callRoleBasedEndpoint = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token);
      const response = await fetch(`${apiOrigin}/api/role`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const responseData = await response.json();
      setState({
        ...state,
        showResult: true,
        endpointMessage: responseData
      });
      console.log("get to work admin boi");
      setShowOrders(true);
    } catch (error) {
      setState({
        ...state,
        error: error.error
      })
      console.log("GET OFF MY SERVER!!!!!!!!!");
    }
  };

  const callPublicEndpoint = async () => {
    try {
      const response = await fetch(`${apiOrigin}/api/public`);
      const responseData = await response.json();
      setState({
        ...state,
        showResult: true,
        endpointMessage: responseData
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error
      });
    }
  };


  const handle = (e, fn) => {
    e.preventDefault();
    fn();
  };

  useEffect(()=>{
    callRoleBasedEndpoint();

  },[])

  const [showOrders, setShowOrders] = useState(false);

  return (
    <>
      <div className="mb-5">
        {state.error === "consent_required" && (
          <Alert color="warning">
            You need to{" "}
            <a
              href="#/"
              className="alert-link"
              onClick={(e) => handle(e, handleConsent)}
            >
              consent to get access to users api
            </a>
          </Alert>
        )}

        {state.error === "login_required" && (
          <Alert color="warning">
            You need to{" "}
            <a
              href="#/"
              className="alert-link"
              onClick={(e) => handle(e, handleLoginAgain)}
            >
              log in again
            </a>
          </Alert>
        )}

        <h1>Admin Dashboard </h1>
        <p>
          Ping an external API by clicking one of the buttons below. The private
          APIs will call the external API using an access token, and the API
          will validate it using the API's audience value.
        </p>
        <div>
          <Button color="primary" className="mt-5" onClick={callPublicEndpoint}>
            Ping Public Endpoint (Externally facing)
          </Button>
        </div>
        <div>
          <Button
            color="primary"
            className="mt-5"
            onClick={callProtectedEndpoint}
          >
            Ping Protected Endpoint (Any authenticated user)
          </Button>
          <div>
            <Button
              color="primary"
              className="mt-5"
              onClick={callRoleBasedEndpoint}
            >
              Ping Role Based Endpoint (Admin user (Check orders maybe))
            </Button>
          </div>
        </div>
        <div>
          <Button
            color="primary"
            className="mt-5"
            onClick={callRoleBasedEndpoint}
          >
            Ping Role Based Endpoint
          </Button>
        </div>
      </div>

      <div className="result-block-container">
        {state.showResult && (
          <div className="result-block" data-testid="api-result">
            <h6 className="muted">Result</h6>
            {state.endpointMessage.msg}
          </div>
        )}

        {showOrders && 
        
        <AdminTable/>
        
        }

      </div>
    </>
  );
};

export default ExternalApiComponent;