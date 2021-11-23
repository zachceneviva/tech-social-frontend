import React, {useState} from "react"
import styles from "./Post.module.scss"
import Comments from "./Comment"
import { Form, Button } from "react-bootstrap"
import {FaRegComment } from "react-icons/fa"
import { BsHeart, BsHeartFill, BsLightbulb, BsLightbulbFill } from "react-icons/bs"
import { formatDistanceToNow }from "date-fns"

export default function Post (props) {
    console.log(props.posts)
    let post = props.posts.map((post, idx) => {
        return (
            <div className={styles.post} key={idx}>
                <div className={styles.postHeader}>
                    <div className={styles.postUserImage}>
                        <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                    </div>
                    <div className={styles.postUserName}>
                        <h4>Zach Ceneviva</h4>
                        <p>{formatDistanceToNow(new Date(post.createdAt))} ago</p>
                    </div>
                </div>
                <div className={styles.postTextContent}>
                    <p>{post.content}</p>
                </div>
                {post.image ? 
                <div className={styles.postImage}>
                    <img src={post.image} alt="post" />
                </div> : null }
                <hr/>
                <div className={styles.postInteract}>
                    <span ><FaRegComment/></span><p>{post.comments.length}</p>
                    <span className={styles.heart}><BsHeart/></span><p>{post.likes}</p>
                    <span className={styles.light}><BsLightbulb/></span><p>{post.lightbulbs}</p>
                </div>
                <hr/>
                <div className={styles.postCreateComment}>
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="post" />
                    <Form.Control
                                as="textarea"
                                style={{fontSize: "14px"}}
                                placeholder="Reply..."
                                className={styles.postTextArea}
                            />
                    <Button className={styles.sendBtn}>Send</Button>
                </div>
                <Comments/>
            </div>
        )})

        return (
            <>
            {post ? post : "Loading..."}
            </>
        )
}