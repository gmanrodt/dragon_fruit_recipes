import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../style/login.css"


export default function AuthPage() {

    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        signupUsername: "", signupEmail: "", signupPassword: "", loginUsername: "", loginPassword: ""
    })

    function clearForms() {
        setFormData({ signupUsername: "", signupEmail: "", signupPassword: "", loginUsername: "", loginPassword: "" })
    }

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
                setMessage("Signup successful");
                window.location.href = "/user";
            } else {
                console.log(result.msg);
                setErrorMessage("We could not sign you up with the credentials provided");
            }
            clearForms()
        } catch(err) {
            console.log("And the err is: ",err)
            setErrorMessage("We could not sign you up with the credentials provided");
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
            if(!result.msg ){
                setMessage("Login successful");
                window.location.href = "/user";
            } else {
                console.log(result.msg);
                setErrorMessage("We could not log you in with the credentials provided");
            }
        } catch(err){
            console.log(err)
            setErrorMessage("We could not log you in with the credentials provided")
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
            <div className="errorMessageLogin info">
                {message && (<p>{message}</p>)}
            </div>
            <div className="errorMessageLogin danger">
                {errorMessage && (<p>{errorMessage}</p>)}
            </div>
        </>
    )
}