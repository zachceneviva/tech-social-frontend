import styles from "./CreatePost.module.scss";
import { BsPencilFill, BsImage, BsGithub, BsLink, BsCodeSlash } from "react-icons/bs";
import { Form, Button } from "react-bootstrap";

export default function CreatePost() {
    return (
        <div className={styles.postCard}>
            <h1>
                <span>
                    <BsPencilFill />
                </span>
                Create Post
            </h1>
            <hr />
            <div className={styles.createContent}>
                <div className={styles.createPostImage}>
                    <img
                        src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                        alt="user"
                    />
                </div>
                <div className={styles.textContent}>
                        <Form.Control
                            as="textarea"
                            style={{fontSize: "14px"}}
                            placeholder="Hello World..."
                            className={styles.postTextArea}
                        />
                </div>
            </div>
            <div className={styles.submitPost}>
                <div className={styles.postAddons}>
                    <span><BsImage/></span>
                    <span><BsGithub/></span>
                    <span><BsLink/></span>
                    <span><BsCodeSlash/></span>
                </div>
                <Button className={styles.postBtn}>Post</Button>
            </div>
        </div>
    );
}
