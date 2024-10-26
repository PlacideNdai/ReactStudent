import React from 'react';
import "../App.css";

const Home = () => {
  return (
    <div id='intro'>
      <img id="meimg" src={require("../assests/mine.jpeg")} alt="Placidei's profiles"/>
      <p id='des'>
        Hi! I’m <strong>Placide</strong>, a self-taught web designer and developer, librarian,tutor, studying IT at <strong>TCU</strong>. I’m skilled in languages like Java, JavaScript, Python, Node.js, and PHP. I <strong>love</strong> good friends, music, Faith, chess, and cookies. I learn quickly and can tackle anything with training—even flying!
      </p>
    </div>
  );
};

export default Home;
