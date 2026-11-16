import cageRentalPhoto from "../assets/images/acagerentals.png"
import facilityPhoto from "../assets/images/facility.jpeg"
import birthdayPhoto from "../assets/images/birthdaypartyWAR.jpeg"

function Services() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="page-header">
        <p className="eyebrow">WAR Performance</p>

        <h1>Rentals</h1>

        <p>
          Get the space you need to train. Rent a cage for individual work
          or reserve the facility for your team's practice.
        </p>
      </section>

      {/* RENTAL OPTIONS */}
      <section className="section services-page">
        <div className="rental-grid">

          {/* CAGE RENTAL */}
          <div className="card rental-card">
            <img
              src={cageRentalPhoto}
              alt="Cage rental at WAR Performance"
              className="rental-card-image"
            />

            <div className="rental-card-content">
              <h3>Rent a Cage?</h3>

              <p>
                Get your extra reps in with access to our indoor training
                facility. Perfect for hitting, pitching, individual workouts,
                or small-group training.
              </p>

              <a
                className="primary-button rental-book-button"
                href="https://book.squareup.com/appointments/eg87olbly7nilu/location/LB3JZQVV0F7HB/services/YDJ4UJF5AJGQKOWCKVVZTOVZ"
                target="_blank"
                rel="noreferrer"
              >
                Book a Cage
              </a>
            </div>
          </div>

          {/* FACILITY RENTAL */}
          <div className="card rental-card">
            <img
              src={facilityPhoto}
              alt="WAR Performance facility rental"
              className="rental-card-image"
            />

            <div className="rental-card-content">
              <h3>Rent the Facility?</h3>

              <p>
                Bring the whole team. Reserve the WAR Performance facility
                for practices, workouts, team training, and corporate events.
              </p>

              <a
                className="primary-button rental-book-button"
                href="tel:5612995804"
              >
                Call Now to Book!
              </a>
            </div>
          </div>

          {/* Birthday Parties */}
          <div className="birthday-card-wrapper">
            <div className="card rental-card">
              <img
                src={birthdayPhoto}
                alt="Birthday party at WAR Performance"
                className="rental-card-image"
              />

              <div className="rental-card-content">
                <h3>Birthday Parties at WAR Performance!</h3>

                <p>
                  Make your child's birthday special with a party at our
                  state-of-the-art facility. Contact us to learn more about
                  how we can make your child's birthday unforgettable.
                </p>

                <a
                  className="primary-button rental-book-button"
                  href="tel:5612995804"
                >
                  Contact Us!
                </a>
              </div>
             </div>
            </div>
          </div>

      </section>
    </main>
  )
}

export default Services