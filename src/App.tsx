import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navbar, NavbarContainer } from "./components/common/Navbar/Navbar";
import { useCookies } from "react-cookie";
import { NavbarImpl } from "./components/common/Navbar/NavbarImpl";
import { QueryClientProvider } from "./hooks/queries/QueryClientProvider";

const Main = React.lazy(() => import("./pages/main"));

function App() {
  const [cookies, setCookie] = useCookies(["flow"]);
  cookies.flow === "start" && NavbarContainer.setComponent(NavbarImpl);
  return (
    <QueryClientProvider>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
