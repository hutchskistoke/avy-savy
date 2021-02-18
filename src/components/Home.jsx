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
 
  const {date, location, report, type, photo} = props.report.fields
  return (
    <div className="home-parent">
      {/* <h2>THIS IS THE HOME PAGE</h2> */}
      <h4 className="loc">{location}</h4>
      <p className="type">({type})</p>
      <h5 className="date">{date}</h5>
      <p className="report">{report}</p>
      {photo ? <img className="pic" src={photo} alt="avalanche"></img> : null}
      <button
        className="delete-button"
        onClick={remove}>Delete Post</button>
      <Link to={`/edit/${props.report.id}`}
        className="edit-button">
        <button>Edit Report</button>
      </Link>
    </div>
  )
}

export default Home;