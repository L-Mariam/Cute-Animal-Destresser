import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4> Version 1.0.0 </h4>
      <h1>About Destress with Animals</h1>
      <p>Relax and enjoy cute animal pictures!</p>
      <Link to="/"> Go Back </Link>
    </div>
  )
}

export default About