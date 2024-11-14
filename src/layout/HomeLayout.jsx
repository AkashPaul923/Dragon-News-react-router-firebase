import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            {/* Header Section */}
            <header>
                <Header></Header>
            </header>
            {/* Latest  News Section*/}
            <section>
                <LatestNews></LatestNews>
            </section>
        </div>
    );
};

export default HomeLayout;