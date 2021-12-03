import React, { useState, useEffect } from "react";
import GroupHeader from "../components/GroupShow/GroupHeader";
import styles from "./GroupShow.module.scss";
import { useParams } from "react-router";
import axios from "axios";
import Post from "../components/Feed/Post";
import CreatePost from "../components/Feed/CreatePost";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import MeetupBanner from "../components/Feed/MeetupBanner";
import About from "../components/GroupShow/About";

export default function GroupShow() {
    const [foundGroup, setFoundGroup] = useState(null);
    const params = useParams();
    const [postContent, setPostContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [postImage, setPostImage] = useState("");
    const [postGh, setPostGh] = useState("");
    const [postLink, setPostLink] = useState("");
    const [imageUrl, setImageUrl] = useState("none");
    const [ghUrl, setGhUrl] = useState("none");
    const [linkUrl, setLinkUrl] = useState("none");
    const [isBusy, setBusy] = useState(true);
    const [meetups, setMeetups] = useState([])
    const user = useRecoilState(userState)[0];


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    useEffect(() => {
        axios
            .get(`https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/groups/${params.id}`)
            .then((res) => {
                setFoundGroup(res.data.group);
                setAllPosts(res.data.posts);
                setBusy(false);
                console.log("this is fetching my data");
            });
    }, [isBusy]);

    useEffect(() => {
        axios.get(`https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/meetups/groups/${params.id}`).then((res) => setMeetups(res.data.meetups))
    }, [])

    const handlePost = async (e) => {
        e.preventDefault();
        await axios
            .post("https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/posts", {
                content: postContent,
                image: `https://${postImage}`,
                github: `https://github.com/${postGh}`,
                link: `https://${postLink}`,
                user: user,
                group: params.id,
            })
            .then((res) => console.log(res));
        setPostContent("");
        setPostImage("");
        setPostGh("");
        setPostLink("");
        setImageUrl("none");
        setGhUrl("none");
        setLinkUrl("none");
        setBusy(true);
    };

    const callBack = () => {
        setBusy(true);
    };

    const handleChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleImageChange = (e) => {
        setPostImage(e.target.value);
    };

    const handleGhChange = (e) => {
        setPostGh(e.target.value);
    };

    const handleLinkChange = (e) => {
        setPostLink(e.target.value);
    };

    const showImageUrl = () => {
        if (imageUrl === "none") setImageUrl("initial");
        else setImageUrl("none");
    };

    const showGhUrl = () => {
        if (ghUrl === "none") setGhUrl("initial");
        else setGhUrl("none");
    };

    const showLinkUrl = () => {
        if (linkUrl === "none") setLinkUrl("initial");
        else setLinkUrl("none");
    };

    const post = allPosts.map((post, idx) => {
        return <Post post={post} key={idx} />;
    });

    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                {foundGroup === null ? (
                    "Loading..."
                ) : (
                    <GroupHeader group={foundGroup} />
                )}
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection}>
                    {!meetups ? null : <MeetupBanner meetups={meetups} title="Group Meetups" />}
                </div>
                <div className={styles.mainSection}>
                    {!isBusy ? (
                        foundGroup.members.includes(user._id) ? (
                            <CreatePost
                                handlePost={handlePost}
                                text={postContent}
                                handleChange={handleChange}
                                postImage={postImage}
                                postGh={postGh}
                                postLink={postLink}
                                handleImageChange={handleImageChange}
                                handleGhChange={handleGhChange}
                                handleLinkChange={handleLinkChange}
                                showGhUrl={showGhUrl}
                                showImageUrl={showImageUrl}
                                showLinkUrl={showLinkUrl}
                                imageUrl={imageUrl}
                                ghUrl={ghUrl}
                                linkUrl={linkUrl}
                            />
                        ) : null
                    ) : null}
                    {isBusy && !allPosts ? "Loading..." : post}
                    <div style={{ width: "100%", height: "100px" }} />
                </div>
                <div className={styles.rightSection}>
                    {isBusy && !foundGroup ? null : (
                        <About
                            callBack={callBack}
                            group={foundGroup}
                            buttonJoin="Join"
                            buttonLeave="Leave"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
