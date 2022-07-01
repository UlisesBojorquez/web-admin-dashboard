import "./App.css";
import {Home, List, Login, New, Single} from "./pages";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {userInputs, productInputs} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {darkMode} = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext);

  const RequieredAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/"  > 
            <Route index element={<RequieredAuth><Home/></RequieredAuth>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="users">
              <Route index element={<RequieredAuth><List/></RequieredAuth>}></Route>
              <Route path=":userId" element={<RequieredAuth><Single/></RequieredAuth>}></Route>
              <Route path="new" element={<RequieredAuth><New inputs={userInputs} title="Add New User" /></RequieredAuth>}></Route>
            </Route>
            <Route path="products">
              <Route index element={<RequieredAuth><List/></RequieredAuth>}></Route>
              <Route path=":productId" element={<RequieredAuth><Single/></RequieredAuth>}></Route>
              <Route path="new" element={<RequieredAuth><New inputs={productInputs} title="Add New Product" /></RequieredAuth>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
