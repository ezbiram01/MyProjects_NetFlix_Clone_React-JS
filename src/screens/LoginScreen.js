import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img
                    className="loginScreen_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen_button">
                    Sign in
                    </button>
                <div className="loginScreen_gradient" />
            </div>

            <div className="loginScreen_body">
                {signIn ? (<SignInScreen />) : (
                    <>
                        <h1>Unlimited Films, TV programs and more.</h1>
                        <h2>Watch anywhere. Cancel any time.</h2>
                        <h3>
                            Ready to watch? Enter your email to creat or restart your membership.
                        </h3>
                        <div className="loginScree_input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className="loginScreen_getStarted">
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default LoginScreen
