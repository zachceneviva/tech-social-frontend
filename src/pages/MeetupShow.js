import React, {useState, useEffect} from "react";
import styles from "./MeetupShow.module.scss"
import axios from "axios";
import { useParams } from "react-router";
import MeetupHeader from "../components/MeetupShow/MeetupHeader";
import About from "../components/GroupShow/About";
import Organizer from "../components/MeetupShow/Organizer";
import MeetupDescription from "../components/MeetupShow/MeetupDescription";


export default function MeetupShow () {
    const [foundMeetup, setFoundMeetup] = useState(null)
    const[isBusy, setBusy] = useState(true)
    const params = useParams()

    useEffect(() => {
        console.log("Fetching...")
        axios.get(`http://localhost:4000/api/v1/techonnect/meetups/${params.id}`).then(res => setFoundMeetup(res.data.meetup))
        setBusy(false)
    }, [isBusy])

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
                    {/* {isBusy && !foundMeetup ? null : (
                        <About
                            callBack={callBack}
                            meetup={foundMeetup}
                            buttonJoin="Attend"
                            buttonLeave="Can't Go"
                        />
                    )} */}
                </div>
            </div>
        </div>
    );
}