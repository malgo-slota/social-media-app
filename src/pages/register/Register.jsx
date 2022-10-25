import './register.scss';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
        <div className="container">
            <div className="left">
                <div>
                    <h1>Hello,</h1>
                    <h2>we are so<span>_</span>social</h2>
                </div>
                <p>The fastest growing community of people that care about others.<br/>Socialize by creating a post, comment and like posts by others, or create an event and meet up in real life.</p>
                <div>
                    <p>Already a user?</p>
                    <Link to="/login">
                      <button>Log in</button>
                    </Link>
                </div>
            </div>
            <div className="right">
                <h1>Create an account</h1>
                <form>
                    <div>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input type="text" 
                                id="username"
                                />
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" 
                                id="email"
                                />
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" 
                                id="password"
                                />
                    </div>
                    <div>
                        <label htmlFor="password-confirm">
                            Repeat Password
                        </label>
                        <input type="password" 
                                id="password-confirm"
                                />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;