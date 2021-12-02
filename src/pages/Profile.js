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

export default function Profile () {
    const [allPosts, setAllPosts] = useState([])
    const [foundUser, setFoundUser] = useState(null)
    const [meetups, setMeetups] = useState([])
    const [groups, setGroups] = useState([])
    const [busy, setBusy] = useState(true)
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
        await axios.get(`http://localhost:4000/api/v1/techonnect/posts/${params.id}`).then((res) => setAllPosts(res.data.posts));
        await axios.get(`http://localhost:4000/api/v1/techonnect/users/${params.id}`, {
            headers: {authorization: `Bearer ${localStorage.uid}`},
        }).then((res) => res.data).then(res => setFoundUser(res.user))
        await axios.get(`http://localhost:4000/api/v1/techonnect/groups/profile/${params.id}`).then((res) => setGroups(res.data.groups));
        await axios.get(`http://localhost:4000/api/v1/techonnect/meetups/profile/${params.id}`).then((res) => setMeetups(res.data.meetups));
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
                    { foundUser === null ? null :
                    foundUser._id === user._id ? <PeopleBanner /> : null}
                </div>
                <div className={styles.mainSection}>
                    {post}
                    <div style={{width: "100%", height: "100px"}}/>
                </div>
                <div className={styles.rightSection} >
                    {foundUser === null ? null : <MeetupBanner meetups={meetups} title={`${foundUser.firstName}'s Meetups`}/>}
                </div>
            </div>
        </div>
    )
}