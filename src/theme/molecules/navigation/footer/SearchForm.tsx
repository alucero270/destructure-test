import Box from "../../elements/Box"

const SearchForm = () => {
  return (
    <Box className="et_search_outer">
      <div className="container et_search_form_container">
        <form
          role="search"
          method="get"
          className="et-search-form"
          action="https://www.elegantthemes.com/layouts/"
        >
          <input
            type="search"
            className="et-search-field"
            placeholder="Search …"
            value=""
            name="s"
            title="Search for:"
          />{" "}
        </form>
        <span className="et_close_search_field"></span>
      </div>
    </Box>
  )
}
export default SearchForm
