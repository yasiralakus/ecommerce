import { useState } from "react"

export default function Details() {

    const [slide, setSlide] = useState(1);
    const [count, setCount] = useState(1);

    return (
        <div className="details-page">

            <div className="page-header">

                <h1>PRODUCT</h1>

            </div>

            <div className="product-details">

                <div className="container">

                    <img src={`./img/detail-page/imgbig0${slide}.jpg`} alt="" />

                    <div>
                        <header>

                            <div>
                                <h1>DUMMY PRODUCT NAME</h1>
                                <h3>$ 56.20</h3>
                            </div>

                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </span>

                        </header>

                        <main>

                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humou or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>

                            <div className="details-color">
                                <h6>Color</h6>
                                <span style={{backgroundColor: '#FFA07A'}}></span>
                                <span style={{backgroundColor: '#E9967A'}}></span>
                                <span style={{backgroundColor: '#C38B4B'}}></span>
                                <span style={{backgroundColor: '#FE5858'}}></span>
                                <span style={{backgroundColor: '#00B2EE'}}></span>
                            </div>

                            <div className="details-size">
                                <h6>Size</h6>
                                <p>M</p>
                                <p>S</p>
                                <p>L</p>
                                <p>SL</p>
                                <p>XL</p>
                            </div>

                            <div className="details-buttons">
                                <button onClick={() => (count === 1 ? '' : setCount(count - 1))}><i class="fa-solid fa-minus"></i></button>
                                <p>{count}</p>
                                <button onClick={() => (setCount(count + 1))}><i class="fa-solid fa-plus"></i></button>
                            </div>

                            <div className="details-add-cart">
                                <button><i class="fa-regular fa-heart"></i></button>
                                <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                <button><i class="fa-solid fa-rotate"></i></button>
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                            </div>

                        </main>

                        <footer>
                            <img onClick={() => (setSlide(1))} src="./img/detail-page/img01.jpg" />                            
                            <img onClick={() => (setSlide(3))} src="./img/detail-page/img03.jpg" />                           
                            <img onClick={() => (setSlide(4))} src="./img/detail-page/img04.jpg" />                           
                        </footer>
                    </div>

                </div>

            </div>

        </div>
    )
}