import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { validateEmail, checkPassword } from '../utils/helpers';
import "../style/login.css"


export default function AuthPage(){

    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        signupUsername: "", signupEmail: "", signupPassword: "", loginUsername: "",  loginPassword: ""
    })

    const [message, setMessage] = useState("");

    function clearForms(){
        setFormData({ signupUsername: "", signupEmail: "", signupPassword: "", loginUsername: "", loginPassword: "" })
    }


    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    

    function handleInputChange(event){
        setMessage("")
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    async function handleSignup(event){
        event.preventDefault()
        if (!username) {
            setErrorMessage('Username is required');
            return;
          } if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
          } if (!password) {
            setErrorMessage('Password is required');
            return;
          } 
        try {
            const response = await fetch("/api/user", {
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
              }
            clearForms()
        } catch(err){
            console.log(err)
            setMessage("We could not sign you up with the credentials provided")
        }
    // display a message to the user
    }

    async function handleLogin(event){
        event.preventDefault()
        if (!username) {
            setErrorMessage('Username is required');
            return;
          } if (!checkPassword(password)) {
            setErrorMessage('Password does not match');
            return;
          }
        try {
            const response = await fetch("/api/user/login", {
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
        clearForms()
        if( result.status === 'success' ){
            navigate("/");
        } else {
            setMessage("There's a problem with logging you in.")
        }
        } catch(err){
            console.log(err.message)
            setMessage("We could not log you in with the credentials provided")
        }
    }
    return (
        <div className="logSignForms">
            <div className="signupForm">
                <h2>Sign Up Form</h2>
                <form onSubmit={handleSignup}>
                    <div className="fieldSction">
                        <label>Username</label>
                        <input type="text" name="signupUsername" value={formData.signupUsername} onChange={handleInputChange} />
                    </div>
                    <br/>
                    <div className="fieldSction">
                        <label>Email</label>
                        <input type="text" name="signupEmail" value={formData.signupEmail} onChange={handleInputChange} />
                    </div>
                        <br/>
                    <div className="fieldSction">
                        <label>Password</label>
                        <input type="password" name="signupPassword" value={formData.signupPassword} onChange={handleInputChange} />
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div ClassName="loginForm">
                <h2>Login Form</h2>
                <form onSubmit={handleLogin}>
                    <div className="fieldSction">
                        <label>Username</label>
                        <input type="text" name="loginUsername" value={formData.loginUsername} onChange={handleInputChange} />
                    </div>
                        <br/>
                    <div className="fieldSction">
                        <label>Password</label>
                        <input type="password" name="loginPassword" value={formData.loginPassword} onChange={handleInputChange} />
                    </div>
                        <br/>
                        <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                { message.length > 0 && (
                    <p>{message}</p>
                )}
            </div>
        </div>
    )
}