import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        searchUsers(text);
        setText("")
    }
    const onChange = (e) => {
        setText(e.target.value)
    }

    return <div>
        <form className="form" onSubmit={onSubmit}>
            <input
                type="text"
                name="text"
                placeholder="Search Users..."
                value={text}
                onChange={onChange}
            />
            <input
                type="submit"
                value="Search"
                className="btn btn-dark btn-block"
            />
        </form>
    </div>;
};

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired
}

export default Search;
