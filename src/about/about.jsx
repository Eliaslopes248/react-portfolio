import styles from './about.module.css'
import headshot from '/Users/eliaslopes/vscode-project-folder/project/frontend/my-app/src/assets/headshot.png'

function About(){


    return(

        <>
        <div id='about' className={styles.main}>

            <h1>About <span>Me</span></h1>

            <div className={styles.infocon}>



                <div className={styles.info}>

                    <img src={headshot} alt="" srcSet="" />
                </div>


                <div className={styles.info}>

                    <h2 className={styles.head}>Hi there, I'm <span>Elias Lopes</span></h2>

                    <h3 className={styles.subhead}>Junior Software Developer</h3>

                    <p className={styles.p}>Hi, I’m Elias Lopes! I’m a junior UI/UX developer and an aspiring full-stack software engineer. Currently majoring in Computer Science at North Carolina A&T State University, I’m passionate about technology and constant innovation. I enjoy designing websites, coding, and creating solutions that make a lasting impact.

                    Beyond my love for tech, I’m always up for a challenge, whether it’s honing my skills, networking, or preparing myself for the professional world. Let’s create something amazing together!
                    </p>

                    <a href="https://docs.google.com/document/d/1qkIXJBF7WrU-XxwYB2LEFKc4RsUm748qxPKg3pJWoG8/edit?usp=sharing">
                        <button className={styles.learnmore}>Resume</button>
                    </a>

                </div>


            </div>


        </div>
        
        </>

    )

}

export default About