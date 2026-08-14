import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
//images
import BFrogLogo from "../assets/images/BFrogLogo.png"
import BFrogGameplay from "../assets/images/BFrogBG2.png"
import EntropyLogo from "../assets/images/EntropyLogo.png"
import MFLogo from "../assets/images/MFLogo.png"
import MFScreenshot from "../assets/images/MFScreenshot.jpg"
import EntropyGame from "../assets/images/EntropyGame.png"
import ghostLogo from "../assets/images/ghoststoryLogo.png"
import ghostGame from "../assets/images/ghoststoryScreens.png"
import nogginGames from "../assets/images/NogginGamesCollage2024.png"
import nogginLogo from "../assets/images/nogginlogo.png"
import gameJamsCollage from "../assets/images/gamejamscollage2.png"
import boppoTop from "../assets/images/BoppoTopView.png"
import boppoCover from "../assets/images/boppoCover.png"


function Projects() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  
  const projects = [
    {
      title: "Boppo",
      role: "Game Designer, Writer",
      completionDate: "Winter/Spring 2026",
      description: "Designed games and wrote scripts and an original story for Boppo, the screenless tablet for kids.",
      image: boppoTop,
      caption: "Learn more about Boppo",
      link: "https://boppo.com",
      backgroundImage: boppoCover
    },
    {
      title: "MineFind",
      role: "Creator, Game Designer, Developer",
      completionDate: "October 2025",
      description: "My take on the classic minefinding puzzle game, and my first published app on the app store. I created this game in 6 weeks as a learning exercise, to great success!",
      image: MFLogo,
      caption: "Download MineFind on the App Store",
      link: "https://apps.apple.com/us/app/minefind-puzzle-game/id6752503126",
      backgroundImage: MFScreenshot
    },
    {
      title: "Business Frog",
      role: "Creator, Game Designer, Developer",
      completionDate: "July 2023",
      description: "I hand-crafted this hardcore 2D platformer about a frog who needs to get to work on time. During the 6 months it took to create this game, I completed designed the levels and game mechanics, completed multiple rounds of playtesting, and even composed the soundtrack, while managing a handful of friends who helped out with the artwork. Very proud of this one.",
      image: BFrogLogo,
      caption: "Play Business Frog",
      link: "https://jessesheehan.itch.io/business-frog",
      backgroundImage: BFrogGameplay
    },
    {
        title: "Noggin Games",
        role: "Lead Game Designer and Senior Producer of HTML5 Games",
        completionDate: "July 2020-February 2024",
        description: "Led HTML5/web game production for Nickelodeon's Noggin platform, where I oversaw development for each of my 18 games from concept to launch. Collaborated closely with artists and developers to craft innovative mechanics, write engaging scripts, and ensure both creative vision and technical execution met high-quality standards. (I do not own these games, they are property of Nickelodeon)",
        image: nogginLogo,
        caption: "Watch my Noggin Games reel",
        link: "https://vimeo.com/994058258",
        backgroundImage: nogginGames
      },
      {
        title: "A Terrifying Ghost Story",
        role: "Co-Creator and Developer",
        completionDate: "October 2024",
        description: "A terrifying choose-your-own-adventure about a ghost looking for closure in the afterlife. For this project, I worked with a close friend who created the artwork. Together we wrote the story, while I handled the programming.",
        image: ghostLogo,
        caption: "Play A Terrifying Ghost Story",
        link: "https://jessesheehan.github.io/ghoststoryboo/",
        backgroundImage: ghostGame
      },
    {
      title: "Entropy Survivors",
      role: "QA Tester",
      completionDate: "Fall 2024",
      description: "QA Tester for Entropy Survivors, a bullet hell roguelike by Moving Pieces Interactive. I was responsible for playing the game and reporting my progress to the devs who were working on player progression and game balance. I also submitted bugs and other feedback via JIRA. (I do not own this game, it is property of Moving Pieces Interactive)",
      image: EntropyLogo,
      caption: "Visit Entropy Survivors on Steam",
      link: "https://store.steampowered.com/app/2602030/Entropy_Survivors/",
      backgroundImage: EntropyGame
    },
    {
      title: "Game Jams and More!",
      role: "Various Titles",
      completionDate: "2019-2025",
      description: "Check out my Itch.io page for projects from past game jams and more! I did not make the majority of this artwork, but I did participate in each project in roles such as a programmer, designer, and QA Tester.",
      image: gameJamsCollage,
      caption: "Visit my Itch.io page",
      link: "https://jessesheehan.itch.io/",
      backgroundImage: gameJamsCollage
    },
   
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });

    // Scroll handling
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Check if at bottom
      const bottomThreshold = 100; // pixels from bottom
      const isAtBottom = 
        window.innerHeight + window.pageYOffset >= 
        document.documentElement.scrollHeight - bottomThreshold;
      
      setIsBottom(isAtBottom);

      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // Set new timeout
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Projects</h1>
        <p className="projects-intro">
          My portfolio of personal and professional projects
        </p>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
        <div className={`scroll-indicator ${(isScrolling || isBottom) ? 'hidden' : ''}`}>
          <p className="scroll-text">Scroll to see more</p>
          <div className="scroll-arrows">
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
