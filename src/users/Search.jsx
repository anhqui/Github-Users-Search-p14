import { useState } from "react";

const Search = () => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(text);


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

export default Search;
