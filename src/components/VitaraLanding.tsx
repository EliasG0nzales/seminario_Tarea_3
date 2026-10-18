import { useEffect, useState } from 'react'
import './vitara.css'

type TechPanel = 'erp' | 'etl' | 'replicas' | 'analysis'

function Arrow() { return <span aria-hidden="true">↗</span> }

function SalesBarChart() {
  const bars = [42, 58, 49, 78, 67, 92]
  return <div className="case-chart" aria-label="Gráfico de barras ilustrativo de producción por periodo">
    <div className="case-chart-head"><b>Producción por periodo</b><small>unidades · muestra académica</small></div>
    <div className="case-chart-bars">{bars.map((height, index) => <div key={index}><span style={{ height: `${height}%` }} /><small>{['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'][index]}</small></div>)}</div>
  </div>
}

function DemandLineChart() {
  return <div className="case-chart" aria-label="Gráfico de líneas ilustrativo de ventas y demanda">
    <div className="case-chart-head"><b>Ventas y demanda</b><small>tendencia estimada</small></div>
    <svg className="case-line-graph" viewBox="0 0 360 142" role="img" aria-label="Serie temporal de ventas y demanda"><path className="grid" d="M30 20H350M30 55H350M30 90H350M30 125H350"/><path className="axis" d="M30 12V125H350"/><polyline className="line-a" points="32,101 82,78 130,86 180,50 230,61 280,32 348,41"/><polyline className="line-b" points="32,114 82,98 130,93 180,79 230,68 280,58 348,49"/><text x="32" y="139">ENE</text><text x="127" y="139">MAR</text><text x="226" y="139">MAY</text><text x="324" y="139">JUN</text></svg>
    <div className="case-chart-legend"><span>Ventas</span><span>Demanda estimada</span></div>
  </div>
}

function InventoryDonutChart() {
  return <div className="case-chart case-donut-card" aria-label="Gráfico circular ilustrativo de composición del inventario">
    <div className="case-chart-head"><b>Composición del inventario</b><small>por categoría</small></div>
    <div className="case-donut-row"><svg viewBox="0 0 120 120" role="img" aria-label="Distribución: terminado 58%, materia prima 27%, proceso 15%"><circle className="donut-track" cx="60" cy="60" r="42"/><circle className="donut-segment segment-one" cx="60" cy="60" r="42"/><circle className="donut-segment segment-two" cx="60" cy="60" r="42"/><circle className="donut-segment segment-three" cx="60" cy="60" r="42"/><text x="60" y="56">100%</text><text className="donut-center-caption" x="60" y="71">STOCK</text></svg><div className="case-donut-legend"><span><i/>Producto terminado <b>58%</b></span><span><i/>Materia prima <b>27%</b></span><span><i/>En proceso <b>15%</b></span></div></div>
  </div>
}

function EtlStageChart() {
  return <div className="case-chart" aria-label="Gráfico horizontal de registros procesados por etapa ETL">
    <div className="case-chart-head"><b>Registros por etapa</b><small>lote de demostración</small></div>
    <div className="case-hbars"><div><span>Extraídos</span><i><b style={{width:'100%'}}/></i><small>8.420</small></div><div><span>Validados</span><i><b style={{width:'96%'}}/></i><small>8.110</small></div><div><span>Cargados</span><i><b style={{width:'92%'}}/></i><small>7.980</small></div></div>
    <div className="case-quality"><span><i/> Calidad de carga</span><b>94,8%</b></div>
  </div>
}

function QualityGaugeChart() {
  return <div className="case-chart case-gauge-card" aria-label="Indicador demostrativo de calidad del ETL: 94,8 por ciento">
    <div className="case-chart-head"><b>Calidad de la carga</b><small>validaciones superadas</small></div>
    <div className="case-gauge"><svg viewBox="0 0 180 112" role="img" aria-label="94,8 por ciento"><path className="gauge-track" d="M22 94a68 68 0 0 1 136 0"/><path className="gauge-value" d="M22 94a68 68 0 0 1 132-17"/><text x="90" y="79">94,8%</text><text className="gauge-caption" x="90" y="98">CALIDAD</text></svg><span>Objetivo de referencia: 98%</span></div>
  </div>
}

function PipelineDurationChart() {
  return <div className="case-chart" aria-label="Duración ilustrativa de las etapas del proceso ETL">
    <div className="case-chart-head"><b>Tiempo de ejecución</b><small>minutos por etapa</small></div>
    <div className="case-duration-list"><div><span>Extracción</span><i><b style={{width:'54%'}}/></i><strong>04:20</strong></div><div><span>Transformación</span><i><b style={{width:'82%'}}/></i><strong>06:45</strong></div><div><span>Carga</span><i><b style={{width:'38%'}}/></i><strong>03:10</strong></div></div>
    <div className="case-duration-total"><span>Duración total estimada</span><b>14 min 15 s</b></div>
  </div>
}

