
import styles from "./CreateComment.module.scss"
import {Form, Button} from "react-bootstrap"

export default function CreateComment (props) {

    return (
        <div className={styles.postCreateComment}>
            <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="post" />
            <Form.Control
                        as="textarea"
                        style={{fontSize: "14px"}}
                        placeholder="Reply..."
                        className={styles.postTextArea}
                        onChange={props.handleChange}
                        value={props.commentText}
                    />
            <Button className={styles.sendBtn} onClick={props.handleCommentCreation}>Send</Button>
    </div>
    )
}