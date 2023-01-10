import { useState } from "react";

import Header from "./components/Header";
import ImageList from "./components/ImageList";
import "bulma/css/bulma.css";

function App() {
  const [term, setTerm] = useState("");
  const formSubmitHandler = (term) => {
    setTerm(term);
    console.log(term);
  };

  return (
    <>
      <Header onFormSubmit={formSubmitHandler} />
      <section className="section">
        <h1 className="title">Your awesome images</h1>
        <h2 className="subtitle">
          {!term
            ? "Will appear right here, let's get started!"
            : "Are right here. Enjoy!"}
        </h2>
        <ImageList term={term} />
      </section>
    </>
  );
}

export default App;
