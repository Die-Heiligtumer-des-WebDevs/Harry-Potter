import { Outlet } from "react-router-dom";

// import Header from "./components/Navbar.jsx";

function App() {
  return (
    <>
         {/* <Header /> */}
      <main>
        
        <Outlet />
      </main>
    </>
  );
}

export default App;
