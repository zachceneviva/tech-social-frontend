import React, {useState} from 'react';
import styles from './Login.module.scss'
import {Form, Button} from "react-bootstrap"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userState } from '../recoil/atom';
import { useRecoilState } from 'recoil';

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState)

    


    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:4000/api/v1/techonnect/users/login", {email: email, password: password})
        .then(res => res.data)
        .then((response) => {
            console.log(response);
            localStorage.setItem("uid", response.token);
        });
        await axios.get("http://localhost:4000/api/v1/techonnect/users/profile", {
            headers: {authorization: `Bearer ${localStorage.uid}`},
        })
        .then(res => res.data)
        .then(res => {
            setUser(res.user)
            navigate('/')
        })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className={styles.mainAuthBody}>
            <div className={styles.authHeader}>
                <h1>Login</h1>
                <hr />
            </div>
            <div className={styles.authForm}>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formGridEmail">
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

                        <Form.Group className="mb-3" controlId="formGridPassword">
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
            </div>
        </div>
    );
}