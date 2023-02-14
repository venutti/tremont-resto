import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";

import useViewHeight from "./hooks/useViewHeight";

import { Route } from "wouter";

export default function App() {
  useViewHeight();

  return (
    <div className="flex flex-col min-h-100vh overflow-x-hidden">
      <Navbar />
      <Route path="/" component={HomePage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/contact" component={ContactPage} />
    </div>
  );
}
