/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Main from "./components/main";
import Navbar from "./components/navbar";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main />}>
            {/* <Route path="/" element={<Navbar />}> */}

            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
