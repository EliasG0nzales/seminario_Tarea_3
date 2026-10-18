import { useEffect, useState } from 'react'

const chapters = [
  { id: 'inicio', title: 'La historia empieza en planta' },
  { id: 'empresa', title: 'Del trigo al producto' },
  { id: 'uid', title: 'Los datos anticipan decisiones' },
  { id: 'tecnologia', title: 'La infraestructura sostiene el flujo' },
  { id: 'riesgos', title: 'Reconocer y tratar los riesgos' },
  { id: 'arquitectura', title: 'Diseñar para seguir operando' },
]

export default function ScrollStory() {
  const [progress, setProgress] = useState(0)
  const [activeId, setActiveId] = useState(chapters[0].id)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        setProgress(maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0)
      })
    }

    const elements = chapters
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target instanceof HTMLElement) setActiveId(visible.target.id)

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('story-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: [0.12, 0.35], rootMargin: '-12% 0px -16% 0px' })

    elements.forEach((element) => observer.observe(element))
    const footer = document.querySelector('.footer')
    const footerObserver = footer ? new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting)
    }, { threshold: 0.05 }) : undefined
    if (footer && footerObserver) footerObserver.observe(footer)
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateProgress)
      observer.disconnect()
      footerObserver?.disconnect()
    }
  }, [])

  const activeIndex = chapters.findIndex(({ id }) => id === activeId)
  const activeTitle = chapters[activeIndex]?.title ?? chapters[0].title

  return <div className="story-progress" aria-label="Avance del recorrido">
    <div className="story-progress-track"><span style={{ width: `${progress}%` }} /></div>
    <div className={`story-chapter${footerVisible ? ' story-chapter--hidden' : ''}`} aria-live="polite"><span>CAPÍTULO {String(activeIndex + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}</span><b>{activeTitle}</b></div>
  </div>
}
