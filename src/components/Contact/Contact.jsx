import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
export const Contact = () => {
  return (
    <footer id ="contact" className= {styles.container}>
        <div className= {styles.text} >
            <h2>Contact</h2>
            <p>Feel free to contact</p>
        </div>
        <ul className= {styles.links}>
            <li className= {styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt ="emailIcon"></img>
            <a href='mailto:hittishikurlagunda@gmail.com'>hittishikurlagunda@gmail.com</a>
            </li>
            <li className= {styles.link}><img src={getImageUrl("contact/linkedinIcon.png")}  alt ="linkedinIcon"></img>
            <a href='https://www.linkedin.com/in/hittishi-kurlagunda/'>linkedin.com/HittishiKurlagunda</a>
            </li>
            
            <li className= {styles.link}><img src={getImageUrl("contact/githubIcon.png")}  alt ="githubIcon"></img>
            <a href='https://github.com/Hittishi'>github.com/HittishiKurlagunda</a>
            </li>
        </ul>
    </footer>
  )
}
