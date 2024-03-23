import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className ={styles.container} >
        <div className={styles.content}>
            <h1 className= {styles.title}>Hello I'm Hittishi</h1>
            <p className= {styles.description}>Hello, digital innovators! 👋 As a budding coding enthusiast and aspiring full-stack developer, I specialize in crafting digital wonders infused with creativity. Whether it's learning the ropes of website development or exploring the world of app design, my mission is to add a touch of tech magic to your projects. So, get ready as we embark on an exciting journey of learning and discovery together! 🚀✨</p>
            <a href="hittishikurlagunda@gmail.com" className= {styles.contactBtn}>Contact Me</a>
        </div>
        <img src ={getImageUrl("hero/heroImage1.png")} alt ="This is a photo of me" className= {styles.heroImg} />
        <div className ={styles.topBlur}></div>
        <div className = {styles.bottomBlur}></div>
    </section>
  )
}
