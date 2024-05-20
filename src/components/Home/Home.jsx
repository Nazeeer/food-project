import React from 'react'
import NavBarr from '../Navs/NavBarr';
import Header from './Header';
import './Home.css';
import prideImg from '../../assets/image/1.png';
import ingredients from '../../assets/image/2.png';
import Data from '../../Data';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import item1 from'../../assets/image/1.jpg';
import item2 from'../../assets/image/2.jpg';

import Footer from '../Footer/Footer';
const Home = () => {
    const blogitem = Data.map((item ,i)=>{
        console.log(item.image);
        return(
            <div key={i} className="col-md-4">
                <div className="box">
                <img src={item.image} alt="" />
                <h4 style={{marginLeft:'10px'}}>{item.title}</h4>
                <span style={{marginLeft:'15px'}}>{item.time}</span>
                <h6>{item.price}</h6>
                <button><a href="#">Oreder Now</a></button>
                </div>
            </div>
        )
    })
  return (
    <div>
        <NavBarr/>
        <Header/>
        <section className='numbers'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>+1287</h2>
                        <h6>Saving</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>+1058</h2>
                        <h6>photos</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>+1469</h2>
                        <h6>rockets</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>+1357</h2>
                        <h6>globes</h6>
                    </div>
                </div>
            </div>
        </section>
        <section className='pride'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={prideImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>We pride purselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla, rem dolorem aspernatur eaque accusantium.</p>
                        <button><a href="#">Learn More <i className="fa-solid fa-arrow-right"></i></a></button>
                    </div>
                </div>
            </div>
        </section>
        <section className='ingredients'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio atque, at consectetur iure doloribus officiis!</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>Purus a odio finibus bibendum.</li>
                        </ul>
                        <button><a href="#">Learn More <i className="fa-solid fa-arrow-right"></i> </a></button>
                    </div>
                    <div className="col-md-6">
                        <img src={ingredients} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className='paralex'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quas fugiat aut necessitatibus aliquid quos.</p>
                        <a href="#"><i className="fa-solid fa-arrow-right"></i> Watch Our Story</a>
                    </div>
                </div>
            </div>
        </section>

        <section className='blogs'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>Explore our Foods</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam nemo ratione provident, eligendi sunt ab tenetur dolorum ipsum quod pariatur necessitatibus similique a reiciendis quaerat facere ipsam alias ex! Repellat facilis odio id laborum?</p>
                    </div>
                </div>
                    <div className="row">
                        {blogitem}
                    </div>
            </div>
        </section>

        <section className='slider'>
            <div className="container">
                <div className="row">
                    <div className="col-lr-12 col-md-12">
                        <h2>Testimoials</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img src={item1} />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src={item2} />
                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src={item1} />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </div>
  )
}

export default Home