import React, {useState, useEffect} from "react"
import GroupHeader from "../components/GroupShow/GroupHeader"
import styles from "./GroupShow.module.scss"
import { useParams } from "react-router";
import axios from "axios";

export default function GroupShow () {
    const [foundGroup, setFoundGroup] = useState(null)
    const params = useParams()

    useEffect(() =>{
        axios.get(`http://localhost:4000/api/v1/techonnect/groups/${params.id}`).then(res => setFoundGroup(res.data.group))
    }, [])

    return(
        <div className={styles.mainContainer}>
                    <div className={styles.topContainer}>
                        { foundGroup === null ? "Loading..." : <GroupHeader group={foundGroup}/>}
                    </div>
                    <div className={styles.mainContentContainer}>
                        <div className={styles.leftSection} >
                            
                        </div>
                        <div className={styles.mainSection}>
                            
                            <div style={{width: "100%", height: "100px"}}/>
                        </div>
                        <div className={styles.rightSection} >
                            
                        </div>
                    </div>
                </div>
    )
}
