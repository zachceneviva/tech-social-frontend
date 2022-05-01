import React, {useState, useEffect} from 'react';
import styles from './Login.module.scss'
import {Form, Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { userState } from '../recoil/atom';
import { useRecoilState } from 'recoil';
import { FaConnectdevelop } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { getUserProfile, login } from '../lib/ApiCalls';

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, [])


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            let res = await login(
                {
                email: email, 
                password: password
                }
            )

            if (res.status === 'failed') {
                setLoading(false)
                return alert(res.message)
            }

            let resUser = await getUserProfile()
            setUser(resUser.user)
            setLoading(false)
            navigate('/home')
        } catch(e) {
            console.log(e)
            setLoading(false)
        }
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
                            {loading ? <Spinner /> : 'Login'}
                        </Button>
                    </Form>
                    <p>Don't have an account? <Link to="/register">Sign up here!</Link></p>
                </div>
            </div>
        </div>
    );
}