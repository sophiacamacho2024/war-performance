import cageRentalPhoto from "../assets/images/acagerentals.png"
import facilityPhoto from "../assets/images/facility.jpeg"

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
              <h3>Rent the Facility for Team Practice?</h3>

              <p>
                Bring the whole team. Reserve the WAR Performance facility
                for practices, workouts, team training, and organized
                development sessions.
              </p>

              <a
                className="primary-button rental-book-button"
                href="tel:5612995804"
              >
                Call Now to Book!
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Services