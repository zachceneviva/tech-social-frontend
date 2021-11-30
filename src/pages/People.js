import React, {useState, useEffect} from "react"
import styles from "./People.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import AllPeople from "../components/People/AllPeople"
import axios from "axios"


export default function People (props) {
    const [allPeople, setAllPeople] = useState([])
    const [rerender, setRerender] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/techonnect/users`, {
            headers: {authorization: `Bearer ${localStorage.uid}`},
        }).then((res) => res.data).then(res => setAllPeople(res.allUsers))
    }, [rerender])
    

    const rerenderParent = () => {

        setRerender(rerender + 1)
    }

    const people = allPeople.map((person, idx) => {
        return <AllPeople person={person} key={idx} rerender={rerenderParent}/>
    })
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard location="/people"/>
                </div>
                <div className={styles.mainSection}>
                    <div className={styles.allPeople}>
                        {!allPeople ? "Loading" : people}
                    </div>
                </div>
            </div>
        </div>
    )
}