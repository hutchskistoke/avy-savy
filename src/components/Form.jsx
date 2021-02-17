
import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { baseURL, config } from "../services"

function Form(props) {
  console.log("form page props: ", props)
  
  const [location, setLocation] = useState("")
  const [type, setType] = useState("")
  const [date, setDate] = useState("")
  const [report, setReport] = useState("")
  const history = useHistory()
  // const params = useParams()

  // useEffect(() => {
  //   if (props.reports.length > 0 && useParams.id) {
  //     const hasReport = props.reports.find((report) => report.id === params.id)
  //   }
  //   if (hasReport) {
  //     setLocation(hasReport.fields.location)
  //     setType(props.fields.type)
  //     setDate(props.fields.date)
  //     setReport(props.fields.report)
  //   }
  // }, [props.reports, params.id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      location,
      type,
      date,
      report
    }
    console.log("fields: ", fields)
    await axios.post(baseURL, { fields }, config)
    props.setToggleFetch((current) => !current)
    history.push("/")
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label>Location: </label>
      <input
        onChange={(e) => setLocation(e.target.value)}
        name="location"
        value={location}
      />
      <br />
      <label>Change to dropdown? </label>
      <input
        onChange={(e) => setType(e.target.value)}
        name="type"
        value={type}
      />
      <br />
      <label>Date...add calendar thingy? </label>
      <input
        onChange={(e) => setDate(e.target.value)}
        name="date"
        value={date}
      />
      <br />
      <label>Report: </label>
      <input
        onChange={(e) => setReport(e.target.value)}
        type= "text area"
        name="report"
        value={report}
      />
      <br />
      <button type="submit">3, 2, 1... dropping!</button>
    </form>
  )
}

export default Form;