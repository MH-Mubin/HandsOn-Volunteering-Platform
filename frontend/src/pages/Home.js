import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div><div className="home-container">
        <header className="home-header">
          HandsOn - A Community-Driven Social Volunteering Platform
        </header>
  
        <main className="home-main">
          <h1>Make a Difference Today</h1>
          <p>
            Join thousands of volunteers in making the world a better place. Sign up to participate in meaningful social causes.
          </p>
  
          <div className="home-buttons">
            <Link to="/signup" className="signup-button">Sign Up</Link>
            <Link to="/events" className="events-button">Explore Events</Link>
          </div>
        </main>
  
        <footer className="home-footer">
          © {new Date().getFullYear()} HandsOn. All rights reserved.
        </footer>
      </div>
            <button onClick={handleLogout}>Logout</button>
            <ToastContainer />
        </div>
    )
}

export default Home
