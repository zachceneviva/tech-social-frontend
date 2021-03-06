import React, { useState } from "react";
import styles from "./Signup.module.scss";
import { Form, Button, Row, Col } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import { registerNewUser } from "../lib/ApiCalls";
import Spinner from "../components/Spinner";

export default function Signin(props) {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [avatar, setAvatar] = useState('')
    const [cover, setCoverPhoto] = useState('')
    const [role, setRole] = useState('')
    const [company, setCompany] = useState('')
    const [github, setGithub] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const navigate = useNavigate(),
            [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const payload = {
                password: password,
                avatar: avatar,
                coverPhoto: cover,
                firstName: fName,
                lastName: lName,
                email: email,
                city: city,
                state: state,
                role: role,
                company: company,
                github: github,
                portfolio: portfolio,
            }
            let formdata = new FormData()
            for (const [key, value] of Object.entries(payload)) {
                formdata.append(`${key}`, value)
            }
            let res = await registerNewUser(formdata)
            if (res.status !== 201) {
                setLoading(false)
                return alert(res.message)
            }
            setLoading(false)
            navigate('/')
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    const handleFName = (e) => {
        setFName(e.target.value)
    }
    const handleLName = (e) => {
        setLName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleCity = (e) => {
        setCity(e.target.value)
    }
    const handleState = (e) => {
        setState(e.target.value)
    }

    const handleAvatar = (e) => {
        setAvatar(e.target.files[0])
    }

    const handleCoverPhoto = (e) => {
        setCoverPhoto(e.target.files[0])
    }

    const handleRole= (e) => {
        setRole(e.target.value)
    }

    const handleCompany = (e) => {
        setCompany(e.target.value)
    }

    const handleGithub = (e) => {
        setGithub(e.target.value)
    }

    const handlePortfolio = (e) => {
        setPortfolio(e.target.value)
    }

    return (
        <div className={styles.mainAuthBody}>
            <div className={styles.authHeader}>
                <h1>Sign Up</h1>
                <hr />
            </div>
            <div className={styles.authForm}>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFName">
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleFName}
                                name="firstName"
                                placeholder="e.g. John"
                                autoComplete="off"
                                value={fName}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLName">
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control
                            type="text"
                            onChange={handleLName}
                                name="lastName"
                                placeholder="e.g. Smith"
                                autoComplete="off"
                                value={lName}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email *</Form.Label>
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
                            <Form.Label>Password *</Form.Label>
                            <Form.Control
                            onChange={handlePassword}
                                name="password"
                                type="password"
                                placeholder="Password"
                                autoComplete="off"
                                value={password}
                            />
                        </Form.Group>

                        <Form.Group
                            controlId="formGridConfirmPassword"
                            className="mb-3"
                        >
                            <Form.Label>Confirm Password *</Form.Label>
                            <Form.Control
                            onChange={handleConfirmPassword}
                                type="password"
                                placeholder="Password"
                                autoComplete="off"
                                value={confirmPassword}
                            />
                        </Form.Group>

                        

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City *</Form.Label>
                            <Form.Control autoComplete="off" name="city" value={city} onChange={handleCity} placeholder="e.g. New York City" type="text"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State *</Form.Label>
                            <Form.Control autoComplete="off" name="state" value={state} onChange={handleState} placeholder="e.g. NY" type="text"/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridRole">
                        <Form.Label>Role *</Form.Label>
                        <Form.Control
                            onChange={handleRole}
                            placeholder="e.g. Software Engineer"
                            name="role"
                            autoComplete="off"
                            value={role}
                            type="text"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridCompany">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                        onChange={handleCompany}
                            placeholder="e.g. Google"
                            name="company"
                            autoComplete="off"
                            value={company}
                            type="text"
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAvatar">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control type="file" name="avatar" accept=".png, .jpg, .jpeg" onChange={handleAvatar}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCoverPhoto">
                            <Form.Label>Cover Photo</Form.Label>
                            <Form.Control type="file" name="coverPhoto" accept=".png, .jpg, .jpeg" onChange={handleCoverPhoto} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridGh">
                            <Form.Label>Github</Form.Label>
                            <Form.Control autoComplete="off" type="text" name="gh" value={github} onChange={handleGithub} placeholder="https://github.com/john-smith"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPort">
                            <Form.Label>Portfolio</Form.Label>
                            <Form.Control autoComplete="off" name="portfolio" type="text" value={portfolio} onChange={handlePortfolio} placeholder="https://johnsmith.com"/>
                        </Form.Group>
                    </Row>

                    

                    <Button className={styles.submitBtn}  type="submit">
                        {loading ? <Spinner /> : 'Submit'}
                    </Button>
                </Form>
            </div>
            <div style={{width: "100%", height: "100px"}}/>
        </div>
    );
}
