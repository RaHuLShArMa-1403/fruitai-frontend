import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Chat from "./components/Chat";
import FAQCreate from "./components/CRUD/FAQCreate";
import FAQDelete from "./components/CRUD/FAQDelete";
import FAQEdit from "./components/CRUD/FAQEdit";
import FAQList from "./components/CRUD/FAQList";
import Home from "./components/Home";
import Login from "./components/Login";
import Translator from "./components/Translator";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faqs" element={<FAQList />} />
        <Route path="/faqs/create" element={<FAQCreate />} />{" "}
        <Route path="/faqs/edit/:id" element={<FAQEdit />} />{" "}
        <Route path="/faqs/delete/:id" element={<FAQDelete />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
