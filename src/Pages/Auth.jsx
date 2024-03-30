export default function Auth() {


    return (
        <div className="auth-page">

            <div className="page-header">

                <h1>REGISTRATION</h1>

            </div>

            <div className="authentication">

                <div className="container">

                    <form action="">

                        <h1>REGISTERED CUSTOMERS</h1>

                        <p>If you have an account with us, Please login!</p>

                        <input type="text" placeholder="Email here..." />

                        <input type="text" placeholder="Password" />

                        <a href="">Forget your password?</a>

                        <button>LOGIN</button>


                    </form>

                    <form action="">

                        <h1>NEW CUSTOMERS</h1>

                        <p>If you have an account with us, Please login!</p>

                        <input type="text" placeholder="Your name here..." />

                        <input type="text" placeholder="Email address here..." />

                        <input type="text" placeholder="Password..." />

                        <input type="text" placeholder="Confirm Password..." />

                        <button>REGISTER</button>

                    </form>

                </div>

            </div>
        </div>
    )
}