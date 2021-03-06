
import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { queryURL, baseURL, config } from "../services"
import "../CSS/Form.css"

function Form(props) {
  
  const [location, setLocation] = useState("")
  const [type, setType] = useState("")
  const [date, setDate] = useState("")
  const [report, setReport] = useState("")
  const [photo, setPhoto] = useState("")
  const history = useHistory()
  const params = useParams()

  useEffect(() => {
    if (props.reports.length > 0 && params.id) {
      const hasReport = props.reports.find((report) => report.id === params.id)
      if (hasReport) {
        setLocation(hasReport.fields.location)
        setType(hasReport.fields.type)
        setDate(hasReport.fields.date)
        setReport(hasReport.fields.report)
        setPhoto(hasReport.fields.photo)
      }
    }
  }, [props.reports, params.id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      location,
      type,
      date,
      report,
      photo,
    }
    if (params.id) {
      const update = `${queryURL}/${params.id}`
      await axios.put(update, { fields }, config)
    } else {
      await axios.post(queryURL, { fields }, config)
    }
    props.setToggleFetch((current) => !current)
    history.push("/")
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="title">Submit your own report</div>
      <label className="location-title">Location: </label>
      <input className="location-input"
        onChange={(e) => setLocation(e.target.value)}
        name="location"
        value={location}
      />

      <label className="type-title">Select Type: </label>
      <select className="type-input"
          name="type"
          value={type}  
          onChange={(e) => setType(e.target.value)} >
        <option className="type-input" value="dropdown">Select Type: </option>
        <option className="type-input" value="avalanche">Avalanche </option>
        <option className="type-input" value="observation">Observation </option>
        </select>

      <label className="date-title">Date: </label>
      <input className="date-input"
        type="date"
        onChange={(e) => setDate(e.target.value)}
        name="date"
        value={date}
      />

      <label className="report-title">Report: </label>
      <textarea className="report-input"
        onChange={(e) => setReport(e.target.value)}
        type= "text"
        name="report"
        value={report}
      />

      <label className="photo-title">Photo: </label>
      <input className="photo-input"
        type="url"
        onChange={(e) => setPhoto(e.target.value)}
        name="photo"
        value={photo}
      />

      <p className="pic-note">Note: photo upload accepts a URL only!</p>
      <a href="https://www.imgur.com" target="_blank" className="pic-note">(try imgur!)</a>

      <button
        type="submit"
        className="submit-button">3, 2, 1... dropping!</button>
    </form>
  )
}

export default Form;


// Drop down menu help from Dawit! (lines 60-68)