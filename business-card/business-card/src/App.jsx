

function BasicInfo() {
  return (
    <>
      <img src="./king-crimson.jpg" />
      <h2>Stamatis Karasavvidis</h2>
      <h3>Full-Stack Developer</h3>
      <a href="https://github.com/Nerevakiin/" target="_blank">Portfolio</a>
    </>
  )
}

function Buttons() {
  return (
    <>
      <div className="buttons">
        <a href="mailto:djmatisk@yahoo.gr" className="email-btn">Send Email</a>
        <a href="https://www.linkedin.com/in/stamatiskarasavvidis/" className="linkedin-btn">LinkedIn</a>
      </div>
    </>
  )
}

function Main() {
  return (
    <>
      <h3>About</h3>
      <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
        I try to keep up with security and best practices, and am always looking for new things to learn.</p>

      <h3>Interests</h3>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </>
  )
}


function Footer() {
  return (
    <>
      <a>Facebook</a>
      <a>Twitter</a>
      <a>Instagram</a>
      <a>Github</a>
    </>
    
  )
}


export default function App() {
  return (
    <>
      <BasicInfo />
      <Buttons />
      <Main />
      <Footer />
      <h1>root render here!!</h1>
    </>
  )
}


