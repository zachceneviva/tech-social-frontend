import React, {useState, useEffect} from "react";
import styles from "./CreateMeetup.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard";
import Create from "../components/Create/Create";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useNavigate } from "react-router";
import { createMeetup, getAllGroupsPage } from "../lib/ApiCalls";


export default function CreateMeetup () {
    const user = useRecoilState(userState)[0]
    const [meetupName, setMeetupName] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const [address, setAddress] = useState('')
    const [isBusy, setBusy] = useState(true)
    const [allGroups, setAllGroups] = useState([])
    const [date, setDate] = useState('')
    const[city, setCity] = useState('')
    const[state, setState] = useState('')
    const[zip, setZip] = useState('')
    const [group, setGroup] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetchAllGroups()
        setBusy(false)
    }, [isBusy])

    const fetchAllGroups = async () => {
        try {
            let res = await getAllGroupsPage()
            setAllGroups(res.groups)
        } catch (e) {
            console.log(e)
        }
    }

    const handleName = (e) => {
        setMeetupName(e.target.value)
    }

    const handleState = (e) => {
        setState(e.target.value)
    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const handleZip = (e) => {
        setZip(e.target.value)
    }

    const handleGroup = (e) => {
        setGroup(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }


    const handleMeetupCreate = async (e) => {
        try {
            e.preventDefault()
            let payload = {
                name: meetupName,
                date: date,
                description: description,
                photo: photo,
                group: group,
                address: address,
                zip: zip,
                city: city,
                state: state,
                creator: user._id,
            }
            let formdata = new FormData()
            for (const [key, value] of Object.entries(payload)) {
                formdata.append(key, value)
            }
            await createMeetup(formdata)
            navigate('/meetups')
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard location="/meetups/create"/>
                </div>
                <div className={styles.mainSection}>
                <div className={styles.smallScreen}>
                        <BannerProfileCard />
                    </div>
                    <div className={styles.create}>
                        {isBusy && !allGroups ? "Loading..." : <Create group={group} handleGroup={handleGroup} zip={zip} handleZip={handleZip} state={state} handleState={handleState} city={city} handleCity={handleCity} date={date} handleDate={handleDate}  groups={allGroups} type="meetup" meetupName={meetupName} description={description} photo={photo} address={address} handleName={handleName} handleDescription={handleDescription} handlePhoto={handlePhoto} handleAddress={handleAddress} handleSubmit={handleMeetupCreate}/>}
                    </div>
                        <div style={{width: "100%", height: "100px"}}/>
                </div>
            </div>
        </div>
    )
}