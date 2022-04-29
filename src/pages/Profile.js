import React, {useEffect, useState} from "react";
import styles from "./Profile.module.scss";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Post from "../components/Feed/Post";
import PeopleBanner from "../components/Feed/PeopleBanner";
import GroupsBanner from "../components/Feed/GroupsBanner";
import axios from "axios";
import MeetupBanner from "../components/Feed/MeetupBanner";
import { useParams } from "react-router";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import { getUserConnections, getUserGroups, getUserMeetups, getUser, getUserPosts } from "../lib/ApiCalls";

export default function Profile () {
    const [allPosts, setAllPosts] = useState([])
    const [foundUser, setFoundUser] = useState(null)
    const [meetups, setMeetups] = useState([])
    const [groups, setGroups] = useState([])
    const [busy, setBusy] = useState(true)
    const[connectUser, setConnectUser] = useState(null)
    const params = useParams()
    const user = useRecoilState(userState)[0]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        fetchData()
        console.log('this is fetching my data')
        setBusy(false)
    },[busy, params.id])

    const fetchData = async () => {
        try {
            let [allPosts, foundUser, groups, meetups, connections] = await Promise.all([
                getUserPosts(params.id),
                getUser(params.id),
                getUserGroups(params.id),
                getUserMeetups(params.id),
                getUserConnections()
            ])

            setAllPosts(allPosts)
            setFoundUser(foundUser)
            setGroups(groups)
            setMeetups(meetups)
            setConnectUser(connections)
        } catch (e) {
            console.log(e)
        }
    }
    
    const callBack = () => {
        setBusy(true)
    }
    
    const post = allPosts.map((post, idx) => {
        return <Post post={post} key={idx} />
    })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                {foundUser === null || busy ? "Loading" : <ProfileHeader user={foundUser} callBack={callBack}/>}
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    {foundUser === null ? null : <GroupsBanner groups={groups} title={`${foundUser.firstName}'s Groups`}/>}
                    { connectUser === null ? null :
                    foundUser._id === user._id ? <PeopleBanner user={connectUser}/> : null}
                </div>
                <div className={styles.mainSection}>
                    {allPosts.length > 0 ? post : <h2>No Posts to Show</h2>}
                    <div style={{width: "100%", height: "100px"}}/>
                </div>
                <div className={styles.rightSection} >
                    {foundUser === null ? null : <MeetupBanner meetups={meetups} title={`${foundUser.firstName}'s Meetups`}/>}
                </div>
            </div>
        </div>
    )
}