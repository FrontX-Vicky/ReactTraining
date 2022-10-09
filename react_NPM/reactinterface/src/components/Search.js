import { BiSearch, BiCatetDown } from "react-icons/bi"


const Search = () => {
    return (

        <div className="py-5">
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex item-center pointer-events-none">
                    <BiSearch />
                    <label htmlFor="query" className="sr-only" />
                </div>
                <input type="text" name="query" id="query" value=""/>
            </div>
        </div>
    )
}

export default Search;