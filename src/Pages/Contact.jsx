export default function Contact() {


    return (
        <div className="outlet-page fade-in">

            <div className="page-header">

                <h1>CONTACT</h1>

            </div>

            <div className="contact-content">

                <div className="container">

                    <form>
                        <h1>CONTACT DETAILS</h1>

                        <p>
                            <i class="fa-solid fa-location-dot"></i>
                            28 Green Tower, Street Name, <br />
                            New York City, USA
                        </p>

                        <p>
                            <i class="fa-solid fa-phone"></i>
                            +880 1234 123456 <br />
                            +880 1234 123456
                        </p>

                        <p>
                            <i class="fa-solid fa-envelope"></i>
                            company-email@gmail.com <br />
                            your-email@gmail.com
                        </p>

                        <h1>SEND MESSAGE</h1>

                        <input type="text" placeholder="Your name here..." />

                        <input type="text" placeholder="Your email here..." />

                        <textarea placeholder="Your comment here..." cols="30" rows="4"></textarea>

                        <button>SUBMIT MESSAGE</button>

                    </form>

                    <img src="./img/elements/map.png" alt="" />

                </div>

            </div>

        </div>
    )
}