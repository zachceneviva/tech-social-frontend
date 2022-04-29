import React, {useState, useEffect} from "react";
import styles from "./MeetupShow.module.scss"
import axios from "axios";
import { useParams } from "react-router";
import MeetupHeader from "../components/MeetupShow/MeetupHeader";
import MeetupDetails from "../components/MeetupShow/MeetupDetails";
import Organizer from "../components/MeetupShow/Organizer";
import MeetupDescription from "../components/MeetupShow/MeetupDescription";
import {getMeetup} from '../lib/ApiCalls'


export default function MeetupShow () {
    const [foundMeetup, setFoundMeetup] = useState(null)
    const[isBusy, setBusy] = useState(true)
    const params = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    useEffect(() => {
        fetchMeetup()
        setBusy(false)
    }, [isBusy])

    const fetchMeetup = async () => {
        try {
            let meetup = await getMeetup(params.id)
            setFoundMeetup(meetup)
        } catch (e) {
            console.log(e)
        }
    }

    const callBack = () => {
        setBusy(true)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                {foundMeetup === null ? (
                    "Loading..."
                ) : (
                    <MeetupHeader meetup={foundMeetup} />
                )}
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection}>
                    {foundMeetup === null ? "Loading..." : <Organizer meetup={foundMeetup} />}
                </div>
                <div className={styles.mainSection}>
                    {foundMeetup === null  ? "Loading..." : <MeetupDescription meetup={foundMeetup} />}
                </div>
                <div className={styles.rightSection}>
                    {foundMeetup === null ? null : (
                        <MeetupDetails
                            callBack={callBack}
                            meetup={foundMeetup}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}