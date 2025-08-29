import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";

export const App = () => {
	return <div className="bg-black text-white min-h-[100vh] font-[Poppins] py-10 px-20" >
  <NavBar/>
    <Hero/>
  </div>;
};
