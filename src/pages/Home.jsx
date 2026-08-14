import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ntbtsImg from '../assets/images/WhatImInto/NTBTS.jpg';
import minaImg from '../assets/images/WhatImInto/Mina.jpg';
import lorelaiImg from '../assets/images/WhatImInto/BoxForStarBoxForBuddy.jpg';
import jesse2026 from '../assets/images/jesse2026.png';
import jesseSuit from '../assets/images/JesseSuit.png';
import boppoCover from "../assets/images/boppoCover.png"
import nogginCollage from '../assets/images/NogginGamesCollage2024.png';
import bfrogBG from '../assets/images/BFrogBG2.png';
import mfScreen from '../assets/images/MFScreenshot.jpg';
import ghostScreens from '../assets/images/ghoststoryscreens.png';
import gameJams from '../assets/images/gamejamscollage2.png';
import entropy from '../assets/images/EntropyGame.png';

const filmstripItems = [
    { image: boppoCover, title: "Boppo",             caption: "designed games and wrote game scripts and original story",                   link: "https://boppo.com/" },
  { image: nogginCollage, title: "Noggin Games",             caption: "produced 15+ games for Nickelodeon's Noggin platform",                   link: "https://vimeo.com/994058258" },
  { image: bfrogBG,       title: "Business Frog",            caption: "Solo-developed 2D platformer",                                           link: "https://jessesheehan.itch.io/business-frog" },
  { image: mfScreen,      title: "MineFind",                 caption: "Minesweeper-inspired puzzle game, now available on the App Store",       link: "https://apps.apple.com/us/app/minefind-puzzle-game/id6752503126" },
  { image: ghostScreens,  title: "A Terrifying Ghost Story", caption: "Creator and co-writer of a choose-your-own-adventure story",             link: "https://jessesheehan.github.io/ghoststoryboo/" },
  { image: entropy,       title: "Entropy Survivors",        caption: "Late-stage QA Tester for Moving Pieces Interactive's Entropy Survivors", link: "https://store.steampowered.com/app/2602030/Entropy_Survivors/" },
  { image: gameJams,      title: "Game Jams & More",         caption: "Visit my Itch.io to see additional smaller projects",                    link: "https://jessesheehan.itch.io/" },
];

const currentlyLoving = [
  {
    type: "FILM",
    title: "Nirvanna The Band The Show The Movie",
    image: ntbtsImg,
    note: 'Director Matt Johnson once said at a Q+A that he just wants to make movies about "silly little boys and their silly little dreams", and that vision has always stuck with me.',
  },
  {
    type: "GAME",
    title: "Mina The Hollower",
    image: minaImg,
    note: "In the late 90s, The Legend of Zelda: Link's Awakening was the very first game I finished without my dad's help. Playing Mina The Hollower, I'm back in 1998, playing my Gameboy Pocket and obsessing over every detail.",
  },
  {
    type: "ALBUM",
    title: "Box For Star, Box For Buddy, Deluxe Version",
    image: lorelaiImg,
    artist: "by This Is Lorelai",
    note: "Nate Amos pulls on your heartstrings, crumples them into a knot, and ties them back into a bow. These songs have stuck with me for well over a year, and considering the deluxe version contains the a full cover of the album by various artists, it seems I'm not the only one.",
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

            <img src={jesse2026} alt="Jesse in a blue collared shirt" className="about-image " />
            
            <div className="about-text">
              <h1>Jesse Sheehan</h1>
              <h4><i>Digital Producer & Creative Project Manager</i></h4>
              
              <p>
                I'm an award-winning producer and creative project manager, with 10+ years of industry experience.

                I've made a career out of ensuring high-quality content gets created on scope, on time, and I have the track record to prove it. 
              </p>
{/*
              <div className="hero-ctas">
                <Link to="/projects" className="btn-hero-primary">See My Work →</Link>
                 <a
                  href="https://drive.google.com/file/d/1MbBGux63VnrtZVIR6x76MpqMoNzWF2Le/view?usp=sharing"
                  className="btn-hero-secondary"
                  title="Resume"
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
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── Creative Producer + Filmstrip ── */}
      <section className="home-producer fade-in-section" ref={addRef}>
        <div className="home-producer-text">
          <h2> Producer | Project Manager | Developer | Creative</h2>
          <p>


           From award-winning kids games to self-published indie releases, I've spent years producing and designing content across a variety of mediums and audiences. Whether leading a team of artists and developers through multiple productions featuring major IP, or building and shipping a solo project from scratch, I bring the same creative rigor and passion to every product I work on.
<br/>
<br/>
            Choose from a thumbnail below to see for yourself
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
            <img src={jesseSuit} alt="Close up of Jesse in a blue suit" className="about-image" />
            <div className="about-text">
              <h2>About Me</h2>

              <p>
                I've been working as a digital producer and creative project manager for nearly 15 years. My seven years at Nickelodeon greatly influenced my producing and project management style, teaching me how to effectively communicate, balance the needs of both my production team as well as a product's users, and stay organized amongst a multitude of deadlines and production schedules. 
                </p>
             
              <p>
                More recently, I've expanded my skills to include app development, including learning to code (JS/Typescript + React, C#, SwiftUI), becoming a Certified Scrum Master, and releasing a few projects that I fully developed and shipped on my own.
              </p>
             
              <p>
                I currently reside in Brooklyn, NY with my partner and two cats.
              </p>


               {/* <p>
            I'm Jesse Sheehan, a creative digital producer, project manager, and independent developer based in Brooklyn, NY. For the past decade I've worked in kids media and digital content production, mostly as a Senior Producer at Nickelodeon's Noggin app, where I shipped 15+ branded educational games across Nick Jr. IP (PAW Patrol, Blue's Clues, Dora) as well as licensed partnerships with Hasbro, Spin Master, and The Metropolitan Museum of Art. One of those games picked up a 2024 Kidscreen Award, and around ten are still available on <i>Nick Jr. Replay</i> (Apple Arcade) and Nick.com nearly two years after Paramount sunset the Noggin app. 
          </p> 
          <p>
              
Outside of producing work, I write, design, and ship my own games and apps. MineFind is a Minesweeper-inspired puzzle game I built in Swift-UI and shipped to the App Store in 2025. Business Frog is a 2D platformer I made in Unity, mostly to learn the engine. I'm currently finishing VinylVision, an iOS app for music lovers who like to pilfer through record stores, but want to hear an album before they buy it. 
            
            I studied screenwriting and TV production at Emerson college, and have continued to strengthen my creative problem-solving muscles ever since.
          </p>
              <p>
                What else am I up to? You'll have to{" "}
                <a href="/jessemakesgames/contact">ask me</a>!
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── Currently Loving ── */}
      <section className="home-loving fade-in-section" ref={addRef}>
        <div className="home-loving-inner">
          <h2>Recent Inspiration</h2>
          <p className="loving-subtitle">Not career-related, just a few recent works of art that I love.</p>
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
