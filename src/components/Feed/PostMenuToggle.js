import React from "react";
import styles from './PostMenuToggle.module.scss'

export default function PostMenuToggle (props) {


  return (
    <div className={styles.menuContainer} style={props.isVisible ? {display: "block"} : {display: "none"}}>
      <p>Edit Post</p>
      <hr />
      <p onClick={() => props.deletePost()} style={{color: "red"}}>Delete Post</p>
    </div>
  )
}