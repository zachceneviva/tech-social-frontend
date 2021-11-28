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

export default function Post(props) {
    const [commentDisplay, setCommentDisplay] = useState("none");
    const [likes, setLikes] = useState(props.post.likes);
    const [lightbulbs, setLightbulbs] = useState(props.post.lightbulbs);
    const [liked, setLiked] = useState(props.liked);
    const [lightbulbed, setLightbulbed] = useState(props.bulbed);
    const [allComments, setAllComments] = useState([]);
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        fetchComments();
        console.log("Fetching....")
    }, [props.post]);


    const update = (like, lightbulb) => {
        axios
            .put(
                `http://localhost:4000/api/v1/techonnect/posts/${props.post._id}`,
                { lightbulbs: lightbulb, likes: like },
                { "Content-Type": "application/json" }
            )
            .then((res) => console.log(res));
    };

    const fetchComments = () => {
        axios
            .get(
                `http://localhost:4000/api/v1/techonnect/comments/${props.post._id}`
            )
            .then((res) => setAllComments(res.data.comments));
    };

    const showComments = () => {
        if (commentDisplay === "none") setCommentDisplay("initial");
        else setCommentDisplay("none");
    };

    const likePost = () => {
        if (liked === false) {
            setLikes(likes + 1);
            setLiked(true);
            update(likes + 1, lightbulbs);
            props.rerenderParentLike()
        } else {
            setLikes(likes - 1);
            setLiked(false);
            update(likes - 1, lightbulbs);
            props.rerenderParentLike()
        }
    };

    const bulbedPost = () => {
        if (lightbulbed === false) {
            setLightbulbs(lightbulbs + 1);
            setLightbulbed(true);
            update(likes, lightbulbs + 1);
            props.rerenderParentBulb()
        } else {
            setLightbulbs(lightbulbs - 1);
            setLightbulbed(false);
            update(likes, lightbulbs - 1);
            props.rerenderParentBulb()
        }
    };

    const handleCommentChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleCommentCreation = (e) => {
        e.preventDefault();
        axios
            .post(
                `http://localhost:4000/api/v1/techonnect/comments/${props.post._id}`,
                { content: commentText, post: props.post._id }
            )
            .then((res) => setAllComments([res.data.comment, ...allComments]));
        setCommentText("");
        setCommentDisplay("initial");
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
                        src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                        alt="user"
                    />
                </div>
                <div className={styles.postUserName}>
                    <h4>Zach Ceneviva</h4>
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
                <span className={styles.heart} onClick={likePost}>
                    {liked ? <BsHeartFill /> : <BsHeart />}
                </span>
                <p>{props.post.likes}</p>
                <span className={styles.light} onClick={bulbedPost}>
                    {lightbulbed ? <BsLightbulbFill /> : <BsLightbulb />}
                </span>
                <p>{props.post.lightbulbs}</p>
            </div>
            <hr />
            <CreateComment
                handleChange={handleCommentChange}
                commentText={commentText}
                handleCommentCreation={handleCommentCreation}
            />
            <div style={{ display: commentDisplay, paddingTop: "45px" }}>
                {comment}
            </div>
        </div>
    );
}
