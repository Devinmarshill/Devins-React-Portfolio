export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section className="left-side" id="work">

        <h1 className="title"></h1>
        <section className="section-container">
          <section id="image1">
            <img src="RM Generator.png" alt="Readme Generator" id="image1" />
          </section>
          <section className="card">
            <img src="Note Taker.png" alt="Note Taker" />
            <h3>Devins Note Taker</h3>
          </section>

          <section className="card">
            <img src="Code Quiz.png" alt="Code Quiz" />
            <h3>Code Quiz</h3>
          </section>

          <section className="card">
            <img src="Social Network API.png" alt="Social Network API" />
            <h3>Social Network API</h3>
          </section>
          </section>
        </section>
    </div>
  );
}
