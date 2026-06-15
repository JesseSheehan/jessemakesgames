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
  { image: nogginCollage, title: "Noggin Games",             caption: "18 games for Nickelodeon's Noggin platform", link: "https://vimeo.com/994058258" },
  { image: bfrogBG,       title: "Business Frog",            caption: "Solo-developed 2D platformer",               link: "https://jessesheehan.itch.io/business-frog" },
  { image: mfScreen,      title: "MineFind",                 caption: "Original puzzle game on the App Store",      link: "https://apps.apple.com/us/app/minefind-puzzle-game/id6752503126" },
  { image: ghostScreens,  title: "A Terrifying Ghost Story", caption: "Collaborative choose-your-own-adventure",    link: "https://jessesheehan.github.io/ghoststoryboo/" },
  { image: entropy,       title: "Entropy Survivors",        caption: "Freelance QA for Moving Pieces Interactive", link: "https://store.steampowered.com/app/2602030/Entropy_Survivors/" },
  { image: gameJams,      title: "Game Jams & More",         caption: "Assorted indie projects and game jams",      link: "https://jessesheehan.itch.io/" },
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
              <h1>Jesse Sheehan</h1>
              <h4><i>Creative x Project Manager</i></h4>
              <br />
              <p>
               Thanks for visiting my website! 
              </p>
              <p>
                I've been working in various forms of media production for 15 years from web series to animation to app and game development, and I'm looking for my next exciting opportunity.
              </p>

              <div className="hero-ctas">
                <Link to="/projects" className="btn-hero-primary">See My Work →</Link>
                <a
                  href="https://drive.google.com/file/d/1YE7U2cFXtcfLy-DsECjDRkHNxXssQatn/view?usp=sharing"
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
          <h2>Creative Producer, Project Manager, and More!</h2>
          <p>
           From award-winning kids games to self-published indie releases, I've spent years producing and designing content across a wide range of scales and audiences. Whether leading a team of artists and developers through an 18-game slate for a major IP, or building and shipping a solo project from scratch, I bring the same creative rigor and production focus to everything I work on.

I've shipped licensed Nickelodeon properties and original IP alike — and I love both sides of that coin.
          </p>
        </div>

        <div className="filmstrip-wrapper">
          <div className="filmstrip">
            {filmstripItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="filmstrip-card"
              >
                <img src={item.image} alt={item.title} className="filmstrip-img" />
                <div className="filmstrip-caption">
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </div>
              </a>
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
            I'm Jesse Sheehan, a creative producer, project manager, and independent creator based in Brooklyn. For the past decade I've worked in kids media and digital content production, mostly as a Senior Producer at Nickelodeon's Noggin app, where I shipped 15+ branded educational games across Nick Jr. IP (PAW Patrol, Blue's Clues, Dora) as well as licensed partnerships with Hasbro, Spin Master, and The Metropolitan Museum of Art. One of those games picked up a 2024 Kidscreen Award, and around ten of which are still running on <i>Nick Jr. Replay</i> (Apple Arcade) and Nick.com nearly two years after Paramount sunset the Noggin app. 
          </p> <p>
              
Outside of producing work, I write, design, and ship my own games and apps. MineFind is a Minesweeper-inspired puzzle game I built in Swift-UI and shipped to the App Store in 2025. Business Frog is a 2D platformer I made in Unity, mostly to learn the engine. I'm currently finishing VinylVision, an iOS app for music lovers who like to pilfer through record stores, but want to hear an album before they buy it. 
            
            I studied screenwriting and TV production at Emerson college, and have continued to strenghten my prcreative problem solving muscles
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
