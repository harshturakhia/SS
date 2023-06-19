import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Pages
import { HomePage, LoginPage, SignupPage } from "./routes/routes";

function App() {
  return (
    <HomePage />
  );
}

export default App;
