import styles from "./navbar.module.css"

export default function NavBar() {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
            E
        </div>

        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('skills')}>Skills</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </nav>
    );
  }


