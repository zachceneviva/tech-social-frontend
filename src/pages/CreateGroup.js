import React, {useState} from "react";
import styles from "./CreateGroup.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard";
import Create from "../components/Create/Create";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router";
import { createGroup } from "../lib/ApiCalls";


export default function CreateGroup () {
    const user = useRecoilState(userState)[0]
    const [groupName, setGroupName] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState(null)
    const [coverPhoto, setCoverPhoto] = useState(null)
    const navigate = useNavigate()


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


    const handleGroupCreate = async (e) => {
        try {
            e.preventDefault()
            await createGroup({
                name: groupName,
                description: description,
                photo: photo,
                coverPhoto: coverPhoto,
                creator: user._id,
            })
            navigate('/groups')
        } catch(e) {
            console.log(e)
        }
    }

    return(
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard location="/group/create"/>
                </div>
                <div className={styles.mainSection}>
                    <div className={styles.create}>
                        <Create type="group" groupName={groupName} description={description} photo={photo} coverPhoto={coverPhoto} handleName={handleName} handleDescription={handleDescription} handlePhoto={handlePhoto} handleCoverPhoto={handleCoverPhoto} handleSubmit={handleGroupCreate}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
