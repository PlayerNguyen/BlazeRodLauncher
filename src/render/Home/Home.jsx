import React from "react";
import HomeView from "./HomeView";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div
      className="flex flex-row 
    h-full w-full fixed top-0 left-0"
    >
      <Sidebar />

      <HomeView />
    </div>
  );
}

export default Home;
