import "./App.css";
import {Home, List, Login, New, Single} from "./pages";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {userInputs, productInputs} from "./formSource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  > 
            <Route index element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="users">
              <Route index element={<List/>}></Route>
              <Route path=":userId" element={<Single/>}></Route>
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />}></Route>
            </Route>
            <Route path="products">
              <Route index element={<List/>}></Route>
              <Route path=":productId" element={<Single/>}></Route>
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
