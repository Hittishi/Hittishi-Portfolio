import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className= {styles.container} id ="about">
        <h2 className= {styles.title}>About Me</h2>
        {/* <div className= {styles.content}> <img src ={getImageUrl("about/aboutImage.png")} alt="me sitting with a laptop" className= {styles.aboutImage}></img></div> */}
        <ul>
            <li className= {styles.aboutItem}>
                <img src ={getImageUrl("about/gradicon.ico")} alt ="cursor image"></img>
                <div className= {styles.aboutItemText}>
                    <h3>Current Student at Rutgers:</h3>
                    <p>I'm currently pursuing my Master's in Computer Science at Rutgers University, maintaining a GPA of 3.67. I'm deeply fascinated by the world of technology and always eager to learn more.</p>
                </div>
            </li>
            <li className= {styles.aboutItem}>
                <img src ={getImageUrl("about/painticon.ico")} alt ="cursor image"></img>
                <div className= {styles.aboutItemText}>
                    <h3>Passionate Painter</h3>
                    <p>Outside of my studies, I discover peace and happiness in the strokes of a paintbrush. Painting serves as my personal retreat, providing a space for creative expression and imaginative exploration.</p>
                </div>
            </li>
            <li className= {styles.aboutItem}>
                <img src ={getImageUrl("about/balanceicon.ico")} alt ="UI iconimage"></img>
                <div className= {styles.aboutItemText}>
                    <h3>Balancing Art, and Web Design</h3>
                    <p>I seamlessly integrate my creative painting skills into my academic pursuits, often utilizing them to design visually captivating websites. From choosing color schemes to crafting engaging layouts, my artistic background enhances my ability to create aesthetically pleasing and user-friendly digital experiences.</p>
                </div>
            </li>
        </ul>
    </section>
  )
}
