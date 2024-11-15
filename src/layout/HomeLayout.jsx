import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftNavBar from "../components/component-layout/LeftNavBar";
import RightNavBar from "../components/component-layout/RightNavBar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto font-poppins">
        {/* Header Section */}
        <header>
            <Header></Header>
            {/* Latest  News Section*/}
            <section>
                <LatestNews></LatestNews>
            </section>
        </header>
        <nav className="mt-6 mb-20">
            <NavBar></NavBar>
        </nav>
        <main className="grid md:grid-cols-4 gap-5">
            <aside>
                <LeftNavBar></LeftNavBar>
            </aside>
            <section className="col-span-2">
                <Outlet></Outlet>
            </section>
            <aside>
                <RightNavBar></RightNavBar>
            </aside>
        </main>
    </div>
  );
};

export default HomeLayout;
