import { Reveal, Floral, dmy } from './ui'
import Credit from './Credit'
import { wedding as w } from '../data/wedding'

export default function Closing() {
  const { bride, groom } = w.couple
  return (
    <>
      <section className="thank-you navy section-pad" aria-labelledby="thank-you-title">
        <Floral dark className="ending-flower" />
        <Reveal>
          <p className="eyebrow">WITH LOVE</p>
          <h2 id="thank-you-title">
            {bride.informal}
            <span>&amp;</span>
            {groom.informal}
          </h2>
          <time className="eyebrow" dateTime={w.wedding.date}>
            {dmy(w.wedding.date, ' · ')}
          </time>
          <p className="thank-copy">
            Thank you for being part
            <br />
            of a chapter we'll remember forever.
          </p>
          <p className="soft-copy">We can't wait to celebrate with you.</p>
          <p className="soft-copy">With love, {w.hosts}</p>
          <div className="ending-monogram">
            {w.initials.bride} × {w.initials.groom}
          </div>
          <p className="eyebrow">MANJERI · FOREVER</p>
        </Reveal>
      </section>
      <footer className="footer navy">
        <span className="footer-couple">
          {bride.informal} × {groom.informal}
          <small>
            Nikah · {w.dates.month} {w.dates.year}
          </small>
        </span>
        <Credit />
      </footer>
    </>
  )
}
