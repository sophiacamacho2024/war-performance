
import { Link } from "react-router-dom"

import semiPrivatePhoto from "../assets/images/semiprivate.jpg"
import strengthPhoto from "../assets/images/astrengthtraining.png"
import speedAgilityPhoto from "../assets/images/SpeedAgility.jpg"
import oneOnOnePhoto from "../assets/images/oneonone.png"
import facilityPhoto from "../assets/images/1indoor.jpeg"
import programPhoto from "../assets/images/program.jpg"

import training1 from "../assets/videos/training1.mp4"
import training2 from "../assets/videos/training2.mp4"
import training3 from "../assets/videos/training3.mp4"
import training4 from "../assets/videos/training4.mp4"
import training5 from "../assets/videos/training5.mp4"
import training6 from "../assets/videos/training6.mp4"
import training7 from "../assets/videos/training7.mp4"

const trainingVideos = [
  training1,
  training2,
  training3,
  training4,
  training5,
  training6,
  training7,
]

function Home() {
  return (
    <main>
      {/* VIDEO HERO */}
      <section className="war-video-hero">
        <h1 className="war-video-heading">
  <span className="war-heading-word">
    <span className="war-heading-letter">W</span>ORK.
  </span>
  <span className="war-heading-word">
    <span className="war-heading-letter">A</span>NALYTICS.
  </span>
  <span className="war-heading-word">
    <span className="war-heading-letter">R</span>ESULTS.
  </span>
</h1>

        {/* CONTINUOUSLY SCROLLING VIDEOS */}
        <div className="war-video-window">
          <div className="war-video-track">
            {[...trainingVideos, ...trainingVideos].map((video, index) => (
              <div className="war-video-panel" key={index}>
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`WAR Performance training video ${(index % 7) + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="war-video-cta">
          <h2>Are You Ready To Go To WAR?</h2>

          <a
            className="primary-button"
            href="https://book.warperformancefl.com"
            target="_blank"
            rel="noreferrer"
          >
            SIGN UP
          </a>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section id="services" className="section services-page">
        <div className="page-header">
          <p className="eyebrow">WAR Performance</p>

          <h2>What We Offer</h2>

          <p>
            Training options designed to help athletes build skills, strength,
            speed, and confidence at every stage of development.
          </p>
        </div>

        <div className="service-grid">

          {/* SEMI-PRIVATE */}
          <a
            className="card service-card"
            href="https://book.squareup.com/classes/eg87olbly7nilu/location/LB3JZQVV0F7HB/classes?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={semiPrivatePhoto}
              alt="Semi-private training at WAR Performance"
              className="service-card-image"
            />

            <div className="service-card-content">
              <h3>Semi-Private Training</h3>

              <p>
                Small-group training that gives athletes individualized coaching
                while developing sport-specific skills in a competitive
                environment.
              </p>
            </div>
          </a>

          {/* STRENGTH */}
          <a
            className="card service-card"
            href="https://book.squareup.com/classes/eg87olbly7nilu/location/LB3JZQVV0F7HB/classes?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={strengthPhoto}
              alt="Strength training at WAR Performance"
              className="service-card-image"
            />

            <div className="service-card-content">
              <h3>Strength Training</h3>

              <p>
                Structured performance training focused on building strength,
                power, durability, and total-body athleticism.
              </p>
            </div>
          </a>

          {/* SPEED & AGILITY */}
          <a
            className="card service-card"
            href="https://book.squareup.com/classes/eg87olbly7nilu/location/LB3JZQVV0F7HB/classes?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={speedAgilityPhoto}
              alt="Speed and agility training at WAR Performance"
              className="service-card-image"
            />

            <div className="service-card-content">
              <h3>Speed & Agility</h3>

              <p>
                Develop acceleration, quickness, footwork, reaction time, and
                change-of-direction skills to move faster and more efficiently.
              </p>
            </div>
          </a>

          {/* ONE-ON-ONE */}
          <a
            className="card service-card"
            href="https://book.warperformancefl.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={oneOnOnePhoto}
              alt="One-on-one training at WAR Performance"
              className="service-card-image"
            />

            <div className="service-card-content">
              <h3>One-on-One Training</h3>

              <p>
                Personalized coaching built around the individual athlete's
                specific skills, goals, strengths, and areas for improvement.
              </p>
            </div>
          </a>

          {/* FACILITY RENTALS */}
          <Link
            className="card service-card"
            to="/services"
          >
            <img
              src={facilityPhoto}
              alt="WAR Performance indoor facility"
              className="service-card-image"
            />

            <div className="service-card-content">
              <h3>Indoor Facility Rentals</h3>

              <p>
                Reserve indoor training space for individual work, extra reps,
                small groups, or full-team practices and training sessions.
              </p>
            </div>
          </Link>

          {/* 6-WEEK PROGRAM */}
          <a
            className="card service-card"
            href="https://book.warperformancefl.com/packages"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={programPhoto}
              alt="WAR Performance personalized development program"
              className="service-card-image"
            />

            <div className="service-card-content">
              <h3>6-Week Personalized Development Programs</h3>

              <p>
                Focused six-week programs built around an athlete's individual
                goals with structured coaching and progressive development.
              </p>
            </div>
          </a>

        </div>
      </section>
    </main>
  )
}

export default Home
