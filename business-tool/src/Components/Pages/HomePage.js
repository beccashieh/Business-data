import React from "react";
import Jumbotron from "../Jumbotron";
import BusinessList from "../BusinessList";

const HomePage = () => {
    return(
        <div className="container">
            <Jumbotron />
            <BusinessList />
        </div>
    )
}


export default HomePage;