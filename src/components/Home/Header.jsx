import React from 'react'
import './header.css'
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Good food choices are good investments.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic tempora temporibus possimus rerum necessitatibus est!</p>
                    <button>Order Now  <i className="fa-regular fa-bookmark"></i> </button>
                    <button>Learn More <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    </header>
  )
}

export default Header