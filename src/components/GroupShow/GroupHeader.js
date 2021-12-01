import React from "react";
import styles from "./GroupHeader.module.scss"
import { userState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { style } from "dom-helpers";

export default function GroupHeader (props) {

    return (
        <div className={styles.header}>
            <div className={styles.bannerImage}>
                <img src={props.group.coverPhoto} alt="banner" />
            </div>
            <div className={styles.headerContent}>
                <div className={styles.avatar}>
                    <img src={props.group.photo} alt="user" />
                </div>
                <div className={styles.headerInformation}>
                    <h2>{props.group.name} </h2>
                </div>
            </div>
        </div>
    )
}

