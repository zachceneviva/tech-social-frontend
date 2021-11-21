import styles from "./Post.module.scss"
import { Form, Button } from "react-bootstrap"
import {FaRegComment } from "react-icons/fa"
import { BsHeart, BsHeartFill, BsLightbulb, BsLightbulbFill } from "react-icons/bs"

export default function Post () {
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.postUserImage}>
                    <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                </div>
                <div className={styles.postUserName}>
                    <h4>Zach Ceneviva</h4>
                    <p>22 hours ago</p>
                </div>
            </div>
            <div className={styles.postTextContent}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className={styles.postImage}>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="post" />
            </div>
            <hr/>
            <div className={styles.postInteract}>
                <span ><FaRegComment/></span><p>5</p>
                <span className={styles.heart}><BsHeart/></span><p>10</p>
                <span className={styles.light}><BsLightbulb/></span><p>50</p>
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
        </div>
    )
}