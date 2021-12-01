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

export default function Post(props) {
    const user = useRecoilState(userState)[0]
    const [commentDisplay, setCommentDisplay] = useState("none");
    const [allComments, setAllComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [busy, setBusy] = useState(true)
    const [likes, setLikes] = useState(props.post.likes.length)
    const [lights, setLights] = useState(props.post.lightbulbs.length)

    useEffect(() => {
        fetchComments();
        setBusy(false)
        console.log("Fetching....")
    }, [props.post, busy]);


    const updateLikes = () => {
        let newLikes = props.post.likes
        if (props.post.likes.includes(user._id) === false) {
            newLikes.push(user._id)
            axios
                .put(
                    `http://localhost:4000/api/v1/techonnect/posts/${props.post._id}`,
                    {likes: newLikes},
                    { "Content-Type": "application/json" }
                )
                .then((res) => console.log(res));
                setLikes(likes + 1)
        } else {
            let index = props.post.likes.indexOf(user._id)
            newLikes.splice(index,1)
            axios
                .put(
                    `http://localhost:4000/api/v1/techonnect/posts/${props.post._id}`,
                    {likes: newLikes},
                    { "Content-Type": "application/json" }
                )
                .then((res) => console.log(res));
                setLikes(likes - 1)
        }
    };

    const updateLightbulb = () => {
        let newLights = props.post.lightbulbs
        if (props.post.lightbulbs.includes(user._id) === false) {
            newLights.push(user._id)
            axios
                .put(
                    `http://localhost:4000/api/v1/techonnect/posts/${props.post._id}`,
                    { lightbulbs: newLights},
                    { "Content-Type": "application/json" }
                )
                .then((res) => console.log(res));
                setLights(lights + 1)
        } else {
            let index = props.post.lightbulbs.indexOf(user._id)
            newLights.splice(index, 1)
            axios
                .put(
                    `http://localhost:4000/api/v1/techonnect/posts/${props.post._id}`,
                    { lightbulbs: newLights},
                    { "Content-Type": "application/json" }
                )
                .then((res) => console.log(res));
                setLights(lights - 1)
        }
    };

    const fetchComments = async () => {
        await axios
            .get(
                `http://localhost:4000/api/v1/techonnect/comments/${props.post._id}`
            )
            .then((res) => setAllComments(res.data.comments));
    };

    const showComments = () => {
        if (commentDisplay === "none") setCommentDisplay("initial");
        else setCommentDisplay("none");
    };


    const handleCommentChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleCommentCreation = (e) => {
        e.preventDefault();
        axios
            .post(
                `http://localhost:4000/api/v1/techonnect/comments/${props.post._id}`,
                { content: commentText, post: props.post._id, user: user }
            )
            .then((res) => setAllComments([res.data.comment, ...allComments]));
        setCommentText("");
        setCommentDisplay("initial");
        setBusy(true)
    };

    console.log(allComments.length);

    const comment = allComments.map((comment, idx) => {
        return <Comment comment={comment} key={idx} />;
    });

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.postUserImage}>
                    <img
                        src={props.post.user.avatar}
                        alt="user"
                    />
                </div>
                <div className={styles.postUserName}>
                    <h4><a href={`/profile/${props.post.user._id}`}>{props.post.user.firstName} {props.post.user.lastName}</a></h4>
                    <p>
                        {formatDistanceToNow(new Date(props.post.createdAt))}{" "}
                        ago
                    </p>
                </div>
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

            {props.post.image !== "https://" ? (
                <div className={styles.postImage}>
                    <img src={props.post.image} alt="post" />
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
