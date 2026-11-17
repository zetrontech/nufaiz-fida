import { Reveal } from './ui'
import { wedding as w } from '../data/wedding'

function EventCard({ event }) {
  return (
    <div className="event-composition">
      <div className="event-date">
        <span className="eyebrow">{event.title}</span>
        <time dateTime={event.date}>
          <strong>{event.day}</strong>
          <span className="eyebrow">
            {event.weekday}
            <br />
            {w.dates.month} {w.dates.year}
          </span>
        </time>
      </div>
      <p>
        {event.venue.name}, {event.venue.city}
      </p>
      <a className="action-link" href={event.venue.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${event.venue.name} on Google Maps (opens in new tab)`}>
        Directions
      </a>
      <ol className="timeline">
        {event.schedule.map((s, i) => (
          <li key={i}>
            <span className="schedule-time">{s.time}</span>
            <h4>{s.title}</h4>
            {s.detail && <p>{s.detail}</p>}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Events() {
  return (
    <section className="events" id="celebrations" aria-labelledby="events-title">
      <Reveal className="events-heading">
        <p className="eyebrow">04 / THE CELEBRATIONS</p>
        <h2 id="events-title">
          Come for the love.
          <br />
          <em>Stay for the memories.</em>
        </h2>
        <p className="eyebrow">CELEBRATE WITH US · MANJERI</p>
      </Reveal>
      <div className="events-grid">
        <Reveal className="reception-composition">
          <EventCard event={w.wedding} />
        </Reveal>
        <Reveal className="wedding-composition navy">
          <EventCard event={w.reception} />
        </Reveal>
      </div>
      <p className="schedule-note">All times are India Standard Time (IST).</p>
    </section>
  )
}
