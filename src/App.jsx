import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function App() {

    const [openMenu, setOpenMenu] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    return (
        <div className="full-page">

            <header className="header">

                <button onClick={() => (openMenu === false ? setOpenMenu(true) : setOpenMenu(false))}>
                    <span style={openMenu === true ? {transform: 'rotate(45deg) translateX(7px) translateY(5px)', backgroundColor: '#C8A165'} : {}}></span>
                    <span style={openMenu === true ? {opacity: '0'} : {}}></span>
                    <span style={openMenu === true ? {transform: 'rotate(135deg) translateX(-6px) translateY(5px)', backgroundColor: '#C8A165'} : {}}></span>
                </button>

                <Link><img src="./img/elements/logo.png" alt="" /></Link>

                <button id="cart" onClick={() => (openCart === true ? setOpenCart(false) : setOpenCart(true))}>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>3</p>
                    {openCart === true && 
                    <div className="cart-details fade-in">

                    <header>
                        <p>You have <span>03 items</span> in your shopping bag</p>
                    </header>

                    <main>
                        <div>
                            <img src="./img/home-page/product01.jpg" alt="" />
                                <div>
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <p>Price: $ 100.00</p>
                                    <p>Qty: 02</p>
                                </div>
                                <button><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            <div>
                                <img src="./img/home-page/product02.jpg" alt="" />
                                <div>
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <p>Price: $ 300.00</p>
                                    <p>Qty: 01</p>
                                </div>
                                <button><i class="fa-solid fa-xmark"></i></button>
                            </div>
                        </main>

                        <footer>

                            <h1>TOTAL $500.00</h1>

                        </footer>

                        <footer>

                            <button>VIEW CART</button>
                            <button>CHECK OUT</button>

                        </footer>

                    </div>}
                </button>

            </header>

            {openMenu === true && 
            <ul className="nav">

                <li><NavLink to={'/'}>HOME</NavLink></li>
                <li><NavLink to={'/products'}>PRODUCTS</NavLink></li>
                <li><NavLink to={'/about'}>ABOUT</NavLink></li>
                <li><NavLink to={'/contact'}>CONTACT</NavLink></li>
                <li><NavLink to={'/auth'}>REGISTRATION</NavLink></li>

            </ul>}

            <Outlet />

            <footer className="footer">

                <div className="container">

                    <div>
                        <h1>CONTACT US</h1>
                        <p><span>Address:</span>28 Green Tower, Street Name, <br /> New York City, USA</p>
                        <p><span>Cell-Phone:</span> 012345 - 123456789</p>
                        <p><span>Email:</span> your-email@gmail.com</p>
                    </div>

                    <div>
                        <h1>ACCOUNTS</h1>
                        <p><i class="fa-regular fa-circle-dot"></i> My Account</p>
                        <p><i class="fa-regular fa-circle-dot"></i> My Wishlist</p>
                        <p><i class="fa-regular fa-circle-dot"></i> My Cart</p>
                        <p><i class="fa-regular fa-circle-dot"></i> Sign In</p>
                        <p><i class="fa-regular fa-circle-dot"></i> Check Out</p>
                    </div>

                    <div>
                        <h1>SHIPPING</h1>
                        <p><i class="fa-regular fa-circle-dot"></i> New Products</p>
                        <p><i class="fa-regular fa-circle-dot"></i> Top Sellers</p>
                        <p><i class="fa-regular fa-circle-dot"></i> Manufactirers</p>
                        <p><i class="fa-regular fa-circle-dot"></i> Suppliers</p>
                        <p><i class="fa-regular fa-circle-dot"></i> Specials</p>
                    </div>

                    <div>
                        <h1>EMAIL NEWSLATTERS</h1>
                        <form>
                            <input type="text" placeholder="Email Address..." />
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>

                </div>

            </footer>

            <div className="reserved">
                <div className="container">

                    <p>© All Rights Reserved. Coded by <a href="https://www.yasiralakus.com.tr">yasiralakus</a></p>

                    <div>
                        <img src="./img/elements/payment01.jpg" alt="" />
                        <img src="./img/elements/payment02.jpg" alt="" />
                        <img src="./img/elements/payment03.jpg" alt="" />
                        <img src="./img/elements/payment04.jpg" alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}