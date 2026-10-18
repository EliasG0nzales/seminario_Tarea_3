import { useState } from 'react'
import { highRiskCount, riskColor, riskLabel, riskScore, risks } from '../data/caseData'

export default function RiskSection() {
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)

  return <section className="risk-section" id="riesgos">
    <video className="risk-background-video" autoPlay muted loop playsInline preload="metadata" poster="/asset-07.png" aria-hidden="true">
      <source src="/12139875-uhd_2160_3840_30fps.mp4" type="video/mp4" />
    </video>
    <div className="risk-inner">
    <div className="section-heading light"><div><span className="section-kicker">04 — SEGURIDAD Y RIESGOS</span><h2>Proteger el<br /><em>motor analítico.</em></h2></div><p>El caso identifica diez amenazas que pueden afectar datos, disponibilidad, equipos o decisiones. Cada riesgo requiere entender cómo ocurre y preparar controles.</p></div>
    <figure className="chapter-photo risk-photo"><img src="/asset-07.png" alt="Vista de líneas y estructuras industriales de una planta" loading="lazy" decoding="async" /><figcaption>UNA OPERACIÓN COMPLEJA TAMBIÉN AMPLÍA LA SUPERFICIE DE RIESGO</figcaption></figure>
    <div className="risk-summary"><div><span className="summary-number">10</span><span>amenazas<br />identificadas</span></div><div><span className="summary-number">5 × 5</span><span>escala de probabilidad<br />e impacto</span></div><div><span className="summary-number">{highRiskCount}</span><span>escenarios altos<br />o críticos propuestos</span></div><p>Escenarios y puntuaciones iniciales de referencia: deben validarse con responsables de la empresa y evidencia real.</p></div>

    <div className="risk-layout">
      <div className="heatmap-card"><div className="card-head"><div><span className="label">VISTA DE RIESGO</span><h3>Mapa de calor</h3></div><span className="scale-note">P × I = nivel</span></div>
        <div className="heatmap-wrap"><div className="y-label">PROBABILIDAD</div><div className="heatmap-main"><div className="heatmap-grid">{[5, 4, 3, 2, 1].flatMap((probability) => [1, 2, 3, 4, 5].map((impact) => {
          const score = probability * impact
          const matches = risks.filter((risk) => risk.p === probability && risk.i === impact)
          return <div key={`${probability}-${impact}`} className={`heat-cell ${riskColor(score)}`} title={`Probabilidad ${probability} × impacto ${impact} = ${score}`}>{matches.map((risk) => <span key={risk.id} className="heat-dot" title={risk.id}>{risk.id}</span>)}</div>
        }))}</div><div className="x-axis">{[1, 2, 3, 4, 5].map((number) => <span key={number}>{number}</span>)}</div><div className="x-label">IMPACTO</div></div></div>
        <div className="heat-legend"><span><i className="low" /> Bajo</span><span><i className="medium" /> Medio</span><span><i className="high" /> Alto</span><span><i className="critical" /> Crítico</span></div><p className="heat-foot">Cada punto representa una amenaza T1–T10 y su escenario principal de activo.</p>
      </div>
      <div className="risk-ranking"><div className="card-head"><div><span className="label">PRIORIZACIÓN INICIAL</span><h3>Riesgos destacados</h3></div><span className="rank-count">01–10</span></div><div className="ranking-list">{[...risks].sort((a, b) => riskScore(b) - riskScore(a)).map((risk) => <div className="rank-item" key={risk.id}><span className={`risk-id ${riskColor(riskScore(risk))}`}>{risk.id}</span><div><b>{risk.name}</b><small>{risk.asset}</small></div><span className={`risk-score ${riskColor(riskScore(risk))}`}>{riskScore(risk)} · {riskLabel(riskScore(risk))}</span></div>)}</div></div>
    </div>

    <div className="risk-scale"><b>ESCALA REFERENCIAL</b><span>1–5 probabilidad</span><i /><span>1–5 impacto</span><i /><span>1–5 bajo</span><i /><span>6–11 medio</span><i /><span>12–19 alto</span><i /><span>20–25 crítico</span></div>
    <div className="asset-block"><div className="asset-heading"><div><span className="section-kicker">INVENTARIO DE INFORMACIÓN</span><h3>Los activos que sostienen la operación.</h3></div><span className="asset-count">A1 — A10</span></div><p className="asset-summary">La operación depende de servidores Oracle y MS-SQL, scripts ETL, notebooks y modelos de aprendizaje automático. También utiliza datos sensibles de producción y ventas, credenciales de acceso, Google Colab y estaciones locales de desarrollo. El equipo de datos mantiene estos recursos y entrega sus resultados mediante dashboards para apoyar las decisiones de la empresa.</p></div>

    <div className="treatment-block">
      <div className="asset-heading treatment-heading"><div><span className="section-kicker">RESPUESTA Y CONTROL</span><h3>Del riesgo a la acción.</h3></div>
        <div className="treatment-control"><p>Controles iniciales y KRIs para validar con los dueños de proceso.</p><button className="treatment-toggle" type="button" aria-expanded={treatmentsOpen} aria-controls="tabla-tratamientos" onClick={() => setTreatmentsOpen((open) => !open)}><span>{treatmentsOpen ? 'Ocultar tabla' : 'Ver tratamientos y KRIs'}</span><i aria-hidden="true">{treatmentsOpen ? '−' : '+'}</i></button></div>
      </div>
      <div className="treatment-table-wrap" id="tabla-tratamientos" hidden={!treatmentsOpen}><table><thead><tr><th>AMENAZA</th><th>¿CÓMO OCURRE?</th><th>CONSECUENCIA</th><th>TRATAMIENTO PROPUESTO</th><th>INDICADOR (KRI)</th></tr></thead><tbody>{risks.map((risk) => <tr key={risk.id}><td><span className={`table-risk ${riskColor(riskScore(risk))}`}>{risk.id}</span><b>{risk.name}</b><small>{risk.asset}</small></td><td>{risk.how}</td><td>{risk.effect}</td><td><b className="mitigate">MITIGAR</b>{risk.control}</td><td>{risk.kri}</td></tr>)}</tbody></table></div>
    </div>
  </div></section>
}
