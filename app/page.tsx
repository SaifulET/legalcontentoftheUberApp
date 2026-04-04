const audienceSections = [
  {
    title: "Rider Section",
    badge: "For Passengers",
    description:
      "Riders can book trips quickly, view estimated fares, track the assigned driver live, and review ride details from pickup to destination.",
    points: [
      "Pickup and destination selection with a clear booking flow",
      "Real-time ride tracking, trip status, and ride history visibility",
      "In-app payments, fare breakdowns, and post-trip support access",
    ],
  },
  {
    title: "Driver Section",
    badge: "For Drivers",
    description:
      "Drivers can manage their working status, respond to ride requests, review earnings, and maintain their vehicle and document information from one place.",
    points: [
      "Accept and manage nearby trip requests based on availability",
      "Track completed rides, earnings, and active trip activity",
      "Update vehicle profile, registration, insurance, and verification data",
    ],
  },
  {
    title: "Admin Section",
    badge: "For Operations",
    description:
      "Admins get a control layer for monitoring the platform, reviewing users, managing support issues, and publishing operational or legal updates.",
    points: [
      "Review rider and driver activity across the platform",
      "Manage legal content, support tickets, and compliance workflows",
      "Control fare settings, approval flows, and service-wide visibility",
    ],
  },
];

const featureCards = [
  {
    title: "Fare Calculation",
    description:
      "Pricing can be configured around base fare, distance, trip duration, waiting time, and service rules so both riders and admins see a structured cost model.",
  },
  {
    title: "Vehicle Description",
    description:
      "Each vehicle can carry detailed information such as type, brand, model, registration number, insurance status, and service eligibility for better ride matching.",
  },
  {
    title: "Document Requirement",
    description:
      "Driver onboarding can include license, vehicle registration, insurance, identification, and any extra compliance documents required before approval.",
  },
  {
    title: "Safety and Support",
    description:
      "Trip records, communication history, support workflows, and review tools help the team investigate issues and improve rider-driver trust.",
  },
];

const journeySteps = [
  "A rider opens the app, sets pickup and destination, and sees an estimated fare before confirming.",
  "A suitable driver receives the request, accepts the trip, and heads toward the rider.",
  "The platform tracks the ride, payment context, and trip events while the journey is active.",
  "Admins can later review the trip, fare, support history, and account status when needed.",
];

export default function HomePage() {
  return (
    <section className="home-shell">
      <article className="home-hero">
        <div className="home-hero-grid">
          <div>
            <span className="eyebrow">Smart Riding Platform</span>
            <h1>One connected app for riders, drivers, and platform operations.</h1>
            <p className="home-lead">
              This ride-booking experience is designed to handle the full service journey:
              rider booking, driver management, fare calculation, vehicle setup, document
              verification, and admin-level control in a single ecosystem.
            </p>

            <div className="home-stat-row">
              <div className="home-stat">
                <strong>3 Connected Roles</strong>
                <span>Rider, Driver, and Admin sections working together</span>
              </div>
              <div className="home-stat">
                <strong>Operational Clarity</strong>
                <span>Trips, fares, vehicles, support, and legal info in one flow</span>
              </div>
            </div>
          </div>

          <aside className="home-highlight-card">
            <span className="home-highlight-label">Platform Snapshot</span>
            <ul className="home-highlight-list">
              <li>Fast ride booking with live tracking and trip updates</li>
              <li>Driver onboarding with vehicle and document review</li>
              <li>Admin control over fares, content, approvals, and support</li>
              <li>Structured operations for compliance and service quality</li>
            </ul>
          </aside>
        </div>
      </article>

      <section className="home-section">
        <div className="home-section-heading">
          <span className="eyebrow">Role-Based Experience</span>
          <h2>Section-by-section features for each side of the platform</h2>
          <p>
            The system is designed so every user type gets tools that match their job in the
            ride lifecycle without losing connection to the wider platform.
          </p>
        </div>

        <div className="audience-grid">
          {audienceSections.map((section) => (
            <article key={section.title} className="audience-card">
              <span className="audience-badge">{section.badge}</span>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <ul className="audience-points">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section-alt">
        <div className="home-section-heading">
          <span className="eyebrow">Core Operations</span>
          <h2>Important service areas beyond the ride request itself</h2>
          <p>
            A reliable ride platform needs more than booking. It also depends on pricing
            rules, vehicle readiness, compliance documents, and consistent support systems.
          </p>
        </div>

        <div className="feature-grid">
          {featureCards.map((card) => (
            <article key={card.title} className="feature-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-journey">
          <div className="home-section-heading">
            <span className="eyebrow">Ride Lifecycle</span>
            <h2>From booking to review, every ride follows a clear system flow</h2>
          </div>

          <div className="journey-steps">
            {journeySteps.map((step, index) => (
              <article key={step} className="journey-step">
                <span className="journey-step-number">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
