import './CompanySection.css'

const organizationVideo = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4'

export default function CompanySection() {
  return <section className="section company-section company-prompt-section" id="empresa">
    <video className="organization-background-video" autoPlay loop muted playsInline preload="metadata" aria-hidden="true">
      <source src={organizationVideo} type="video/mp4" />
    </video>
    <div className="organization-intro">
      <div className="organization-intro-copy">
        <div className="organization-corners" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="organization-feature-badge"><span><i />01 — LA ORGANIZACIÓN</span></div>
        <h2>Del trigo al<br /><em>plato.</em></h2>
        <p>Una cadena que conecta abastecimiento, fábrica y distribución para llevar productos derivados del trigo a todo el país.</p>
        <a href="#empresa-detalle" className="organization-feature-cta">Explorar la operación <span>↓</span></a>
      </div>
    </div>

    <div className="company-context" id="empresa-detalle">El caso sitúa a Pastas del Norte en el sector agroindustrial y alimentario, con una operación que integra abastecimiento, fabricación y distribución nacional.</div>
    <div className="company-grid">
      <article className="company-story"><span className="label">PERFIL DE LA EMPRESA</span><p className="story-intro">Pastas del Norte S.A. fabrica, empaqueta y distribuye fideos y productos derivados del trigo.</p><p>Su operación cruza funciones de compra, producción, almacenamiento, ventas y logística. Hace dos años, la gerencia impulsó la analítica avanzada y creó la Unidad de Inteligencia de Datos para apoyar decisiones de negocio y de planta.</p><figure className="story-photo"><video className="story-photo-video" autoPlay loop muted playsInline preload="metadata" poster="/asset-02.png" aria-hidden="true"><source src="/pasta%20industial.mp4" type="video/mp4" /></video><figcaption>LA PRODUCCIÓN SE CONVIERTE EN PRODUCTO</figcaption></figure><div className="source-note"><span>i</span><p><b>Alcance del caso</b><br />Es una organización descrita para un caso académico. El material no confirma datos registrales ni financieros de una empresa real.</p></div></article>
      <article className="chain-card"><span className="label">CADENA OPERATIVA</span><div className="chain-list">
        <div><span className="chain-num">01</span><div><b>Abastecimiento</b><small>Compra e importación de trigo</small></div><span className="chain-icon">⌁</span></div>
        <div><span className="chain-num">02</span><div><b>Fabricación</b><small>Planificación y producción de pastas</small></div><span className="chain-icon">◉</span></div>
        <div><span className="chain-num">03</span><div><b>Empaque y almacén</b><small>Preparación y control de inventarios</small></div><span className="chain-icon">▤</span></div>
        <div><span className="chain-num">04</span><div><b>Venta y distribución</b><small>Despacho a clientes a nivel nacional</small></div><span className="chain-icon">↗</span></div>
      </div><div className="customer-strip"><span>CLIENTES</span><b>Comercios · distribuidores · consumidores</b><span className="strip-arrow">↗</span></div><div className="customer-strip supplier"><span>PROVEEDORES</span><b>Abastecedores de trigo y otros insumos</b><span className="strip-arrow">↗</span></div><figure className="story-photo process-photo"><img src="/asset-03.png" alt="Paquetes de pasta en una cinta transportadora" loading="lazy" decoding="async" /><figcaption>PROCESAR · EMPACAR · DISTRIBUIR</figcaption></figure></article>
    </div>
    <div className="data-callout"><div className="callout-icon">↗</div><p><b>Los datos convierten la operación en decisiones.</b> Las ventas ayudan a anticipar la demanda; los costos y las compras orientan el abastecimiento; los inventarios y la producción permiten equilibrar disponibilidad, mermas y sobrestock.</p><span className="callout-side">INFORMACIÓN → ACCIÓN</span></div>
  </section>
}
