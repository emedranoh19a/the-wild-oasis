import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  height: 100vh;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr; //26rem for the sidebar, and the rest for one element
  grid-template-rows: auto 1fr;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
