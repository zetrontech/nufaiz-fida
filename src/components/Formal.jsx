import { Reveal, Rings } from './ui'
import { wedding as w } from '../data/wedding'

export default function Formal() {
  return (
    <section className="formal section-pad" aria-labelledby="formal-title">
      <Reveal className="formal-heading">
        <p className="eyebrow section-marker">
          <span>03</span>
          <i>WITH THE BLESSINGS OF OUR FAMILIES</i>
        </p>
      </Reveal>
      <div className="formal-bilingual formal-single">
        <Reveal>
          <article className="invitation-letter english-invitation" lang="en" aria-labelledby="formal-title">
            <p className="eyebrow formal-prayer">{w.prayer}</p>
            <h2 id="formal-title">
              We're getting <em>married.</em>
            </h2>
            <p className="intro-copy">{w.formalIntroduction}</p>
            <div className="formal-couple">
              {Object.values(w.couple).map((p, i) => (
                <div key={p.formal}>
                  {i === 1 && <Rings />}
                  <h3>{p.formal}</h3>
                  {p.qualification && <p className="qualification">{p.qualification}</p>}
                  <div className="family">
                    {p.family.parents.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    {p.family.grandparents.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    {p.family.place && <p>{p.family.place}</p>}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
