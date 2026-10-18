export type Risk = {
  id: string
  name: string
  asset: string
  p: number
  i: number
  how: string
  effect: string
  control: string
  kri: string
}

export type Asset = {
  id: string
  name: string
  description: string
}

export const risks: Risk[] = [
  { id: 'T1', name: 'Exfiltración de datos', asset: 'A5 · Datos de producción y ventas', p: 4, i: 5, how: 'Datasets sensibles se cargan en servicios cloud públicos sin controles empresariales.', effect: 'Exposición de costos, volúmenes y datos comerciales; pérdida de confianza y ventaja competitiva.', control: 'Clasificar y minimizar datos; anonimizar antes del análisis; usar un entorno cloud aprobado con acceso privado y auditoría.', kri: '0 datasets identificables en servicios no aprobados.' },
  { id: 'T2', name: 'Falla de sincronización ETL', asset: 'A3 · Scripts ETL', p: 3, i: 4, how: 'El proceso nocturno falla, omite deltas o carga datos incompletos sin alertar.', effect: 'Pronósticos basados en información desfasada y decisiones deficientes de compra o producción.', control: 'Validaciones de calidad, reconciliación de registros, reintentos idempotentes y alertas de frescura.', kri: '≥ 99% de cargas completadas y dentro de la ventana acordada.' },
  { id: 'T3', name: 'Inyección de código / malware', asset: 'A8 · Estaciones locales y VS Code', p: 3, i: 5, how: 'Dependencias comprometidas o código malicioso descargado desde repositorios externos.', effect: 'Robo de secretos, alteración de modelos o interrupción de los equipos de desarrollo.', control: 'Dependencias fijadas y escaneadas, entornos aislados, endpoint protection y revisión de cambios.', kri: '100% de builds con dependencias escaneadas.' },
  { id: 'T4', name: 'Indisponibilidad de red', asset: 'A7 · Entorno de análisis cloud', p: 3, i: 3, how: 'Una caída de Internet interrumpe notebooks, entrenamiento o acceso a servicios cloud.', effect: 'Retraso en análisis y despliegues; dependencia de procesos sin alternativa local.', control: 'Cola de trabajos, conectividad redundante y modo degradado con procesos esenciales documentados.', kri: 'RTO y disponibilidad dentro de los objetivos aprobados.' },
  { id: 'T5', name: 'Error humano / Data Drift', asset: 'A4 · Notebooks y artefactos ML', p: 4, i: 5, how: 'Un error de código, sesgo o cambio en los datos degrada el modelo sin detección.', effect: 'Predicciones incorrectas de demanda, compras de trigo, lotes y distribución.', control: 'Pruebas, validación antes de promover modelos, monitoreo de drift y mecanismo de reversión.', kri: '100% de modelos productivos con métricas, alertas y responsable.' },
  { id: 'T6', name: 'Degradación de hardware', asset: 'A1–A2 · Servidores de datos', p: 2, i: 5, how: 'Falla eléctrica o mecánica en discos, memoria o servidores locales.', effect: 'Pérdida de disponibilidad o datos y detención de flujos analíticos.', control: 'Redundancia, mantenimiento preventivo, copias aisladas y simulacros de restauración.', kri: 'Restauraciones probadas según calendario; RPO/RTO cumplidos.' },
  { id: 'T7', name: 'Fuga de talento humano', asset: 'A9 · Equipo UID', p: 3, i: 4, how: 'Una persona clave se retira sin documentación ni transferencia de conocimiento.', effect: 'Retrasos, dependencia de individuos y dificultad para recuperar o mantener modelos.', control: 'Documentación viva, revisión entre pares, rotación de guardias y plan de sucesión.', kri: '100% de pipelines y modelos con documentación y dos responsables.' },
  { id: 'T8', name: 'Inconsistencia de esquema', asset: 'A1–A3 · Bases y ETL', p: 3, i: 4, how: 'Un cambio de tablas en los sistemas de origen altera columnas o tipos esperados.', effect: 'ETL interrumpido o transformaciones silenciosamente incorrectas.', control: 'Contratos de datos, versionado de esquemas y pruebas de compatibilidad en staging.', kri: '100% de cambios de esquema detectados antes de producción.' },
  { id: 'T9', name: 'Credenciales compartidas', asset: 'A6 · Credenciales de acceso', p: 4, i: 5, how: 'Varias personas usan cuentas comunes o secretos guardados en notebooks.', effect: 'Acceso sin atribución individual y mayor impacto ante filtración o salida del equipo.', control: 'Identidad individual, mínimo privilegio, bóveda de secretos, MFA y rotación automática.', kri: '0 cuentas compartidas; 100% de secretos en bóveda.' },
  { id: 'T10', name: 'Copias locales sin protección', asset: 'A8 · Estaciones locales', p: 4, i: 4, how: 'Fragmentos de datos se descargan a laptops sin cifrado, control ni respaldo.', effect: 'Exposición o pérdida de información y copias fuera del gobierno corporativo.', control: 'Bloquear descargas no autorizadas; cifrado de disco y repositorios corporativos con retención.', kri: '0 copias locales no autorizadas detectadas.' },
]

export const assets: Asset[] = [
  { id: 'A1', name: 'Servidor Oracle', description: 'Repositorio consolidado de datos históricos operativos.' },
  { id: 'A2', name: 'Servidor MS-SQL Server', description: 'Almacena resultados, staging y datos preparados para inferencia.' },
  { id: 'A3', name: 'Scripts ETL', description: 'Código Python y SQL que integra datos de los ERP cada noche.' },
  { id: 'A4', name: 'Notebooks y artefactos ML', description: 'Código fuente y modelos, por ejemplo .ipynb, .py, .pkl y .onnx.' },
  { id: 'A5', name: 'Datos de producción y ventas', description: 'Información sensible de costos, fórmulas, volúmenes e indicadores comerciales.' },
  { id: 'A6', name: 'Credenciales de acceso', description: 'Usuarios, contraseñas, claves API y tokens de conexión.' },
  { id: 'A7', name: 'Entorno Google Colab', description: 'Servicio cloud gratuito utilizado para procesamiento y entrenamiento.' },
  { id: 'A8', name: 'Estaciones locales / VS Code', description: 'Equipos de trabajo y herramienta local de desarrollo.' },
  { id: 'A9', name: 'Talento humano', description: 'Cuatro científicos de datos e ingenieros ML, un DBA y un gerente.' },
  { id: 'A10', name: 'Dashboards y salidas', description: 'Reportes consumidos por la dirección para tomar decisiones.' },
]

export const riskScore = (risk: Risk): number => risk.p * risk.i
export const riskLabel = (score: number): string => score >= 20 ? 'Crítico' : score >= 12 ? 'Alto' : score >= 6 ? 'Medio' : 'Bajo'
export const riskColor = (score: number): string => score >= 20 ? 'critical' : score >= 12 ? 'high' : score >= 6 ? 'medium' : 'low'
export const highRiskCount = risks.filter((risk) => riskScore(risk) >= 12).length
