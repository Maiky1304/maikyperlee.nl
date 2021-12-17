import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import DrawerMenu from "./components/core/DrawerMenu";
import { HomePage, ContactPage, AboutMePage, WorkPage } from "./pages";
import MobileNavbar from "./components/core/MobileNavbar";

function App() {
  return (
    <BrowserRouter>
      <DrawerMenu>
        <MobileNavbar />
      </DrawerMenu>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
