import styles from './contact.module.css'
import React, { useState, useEffect } from 'react';


export default function Contact(){

    const key = '6be26c24-f6b6-47c9-a796-1e3e89767269'

    useEffect(() => {
        // Select all elements with the "info" class from CSS modules
        const infoDivs = Array.from(document.getElementsByClassName(styles.info));
    
        // Create the observer
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.className = styles.info_open;
            } else {
              entry.target.className = styles.info;
            }
          });
        });
    
        // Observe each info div
        infoDivs.forEach((div) => observer.observe(div));
    
        // Cleanup the observer when the component unmounts
        return () => {
          observer.disconnect();
        };
      }, []);


      const [result, setResult] = React.useState("");

        const onSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending....");
            const formData = new FormData(event.target);

            formData.append("access_key", key);

            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            } else {
            console.log("Error", data);
            setResult(data.message);
            }
        };


    return(

        <>
        
        <div className={styles.main} id='contact'>

            <h1 className={styles.contacth1}>
                Contact me<span>.</span>
            </h1>
            <br />

            <div className={styles.cardcon}>

                <div className={styles.card}>

                    <div id='email' className={styles.info}>
                        <h3>Email me<span>.</span></h3>
                        <p>ealopes@aggies.ncat.edu</p>
                    </div>

                    <div className={styles.info}>
                    <h3>Call me<span>.</span></h3>
                    <p>(813) 504-3950</p>
                    </div>

                    <div className={styles.info}>
                    <h3>Lets connect<span>.</span></h3>
                    <a href="https://www.linkedin.com/in/elias-lopes-273130297/">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#f2e713"></path> <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#f2e713"></path> <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#f2e713"></path> <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#f2e713"></path> </g></svg>
                    </a>
                    </div>

                </div>


                <div className={styles.card}>

                    <h1 className={styles.sendmsg}>
                        Send a message<span>.</span>
                    </h1>
                    <div className={styles.contactform}>

                    <form className={styles.form} onSubmit={onSubmit}>
                        <input placeholder='Name' type="text" name="name" required/>
                        <input placeholder='Email' type="email" name="email" required/>
                        <textarea placeholder='Enter message...' name="message" required></textarea>


                        <div className={styles.submit}>
                            <button type="submit">Submit Form</button>

                            <span>{result}</span>
                        </div>

                    </form>
                    



                    </div>

                </div>

            </div>



            <br />
            <br />
            <br />
        </div>
        
        
        
        
        </>

    )

}