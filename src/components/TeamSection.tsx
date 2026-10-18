import './TeamSection.css'

const members = [
  {
    number: '01',
    name: 'Elias Gonzales Jenhua',
    role: 'Operación y negocio',
    description: 'Conecta las etapas de abastecimiento, producción y distribución.',
    image: '/asset-06.png',
    video: '/b_creame_un_video_cort.mp4',
    link: '#empresa',
    linkLabel: 'Ver organización',
  },
  {
    number: '02',
    name: 'Piero Jamir Aguilar',
    role: 'Datos e integración',
    description: 'Organiza las fuentes y transforma los datos en información útil.',
    image: '/notebooks/integrante%202.jpeg',
    link: '#tecnologia',
    linkLabel: 'Ver infraestructura',
  },
  {
    number: '03',
    name: 'Jordy Felipe Ticona',
    role: 'Analítica y control',
    description: 'Apoya la evaluación de modelos, riesgos y decisiones operativas.',
    image: '/asset-07.png',
    video: '/jordy%20ticona.mp4',
    link: '#riesgos',
    linkLabel: 'Ver análisis',
  },
]

export default function TeamSection() {
  return <section className="team-section" id="equipo">
    <div className="team-inner">
      <header className="team-heading">
        <span className="team-kicker">SEMINARIO IV · EQUIPO DE TRABAJO</span>
        <h2>Un proyecto, <em>tres perspectivas.</em></h2>
        <p>El equipo reúne operación, datos y analítica para estudiar cómo convertir información en decisiones para Pastas del Norte.</p>
      </header>
      <div className="team-grid">
        {members.map((member) => <article className="team-card" key={member.number}>
          <div className="team-card-image">{member.video
            ? <video src={member.video} poster={member.image} autoPlay muted loop preload="auto" playsInline aria-label={`Video de ${member.name}`} />
            : <img src={member.image} alt="" loading="lazy" decoding="async" />}</div>
          <div className="team-card-body">
            <span className="team-chip"><i aria-hidden="true">✓</i>{member.role}</span>
            <h3>{member.name}</h3>
            <p>{member.description}</p>
            <div className="team-card-meta">
              <span className="team-chip"><i aria-hidden="true">{member.number}</i>Seminario IV</span>
              <a className="team-card-link" href={member.link}>{member.linkLabel}<span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>)}
      </div>
    </div>
  </section>
}
