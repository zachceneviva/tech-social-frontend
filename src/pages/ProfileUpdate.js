import React, {useState, useEffect} from 'react'
import styles from './ProfileUpdate.module.scss'
import { userState } from '../recoil/atom'
import { useRecoilState } from 'recoil'
import ProfileHeader from "../components/Profile/ProfileHeader";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import {Form, Row, Col, Button } from "react-bootstrap"
import { updateProfile } from '../lib/ApiCalls';

export default function ProfileUpdate () {
    const [user, setUser] = useRecoilState(userState)
    const params = useParams()
    const navigate = useNavigate()
    const [fName, setFName] = useState(user.firstName)
    const [lName, setLName] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    const [city, setCity] = useState(user.city)
    const [state, setState] = useState(user.state)
    const [avatar, setAvatar] = useState('')
    const [coverPhoto, setCoverPhoto] = useState('')
    const [role, setRole] = useState(user.role)
    const [company, setCompany] = useState(user.company)
    const [github, setGithub] = useState(user.github)
    const [portfolio, setPortfolio] = useState(user.portfolio)

    useEffect(() => {
        if (user._id !== params.id) {
            navigate(`/profile/${params.id}`)
        }
    }, [])


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let payload = {
                avatar: avatar,
                coverPhoto: coverPhoto,
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
            let updatedUser = await updateProfile(
                params.id, 
                formdata
            )
            setUser(updatedUser)
            navigate(`/profile/${params.id}`)
        } catch (e) {
            console.log(e)
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
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <ProfileHeader user={user} />
            </div>
            <div className={styles.mainContentContainer}>
            <div className={styles.authForm}>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFName">
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control
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
                    
                        

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City *</Form.Label>
                            <Form.Control autoComplete="off" name="city" value={city} onChange={handleCity} placeholder="e.g. New York City"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State *</Form.Label>
                            <Form.Control autoComplete="off" name="state" value={state} onChange={handleState} placeholder="e.g. NY"/>
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
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAvatar">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control autoComplete="off" name="avatar"  accept='.jpg, .png, .jpeg' type="file" onChange={handleAvatar}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCoverPhoto">
                            <Form.Label>Cover Photo</Form.Label>
                            <Form.Control autoComplete="off" name="coverPhoto" accept='.jpg, .png, .jpeg' onChange={handleCoverPhoto} type="file"/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridGh">
                            <Form.Label>Github</Form.Label>
                            <Form.Control autoComplete="off" name="gh" value={github} onChange={handleGithub} placeholder="https://github.com/john-smith"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPort">
                            <Form.Label>Portfolio</Form.Label>
                            <Form.Control autoComplete="off" name="portfolio" value={portfolio} onChange={handlePortfolio} placeholder="https://johnsmith.com"/>
                        </Form.Group>
                    </Row>

                    

                    <Button className={styles.submitBtn}  type="submit">
                        Update
                    </Button>
                </Form>
            </div>
                <div style={{width: "100%", height: "100px"}}/>
            </div>
        </div>
    )
}