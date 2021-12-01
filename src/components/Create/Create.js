import React from "react";
import styles from "./Create.module.scss";
import { Form, Row, Button, Col } from "react-bootstrap";

export default function Create(props) {
    return (
        <div className={styles.formCreate}>
            {props.type === "group" && (
                <Form onSubmit={props.handleSubmit}>
                    <Form.Group controlId="formGridName" className="mb-3">
                        <Form.Label>Group Name*</Form.Label>
                        <Form.Control
                            onChange={props.handleName}
                            name="groupName"
                            placeholder="e.g. JS Rocks"
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
                            <Form.Control
                                placeholder="https://"
                                autoComplete="off"
                                name="photo"
                                value={props.photo}
                                onChange={props.handlePhoto}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCoverPhoto">
                            <Form.Label>Group Cover Photo</Form.Label>
                            <Form.Control
                                placeholder="https://"
                                autoComplete="off"
                                name="coverPhoto"
                                value={props.coverPhoto}
                                onChange={props.handleCoverPhoto}
                            />
                        </Form.Group>
                    </Row>

                    <Button className={styles.submitBtn} type="submit">
                        Create
                    </Button>
                </Form>
            )}

            {props.type === "meetup" && (
                <Form onSubmit={props.handleSubmit}>
                    <Form.Group controlId="formGridName" className="mb-3">
                        <Form.Label>Meetup Name*</Form.Label>
                        <Form.Control
                            onChange={props.handleName}
                            name="groupName"
                            placeholder="e.g. Code and Coffee"
                            autoComplete="off"
                            value={props.meetupName}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridDate" className="mb-3">
                        <Form.Label>Date*</Form.Label>
                        <Form.Control
                            onChange={props.handleDate}
                            type="date"
                            name="date"
                            autoComplete="off"
                            value={props.date}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridDescription">
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

                        <Form.Group className="mb-3" controlId="formGridAvatar">
                            <Form.Label>Meetup Photo</Form.Label>
                            <Form.Control
                                placeholder="https://"
                                autoComplete="off"
                                name="photo"
                                value={props.photo}
                                onChange={props.handlePhoto}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control
                                placeholder="e.g. 1200 Rainbow Rd"
                                autoComplete="off"
                                name="address"
                                value={props.address}
                                onChange={props.handleAddress}
                            />
                        </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                placeholder="New York City"
                                autoComplete="off"
                                name="city"
                                value={props.city}
                                onChange={props.handleCity}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                placeholder="NY"
                                autoComplete="off"
                                name="state"
                                value={props.state}
                                onChange={props.handleState}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zipcode</Form.Label>
                            <Form.Control
                                placeholder="10001"
                                autoComplete="off"
                                name="zip"
                                value={props.zip}
                                onChange={props.handleZip}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridGroup">
                        <Form.Label>Group</Form.Label>
                        <Form.Select onChange={props.handleGroup} value={props.group}>
                            <option value={undefined}>Choose a group...</option>
                            {props.groups.map((group, idx) => {
                                return <option key={idx} value={group._id}>{group.name}</option>
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Button className={styles.submitBtn} type="submit">
                        Create
                    </Button>
                </Form>
            )}
        </div>
    );
}