export default function VitaraLanding() {
  const [active, setActive] = useState<TechPanel | null>(null)
  const [etlStage, setEtlStage] = useState(-1)
  const [runId, setRunId] = useState(0)

  useEffect(() => {
    if (!runId) return
    setEtlStage(0)
    const timers = [1, 2, 3].map((stage) => window.setTimeout(() => setEtlStage(stage), stage * 800))
    return () => timers.forEach(window.clearTimeout)
  }, [runId])

  const show = (panel: TechPanel) => setActive(current => current === panel ? null : panel)

  return <div className="vitara" id="tecnologia">
    <section className="vitara-hero case-hero">
      <video className="vitara-video" autoPlay loop muted playsInline preload="metadata" poster="/asset-08.png" aria-hidden="true"><source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_134434_5de46cb4-38e7-42a6-a8bc-6e62b2fd6c7b.mp4" type="video/mp4" /></video>
      <div className="vitara-video-gradient" />
      <div className="case-hero-inner">
        <span className="case-eyebrow"><i /> 03 — ECOSISTEMA TECNOLÓGICO</span>
        <h2 className="case-hero-title"><span className="vitara-word">Una base</span> <em className="vitara-word">híbrida.</em></h2>
        <p className="case-hero-copy">Pastas del Norte S.A. fabrica, empaqueta y distribuye productos derivados del trigo. Su operación integra compras, producción, almacenamiento, ventas y logística; una base de datos conectada ayuda a convertir ese flujo en decisiones.</p>
        <a className="case-hero-button" href="#tecnologia-flujo">Explorar el ecosistema <span>↓</span></a>
      </div>
      <span className="vitara-hero-caption">PASTAS DEL NORTE · DATOS QUE CONECTAN LA OPERACIÓN</span>
    </section>

    <section className="vitara-shield case-ecosystem" id="tecnologia-flujo">
      <div className="case-section-heading"><div><span className="case-eyebrow"><i /> DEL SISTEMA DE NEGOCIO AL ANÁLISIS</span><h2 className="vitara-shield-title">Una operación.<br /><em>Cuatro etapas.</em></h2></div><p className="vitara-shield-copy">Ventas, producción, compras e inventario nacen en los sistemas empresariales; el proceso ETL organiza esos datos y los lleva a réplicas y herramientas de análisis para apoyar la planificación de la demanda y la producción.</p></div>

      <div className="case-flow">
        <article className="case-flow-card"><span className="case-flow-label">ORIGEN · ERP</span><div className="case-flow-icon">▦</div><h3>Información de la operación</h3><p>Ventas · producción<br />Contabilidad · logística</p><small>Sistemas empresariales de origen.</small><button onClick={() => show('erp')}>{active === 'erp' ? 'Cerrar resumen' : 'Ver resumen ERP'} <Arrow /></button></article>
        <div className="case-flow-arrow"><span>01</span><i>→</i></div>
        <article className="case-flow-card"><span className="case-flow-label">INTEGRACIÓN</span><div className="case-flow-icon">⟳</div><h3>ETL Python + SQL</h3><p>Extracción · transformación<br />Carga nocturna de deltas.</p><small>Validación y preparación para análisis.</small><button onClick={() => { setActive('etl'); setRunId(id => id + 1) }}>Ejecutar secuencia <span>▶</span></button></article>
        <div className="case-flow-arrow"><span>02</span><i>→</i></div>
        <article className="case-flow-card"><span className="case-flow-label">RÉPLICAS · ON-PREMISE</span><div className="case-db-row"><i /> <div><b>Oracle Database</b><small>Histórico operativo · A1</small></div></div><div className="case-db-row"><i className="sql" /> <div><b>Microsoft SQL Server</b><small>Staging y resultados · A2</small></div></div><button onClick={() => show('replicas')}>{active === 'replicas' ? 'Cerrar detalle' : 'Explorar réplicas'} <Arrow /></button></article>
        <div className="case-flow-arrow"><span>03</span><i>→</i></div>
        <article className="case-flow-card"><span className="case-flow-label">ANÁLISIS · CLOUD / LOCAL</span><div className="case-tools"><a className="case-colab-tool" href="https://colab.research.google.com/drive/1XzylvRXfxnr3DbzneDNlh_qzS19jloMA#scrollTo=risk-matrix-heatmap" target="_blank" rel="noreferrer">Google Colab</a><span>VS Code</span></div><h3>Modelado y desarrollo</h3><p>Entrenamiento · evaluación<br />Dashboards y modelos.</p><button onClick={() => show('analysis')}>{active === 'analysis' ? 'Cerrar detalle' : 'Ver modelo'} <Arrow /></button></article>
      </div>

      {active && <div className="case-detail" aria-live="polite">
        <div className="case-detail-top"><div><span className="case-flow-label">DETALLE DEL FLUJO · CASO ACADÉMICO</span><h3>{active === 'erp' ? 'Datos que describen el día a día de la planta' : active === 'etl' ? 'Secuencia de integración de datos' : active === 'replicas' ? 'Réplicas para conservar y preparar la información' : 'Análisis para anticipar y planificar'}</h3></div><button className="case-detail-close" onClick={() => setActive(null)} aria-label="Cerrar panel">×</button></div>
        {active === 'erp' && <><p>El ERP reúne las áreas que describen la cadena de Pastas del Norte. Estos indicadores y visualizaciones son una maqueta académica; no están conectados al ERP ni representan cifras registrales de una empresa real.</p><div className="case-detail-metrics"><div><small>VENTAS DEL PERIODO</small><b>12.840 <i>unid.</i><em>+6,2% vs. periodo anterior</em></b></div><div><small>PRODUCCIÓN</small><b>11.960 <i>unid.</i><em>98% de la meta ilustrativa</em></b></div><div><small>INVENTARIO</small><b>2.410 <i>unid.</i><em>21 días de cobertura</em></b></div></div><div className="case-chart-grid"><SalesBarChart/><DemandLineChart/><InventoryDonutChart/></div></>}
        {active === 'etl' && <><p>Demostración visual del recorrido de una carga nocturna: captura los cambios, valida la estructura y prepara la información para las réplicas.</p><ol className="case-etl-steps">{['Extraer datos de ventas, compras y producción', 'Transformar deltas y validar calidad', 'Cargar resultados en las réplicas A1 y A2'].map((step, index) => <li className={etlStage > index ? 'done' : etlStage === index ? 'running' : ''} key={step}><span>0{index + 1}</span><b>{step}</b><small>{etlStage > index ? 'Listo' : etlStage === index ? 'Procesando…' : 'Pendiente'}</small></li>)}</ol>{etlStage >= 3 && <div className="case-chart-grid"><EtlStageChart/><QualityGaugeChart/><PipelineDurationChart/></div>}</>}
        {active === 'replicas' && <div className="case-replica-detail"><article><span className="case-db-row"><i /><b>Oracle Database · A1</b></span><h4>Histórico operativo</h4><p>Conserva información histórica para consultas y trazabilidad de compras, producción, inventario y ventas.</p></article><article><span className="case-db-row"><i className="sql"/><b>Microsoft SQL Server · A2</b></span><h4>Staging y resultados</h4><p>Prepara y organiza los datos que alimentan indicadores, dashboards y modelos analíticos.</p></article></div>}
        {active === 'analysis' && <><p>El equipo de la Unidad de Inteligencia de Datos puede usar Google Colab y VS Code para preparar datasets, probar modelos de demanda y presentar resultados que ayuden a coordinar compras, producción e inventario.</p><div className="case-analysis-steps"><span>01 <b>Preparar datos</b></span><span>02 <b>Entrenar modelos</b></span><span>03 <b>Evaluar resultados</b></span><span>04 <b>Publicar dashboards</b></span></div><a className="case-colab-open" href="https://colab.research.google.com/drive/1XzylvRXfxnr3DbzneDNlh_qzS19jloMA#scrollTo=risk-matrix-heatmap" target="_blank" rel="noreferrer">Abrir notebook en Google Colab <span>↗</span></a><a className="case-notebook-link" href="/notebooks/pastas-del-norte-modelo.ipynb" download>Descargar notebook para Google Colab <span>↓</span></a></>}
      </div>}

      <figure className="case-factory-image"><video className="case-factory-video" autoPlay loop muted playsInline preload="metadata" poster="/asset-08.png" aria-hidden="true"><source src="/trigo1.mp4" type="video/mp4" /></video><figcaption>INFRAESTRUCTURA QUE MANTIENE EL FLUJO</figcaption></figure>
      <div className="case-project-note"><span>i</span><p><b>Alcance del caso.</b> Pastas del Norte se presenta como un caso académico para analizar su operación y el uso de datos. El material no confirma datos registrales ni financieros de una empresa real.</p><small>INFORMACIÓN → DECISIÓN</small></div>
    </section>
  </div>
}
import './VitaraLandingMedia.css'

