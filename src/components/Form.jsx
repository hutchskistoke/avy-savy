
import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { baseURL, config } from "../services"
import "../CSS/Form.css"

function Form(props) {
  console.log("form page props: ", props)
  
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
      const update = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/avalanches/${params.id}`
      await axios.put(update, { fields }, config)
    } else {
      await axios.post(baseURL, { fields }, config)
    }
    props.setToggleFetch((current) => !current)
    history.push("/")
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="title">Submit</div>
      <label className="location-title">Location: </label>
      <input className="location-input"
        onChange={(e) => setLocation(e.target.value)}
        name="location"
        value={location}
      />
      {/* <br /> */}
        <label className="type-title">Select Type: </label>
        <input className="type-input"
          onChange={(e) => setType(e.target.value)}
          name="type"
          value={type}
        />
      {/* <br /> */}
      <label className="date-title">Date...add calendar thingy? </label>
      <input className="date-input"
        onChange={(e) => setDate(e.target.value)}
        name="date"
        value={date}
      />
      {/* <br /> */}
      <label className="report-title">Report: </label>
      <input className="report-input"
        onChange={(e) => setReport(e.target.value)}
        type= "text area"
        name="report"
        value={report}
      />
      {/* <br /> */}
      <label className="photo-title">Photo: </label>
      <input className="photo-input"
        type="url"
        onChange={(e) => setPhoto(e.target.value)}
        name="photo"
        value={photo}
      />
      {/* <br /> */}
      <p className="pic-note">Note: photo upload accepts a URL only!</p>
      <a href="https://www.imgur.com" target="_blank" className="pic-note">(try imgur!)</a>
      {/* <br /> */}
      <button
        type="submit"
        className="submit-button">3, 2, 1... dropping!</button>
    </form>
  )
}

export default Form;