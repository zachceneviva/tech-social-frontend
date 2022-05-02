import React, { useState, useEffect } from "react";
import styles from "./Post.module.scss";
import Comment from "./Comment";
import { FaRegComment } from "react-icons/fa";
import {
    BsHeart,
    BsHeartFill,
    BsLightbulb,
    BsLightbulbFill,
} from "react-icons/bs";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import CreateComment from "./CreateComment";
import { userState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import PostMenuToggle from "./PostMenuToggle";
import { updatePost, createComment, getPostComments, deletePost } from "../../lib/ApiCalls";

export default function Post(props) {
    const user = useRecoilState(userState)[0]
    const [commentDisplay, setCommentDisplay] = useState("none");
    const [allComments, setAllComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [busy, setBusy] = useState(true)
    const [likes, setLikes] = useState(props.post.likes.length)
    const [lights, setLights] = useState(props.post.lightbulbs.length)
    const [showMenu, setShowMenu] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        fetchComments();
        setBusy(false)
        console.log("Fetching....")
    }, [props.post, busy]);


    const handleDeletePost = async () => {
        try {
            if (user._id !== props.post.user._id) return
            props.callBack()
            setShowMenu(false)
            await deletePost(props.post._id)
        } catch (e) {
            console.log(e)
        }
    }


    const updateLikes = async () => {
        try {
            let newLikes = props.post.likes
            if (!props.post.likes.includes(user._id)) {
                newLikes.push(user._id)
                setLikes(likes + 1)
                await updatePost(props.post._id, {likes: newLikes})
            } else {
                let index = props.post.likes.indexOf(user._id)
                newLikes.splice(index,1)
                setLikes(likes - 1)
                await updatePost(props.post._id, {likes: newLikes})
            }
        } catch (e) {
            console.log(e)
        }
    };

    const updateLightbulb = async () => {
        try {
            let newLights = props.post.lightbulbs
            if (!props.post.lightbulbs.includes(user._id)) {
                newLights.push(user._id)
                setLights(lights + 1)
                await updatePost(props.post._id, {lightbulbs: newLights})
            } else {
                let index = props.post.lightbulbs.indexOf(user._id)
                newLights.splice(index, 1)
                setLights(lights - 1)
                await updatePost(props.post._id, {lightbulbs: newLights})
            }
        } catch (e) {
            console.log(e)
        }
    };

    const fetchComments = async () => {
        try {
            const res = await getPostComments(props.post._id)
            setAllComments(res.comments)
        } catch (e) {
            console.log(e)
        }
    };

    const showComments = () => {
        if (commentDisplay === "none") setCommentDisplay("initial");
        else setCommentDisplay("none");
    };


    const handleCommentChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleCommentCreation = async (e) => {
        try {
            e.preventDefault();
            let res = await createComment({
                content: commentText, 
                post: props.post._id, 
                user: user
                }
            )
            setAllComments([res, ...allComments])
            setCommentText("");
            setCommentDisplay("initial");
            setBusy(true)
        } catch (e) {
            console.log(e)
        }
        
    };

    const comment = allComments.map((comment, idx) => {
        return <Comment comment={comment} key={idx} />;
    });

    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true)
    }

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.postUserInfo}>
                    <div className={styles.postUserImage}>
                        <img
                            src={props.post.user?.avatar}
                            alt="user"
                        />
                    </div>
                    <div className={styles.postUserName}>
                        <h4><Link to={`/profile/${props.post.user._id}`}>{props.post.user.firstName} {props.post.user.lastName}</Link></h4>
                        <p>
                            {formatDistanceToNow(new Date(props.post.createdAt))}{" "}
                            ago
                        </p>
                    </div>
                </div>
                {user._id === props.post.user._id ? <BsThreeDots onClick={toggleMenu} className={showMenu ? styles.menuToggleActive : styles.menuToggle} /> : null}
                {user._id === props.post.user._id ? <PostMenuToggle isVisible={showMenu} deletePost={handleDeletePost} setIsEditing={setIsEditing}/> : null}
            </div>
            <div className={styles.postTextContent}>
                <p>{props.post.content}</p>
                {props.post.github !== "https://github.com/" ? (
                    <h6>
                        <a target="_blank" href={props.post.github}>
                            GitHub Repository
                        </a>
                    </h6>
                ) : null}
                {props.post.link !== "https://" ? (
                    <h6>
                        <a target="_blank" href={props.post.link}>
                            Live Demo
                        </a>
                    </h6>
                ) : null}
            </div>

            {props.post.image ? (
                <div className={styles.postImage}>
                    <img src={props.post?.image} alt="post" />
                </div>
            ) : null} 

            <hr />
            <div className={styles.postInteract}>
                <span onClick={showComments}>
                    <FaRegComment />
                </span>
                <p>{allComments.length}</p>
                <span className={styles.heart} onClick={updateLikes}>
                    {props.post.likes.includes(user._id) ? <BsHeartFill /> : <BsHeart />}
                </span>
                <p>{props.post.likes.length}</p>
                <span className={styles.light} onClick={updateLightbulb}>
                    {props.post.lightbulbs.includes(user._id) ? <BsLightbulbFill /> : <BsLightbulb />}
                </span>
                <p>{props.post.lightbulbs.length}</p>
            </div>
            <hr />
            <CreateComment
                handleChange={handleCommentChange}
                commentText={commentText}
                handleCommentCreation={handleCommentCreation}
            />
            <div style={{ display: commentDisplay, paddingTop: "45px" }}>
                {busy && !allComments ? "loading..." : comment}
            </div>
        </div>
    );
}
