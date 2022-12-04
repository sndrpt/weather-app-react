import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="row g-3 input-form" id="input-form">
        <div className="col-6">
          <div className="input-group mb-3">
            <input
              className="form-control"
              id="searchBar"
              type="text"
              autofocus="on"
              autocomplete="off"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="col-6 button-column">
          <button
            type="submit"
            className="btn search-button mb-3"
            id="search-button"
          >
            Search
          </button>
          <button
            type="submit"
            className="btn search-location-button mb-3"
            id="location-button"
          >
            My location
          </button>
        </div>
      </form>
    </div>
  );
}
