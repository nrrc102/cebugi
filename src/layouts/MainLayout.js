import React from 'react';
import Footer from '../components/footer/Footer';
import Header from './../components/header';

export default function MainLayout(props) {
    return (
        <div className="fullHeight">
            <Header {...props}/>
            <div className="main">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}
