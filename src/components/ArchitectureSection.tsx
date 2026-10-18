import { memo, useEffect, useRef } from 'react'
import { LazyMotion, domAnimation, m, type Variants } from 'motion/react'
import './ArchitectureSection.css'

const streamUrl = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'

const introVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const ArchitectureVideo = memo(function ArchitectureVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let disposed = false
    let hls: import('hls.js/light').default | undefined
    const startPlayback = () => {
      void import('hls.js/light').then(({ default: Hls }) => {
        if (disposed) return
        if (Hls.isSupported()) {
          hls = new Hls()
          hls.loadSource(streamUrl)
          hls.attachMedia(video)
          hls.on(Hls.Events.ERROR, (_event, data) => {
            if (data.fatal) console.error('No se pudo reproducir el video HLS de la sección MLOps.', data.type, data.details)
          })
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = streamUrl
        } else {
          console.error('Este navegador no admite la reproducción del video HLS de la sección MLOps.')
        }
      }).catch((error: unknown) => {
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = streamUrl
          return
        }
        console.error('No se pudo cargar el reproductor HLS de la sección MLOps.', error)
      })
    }

    startPlayback()

    return () => {
      disposed = true
      hls?.destroy()
      video.removeAttribute('src')
      video.load()
    }
  }, [])

  return <video
    ref={videoRef}
    className="architecture-video"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    poster="/asset-04.png"
    aria-hidden="true"
  />
})

const platforms = [
  { name: 'ERP', icon: <><path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" /><path d="m3.5 7 8.5 5 8.5-5M12 12v10" /></> },
  { name: 'Git', icon: <><path d="m12 2 10 10-10 10L2 12 12 2Z" /><path d="M8.5 8.5h.01M15.5 15.5h.01M8.5 8.5l7 7" /></> },
  { name: 'SQL', icon: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></> },
]

const wordmarks = ['ORACLE', 'Git', 'SQL', 'MLOps', 'DATA']

export default function ArchitectureSection() {
  return <LazyMotion features={domAnimation}><section className="architecture-section" id="arquitectura">
    <div className="architecture-hero-stage">
      <div className="architecture-video-wrap"><ArchitectureVideo /></div>
      <div className="architecture-hero-content">
        <m.div className="architecture-intro" variants={introVariants} initial="hidden" animate="visible">
          <m.div className="architecture-badges" variants={itemVariants}>
            <span className="architecture-integrated-label">Integrado con</span>
            {platforms.map((platform) => <span className="architecture-badge" key={platform.name}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{platform.icon}</svg>
              {platform.name}
            </span>)}
          </m.div>
          <m.span className="architecture-kicker" variants={itemVariants}>05 — GOBIERNO Y MLOPS</m.span>
          <m.h2 variants={itemVariants}>Diseñar para<br /><em>seguir operando.</em></m.h2>
          <m.p className="architecture-lead" variants={itemVariants}>Un flujo MLOps controlado permite reproducir el análisis, revisar cambios, monitorear modelos y recuperarse ante fallas.</m.p>
          <m.div className="architecture-hero-actions" variants={itemVariants}>
            <a className="architecture-primary-action" href="#flujo">Explorar arquitectura <span aria-hidden="true">↗</span></a>
            <a className="architecture-secondary-action" href="#politica">Ver políticas <span aria-hidden="true">↓</span></a>
          </m.div>
        </m.div>
        <m.div className="architecture-marquee" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 0.42, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }} aria-label="Tecnologías y capacidades">
          {wordmarks.map((name, index) => <div className="architecture-wordmark" key={`${name}-${index}`}>
            <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              {index % 2 === 0 ? <><circle cx="13" cy="13" r="9" /><path d="M4 13h18M13 4c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></> : <><path d="M13 2 24 8v10l-11 6L2 18V8l11-6Z" /><path d="m2 8 11 6 11-6M13 14v10" /></>}
            </svg>
            <span>{name}</span>
          </div>)}
        </m.div>
      </div>
    </div>

    <div className="architecture-content">
      <figure className="chapter-photo architecture-photo"><video className="architecture-pasta-video" autoPlay loop muted playsInline preload="metadata" poster="/asset-04.png" aria-hidden="true"><source src="/pasta%201.mp4" type="video/mp4" /></video><figcaption>EL MODELO PROPUESTO SIGUE EL RECORRIDO DEL PROCESO FÍSICO</figcaption></figure>
      <div className="target-label" id="flujo"><span className="target-dot" /> ARQUITECTURA OBJETIVO · PROPUESTA</div>
      <div className="target-flow">
        <div className="target-node"><span>01 · FUENTES</span><b>ERP</b><small>Ventas · Planta<br />Finanzas · Logística</small></div><i>→</i>
        <div className="target-node"><span>02 · INGESTA</span><b>ETL validado</b><small>Esquemas versionados<br />y control de calidad</small></div><i>→</i>
        <div className="target-node"><span>03 · DATOS</span><b>Zona gobernada</b><small>Oracle / SQL<br />cifrado · acceso por rol</small></div><i>→</i>
        <div className="target-node"><span>04 · DESARROLLO</span><b>Entorno aislado</b><small>Sin datos sensibles<br />en notebooks públicos</small></div><i>→</i>
        <div className="target-node"><span>05 · OPERACIÓN</span><b>Registro de modelos</b><small>Despliegue aprobado<br />monitoreo y reversión</small></div>
      </div>
      <div className="support-row">
        <div><span className="support-icon">⌑</span><p><b>Git + revisión de cambios</b><small>Historial reproducible de código, pruebas y aprobaciones.</small></p></div>
        <div><span className="support-icon">▣</span><p><b>Bóveda de secretos</b><small>Credenciales individuales, protegidas y auditables.</small></p></div>
        <div><span className="support-icon">⟳</span><p><b>Respaldo y continuidad</b><small>Copias aisladas y restauración comprobada periódicamente.</small></p></div>
      </div>
      <div className="rules-title" id="politica"><span className="section-kicker">POLÍTICA OBLIGATORIA</span><h3>Tres reglas para el equipo de datos.</h3></div>
      <div className="rules-grid">
        <article><span>01</span><div><b>Datos empresariales, solo en entornos aprobados.</b><p>No subir información identificable a Colab público ni guardarla en equipos personales sin autorización y protección.</p></div></article>
        <article><span>02</span><div><b>Cada cambio queda versionado y revisado.</b><p>Código, ETL y modelos pasan por Git, revisión entre pares y validaciones antes de producción.</p></div></article>
        <article><span>03</span><div><b>Las credenciales son personales y secretas.</b><p>Usar permisos mínimos y la bóveda corporativa; prohibido compartir claves o incrustarlas en código.</p></div></article>
      </div>
    </div>
  </section></LazyMotion>
}
