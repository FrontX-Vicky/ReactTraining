// import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom";

function Home(){
    return(
        <div>
            <nav>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <h1>My Website</h1>
        </div>
    )
}

export function About(){
    return (
        <div>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            <h1>About Us</h1>
            <Outlet/>
        </div>
    );
}

export function History() {
    return (
        <div>
            <h1>Our History</h1>
        </div>
    );
}

export function Contact(){
    return (
        <div>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            <h1>Conatct Us</h1>
        </div>
    );
}


export function ReactRouter() {
  return (<Home />)
}

