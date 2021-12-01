
import styles from "./CreateComment.module.scss"
import {Form, Button} from "react-bootstrap"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"

export default function CreateComment (props) {
    const user = useRecoilState(userState)[0]


    return (
        <div className={styles.postCreateComment}>
            <img src={user.avatar} alt="post" />
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