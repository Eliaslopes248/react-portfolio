import styles from './skills.module.css'
import { useState } from 'react';




function Skills(){

    let skills = [
        {
          id: 1,
          name: "Front-end Development",
          icon: (
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f2e713"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z" fill="#000000"></path> <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z" fill="#000000"></path> <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z" fill="#000000"></path> </g></svg>

          ),
          technologies: ["Html","React", "CSS", "JavaScript"],
        },
        {
          id: 2,
          name: "Back-end Development",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f2e713"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18V6" stroke="" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 12L20 18" stroke="" strokeLidth="1.5" strokeLinecap="round"></path> <path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" stroke="" strokeWidth="1.5"></path> <path d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12" stroke="" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18" stroke="" strokeWidth="1.5"></path> </g></svg>

          ),
          technologies: ["Node.js", "Express", "MongoDB","Flask","mySQL"],
        },
        {
          id: 3,
          name: "Cloud Computing",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f2e713"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#00000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>

          ),
          technologies: ["Dell Generative AI foundations Certification","Azure Cloud Fundamentals Certification", "Google Cloud Digital Leaders Certification"],
        },
        {
          id: 4,
          name: "Data Analysis",
          icon: (
            <svg fill="#f2e713" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#f2e713"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M139.13,0H38.957c-9.217,0-16.696,7.479-16.696,16.696v478.609c0,9.217,7.479,16.696,16.696,16.696H139.13 c9.217,0,16.696-7.479,16.696-16.696V16.696C155.826,7.479,148.348,0,139.13,0z"></path> </g> </g> <g> <g> <path d="M306.087,267.13H205.913c-9.217,0-16.696,7.479-16.696,16.696v211.478c0,9.217,7.479,16.696,16.696,16.696h100.174 c9.217,0,16.696-7.479,16.696-16.696V283.826C322.783,274.609,315.304,267.13,306.087,267.13z"></path> </g> </g> <g> <g> <path d="M473.043,133.565H372.87c-9.217,0-16.696,7.479-16.696,16.696v345.043c0,9.217,7.479,16.696,16.696,16.696h100.174 c9.217,0,16.696-7.479,16.696-16.696V150.261C489.739,141.044,482.261,133.565,473.043,133.565z"></path> </g> </g> </g></svg>                   

          ),
          technologies: ["Python", "SQL","PowerBI","Excel"],
        },
        {
          id: 5,
          name: "Game Design",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 6V3.75H11.25V6L9 6C6.10051 6 3.75 8.3505 3.75 11.25V17.909C3.75 19.2019 4.7981 20.25 6.09099 20.25C6.71186 20.25 7.3073 20.0034 7.74632 19.5643L10.8107 16.5H13.1893L16.2537 19.5643C16.6927 20.0034 17.2881 20.25 17.909 20.25C19.2019 20.25 20.25 19.2019 20.25 17.909V11.25C20.25 8.3505 17.8995 6 15 6L12.75 6ZM18.75 11.25C18.75 9.17893 17.0711 7.5 15 7.5L9 7.5C6.92893 7.5 5.25 9.17893 5.25 11.25V17.909C5.25 18.3735 5.62652 18.75 6.09099 18.75C6.31403 18.75 6.52794 18.6614 6.68566 18.5037L10.1893 15H13.8107L17.3143 18.5037C17.4721 18.6614 17.686 18.75 17.909 18.75C18.3735 18.75 18.75 18.3735 18.75 17.909V11.25ZM6.75 12.75V11.25H8.25V9.75H9.75V11.25H11.25V12.75H9.75V14.25H8.25V12.75H6.75ZM15 10.875C15 11.4963 14.4963 12 13.875 12C13.2537 12 12.75 11.4963 12.75 10.875C12.75 10.2537 13.2537 9.75 13.875 9.75C14.4963 9.75 15 10.2537 15 10.875ZM16.125 14.25C16.7463 14.25 17.25 13.7463 17.25 13.125C17.25 12.5037 16.7463 12 16.125 12C15.5037 12 15 12.5037 15 13.125C15 13.7463 15.5037 14.25 16.125 14.25Z" fill="#f2e713"></path> </g></svg>               

          ),
          technologies: ["Pygame","Unity", "Unreal Engine"],
        },
        {
          id: 6,
          name: "Design Thinking",
          icon: (
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#f2e713" stroke="#f2e713"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs></defs> <g data-name="33. Thinking" id="_33._Thinking"> <path className="cls-1" d="M27,32H12a1,1,0,0,1-1-1V28H9a3,3,0,0,1-3-3V21.618L2.553,19.9a1,1,0,0,1-.385-1.45L6,12.691A12.995,12.995,0,0,1,29.551,5.414,1,1,0,1,1,27.93,6.586,11,11,0,0,0,8,13a1.006,1.006,0,0,1-.168.555L4.46,18.612l2.987,1.493A1,1,0,0,1,8,21v4a1,1,0,0,0,1,1h3a1,1,0,0,1,1,1v3H26V27.966a18.1,18.1,0,0,1,2.445-9.316,11,11,0,0,0,1.5-6.779,10.42,10.42,0,0,0-.287-1.62,1,1,0,0,1,1.936-.5,12.656,12.656,0,0,1,.342,1.927,12.969,12.969,0,0,1-1.775,8A16.1,16.1,0,0,0,28,27.966V31A1,1,0,0,1,27,32Z"></path> <path className="cls-1" d="M14,28H12a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"></path> <path className="cls-2" d="M20.072,19H17.928A1.931,1.931,0,0,1,16,17.189a1.927,1.927,0,0,1-2.529-.761L12.4,14.572A1.933,1.933,0,0,1,13.007,12,1.933,1.933,0,0,1,12.4,9.428l1.072-1.856A1.927,1.927,0,0,1,16,6.811,1.931,1.931,0,0,1,17.928,5h2.144A1.929,1.929,0,0,1,22,6.811a1.927,1.927,0,0,1,2.53.762L25.6,9.428h0A1.933,1.933,0,0,1,24.993,12a1.933,1.933,0,0,1,.606,2.571l-1.073,1.857a1.928,1.928,0,0,1-2.53.761A1.929,1.929,0,0,1,20.072,19ZM18,17h2a1.929,1.929,0,0,1,2.828-1.634l1-1.733a1.928,1.928,0,0,1,0-3.266l-1-1.733A1.929,1.929,0,0,1,20,7H18a1.929,1.929,0,0,1-2.828,1.633l-1,1.734a1.928,1.928,0,0,1,0,3.266l1,1.734A1.929,1.929,0,0,1,18,17Zm4.893-1.6Zm2-3.339Zm-2.1-3.49Z"></path> <path className="cls-2" d="M19,14a2,2,0,1,1,2-2A2,2,0,0,1,19,14Zm0-2v0Z"></path> </g> </g></svg>                  
            
          ),
          technologies: ["IBM Design Thinking Certification","Figma", "Sketch", "Adobe XD"],
        },
      ];


    class Skill{

        constructor(name,techList,years,level){
            this.name = name;
            this.techList = techList;
            this.years = years;
            this.level = level;
        }


    }

    let [selectSkill, setSelectedSkill] = useState(null)

    // create useState var for check box for closing skills div, translate div
    const [containerState, setContainerState] = useState(false)

    // create function to set state of being checked an uncheck

    function handleContainerState(){

      setContainerState((prevState) => !prevState)

      console.log(containerState)
    
    }


    //populate div with object info
    
    function handleClick(id){

        setSelectedSkill(skills[id - 1])
            
        console.log('skill:',skills[id-1])
        
    }


    return(

        <>
        
        <div id='skills' className={styles.main}>
            
            <h1><span>Skills</span></h1>

            <div className={ containerState ? styles.skill_info_div_open : styles.skill_info_div_close}>

              <button className={styles.exitbutton} onClick={handleContainerState}>close</button>


                {/* header for skill title */}

                <div className={styles.skillandicon}>

                    <h1 className={styles.skillheader}>
                      {selectSkill != null ? selectSkill.name : 'Skill name'}
                    </h1>

                      <div>

                      {selectSkill != null ? selectSkill.icon : 'Skill icon'}

                      </div>

                </div>
                

                {/* Technologies list */}

                <div className={styles.skilllistdiv}>
                  { selectSkill ? selectSkill.technologies.map((tech)=>{
                      return(
                        <div className={styles.techdiv}>
                          {tech}
                        </div>
                      )
                    }) : null
                  }
                </div>




                
            </div> 


            <div className={styles.skillcon}>

                {
                    skills.map((i)=>{
                        return(
                            <>
                            
                            <div id={i.id} className={styles.skill}>
                                <br />

                                {i.icon}

                                <p className={styles.skillp}>{i.name}</p>
                                <button className='readmorebtn' onClick={
                                   ()=> {handleClick(i.id)
                                   handleContainerState()}
                                    }>
                                    Read more
                                </button>
                                <br />

                            </div>
                                 
                            </>
                        )
                    })
                }
                


            </div>
            <br />
            <br />

        </div>
        <div className={styles.divider}></div>
        <br />
        
        </>

    )

}

export default Skills