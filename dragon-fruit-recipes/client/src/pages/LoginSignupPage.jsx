import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { validateEmail, checkPassword } from '../utils/helpers';


export default function AuthPage(){

    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        signupUsername: "", signupEmail: "", signupPassword: "", loginUsername: "",  loginPassword: ""
    })

    function clearForms(){
        setFormData({ signupUsername: "", signupEmail: "", signupPassword: "", loginUsername: "", loginPassword: "" })
    }


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState("");

    function handleInputChange(event){
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
            clearForms()
        } catch(err){
            console.log(err)
        }
    // display a message to the user
    }

    async function handleLogin(event){
        event.preventDefault()
        if (!username) {
            setErrorMessage('Username is required');
            return;
          } if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
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
        }
    }
    return (
        <div>
            <h2>Signup Form</h2>
            <form onSubmit={handleSignup}>
                <label>Username</label>
                <input type="text" name="signupUsername" value={formData.signupUsername} onChange={handleInputChange} />
                <label>Email</label>
                <input type="text" name="signupEmail" value={formData.signupEmail} onChange={handleInputChange} />
                <label>Password</label>
                <input type="password" name="signupPassword" value={formData.signupPassword} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
            <h2>Login Form</h2>
                <form onSubmit={handleLogin}>
                <label>Username</label>
                <input type="text" name="loginUsername" value={formData.loginUsername} onChange={handleInputChange} />
                <label>Password</label>
                <input type="password" name="loginPassword" value={formData.loginPassword} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
            <div>
                { message.length > 0 && (
                    <p>{message}</p>
                )}
            </div>
        </div>
    )
}