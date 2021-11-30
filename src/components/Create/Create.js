import React from "react"
import styles from "./Create.module.scss"
import {Form, Row, Button, Col} from "react-bootstrap"

export default function Create (props) {

    return(
        <div className={styles.formCreate}>
            <Form onSubmit={props.handleSubmit}>
        
                        <Form.Group controlId="formGridName" className="mb-3">
                            <Form.Label>Group Name*</Form.Label>
                            <Form.Control
                                onChange={props.handleName}
                                name="groupName"
                                placeholder="e.g. John"
                                autoComplete="off"
                                value={props.groupName}
                            />
                        </Form.Group>


                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Description*</Form.Label>
                        <Form.Control
                            className={styles.description}
                            as="textarea"
                            onChange={props.handleDescription}
                            placeholder="Tell us what this is all about!"
                            name="description"
                            autoComplete="off"
                            value={props.description}
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAvatar">
                            <Form.Label>Group Photo</Form.Label>
                            <Form.Control autoComplete="off" name="photo" value={props.photo} onChange={props.handlePhoto}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCoverPhoto">
                            <Form.Label>Group Cover Photo</Form.Label>
                            <Form.Control autoComplete="off" name="coverPhoto" value={props.coverPhoto} onChange={props.handleCoverPhoto}/>
                        </Form.Group>
                    </Row>

                    <Button className={styles.submitBtn} type="submit">
                        Create
                    </Button>
                </Form>
        </div>
    )
}