import React, {useState} from "react"
import styles from "./Post.module.scss"
import Comments from "./Comment"
import { Form, Button } from "react-bootstrap"
import {FaRegComment } from "react-icons/fa"
import { BsFillHeartFill, BsHeart, BsHeartFill, BsLightbulb, BsLightbulbFill } from "react-icons/bs"
import { formatDistanceToNow }from "date-fns"
import axios from "axios"

export default function Post (props) {
    const [commentDisplay, setCommentDisplay] = useState ("none")
    const [likes, setLikes] = useState(props.post.likes)
    const [lightbulbs, setLightbulbs] = useState(props.post.lightbulbs)
    const [commentsNum, setCommentsNum] = useState(props.post.comments.length)
    const [likedDisplay, setLikedDisplay] = useState(<BsHeart/>)
    const [lightbulbedDisplay, setLightbulbedDisplay] = useState(<BsLightbulb/>)
    const [liked, setLiked] = useState(false)
    const [lightbulbed, setLightbulbed] = useState(false)

    const showComments = () => {
        if (commentDisplay === "none") setCommentDisplay('initial')
        else setCommentDisplay('none')
    }

    const likePost = () => {
        if(liked === false) {
            setLikedDisplay (<BsHeartFill />)
            setLikes(likes + 1)
            setLiked(true)
            update(likes + 1, lightbulbs)
        } else {
            setLikedDisplay (<BsHeart />)
            setLikes(likes -1)
            setLiked(false)
            update(likes - 1, lightbulbs)
        }
    }

    const bulbedPost = () => {
        if(lightbulbed === false) {
            setLightbulbedDisplay (<BsLightbulbFill />)
            setLightbulbs(lightbulbs + 1)
            setLightbulbed(true)
            update(likes, lightbulbs + 1)
        } else {
            setLightbulbedDisplay (<BsLightbulb />)
            setLightbulbs(lightbulbs - 1)
            setLightbulbed(false)
            update(likes, lightbulbs - 1)
        }
    }

    const update = (like, lightbulb) => {
        axios.put(`http://localhost:4000/api/v1/techonnect/posts/${props.post._id}`, {lightbulbs: lightbulb, likes: like}, {'Content-Type': 'application/json'}).then(res => console.log(res))
    }

        return (
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <div className={styles.postUserImage}>
                        <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                    </div>
                    <div className={styles.postUserName}>
                        <h4>Zach Ceneviva</h4>
                        <p>{formatDistanceToNow(new Date(props.post.createdAt))} ago</p>
                    </div>
                </div>
                <div className={styles.postTextContent}>
                    <p>{props.post.content}</p>
                </div>
                {props.post.image ? 
                <div className={styles.postImage}>
                    <img src={props.post.image} alt="post" />
                </div> : null }
                <hr/>
                <div className={styles.postInteract}>
                    <span onClick={showComments}><FaRegComment/></span><p>{commentsNum}</p>
                    <span className={styles.heart} onClick={likePost}>{likedDisplay}</span><p>{likes}</p>
                    <span className={styles.light} onClick={bulbedPost}>{lightbulbedDisplay}</span><p>{lightbulbs}</p>
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
                <div style={{display: commentDisplay}}>
                    <Comments />
                </div>
            </div>
        )
}