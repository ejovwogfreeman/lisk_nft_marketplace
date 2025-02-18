import { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import { Web3Context } from "./contexts/nftContext";
import GetNFTs from "./pages/GetNFTs";

function ProtectedRoute({ element }) {
  const { account } = useContext(Web3Context);
  return account ? element : <Navigate to="/" replace />;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Protected Profile Route */}
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          path="/get_nfts"
          element={<ProtectedRoute element={<GetNFTs />} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
