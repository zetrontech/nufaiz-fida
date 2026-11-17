import { useEffect, useRef, useState } from 'react'
import { Reveal } from './ui'
import { wedding as w } from '../data/wedding'

export default function Scratch() {
  const canvas = useRef(null)
  const pointer = useRef(null)
  const last = useRef(null)
  const moves = useRef(0)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const c = canvas.current
    if (!c) return
    const draw = () => {
      const r = c.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      c.width = Math.round(r.width * dpr)
      c.height = Math.round(r.height * dpr)
      const g = c.getContext('2d', { willReadFrequently: true })
      if (!g) return
      g.scale(dpr, dpr)
      const grad = g.createLinearGradient(0, 0, r.width, r.height)
      grad.addColorStop(0, '#eef1e9')
      grad.addColorStop(0.52, '#dce3d5')
      grad.addColorStop(1, '#c8d3c1')
      g.fillStyle = grad
      g.fillRect(0, 0, r.width, r.height)
      for (let i = 0; i < 4500; i++) {
        g.fillStyle = i % 2 ? 'rgba(255,255,255,.28)' : 'rgba(27,43,65,.035)'
        g.fillRect(Math.random() * r.width, Math.random() * r.height, 1, 1)
      }
      const mid = r.width / 2
      g.strokeStyle = '#a58b5f'
      g.lineWidth = 1
      g.beginPath()
      g.arc(mid - 10, r.height * 0.23, 17, 0, Math.PI * 2)
      g.stroke()
      g.beginPath()
      g.arc(mid + 10, r.height * 0.23, 17, 0, Math.PI * 2)
      g.stroke()
      g.textAlign = 'center'
      g.fillStyle = '#66735f'
      g.font = '10px Arial'
      g.fillText('A MOMENT TO REMEMBER', mid, r.height * 0.37)
      g.fillStyle = '#1b2b41'
      g.font = 'italic ' + Math.min(34, r.width * 0.105) + 'px Georgia'
      g.fillText('Our forever', mid, r.height * 0.52)
      g.fillText('begins here.', mid, r.height * 0.63)
      g.strokeStyle = '#a58b5f80'
      g.beginPath()
      g.moveTo(mid - 24, r.height * 0.73)
      g.lineTo(mid + 24, r.height * 0.73)
      g.stroke()
      g.fillStyle = '#596650'
      g.font = '10px Arial'
      g.fillText('S C R A T C H   T O   R E V E A L', mid, r.height * 0.83)
    }
    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(c)
    return () => ro.disconnect()
  }, [])

  const check = () => {
    const c = canvas.current
    const g = c?.getContext('2d', { willReadFrequently: true })
    if (!c || !g) return
    const data = g.getImageData(0, 0, c.width, c.height).data
    let clear = 0
    let total = 0
    for (let i = 3; i < data.length; i += 64) {
      total++
      if (data[i] < 100) clear++
    }
    if (clear / total >= 0.48) setRevealed(true)
  }

  const scratch = (e) => {
    if (pointer.current !== e.pointerId || revealed) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const g = el.getContext('2d')
    if (!g) return
    const p = { x: e.clientX - r.left, y: e.clientY - r.top }
    g.globalCompositeOperation = 'destination-out'
    g.strokeStyle = '#000'
    g.lineWidth = 36
    g.lineCap = 'round'
    g.lineJoin = 'round'
    g.beginPath()
    g.moveTo(last.current?.x ?? p.x, last.current?.y ?? p.y)
    g.lineTo(p.x + 0.01, p.y + 0.01)
    g.stroke()
    last.current = p
    if (++moves.current % 8 === 0) check()
  }
  const end = () => {
    pointer.current = null
    last.current = null
    check()
  }

  const bride = w.couple.bride.informal
  const groom = w.couple.groom.informal
  return (
    <section className="scratch-section navy" id="uncover" aria-labelledby="scratch-title">
      <div className="scratch-desktop-layout">
        <Reveal className="scratch-intro">
          <p className="eyebrow section-marker">
            <span>02</span>
            <i>A LITTLE DISCOVERY</i>
          </p>
          <h2 id="scratch-title">
            A date worth
            <br />
            <em>uncovering.</em>
          </h2>
          <p className="soft-copy">Some moments are meant to be discovered.</p>
          <p className="scratch-note">Gently scratch the keepsake to reveal the day our forever begins.</p>
        </Reveal>
        <Reveal className="scratch-interactive">
          <div className={`scratch-card ${revealed ? 'revealed' : ''}`}>
            <div className="scratch-date" aria-hidden={!revealed}>
              <p className="eyebrow">{w.wedding.weekday}</p>
              <time dateTime={w.wedding.date}>
                <strong>{w.wedding.day}</strong>
                <span className="eyebrow">
                  {w.dates.month} {w.dates.year}
                </span>
              </time>
              <div className="paper-rule" />
              <p className="eyebrow">THE NIKAH</p>
              <p className="scratch-signature">
                {bride} × {groom}
              </p>
            </div>
            <canvas
              ref={canvas}
              aria-label="Scratch with a finger or mouse to discover our wedding date, or use the reveal button below"
              onPointerDown={(e) => {
                pointer.current = e.pointerId
                last.current = null
                e.currentTarget.setPointerCapture(e.pointerId)
                scratch(e)
              }}
              onPointerMove={scratch}
              onPointerUp={end}
              onPointerCancel={end}
              onLostPointerCapture={() => {
                pointer.current = null
                last.current = null
              }}
            />
          </div>
          <div className="scratch-status" aria-live="polite">
            {revealed ? (
              <p className="eyebrow">
                OUR FOREVER HAS A DATE.
                <span className="sr-only">
                  {' '}
                  {w.wedding.weekday}, {w.wedding.day} {w.dates.month} {w.dates.year}.
                </span>
              </p>
            ) : (
              <button className="text-button" onClick={() => setRevealed(true)}>
                Tap to reveal date <span aria-hidden="true">↗</span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
