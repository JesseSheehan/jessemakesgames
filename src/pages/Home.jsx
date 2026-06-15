import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ntbtsImg from '../assets/images/WhatImInto/NTBTS.jpg';
import minaImg from '../assets/images/WhatImInto/Mina.jpg';
import lorelaiImg from '../assets/images/WhatImInto/BoxForStarBoxForBuddy.jpg';
import jessemario from '../assets/images/jessemario.png';
import jessebeatles from '../assets/images/JesseBeatles.png';
import nogginCollage from '../assets/images/NogginGamesCollage2024.png';
import bfrogBG from '../assets/images/BFrogBG2.png';
import mfScreen from '../assets/images/MFScreenshot.jpg';
import ghostScreens from '../assets/images/ghoststoryscreens.png';
import gameJams from '../assets/images/gamejamscollage2.png';
import entropy from '../assets/images/EntropyGame.png';

const filmstripItems = [
  { image: nogginCollage, title: "Noggin Games",            caption: "18 games for Nickelodeon's Noggin platform" },
  { image: bfrogBG,       title: "Business Frog",           caption: "Solo-developed 2D platformer" },
  { image: mfScreen,      title: "MineFind",                caption: "Original puzzle game on the App Store" },
  { image: ghostScreens,  title: "A Terrifying Ghost Story", caption: "Collaborative choose-your-own-adventure" },
  { image: entropy,       title: "Entropy Survivors",       caption: "Freelance QA for Moving Pieces Interactive" },
  { image: gameJams,      title: "Game Jams & More",        caption: "Assorted indie projects and game jams" },
];

const currentlyLoving = [
  {
    type: "FILM",
    title: "Nirvanna The Band The Show The Movie",
    image: ntbtsImg,
    note: "Director Matt Johnson once said at a QA that he just wants to make moves about silly little boys and their silly little dreams, and that's always stuck with me.",
  },
  {
    type: "GAME",
    title: "Mina The Hollower",
    image: minaImg,
    note: "The Legend of Zelda: Link's Awakening was one of the first games I beat on my own. Playing Mina, I'm transported back to 1998, playing my Gameboy Pocket and obsessing over every detail.",
  },
  {
    type: "ALBUM",
    title: "Box For Star, Box For Buddy, Deluxe Version",
    image: lorelaiImg,
    artist: "by This Is Lorelai",
    note: "Nate Amos pulls on your heartstrings, crumples them into a knot, and then ties them in a bow. These songs have stuck with me for well over a year at this point, and with a full album cover by various artists in the deluxe version, it seems I'm not the only one.",
    imgBg: "#b31f27",
    imgContain: true,
  },
];

function Home() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in-visible");
        });
      },
      { threshold: 0.12 }
    );
    fadeRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <div>

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="about-container home-hero-inner">
          <div className="about-content">
            <img src={jessemario} alt="Jesse at Super Nintendo World" className="about-image" />
            <div className="about-text">
              <h1>Jesse Sheehan Makes Games</h1>
              <h4><i>and he's excited to tell you about them!</i></h4>
              <br />
              <p>
                After 30 years of playing games, I'm excited to be making them! Over the past few years,
                I've pivoted my career from TV production to gaming — learning to design and code games
                using Unity and Godot, while working full-time as a producer and designer for
                Nickelodeon's Noggin app.
              </p>
              <p>
                I've been making and producing games for a while now, and I'm excited to share my
                process through this website!
              </p>

              <div className="hero-ctas">
                <Link to="/projects" className="btn-hero-primary">See My Work →</Link>
                <a
                  href="#"
                  className="btn-hero-secondary"
                  title="Resume — swap this href for your actual link"
                >
                  📄 Resume
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1HaevMyWRhY0ulWJy1dqwen0zamSZU8xd?usp=sharing"
                  className="btn-hero-secondary"
                  title="Portfolio"
                >
                  📁 Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Creative Producer + Filmstrip ── */}
      <section className="home-producer fade-in-section" ref={addRef}>
        <div className="home-producer-text">
          <h2>Creative Producer &amp; Game Designer</h2>
          <p>
            From Nickelodeon's flagship kids' platform to self-published indie releases, I've spent years
            producing and designing games across a wide range of scales and audiences. Whether leading a
            team of artists and developers through an 18-game slate for a major IP, or building and
            shipping a solo project from scratch, I bring the same creative rigor and production focus
            to everything I work on.
          </p>
          <p>
            I've shipped licensed Nickelodeon properties and original IP alike — and I love both sides
            of that coin.
          </p>
        </div>

        <div className="filmstrip-wrapper">
          <div className="filmstrip">
            {filmstripItems.map((item, i) => (
              <div className="filmstrip-card" key={i}>
                <img src={item.image} alt={item.title} className="filmstrip-img" />
                <div className="filmstrip-caption">
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="filmstrip-hint">← scroll to see more →</p>
        </div>
      </section>

      {/* ── About ── */}
      <section className="home-about fade-in-section" ref={addRef}>
        <div className="about-container">
          <div className="about-content">
            <img src={jessebeatles} alt="Jesse" className="about-image" />
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Hailing from the exotic suburbs of Connecticut, I now reside within a{" "}
                <strike>rent-stabilized apartment</strike> <i>luxurious bungalow</i> in Brooklyn, NY.
                After studying screenwriting and TV production at Emerson College, I began my career in
                Los Angeles voiceover and animation studios before returning to the east coast. There, I
                joined Nickelodeon's game department and throughout my tenure there, directed 18 games for
                their (now defunct) Noggin app.
              </p>
              <p>
                While off the clock, I spent my free time focusing on learning to code and understand game
                development. I completed a full-stack web development bootcamp via Columbia University,
                learned iOS app development, and created a handful of games using Unity and Godot. I've
                fallen in love with game design and enjoy creating games as a form of social commentary –
                but I've also been known to make pixel art games about white collar frogs or surfing
                flamingos.
              </p>
              <p>
                I've been looking for full-time work since Noggin closed its doors in 2024, but that
                doesn't mean I haven't been busy. Over the past year, I've become a Certified ScrumMaster,
                freelanced as a QA Tester for the game "Entropy Survivors", and recently completed a video
                game writing intensive via Gotham Writers Workshop. Additionally, I've participated in
                several game jams, released a couple games, and began designing a game for a smaller indie
                LLC.
              </p>
              <p>
                What else am I up to? You'll have to{" "}
                <a href="/jessemakesgames/contact">ask me</a>!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Currently Loving ── */}
      <section className="home-loving fade-in-section" ref={addRef}>
        <div className="home-loving-inner">
          <h2>What I'm Into Right Now</h2>
          <p className="loving-subtitle">Not gaming-related, just things making me happy lately.</p>
          <div className="loving-grid">
            {currentlyLoving.map((item, i) => (
              <div className="loving-card" key={i}>
                <div
                className="loving-img-wrap"
                style={item.imgBg ? { backgroundColor: item.imgBg } : {}}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`loving-img${item.imgContain ? ' loving-img--contain' : ''}`}
                />
              </div>
                <div className="loving-card-body">
                  <span className="loving-type">{item.type}</span>
                  <h3 className="loving-title">{item.title}</h3>
                  {item.artist && <p className="loving-artist">{item.artist}</p>}
                  <p className="loving-note">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
