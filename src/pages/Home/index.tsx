import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="about">About Us</Link>
    </div>
  )
}

export default HomePage
