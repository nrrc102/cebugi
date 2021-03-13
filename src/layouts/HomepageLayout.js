import React from 'react';
import Header from './../components/header';
import Footer from './../components/footer/Footer';
export default function HomepageLayout(props) {
    return (
        <div className="fullHeight">
            <Header {...props}/>
            {props.children}
            <Footer/>

        </div>
    )
}
