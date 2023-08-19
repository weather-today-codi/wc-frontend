import { Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { QueryClientProvider } from "@/hooks/queries/QueryClientProvider";
import WeatherPage from "@/pages/weather";
import { SuspenseFallback } from "@/components/common/SuspenseFallback/index";

const Main = React.lazy(() => import("@/pages/main"));

function App() {
  return (
    <QueryClientProvider>
      <Routes>
        <Route index element={<Main />} />
        <Route
          element={<Suspense fallback={<SuspenseFallback />}></Suspense>}
        />
        <Route path="weather" element={<WeatherPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
