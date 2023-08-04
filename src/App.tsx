import { Route, Routes } from "react-router-dom";
import React from "react";
import { NavbarContainer } from "./components/common/Navbar/Navbar";
import { useCookies } from "react-cookie";
import { NavbarImpl } from "./components/common/Navbar/NavbarImpl";
import { QueryClientProvider } from "./hooks/queries/QueryClientProvider";

const Main = React.lazy(() => import("./pages/main"));

function App() {
  const [cookies, _setCookie] = useCookies(["flow"]);
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
