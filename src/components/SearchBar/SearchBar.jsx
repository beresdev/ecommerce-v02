
function SearchBar({ handleSearch, searchTerm }) {
    return (
      <form>
        <p>Filter & Sort</p>
        <input type="text" onChange={handleSearch} value={searchTerm} />
      </form>
    )
  }

export { SearchBar }