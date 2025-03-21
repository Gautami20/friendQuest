import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
    const [info, setInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            navigate("/find"); // Redirect if already logged in
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        });
    };

    const handleLogin = async () => {
        const { email, password } = info;
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:9002/login", info, {
    headers: { "Content-Type": "application/json" },
});


            const { success, jwtToken, email, name, profilePicture, message } = res.data;

            if (success) {
                // Save user data in localStorage
                localStorage.setItem("token", jwtToken);
                localStorage.setItem("user", JSON.stringify({ email, name, profilePicture }));

                window.dispatchEvent(new Event("storage"));
                window.location.reload();

                navigate('/find'); // Redirect user
            } else {
                alert(message || "Login failed. Please try again.");
            }
        } catch (err) {
            console.error("Login Error:", err);
            alert("Something went wrong. Please check your credentials and try again.");
        }
    };

    return (
        <main className='login-main'>
            <div className='login'>
                <div className='login-text'>
                    <h1>Login</h1>
                    <Link to="/register" className='login-text2'>Sign Up</Link> to continue
                </div>

                <div className='login-form'>
                    <div className="form-group col mb-3">
                        <label className="form-label">EMAIL</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={info.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group col mb-3">
                        <label className="form-label">PASSWORD</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={info.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="login-button">
                    <button onClick={handleLogin}>Log In</button>
                </div>
            </div>
        </main>
    );
}

export default Login;
