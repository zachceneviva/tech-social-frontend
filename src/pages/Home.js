import React, {useState, useEffect} from "react"
import styles from "./Home.module.scss"
import CreatePost from "../components/Feed/CreatePost"
import Post from "../components/Feed/Post"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import PeopleBanner from "../components/Feed/PeopleBanner"
import GroupsBanner from "../components/Feed/GroupsBanner"
import axios from "axios"
import MeetupBanner from "../components/Feed/MeetupBanner"
import { userState } from "../recoil/atom"
import { useRecoilState } from "recoil";
import AllGroups from "./AllGroups"

export default function Home () {
    const [postContent, setPostContent] = useState('')
    const [allPosts, setAllPosts] = useState([])
    const [postImage, setPostImage] = useState('')
    const [postGh, setPostGh] = useState('')
    const [postLink, setPostLink] = useState('')
    const [imageUrl, setImageUrl] = useState('none')
    const [ghUrl, setGhUrl] = useState('none')
    const [linkUrl, setLinkUrl] = useState('none')
    const [isBusy, setBusy] = useState(true)
    const [groups, setGroups] = useState([])
    const user = useRecoilState(userState)[0]


    useEffect(() => {
        fetchData()
        setBusy(false)
        console.log('this is fetching my data')
    },[isBusy])

useEffect(() => {
    axios.get('http://localhost:4000/api/v1/techonnect/groups/home').then((res) => setGroups(res.data.groups))
}, [])


    const fetchData = () => {
        axios.get('http://localhost:4000/api/v1/techonnect/posts').then((res) => setAllPosts(res.data.posts))
    }

    const handlePost = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/api/v1/techonnect/posts',
        {content: postContent, image: `https://${postImage}`, github: `https://github.com/${postGh}`, link: `https://${postLink}`, user: user}).then( res => setAllPosts([res.data.post, ...allPosts]))
        setPostContent('')
        setPostImage('')
        setPostGh('')
        setPostLink('')
        setImageUrl('none')
        setGhUrl('none')
        setLinkUrl('none')
        setBusy(true)
    }

    const handleChange = (e) => {
        setPostContent(e.target.value)
    }

    const handleImageChange = (e) => {
        setPostImage(e.target.value)
    }

    const handleGhChange = (e) => {
        setPostGh(e.target.value)
    }

    const handleLinkChange = (e) => {
        setPostLink(e.target.value)
    }

    const showImageUrl = () => {
        if (imageUrl === "none") setImageUrl("initial")
        else setImageUrl('none')
    }

    const showGhUrl = () => {
        if (ghUrl === "none") setGhUrl("initial")
        else setGhUrl('none')
    }

    const showLinkUrl = () => {
        if (linkUrl === "none") setLinkUrl("initial")
        else setLinkUrl('none')
    }

    
    const post = allPosts.map((post, idx) => {
        return <Post post={post} key={idx}/>
    })


    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard />
                    <PeopleBanner />
                </div>
                <div className={styles.mainSection}>
                    <CreatePost handlePost={handlePost} text={postContent} handleChange={handleChange} postImage={postImage} postGh={postGh} postLink={postLink} handleImageChange={handleImageChange} handleGhChange={handleGhChange} handleLinkChange={handleLinkChange} showGhUrl={showGhUrl} showImageUrl={showImageUrl} showLinkUrl={showLinkUrl} imageUrl={imageUrl} ghUrl={ghUrl} linkUrl={linkUrl}/>
                    {isBusy && !allPosts ? "Loading..." : post}
                    <div style={{width: "100%", height: "100px"}}/>
                </div>
                <div className={styles.rightSection} >
                    {!groups ? null : <MeetupBanner title="Upcoming Meetups"/>}
                    {!groups ? null : <GroupsBanner title="Top Groups" groups={groups}/>}
                </div>
            </div>
        </div>
    )
}