import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { validateEmail, checkPassword } from '../utils/helpers';
import "../style/login.css"


export default function AuthPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        signupUsername: "", signupEmail: "", signupPassword: "", loginUsername: "", loginPassword: ""
    })

    const [message, setMessage] = useState("");

    function clearForms() {
        setFormData({ signupUsername: "", signupEmail: "", signupPassword: "", loginUsername: "", loginPassword: "" })
    }


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    function handleInputChange(event) {
        setMessage("")
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    async function handleSignup(event) {
        event.preventDefault()
        try {
            const response = await fetch("/api/users", {
                method: 'POST',
                body: JSON.stringify({
                    username: formData.signupUsername,
                    email: formData.signupEmail,
                    password: formData.signupPassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json()
            if(result.status === "success"){
                setMessage("Signup successful")
            } else {
                throw new Error()
            }
            clearForms()
        } catch(err) {
            console.log(err)
            setMessage("We could not sign you up with the credentials provided")
        }
    }

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const response = await fetch("/api/users/login", {
                method: 'POST',
                body: JSON.stringify({
                    username: formData.loginUsername,
                    password: formData.loginPassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json()
            console.log(result)
            clearForms()
            if( result.status === 'success' ){
                navigate("/user");
            } else {
                throw new Error()
            }
        } catch(err){
            console.log(err)
            setMessage("We could not log you in with the credentials provided")
        }
    }

    return (
        <>
            <div className="logSignForms">
                <div className="signupForm">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <div className="fieldSction">
                            <label>Username</label>
                            <br />
                            <input type="text" name="signupUsername" value={formData.signupUsername} onChange={handleInputChange} />
                        </div>
                        <br />
                        <div className="fieldSction">
                            <label>Email</label>
                            <br />
                            <input type="text" name="signupEmail" value={formData.signupEmail} onChange={handleInputChange} />
                        </div>
                        <br />
                        <div className="fieldSction">
                            <label>Password</label>
                            <br />
                            <input type="password" name="signupPassword" value={formData.signupPassword} onChange={handleInputChange} />
                        </div>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div id="logForm">
                    <h2>Log In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="fieldSction">
                            <label>Username</label>
                            <br />
                            <input type="text" name="loginUsername" value={formData.loginUsername} onChange={handleInputChange} />
                        </div>
                        <br />
                        <div className="fieldSction">
                            <label>Password</label>
                            <br />
                            <input type="password" name="loginPassword" value={formData.loginPassword} onChange={handleInputChange} />
                        </div>
                        <br />
                        <button type="submit" >Submit</button>
                    </form>
                </div>
            </div>
            <div className="errorMessageLogin">
                {message.length > 0 && (
                    <p>{message}</p>
                )}
            </div>
        </>
    )
}