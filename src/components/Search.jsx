
import { useState } from "react";


function Search(props) {

  const [location, setLocation] = useState("")

  const filteredLocations = props.reports.filter((report) => report.fields.location.toLowerCase().includes(location.toLowerCase()));
  console.log(filteredLocations);

  return (
    <div className="typeahead">
      <input
        className="search-bar"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="typeahead-results">
        {location && filteredLocations.map((report) => (
          <p key={report.id}>{report.fields.location}</p>
        ))}
      </div>
    </div>
  );
};

export default Search;