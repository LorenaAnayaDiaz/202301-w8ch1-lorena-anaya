import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <>
      <div className="heading"></div>
      <h1 className="heading__title">Star Wars Robots</h1>
      <main>
        <Outlet />
      </main>
      <footer className="layout__footer">
        Made with <i className="fa-solid fa-heart"></i> by Henry and Lori
      </footer>
    </>
  );
};

export default MainLayout;
