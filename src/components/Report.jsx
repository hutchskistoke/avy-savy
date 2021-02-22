import axios from "axios";
import { queryURL, baseURL, config } from "../services";
import { Link } from "react-router-dom";
import "../CSS/Report.css";

function Report(props) {
  // console.log("Homepage props: ", props)

  const remove = async () => {
    const toBeDeleted = `${queryURL}/${props.report.id}`;
    await axios.delete(toBeDeleted, config);
    props.setToggleFetch((current) => !current);
  };

  const { date, location, report, type, photo } = props.report.fields;
  return (
    <div className="home-parent" id={props.report.id}>
      <div className="loc">{location}</div>
      <div className="type">({type})</div>
      <div className="date">{date}</div>
      <div className="report">{report}</div>
      <img className="pic" src={photo} alt={location} />
      <button className="delete-button" onClick={remove}>
        Delete Post
      </button>
      <Link to={`/edit/${props.report.id}`}>
        <div className="edit-button">Edit Report</div>
      </Link>
    </div>
  );
}

export default Report;
