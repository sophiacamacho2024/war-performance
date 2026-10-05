function Services() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">WAR Performance</p>
        <h1>Rentals</h1>

        <p>
          Get the space you need to train. Rent a cage for individual work
          or reserve the facility for your team's practice.
        </p>
      </section>

      <section className="section services-page">
        <div className="service-grid rental-grid">

          {/* CAGE RENTAL */}
          <div className="card">
            <span className="card-number"></span>

            <h3>Rent a Cage?</h3>

            <p>
              Get your extra reps in with access to our indoor training
              facility. Perfect for hitting, pitching, individual workouts,
              or small-group training.
            </p>
          </div>

          {/* TEAM FACILITY RENTAL */}
          <div className="card">
            <span className="card-number"></span>

            <h3>Rent the Facility for Team Practice?</h3>

            <p>
              Bring the whole team. Reserve the WAR Performance facility
              for practices, workouts, team training, and organized
              development sessions.
            </p>
          </div>

        </div>

        <div className="rental-call">
          <a
            className="primary-button"
            href="tel:5612995804"
          >
            Call Now to Book!
          </a>
        </div>
      </section>
    </main>
  )
}

export default Services