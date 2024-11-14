import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto">
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
            <aside>left aside</aside>
            <section className="col-span-2 border-2">main</section>
            <aside>right aside</aside>
        </main>
    </div>
  );
};

export default HomeLayout;
