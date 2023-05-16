const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Introduction</h3>
            <h3 className="title">Traveler | Full-Stack Developer</h3>
            <p className="desc">
              I'm a globetrotting adventurer turned Full-Stack Developer,
              blending my love for diverse cultures and languages with the
              exciting world of coding. With an insatiable thirst for knowledge,
              I'm always seeking new challenges and pushing the boundaries of
              what's possible in tech. Let's embark on a thrilling journey
              together, creating impactful experiences that leave a lasting
              impression in the digital realm. Join me and let's make magic
              happen, one line of code at a time!
            </p>
            <img src="img/mySignature.png" alt="image" />
          </div>
          {/* /Main Title */}
        </div>
      </div>
    </section>
  );
};

export default Home;
