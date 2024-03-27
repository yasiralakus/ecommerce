import { useState } from "react"

export default function Products() {

    const [openCategories, setOpenCategories] = useState(false);
    const [openColor, setOpenColor] = useState(false);
    const [openSize, setOpenSize] = useState(false);

    return (
        <div className="outlet-page fade-in">

            <div className="page-header">

                <h1>SHOP</h1>

            </div>

            <div className="products-page-product-list">

                <div className="container">

                    <header>

                        <div>
                            <button onClick={() => (openCategories === true ? setOpenCategories(false) : setOpenCategories(true))}>Categories</button>
                            <button onClick={() => (openColor === true ? setOpenColor(false) : setOpenColor(true))}>Color</button>
                            <button onClick={() => (openSize === true ? setOpenSize(false) : setOpenSize(true))}>Size</button>
                        </div>

                        <p>Showing 01-09 of 17 Results</p>

                        {openCategories === true && 
                        <div className="products-filter-categories">
                            <header>
                                <h1>CATEGORIES</h1>
                            </header>
                            <ul>
                                <li>Chair</li>
                                <ul style={{paddingLeft: '20px'}}>
                                    <li>T-Shirts</li>
                                    <li>Striped Shirts</li>
                                    <li>Half Shirts</li>
                                    <li>Formal Shirts</li>
                                    <li>Bilazers</li>
                                </ul>
                                <li>Furniture</li>
                                <ul style={{paddingLeft: '20px'}}>
                                    <li>Men Bag</li>
                                    <li>Shoes</li>
                                    <li>Watch</li>
                                    <li>T-Shirts</li>
                                </ul>
                            </ul>
                        </div>}

                        {openColor === true && 
                        <div className="products-filter-color">
                            <header>
                                <h1>COLOR</h1>
                            </header>
                            <main>
                                <div>
                                    <span style={{backgroundColor: '#FFA07A'}}></span>
                                    <p>Light Salmon</p>
                                    <h6>12</h6>
                                </div>

                                <div>
                                    <span style={{backgroundColor: '#E9967A'}}></span>
                                    <p>Dark Salmon</p>
                                    <h6>20</h6>
                                </div>

                                <div>
                                    <span style={{backgroundColor: '#FE5858'}}></span>
                                    <p>Tomato</p>
                                    <h6>59</h6>
                                </div>

                                <div>
                                    <span style={{backgroundColor: '#00B2EE'}}></span>
                                    <p>Deep Sky Blue</p>
                                    <h6>45</h6>
                                </div>

                                <div>
                                    <span style={{backgroundColor: '#00EEB3'}}></span>
                                    <p>Electric Purple</p>
                                    <h6>78</h6>
                                </div>

                                <div>
                                    <span style={{backgroundColor: '#8DC63F'}}></span>
                                    <p>Atlantis</p>
                                    <h6>10</h6>
                                </div>

                                <div>
                                    <span style={{backgroundColor: '#C38B4B'}}></span>
                                    <p>Deep Lilac</p>
                                    <h6>15</h6>
                                </div>
                            </main>
                        </div>}

                        {openSize === true && 
                        <div className="products-filter-size">
                            <header>
                                <h1>SIZE</h1>
                            </header>
                            <main>
                                <button>M</button>
                                <button>S</button>
                                <button>L</button>
                                <button>SL</button>
                                <button>XL</button>
                            </main>
                        </div>}

                    </header>

                    <main>

                        <div className="product-card">

                            <img src="./img/home-page/product01.jpg" alt="" />

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

                        </div>

                        <div className="product-card">

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

                        </div>

                        <div className="product-card">

                            <img src="./img/home-page/product03.jpg" alt="" />

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

                        </div>

                        <div className="product-card">

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

                        </div>

                        <div className="product-card">

                            <img src="./img/home-page/product05.jpg" alt="" />

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

                        </div>

                        <div className="product-card">

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

                        </div>

                        <div className="product-card">

                            <img src="./img/home-page/product07.jpg" alt="" />

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

                        </div>

                        <div className="product-card">

                            <img src="./img/home-page/product08.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>

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

                        </div>

                        <div className="product-card">

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

                        </div>

                        <div className="product-card">

                            <img src="./img/home-page/product10.jpg" alt="" />

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

                        </div>

                        <div className="product-card">

                            <img src="./img/home-page/product11.jpg" alt="" />

                            <h3>$56.20</h3>

                            <h1>DUMMY PRODUCT NAME</h1>

                            <p style={{backgroundColor: '#C87065'}}>Sold Out</p>

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

                        </div>

                        <div className="product-card">

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

                        </div>

                    </main>

                    <footer>

                        <button><i class="fa-solid fa-left-long"></i></button>
                        <button style={{color: '#000', textDecoration: 'underline', fontWeight: '900'}}>01</button>
                        <button>02</button>
                        <button>03</button>
                        <button><i class="fa-solid fa-right-long"></i></button>

                    </footer>

                </div>

            </div>

        </div>
    )
}