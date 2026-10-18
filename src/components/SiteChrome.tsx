import { highRiskCount } from '../data/caseData'

export { default as Header } from './ProjectHeader'

export function Hero() {
  return <section className="hero" id="inicio">
    <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
      <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4" type="video/mp4" />
    </video>
    <div className="hero-grid"><div className="hero-copy">
      <div className="eyebrow"><span className="live-dot" /> CASO PRÁCTICO · SEMINARIO IV</div>
      <h1>El dato que<br />mueve <em>la planta.</em></h1>
      <p className="hero-lead">Una mirada a la operación, la inteligencia de datos y los riesgos que acompañan la transformación de Pastas del Norte S.A.</p>
      <div className="hero-actions"><a className="button-primary" href="#empresa">Conocer el caso <span>↓</span></a><a className="hero-ghost" href="#arquitectura">Ver arquitectura</a></div>
      <div className="hero-foot"><span>01 / PERFIL DE LA ORGANIZACIÓN</span><span>CASO ACADÉMICO · 2026</span></div>
    </div></div>
    <div className="hero-stats"><div><b>01</b><span>Unidad de Inteligencia<br />de Datos</span></div><div><b>08</b><span>Proyectos analíticos<br />en paralelo</span></div><div><b>10</b><span>Activos de información<br />identificados</span></div><div><b>{highRiskCount.toString().padStart(2, '0')}</b><span>Escenarios altos o críticos<br />en esta propuesta</span></div></div>
  </section>
}

export function SectionIndex() {
  const sections = [
    { href: '#empresa', number: '01', title: 'La empresa', description: 'Perfil y cadena operativa', icon: 'M3 10.5 12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6' },
    { href: '#uid', number: '02', title: 'Unidad de datos', description: 'Equipo y analítica', icon: 'M4 19V5m0 14h16M8 15l3-4 3 2 5-7' },
    { href: '#tecnologia', number: '03', title: 'Infraestructura', description: 'Flujo y herramientas', icon: 'M4 7h16v10H4zM8 20h8M12 17v3M8 11h2m4 0h2' },
    { href: '#riesgos', number: '04', title: 'Riesgos', description: 'Activos y controles', icon: 'M12 3 21 7v5c0 5-4 8-9 10-5-2-9-5-9-10V7zM9 12l2 2 4-4' },
    { href: '#arquitectura', number: '05', title: 'Gobierno y MLOps', description: 'Arquitectura objetivo', icon: 'M4 6h6v5H4zM14 13h6v5h-6zM10 8.5h4v7h-4' },
  ]
  const renderItems = (copy: boolean) => sections.map(({ href, number, title, description, icon }) => <a href={href} key={number} tabIndex={copy ? -1 : undefined} aria-hidden={copy || undefined}><svg className="section-index-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icon} /></svg><div className="section-index-copy"><span>{number}</span><b>{title}</b><small>{description}</small></div><i>↘</i></a>)

  return <nav className="section-index" aria-label="Secciones de esta página">
    <div className="section-index-track">
      <div className="section-index-group">{renderItems(false)}</div>
      <div className="section-index-group" aria-hidden="true">{renderItems(true)}</div>
    </div>
  </nav>
}
export function Closing() {
  return <section className="closing"><video className="closing-video" autoPlay loop muted playsInline preload="metadata" poster="/asset-05.png" aria-hidden="true"><source src="/pasta2.mp4" type="video/mp4" /></video><div className="closing-copy"><span className="closing-mark">✳</span><p>Una cadena de suministro más<br />predecible empieza con <em>datos confiables.</em></p><span className="closing-caption">PASTAS DEL NORTE S.A. · CASO ACADÉMICO</span></div></section>
}

export function Footer() {
  return <footer className="footer"><a className="wordmark footer-brand" href="#inicio"><span className="brand-mark">PN</span><span>PASTAS <b>DEL NORTE</b><small>INTELIGENCIA · OPERACIONES · CONFIANZA</small></span></a><span>PERFIL DE LA ORGANIZACIÓN · SEMINARIO IV</span><a href="#inicio">VOLVER ARRIBA ↑</a></footer>
}




