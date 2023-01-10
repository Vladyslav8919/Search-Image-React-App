import { useRef } from "react";

const SearchInput = (props) => {
  const searchInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    props.onFormSubmission(searchInputRef.current.value);
  };

  return (
    <>
      <div className="section ">
        <form onSubmit={submitHandler}>
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input
                ref={searchInputRef}
                className="input is-rounded"
                type="text"
                placeholder="Search an image"
              />
            </p>
            <p className="control">
              <a className="button is-link is-rounded is-light">Search</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchInput;
