
import './App.css';
import { Link, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { baseURL, config } from "./services"
import Report from "./components/Report"
import Nav from "./components/Nav"
import Form from "./components/Form"
import About from "./components/About"
import Footer from "./components/Footer"
import axios from 'axios';


function App() {

  const [reports, setReports] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const findReports = async () => {
      const response = await axios.get(baseURL, config)
      setReports(response.data.records)
    }
    findReports()
  }, [toggleFetch])


  return (
    <div className="App">
      <Nav reports={reports}/>

      <Route exact path="/">
        <div className="reports-container">
          {reports.map((report) => (
            <Report
              key={report.id}
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
      <Route path="/edit/:id">
        <Form
          key={reports.id}
          reports={reports}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
