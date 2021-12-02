import styles from "./PeopleBanner.module.scss"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function PeopleBanner () {
    const user = useRecoilState(userState)[0]
    const [userTechonnections, setTechonnections] = useState([])

    useEffect(() => {
        setTechonnections(user.techonnections.slice(0, 4))
        console.log(`set`)
    }, [])

    const techonnection = userTechonnections.map((techonnect, idx) => {
        return (
            <div className={styles.people} key={idx}>
                <img src={techonnect.avatar} alt="user" />
                <div className={styles.userInfo}>
                    <Link to={`/profile/${techonnect._id}`}>
                        <h4>{techonnect.firstName} {techonnect.lastName}</h4>
                    </Link>
                    <h6>{techonnect.city}, {techonnect.state}</h6>
                </div>
            </div>
        )
    }) 

    return (
        <div className={styles.peopleBannerCard}>
            <h2>Check-In</h2>
            <hr/>
            {!userTechonnections ? null : techonnection}
        </div>
    )
}