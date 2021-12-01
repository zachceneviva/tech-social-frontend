import React, {useState} from "react";
import styles from "./CreateMeetup.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard";
import Create from "../components/Create/Create";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useNavigate } from "react-router";


export default function CreateMeetup () {
    const user = useRecoilState(userState)[0]
    const [meetupName, setMeetupName] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState(null)
    const [coverPhoto, setCoverPhoto] = useState(null)
    const navigate = useNavigate()


    const handleName = (e) => {
        setMeetupName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePhoto = (e) => {
        setPhoto(e.target.value)
    }

    const handleCoverPhoto = (e) => {
        setCoverPhoto(e.target.value)
    }


    const handleMeetupCreate = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/v1/techonnect/meetups', {
            name: meetupName,
            description: description,
            photo: photo,
            coverPhoto: coverPhoto,
            creator: user._id,
        }).then(res => console.log(res))
        navigate('/meetups')
    }

    return(
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard location="/meetups/create"/>
                </div>
                <div className={styles.mainSection}>
                    <div className={styles.create}>
                        <Create type="meetup" meetupName={meetupName} description={description} photo={photo} coverPhoto={coverPhoto} handleName={handleName} handleDescription={handleDescription} handlePhoto={handlePhoto} handleCoverPhoto={handleCoverPhoto} handleSubmit={handleMeetupCreate}/>
                    </div>
                        <div style={{width: "100%", height: "100px"}}/>
                </div>
            </div>
        </div>
    )
}