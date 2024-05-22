import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./Pages/Homepage/Homepage";
import AboutUs from "./Pages/About us/AboutUs";
import Store from "./Pages/Store/Store";
import NotFound from "./Pages/404/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
