import { useCallback, useEffect, useRef, useState } from 'react'

const discover = [
  { title: 'La empresa', description: 'Perfil y cadena operativa de Pastas del Norte.', href: '#empresa', image: '/asset-02.png' },
  { title: 'Unidad de datos', description: 'El equipo que convierte información en decisiones.', href: '#uid', image: '/asset-06.png' },
  { title: 'Infraestructura', description: 'Sistemas, integraciones y entorno híbrido.', href: '#tecnologia', image: '/asset-08.png' },
  { title: 'Riesgos', description: 'Activos, amenazas y medidas de tratamiento.', href: '#riesgos', image: '/asset-07.png' },
]

const journeys = [
  { title: 'De la planta al producto', description: 'Abastecimiento, producción y distribución.', href: '#empresa', image: '/asset-03.png' },
  { title: 'De los datos a la acción', description: 'Analítica, controles y mejora continua.', href: '#arquitectura', image: '/asset-06.png' },
]

const regions = [
  { title: 'Operaciones', href: '#empresa' },
  { title: 'Analítica', href: '#uid' },
  { title: 'Tecnología', href: '#tecnologia' },
  { title: 'Gobierno y MLOps', href: '#arquitectura' },
]

const sectionIcons = {
  discover: 'M3 10.5 12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6',
  journeys: 'M4 12h15m-6-6 6 6-6 6M4 6v12',
  regions: 'M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM2.8 12h18.4M12 2.5c2.3 2.5 3.4 5.7 3.4 9.5s-1.1 7-3.4 9.5c-2.3-2.5-3.4-5.7-3.4-9.5S9.7 5 12 2.5Z',
}

type MenuId = keyof typeof sectionIcons

export default function ProjectHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [activeMenu, setActiveMenu] = useState<MenuId | null>(null)
  const [activeImage, setActiveImage] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  const placeMenu = useCallback((id: MenuId) => {
    const header = headerRef.current
    const dropdown = dropdownRef.current
    const trigger = navRef.current?.querySelector<HTMLElement>(`[data-menu="${id}"]`)
    const panel = dropdown?.querySelector<HTMLElement>(`[data-panel="${id}"]`)
    if (!header || !dropdown || !trigger || !panel) return
    const headerRect = header.getBoundingClientRect()
    const triggerRect = trigger.getBoundingClientRect()
    const width = panel.offsetWidth
    const height = panel.offsetHeight
    const x = Math.min(Math.max(12, triggerRect.left - headerRect.left - 20), headerRect.width - width - 12)
    dropdown.style.setProperty('--x', `${x}px`)
    dropdown.style.setProperty('--w', `${width}px`)
    dropdown.style.setProperty('--h', `${height}px`)
  }, [])

  const showMenu = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(id)
    requestAnimationFrame(() => placeMenu(id))
  }

  const scheduleClose = (delay = 140) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setActiveMenu(null), delay)
  }

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    const onResize = () => { if (activeMenu) placeMenu(activeMenu) }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [activeMenu, placeMenu])

  const renderPreview = () => discover.map((item, index) => <img className={activeImage === index ? 'is-active' : ''} src={item.image} key={item.image} alt="" />)

  return <header className="topbar project-header" ref={headerRef} onPointerEnter={() => closeTimer.current && clearTimeout(closeTimer.current)} onPointerLeave={(event) => { if (event.pointerType === 'mouse') scheduleClose() }}>
    <div className="project-bar">
      <a className="wordmark" href="#inicio" aria-label="Pastas del Norte, inicio"><span className="brand-mark"><svg viewBox="0 0 30 26" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M3.2 19.6C.4 15.8 1.3 8.6 6.6 4.7 11.3 1.2 18.9.9 23.9 4.1c4.7 3 6.3 9 3.6 13.9-2.9 5.3-9.4 7.7-15.4 7-3.8-.4-6.9-2.4-8.9-5.4ZM9.5 17.2l4.3-6.4 2.6 3.6 1.7-2.2 3.4 5z" /></svg></span><span>PASTAS <b>DEL NORTE</b><small>INTELIGENCIA · OPERACIONES · CONFIANZA</small></span></a>
      <nav className="project-nav" aria-label="Navegación principal" ref={navRef} onPointerEnter={() => closeTimer.current && clearTimeout(closeTimer.current)} onPointerLeave={(event) => { if (event.pointerType === 'mouse') scheduleClose() }}>
        <ul className="project-nav-links">
          {(['discover', 'journeys', 'regions'] as const).map((id, index) => <li key={id}><button className="nav-trigger" data-menu={id} aria-expanded={activeMenu === id} onPointerEnter={(event) => { if (event.pointerType === 'mouse') showMenu(id) }} onFocus={() => showMenu(id)} onClick={() => { if (activeMenu !== id) showMenu(id) }}>{['Explorar', 'Procesos', 'Áreas'][index]}<svg viewBox="0 0 8 5" aria-hidden="true"><path d="m1 1 3 3 3-3" /></svg></button></li>)}
          <li><a className="nav-trigger" href="#empresa" onPointerEnter={() => scheduleClose(60)}>El caso</a></li>
        </ul>
        <div className={`nav-dropdown ${activeMenu ? 'is-open' : ''}`} ref={dropdownRef}>
          <div className={`nav-panel nav-discover ${activeMenu === 'discover' ? 'is-active' : ''}`} data-panel="discover">
            <div className="nav-discover-list">{discover.map((item, index) => <a href={item.href} className={`nav-discover-item ${activeImage === index ? 'is-active' : ''}`} key={item.title} onPointerEnter={() => setActiveImage(index)} onFocus={() => setActiveImage(index)} onClick={() => setActiveMenu(null)}><strong>{item.title}</strong><span>{item.description}</span></a>)}</div>
            <div className="nav-discover-media" aria-hidden="true">{renderPreview()}</div>
          </div>
          <div className={`nav-panel nav-journeys ${activeMenu === 'journeys' ? 'is-active' : ''}`} data-panel="journeys">
            {journeys.map((item) => <a href={item.href} className="nav-journey-card" key={item.title} onClick={() => setActiveMenu(null)}><img src={item.image} alt="" /><strong>{item.title}</strong><span>{item.description}</span></a>)}
          </div>
          <div className={`nav-panel nav-regions ${activeMenu === 'regions' ? 'is-active' : ''}`} data-panel="regions">
            {regions.map((item) => <a href={item.href} key={item.title} onClick={() => setActiveMenu(null)}>{item.title}</a>)}
          </div>
        </div>
      </nav>
      <div className="project-actions"><a className="top-cta" href="#riesgos">Explorar diagnóstico <span>↗</span></a><button className="menu-toggle" aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 5.5h12M2 10.5h12" /></svg></button></div>
    </div>
    <div className={`mobile-sheet ${mobileOpen ? 'is-open' : ''}`}>
      <h3>Explorar el caso</h3>{discover.map((item) => <a href={item.href} key={item.title} onClick={() => setMobileOpen(false)}>{item.title}<small>{item.description}</small></a>)}
      <h3>Procesos</h3>{journeys.map((item) => <a href={item.href} key={item.title} onClick={() => setMobileOpen(false)}>{item.title}<small>{item.description}</small></a>)}
      <h3>Áreas</h3>{regions.map((item) => <a href={item.href} key={item.title} onClick={() => setMobileOpen(false)}>{item.title}</a>)}
      <a href="#riesgos" className="mobile-diagnostic" onClick={() => setMobileOpen(false)}>Explorar diagnóstico ↗</a>
    </div>
  </header>
}





