import { useState } from "react";
import "../CSS/Search.css";

function Search(props) {
  const [location, setLocation] = useState("");

  const filteredLocations = props.reports.filter((report) =>
    report.fields.location.toLowerCase().includes(location.toLowerCase())
  );
  console.log(filteredLocations);

  return (
    <div className="typeahead">
      <input
        className="search-bar"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {location && (
        <div className="typeahead-results">
          {filteredLocations.map((report) => (
            <a
              onClick={() => setLocation("")}
              href={`/#${report.id}`}
              key={report.id}
            >
              {report.fields.location}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
