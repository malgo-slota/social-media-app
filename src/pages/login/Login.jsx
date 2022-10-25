import './login.scss';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
        <div className="container">
            <div className="left">
                <div>
                    <h1>Hello,</h1>
                    <h2>we are so<span>_</span>social</h2>
                </div>
                <p>The fastest growing community of people that care about others.<br/>Socialize by creating a post, comment and like posts by others, or create an event and meet up in real life.</p>
                <div>
                    <p>So.. do you want to join us?</p>
                    <Link to="/register">
                        <button>Create an account</button>
                    </Link>
                    
                </div>
            </div>
            <div className="right">
                <h1>Welcome back!</h1>
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
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" 
                                id="password"
                                />
                    </div>
                    <button>Log in</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;