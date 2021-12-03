import React, {useState, useEffect} from 'react';
import styles from './Login.module.scss'
import {Form, Button} from "react-bootstrap"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userState } from '../recoil/atom';
import { useRecoilState } from 'recoil';
import { FaConnectdevelop } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState)

    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/users/login", {email: email, password: password})
        .then(res => res.data)
        .then((response) => {
            localStorage.setItem("uid", response.token);
        });
        await axios.get("https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/users/profile", {
            headers: {authorization: `Bearer ${localStorage.uid}`},
        })
        .then(res => res.data)
        .then(res => {
            setUser(res.user)
            navigate('/home')
        })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className={styles.home}>
            <div className={styles.intro}>
                <h2><FaConnectdevelop /></h2>
                <h1>Welcome to Techonnect</h1>
                <p>A platform for tech professionals of all backgrounds to connect, collaborate, and share. Login or sign up to get started. We are glad you're here!</p>
            </div>
            <div className={styles.mainAuthBody}>
                <div className={styles.authHeader}>
                    <h1>Login</h1>
                    <hr />
                </div>
                <div className={styles.authForm}>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-4" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            onChange={handleEmail}
                                placeholder="Enter Email"
                                type="email"
                                name="email"
                                autoComplete="off"
                                value={email}
                            />
                        </Form.Group>

                            <Form.Group className="mb-4" controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    onChange={handlePassword}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    value={password}
                                />
                            </Form.Group>

                        <Button className={styles.submitBtn} type="submit">
                            Login
                        </Button>
                    </Form>
                    <p>Don't have an account? <Link to="/register">Sign up here!</Link></p>
                </div>
            </div>
        </div>
    );
}