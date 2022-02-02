import React from "react";
import { ImSpinner8 } from 'react-icons/im'
import styles from './Spinner.module.scss'

export default function Spinner () {
  return(
  <>
    <ImSpinner8 className={styles.spinner}/>
  </>
  )
}

