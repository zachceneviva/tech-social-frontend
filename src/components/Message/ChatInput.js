
import styles from './ChatInput.module.scss'
import { Form, Button, Col, Row } from 'react-bootstrap'

export default function ChatInput (props) {

    return(
        <div className={styles.messageForm}>
            <Form>
                <Row className="align-items-center">
                    <Col xs={11}>
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            className="mt-2"
                            id="inlineFormInput"
                            placeholder="Message"
                            style={{resize: "none"}}
                        />
                    </Col>
                    <Col xs={1}>
                        <Button type="submit" className={styles.sendButton}>
                            Send
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}