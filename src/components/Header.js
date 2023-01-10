import SearchInput from "./SearchInput";

const Header = (props) => {
  const formSubmissionHandler = (term) => {
    props.onFormSubmit(term);
  };

  return (
    <>
      <section className="hero is-warning">
        <div className="hero-body">
          <p className="title">The Pics</p>
          <p className="subtitle">Searching images app</p>
        </div>
        <SearchInput onFormSubmission={formSubmissionHandler} />
      </section>
    </>
  );
};

export default Header;
