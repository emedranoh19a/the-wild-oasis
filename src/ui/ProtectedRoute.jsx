import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load the authenticated user.
  const { isLoading, isAuthenticated, fetchStatus } = useUser();
  //2. If there is NO authenticated user, redirect to the login.
  useEffect(() => {
    if (!isLoading && !isAuthenticated && fetchStatus !== "fetching")
      navigate("/login");
  }, [isAuthenticated, isLoading, navigate, fetchStatus]);
  //TODO when the user has logged out once, it is difficult to log in again.
  //3. While loading, show a spinner.
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. If there IS a user, render the application itself.
  if (isAuthenticated) return children;
}

ProtectedRoute.propTypes = { children: propTypes.any };
