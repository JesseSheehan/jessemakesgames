import React from "react";
import jessebeatles from '../assets/images/JesseBeatles.png';

function About() {
  return (
    <div className="about-container mt-5">
      <div className="about-content">
        <img src={jessebeatles} alt="Jesse looking quite tired" className="about-image" />
        <div className="about-text">
          <h1>About Me</h1>

          <p>
            Hailing from the exotic suburbs of Connecticut, I now reside within a{" "}
            <strike>rent-stabilized apartment</strike> <i>luxurious bungalow</i> in Brooklyn, NY. After
            studying screenwriting and TV production at Emerson College, I began my career in Los Angeles
            voiceover and animation studios before returning to the east coast. There, I joined
            Nickelodeon's game department and throughout my tenure there, directed 18 games for their (now
            defunct) Noggin app.
          </p>

          <p>
            While off the clock, I spent my free time focusing on learning to code and understand game
            development. I completed a full-stack web development bootcamp via Columbia University, learned
            iOS app development, and created a handful of games using Unity and Godot. I've fallen in love
            with game design and enjoy creating games as a form of social commentary – but I've also been
            known to make pixel art games about white collar frogs or surfing flamingos.
          </p>

          <p>
            I've been looking for full-time work since Noggin closed its doors in 2024, but that doesn't
            mean I haven't been busy. Over the past year, I've become a Certified ScrumMaster, freelanced
            as a QA Tester for the game "Entropy Survivors", and recently completed a video game writing
            intensive via Gotham Writers Workshop. Additionally, I've participated in several game jams,
            released a couple games, and began designing a game for a smaller indie LLC.
          </p>

          <p>
            What else am I up to? You'll have to <a href="/jessemakesgames/contact">ask me</a>!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
