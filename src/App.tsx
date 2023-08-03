import { Container } from "./components/layouts/Container";
import { SuspenseImage } from "./components/common/SuspenseFallback";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Navbar } from "./components/common/Navbar";

const Main = React.lazy(() => import("./pages/main"));

const AppMainContainer = styled.main`
  flex: 1 1 auto;
  padding: 4.9rem 2.4rem 2.4rem;
  overflow: hidden;
`;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <AppMainContainer>
        <RouterProvider router={router} />
      </AppMainContainer>
      <Navbar />
    </Container>
  );
}

export default App;
