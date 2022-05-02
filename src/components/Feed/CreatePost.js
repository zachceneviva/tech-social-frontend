import React from "react"
import styles from "./CreatePost.module.scss";
import {
    BsPencilFill,
    BsImage,
    BsGithub,
    BsLink,
} from "react-icons/bs";
import { Form, Button, InputGroup } from "react-bootstrap";
import { userState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

export default function CreatePost(props) {
    const user = useRecoilState(userState)[0]

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
                        src={user.avatar}
                        alt="user"
                    />
                </div>
                <div className={styles.textContent}>
                    <Form.Control
                        as="textarea"
                        style={{ fontSize: "14px" }}
                        placeholder="Hello World..."
                        className={styles.postTextArea}
                        name="post"
                        value={props.text}
                        onChange={props.handleChange}
                        
                    />
                </div>
            </div>
                <div className={styles.additonalInput} style={{display: props.imageUrl}}>
                    <h4>Image</h4>
                    <InputGroup className="mb-3">
                        <Form.Control
                            id="image"
                            name="image"
                            aria-describedby="basic-addon3"
                            onChange={props.handleImageChange}
                            type="file"
                            accept='.jpg, .jpeg, .svg, .png'
                            key={props.postImage || ''}
                        />
                    </InputGroup>
                </div>
                <div className={styles.additonalInput} style={{display: props.ghUrl}}>
                    <h4>GitHub Repository</h4>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3" >
                            https://github.com/
                        </InputGroup.Text>
                        <Form.Control
                            id="github"
                            aria-describedby="basic-addon3"
                            onChange={props.handleGhChange}
                            value={props.postGh}
                            autoComplete="off"
                        />
                    </InputGroup>
                </div>
                <div className={styles.additonalInput} style={{display: props.linkUrl}}>
                <h4>Link (Live Demo)</h4>
                    <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon3">
                            https://
                        </InputGroup.Text>
                        <Form.Control
                            id="link"
                            aria-describedby="basic-addon3"
                            onChange={props.handleLinkChange}
                            value={props.postLink}
                            autoComplete="off"
                        />
                    </InputGroup>
                </div>
            <div className={styles.submitPost}>
                <div className={styles.postAddons}>
                    <span onClick={props.showImageUrl}>
                        <BsImage />
                    </span>
                    <span onClick={props.showGhUrl}>
                        <BsGithub />
                    </span>
                    <span onClick={props.showLinkUrl}>
                        <BsLink />
                    </span>
        
                </div>
                <Button className={styles.postBtn} onClick={props.handlePost}>
                    Post
                </Button>
            </div>
        </div>
    );
}
