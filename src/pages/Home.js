import React, {useState, useEffect} from "react"
import styles from "./Home.module.scss"
import CreatePost from "../components/Feed/CreatePost"
import Post from "../components/Feed/Post"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import PeopleBanner from "../components/Feed/PeopleBanner"
import Meetup from "../components/Feed/Meetup"
import GroupsBanner from "../components/Feed/GroupsBanner"
import axios from "axios"

export default function Home () {
    const [postContent, setPostContent] = useState('')
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        fetchData()
        console.log('this is fetching my data')
    },[])

    const fetchData = () => {
        axios.get('http://localhost:4000/api/v1/techonnect/posts').then((res) => setAllPosts(res.data.posts))
    }

    const handlePost = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/v1/techonnect/posts',
        {content: postContent}).then( res => setAllPosts([res.data.post, ...allPosts]))
        setPostContent('')
    }

    const handleChange = (e) => {
        setPostContent(e.target.value)
    }

    const post = allPosts.map((post, idx) => {
        return <Post post={post} key={idx} />
    })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard/>
                    <PeopleBanner />
                </div>
                <div className={styles.mainSection}>
                    <CreatePost handlePost={handlePost} text={postContent} handleChange={handleChange}/>
                    {post ? post : "No posts to show!"}
                    <div style={{width: "100%", height: "100px"}}/>
                </div>
                <div className={styles.rightSection} >
                    <Meetup title="Top Meetups"/>
                    <GroupsBanner title="Top Groups"/>
                </div>
            </div>
        </div>
    )
}