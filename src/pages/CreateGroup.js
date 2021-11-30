import React, {useState} from "react";
import styles from "./CreateGroup.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard";
import Create from "../components/Create/Create";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";


export default function CreateGroup () {
    const user = useRecoilState(userState)[0]
    const [groupName, setGroupName] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const [ coverPhoto, setCoverPhoto] = useState('')


    const handleName = (e) => {
        setGroupName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePhoto = (e) => {
        setPhoto(e.target.value)
    }

    const handleCoverPhoto = (e) => {
        setCoverPhoto(e.target.value)
    }




    return(
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard location="/group/create"/>
                </div>
                <div className={styles.mainSection}>
                    <div className={styles.create}>
                        <Create groupName={groupName} description={description} photo={photo} coverPhoto={coverPhoto} handleName={handleName} handleDescription={handleDescription} handlePhoto={handlePhoto} handleCoverPhoto={handleCoverPhoto}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
