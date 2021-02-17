
import './CSS/App.css';
import { Link, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { baseURL, config } from "./services"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Form from "./components/Form"
import About from "./components/About"
import axios from 'axios';


function App() {

  const [reports, setReports] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const findReports = async () => {
      const response = await axios.get(baseURL, config)
      console.log(response.data.records)
      setReports(response.data.records)
    }
    findReports()
  }, [toggleFetch])


  return (
    <div className="App">
      <h1>slip slidin' away</h1>
      <Nav />
      <Route exact path="/">
        <div>
          {reports.map((report) => (
            <Home
              key = {reports.id}
              report={report}
              setToggleFetch = {setToggleFetch}
            />
          ))}
        </div>
      </Route>
      <Route path="/new">
        <Form
          reports={reports}
          setToggleFetch={setToggleFetch}
        />
      </Route>
    </div>
  );
}

export default App;
