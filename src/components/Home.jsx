import axios from "axios";
import { baseURL, config } from "../services"
import { Link } from "react-router-dom"
import '../CSS/Home.css';

function Home(props) {
  // console.log("Homepage props: ", props)

  const remove = async () => {
    const toBeDeleted = `${baseURL}/${props.report.id}`
    await axios.delete(toBeDeleted, config)
    props.setToggleFetch((current) => !current)
  }
 
  const {date, location, report, type} = props.report.fields
  return (
    <div className="home-parent">
      {/* <h2>THIS IS THE HOME PAGE</h2> */}
      <h4>{location}</h4>
      <p>({type})</p>
      <h5>{date}</h5>
      <p>{report}</p>
      <button
        className="delete-button"
        onClick={remove}>Delete Post</button>
      <Link to={`/edit/${props.report.id}`}>
        <button
        className="edit-button">Edit Report</button>
      </Link>
    </div>
  )
}

export default Home;