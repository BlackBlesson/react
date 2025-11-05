import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        username: "blesson",
        password: "123456789"
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        if (data.username === "blesson" && data.password === "123456789") {
            alert("Login Successful");
            navigate('/admin');
        } else {
            alert("Invalid Username and Password");
        }
    }

    return (
        <>
            <div className='login'>
                <h2 className='text-center text-warning '>Admin Login</h2>
                    <hr className="border border-warning w-25 mx-auto" />

                <div className='container'>
                    <div className='container bg-light justify-content-center border border-warning w-50 p-5 rounded-3 mt-5'>
                        <form onSubmit={handleSubmit}>
                            <div className='container row'>
                                <div className="mb-4 mt-4 row">
                                    <label htmlFor="username" className="col-5 col-form-label text-dark">Username</label>
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            name='username'
                                            className="form-control border border-dark"
                                            id="username"
                                            onChange={handleChange}
                                            value={data.username}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='container row'>
                                <div className="mb-4 row">
                                    <label htmlFor="inputPassword" className="col-5 col-form-label text-dark">Password</label>
                                    <div className="col-6">
                                        <input
                                            type="password"
                                            name='password'
                                            className="form-control border border-dark"
                                            id="inputPassword"
                                            placeholder="Enter Password"
                                            onChange={handleChange}
                                            value={data.password}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-warning mt-3 d-block mx-auto px-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;