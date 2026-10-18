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
      <div className="heatmap-card asset-threat-heatmap"><img src="/risk-asset-threat-matrix.png" alt="Matriz de evaluación y gobierno de riesgos que relaciona diez activos con diez amenazas y muestra su nivel de riesgo" loading="lazy" decoding="async" /></div>
      <div className="risk-ranking"><div className="card-head"><div><span className="label">PRIORIZACIÓN INICIAL</span><h3>Riesgos destacados</h3></div><span className="rank-count">01–10</span></div><div className="ranking-list">{[...risks].sort((a, b) => riskScore(b) - riskScore(a)).map((risk) => <div className="rank-item" key={risk.id}><span className={`risk-id ${riskColor(riskScore(risk))}`}>{risk.id}</span><div><b>{risk.name}</b><small>{risk.asset}</small></div><span className={`risk-score ${riskColor(riskScore(risk))}`}>{riskScore(risk)} · {riskLabel(riskScore(risk))}</span></div>)}</div></div>
    </div>

    <div className="risk-scale"><b>ESCALA REFERENCIAL</b><span>1–5 probabilidad</span><i /><span>1–5 impacto</span><i /><span>1–4 bajo</span><i /><span>5–9 medio</span><i /><span>10–16 alto</span><i /><span>17–25 crítico</span></div>
    <section className="risk-evaluation" aria-labelledby="risk-evaluation-title"><div className="risk-evaluation-heading"><div><span className="section-kicker">EVALUACIÓN DE RIESGOS ENCONTRADOS</span><h3 id="risk-evaluation-title">Probabilidad, impacto y prioridad</h3></div><p>Valor calculado como probabilidad × impacto. La prioridad ordena los escenarios de mayor a menor puntuación.</p></div><div className="evaluation-table-wrap"><table><thead><tr><th>Activo (ID)</th><th>Amenaza (ID)</th><th>Probabilidad (1–5)</th><th>Impacto (1–5)</th><th>Nivel de riesgo</th><th>Valor (P × I)</th><th>Prioridad</th></tr></thead><tbody>{[...risks].sort((a, b) => riskScore(b) - riskScore(a) || a.id.localeCompare(b.id)).map((risk, index) => { const assetId = risk.asset.match(/A\d+/)?.[0] ?? '—'; const score = riskScore(risk); return <tr key={risk.id}><td>{assetId}</td><td>{risk.id}</td><td>{risk.p}</td><td>{risk.i}</td><td><span className={`evaluation-level ${riskColor(score)}`}>{riskLabel(score)}</span></td><td><b>{score}</b></td><td>{index + 1}</td></tr> })}</tbody></table></div></section>    <div className="asset-block"><div className="asset-heading"><div><span className="section-kicker">INVENTARIO DE INFORMACIÓN</span><h3>Los activos que sostienen la operación.</h3></div><span className="asset-count">A1 — A10</span></div><p className="asset-summary">La operación depende de servidores Oracle y MS-SQL, scripts ETL, notebooks y modelos de aprendizaje automático. También utiliza datos sensibles de producción y ventas, credenciales de acceso, Google Colab y estaciones locales de desarrollo. El equipo de datos mantiene estos recursos y entrega sus resultados mediante dashboards para apoyar las decisiones de la empresa.</p></div>

    <div className="treatment-block">
      <div className="asset-heading treatment-heading"><div><span className="section-kicker">RESPUESTA Y CONTROL</span><h3>Del riesgo a la acción.</h3></div>
        <div className="treatment-control"><p>Controles iniciales y KRIs para validar con los dueños de proceso.</p><button className="treatment-toggle" type="button" aria-expanded={treatmentsOpen} aria-controls="tabla-tratamientos" onClick={() => setTreatmentsOpen((open) => !open)}><span>{treatmentsOpen ? 'Ocultar tabla' : 'Ver tratamientos y KRIs'}</span><i aria-hidden="true">{treatmentsOpen ? '−' : '+'}</i></button></div>
      </div>
      <div className="treatment-table-wrap" id="tabla-tratamientos" hidden={!treatmentsOpen}><table><thead><tr><th>AMENAZA</th><th>¿CÓMO OCURRE?</th><th>CONSECUENCIA</th><th>TRATAMIENTO PROPUESTO</th><th>INDICADOR (KRI)</th></tr></thead><tbody>{risks.map((risk) => <tr key={risk.id}><td><span className={`table-risk ${riskColor(riskScore(risk))}`}>{risk.id}</span><b>{risk.name}</b><small>{risk.asset}</small></td><td>{risk.how}</td><td>{risk.effect}</td><td><b className="mitigate">MITIGAR</b>{risk.control}</td><td>{risk.kri}</td></tr>)}</tbody></table></div>
    </div>
  </div></section>
}
