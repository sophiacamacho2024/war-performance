import { useState } from "react"

const faqs = [
  {
    question: "What ages do you train?",
    answer:
      "WAR Performance works with athletes of all ages and skill levels, from young athletes learning the fundamentals to high school, college, and professional players.",
  },
  {
    question: "Do you offer both baseball and softball training?",
    answer:
      "Yes. WAR Performance provides training for both baseball and softball athletes, with coaches specializing in hitting, pitching, catching, strength, speed, agility, and overall player development.",
  },
  {
    question: "What is semi-private training?",
    answer:
      "Semi-private training allows athletes to train in a small-group environment while still receiving individualized coaching and instruction. It combines personalized development with the energy and competition of training alongside other athletes.",
  },
  {
    question: "Do you offer one-on-one lessons?",
    answer:
      "Yes. WAR Performance offers one-on-one training for athletes who want individualized coaching focused on their specific skills, goals, strengths, and areas for improvement.",
  },
  {
    question: "Can I choose which coach I train with?",
    answer:
      "Yes. Visit our Meet the Team page to learn more about each coach's specialties and select the coach who best fits your athlete's training needs.",
  },
  {
    question: "How do I book a training session?",
    answer:
      "Training sessions can be booked online through WAR Performance. Choose the training option or coach you're interested in and follow the booking link to view availability.",
  },
  {
    question: "What are the 6-Week Personalized Development Programs?",
    answer:
      "Our 6-Week Personalized Development Programs provide focused, structured training built around an athlete's individual goals. Each program is designed to create consistent development and measurable progress over the six-week period.",
  },
  {
    question: "Can I rent a cage without booking a training session?",
    answer:
      "Yes. Individual cage rentals are available for athletes who want extra reps or independent training time. Visit our Rentals page to book a cage.",
  },
  {
    question: "Can teams rent the entire facility?",
    answer:
      "Yes. Teams can reserve the WAR Performance facility for practices, workouts, team training, and organized development sessions. Visit our Rentals page for more information.",
  },
  {
    question: "What technology does WAR Performance use?",
    answer:
      "WAR Performance incorporates performance technology and analytics into athlete development to help players better understand their performance and track measurable progress.",
  },
  {
    question: "Where is WAR Performance located?",
    answer:
      "WAR Performance is located at 5801 Congress Ave, Boca Raton, FL 33487.",
  },
  {
    question: "Still have a question?",
    answer:
      "Visit our Contact page to call, email, or message WAR Performance and our team will help you find the information you need.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main>
      {/* PAGE HEADER */}
      <section className="page-header">
        <p className="eyebrow">WAR Performance</p>
        <h1>Frequently Asked Questions</h1>

        <p>
          Everything you need to know about training, booking, and getting
          started at WAR Performance.
        </p>
      </section>

      {/* FAQ SECTION */}
      <section className="section faq-section">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default FAQ