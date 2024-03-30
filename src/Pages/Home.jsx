import { useState } from "react";
import HomeBrandsSlider from "../Components/Home-Brands-Slider";
import HomeDiscountSlider from "../Components/Home-Discount-Slider";
import HomeHeroSlider from "../Components/Home-Hero-Slider";
import { Link } from "react-router-dom";

export default function Home() {

    const [homePageOnline, setHomePageOnline] = useState(1);

    return (
        <div className="outlet-page">

            <HomeHeroSlider />

            <div className="home-page-top">

                <div className="container">

                    <div>
                        <img src="./img/home-page/03.jpg" alt="" />
                        <span>New</span>
                        <h3>$50.00</h3>
                        <div>
                            <a href="">Product Name</a>
                            <p>Furniture</p>
                        </div>
                        <button>Buy now</button>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="./img/home-page/04.jpg" alt="" />
                        <h1>DESIGN BY HURST MODERN <span>2024</span></h1>
                    </div>

                </div>

            </div>

            <div className="home-page-featured-products">

                <div className="container">

                    <h1>Featured Products</h1>

                    <main>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product01.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product02.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product03.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product04.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                    </main>

                </div>

            </div>

            <div className="home-page-discount">

                <div className="container">

                    <HomeDiscountSlider />

                </div>

            </div>

            <div className="home-page-online">

                <div className="container">

                    <h1>Purchase Online on Hurst</h1>

                    <header>
                        <button style={homePageOnline === 1 ? {color: '#C8A165'} : {}} onClick={() => (setHomePageOnline(1))}>New Arrivals</button>
                        <button style={homePageOnline === 2 ? {color: '#C8A165'} : {}} onClick={() => (setHomePageOnline(2))}>Best Seller</button>
                        <button style={homePageOnline === 3 ? {color: '#C8A165'} : {}} onClick={() => (setHomePageOnline(3))}>Most View</button>
                        <button style={homePageOnline === 4 ? {color: '#C8A165'} : {}} onClick={() => (setHomePageOnline(4))}>Discount</button>
                    </header>

                    {homePageOnline === 1 && 
                    <main className="fade-in">

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product04.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <p>New</p>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product08.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product09.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product10.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p>New</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product05.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product06.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product07.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p>New</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product01.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>
                    </main>}

                    {homePageOnline === 2 && 
                    <main className="fade-in">

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product06.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <p>New</p>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product05.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product13.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product12.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p>New</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product09.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product11.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product08.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p>New</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product10.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>
                    </main>}

                    {homePageOnline === 3 && 
                    <main className="fade-in">

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product13.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <p>New</p>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product10.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product12.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product06.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p>New</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product09.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product04.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product11.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p>New</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product08.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>
                    </main>}

                    {homePageOnline === 4 && 
                    <main className="fade-in">

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product13.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <p>New</p>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product10.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product12.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product06.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p>New</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product01.jpg" alt="" />

                            <h3>$56.20</h3>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>

                        <Link to={'/product-details'} className="product-card">

                            <img src="./img/home-page/product11.jpg" alt="" />

                            <h3>$56.20</h3>
                            <p>New</p>
                            <h1>DUMMY PRODUCT NAME</h1>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                            <div>
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </Link>
         
                    </main>}

                </div>

            </div>

            <div className="home-page-brands">

                <div className="container">

                    <HomeBrandsSlider />

                </div>

            </div>

        </div>
    )
}