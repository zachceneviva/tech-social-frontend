import React from "react";
import styles from "./GroupsBanner.module.scss";
import { Link } from "react-router-dom";

export default function GroupsBanner(props) {

    const group = props.groups.map((group, idx) => {
        return (
        <div className={styles.people} key={idx}>
            <img src={group.photo} alt="group" />
            <div className={styles.userInfo}>
                <Link to={`/groups/${group._id}`}>
                    <h4>{group.name}</h4>
                </Link>
            </div>
        </div>
    )})
    return (
        <div className={styles.peopleBannerCard}>
            <h2>{props.title}</h2>
            <hr />
            {group}
        </div>
    );
}
