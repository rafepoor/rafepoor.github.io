import { IconMail, IconPhone, IconLocation, IconExternalLink } from '../components/icons';
import styles from './PerfilPage.module.css';

const logrosClave = [
  'Orientación profesional hacia la ciberseguridad defensiva, con formación en seguridad informática, redes, sistemas operativos y análisis de vulnerabilidades.',
  'Práctica en entornos Linux para comprender servicios, permisos, comandos, configuraciones y fundamentos de administración segura.',
  'Aplicación de conocimientos de programación en Python para apoyar procesos de desarrollo seguro, análisis técnico y automatización básica.',
  'Formación en buenas prácticas de protección de sistemas, seguridad en aplicaciones, hardening y monitoreo de eventos de seguridad.',
  'Preparación para oportunidades en áreas como analista SOC junior, analista de vulnerabilidades junior, soporte de ciberseguridad y desarrollo seguro de software.',
];

const experiencias = [
  {
    periodo: 'Abril 2023 – Actualmente',
    empresa: 'Administrador y Auxiliar Contable · Saberco & Asociados',
    items: [
      'Gestionar actividades administrativas relacionadas con el funcionamiento general de la empresa.',
      'Coordinar procesos internos para mejorar el control y seguimiento de las actividades operativas.',
      'Elaborar informes administrativos, reportes de gestión y documentos de seguimiento.',
      'Supervisar el cumplimiento de procedimientos internos y tareas asignadas.',
      'Registrar operaciones contables en el sistema o herramienta correspondiente.',
      'Elaborar reportes básicos de ingresos, egresos, cuentas por pagar y cuentas por cobrar.',
    ],
  },
  {
    periodo: 'Enero 2023 – Abril 2023',
    empresa: 'Taller Desarrollador · Autonomy Jump',
    items: [
      'Resolver retos técnicos de programación en diferentes lenguajes, incluyendo Ada, Assembly y otros lenguajes clásicos o de bajo nivel.',
      'Analizar problemas de lógica, algoritmos y estructuras de programación para proponer soluciones funcionales y optimizadas.',
      'Desarrollar soluciones de código aplicando buenas prácticas de programación, orden, legibilidad y documentación básica.',
      'Utilizar Git para gestionar versiones de código, realizar commits, organizar cambios y subir avances a repositorios.',
      'Investigar lenguajes, herramientas y conceptos necesarios para completar retos técnicos de programación y seguridad.',
    ],
  },
  {
    periodo: 'Enero 2022 – Octubre 2022',
    empresa: 'Agente Growth Chat · Teleperformance',
    items: [
      'Validación de documentos de socios conductores y repartidores, revisando que cumplieran con los requisitos solicitados por la plataforma.',
      'Soporte por chat a usuarios, socios conductores y/o repartidores, resolviendo dudas sobre procesos de registro, activación de cuenta, documentos pendientes, rechazos y seguimiento de casos.',
      'Cumplimiento de políticas internas, aplicando criterios de validación documental y protocolos de atención definidos por Uber.',
      'Escalamiento de casos especiales a áreas correspondientes cuando la solicitud no podía resolverse desde primer nivel de soporte.',
    ],
  },
];

const formacionAcademica = [
  { periodo: '2016 – 2021', titulo: 'Ingeniería de Sistemas', institucion: 'Uniminuto' },
  { periodo: '2025 – Actualidad', titulo: 'Tecnólogo en Análisis y Desarrollo de Software', institucion: 'SENA' },
  { periodo: 'Finalización 2020', titulo: 'Tecnólogo en Contabilidad y Finanzas', institucion: 'SENA' },
];

const formacionComplementaria = [
  { anio: '2026', titulo: 'Hacking Ético con Inteligencia Artificial - Red, Blue y Purple Team', institucion: 'Universidad de Cataluña' },
  { anio: '2026', titulo: 'Inteligencia Artificial Generativa', institucion: 'Universidad de Cataluña' },
  { anio: '2026', titulo: 'Liderazgo Empresarial', institucion: 'Universidad de Cataluña' },
  { anio: '2023', titulo: 'Desarrollador Jr. Unity', institucion: 'Generation Colombia' },
  { anio: '2022', titulo: 'Desarrollo de Aplicaciones Web', institucion: 'Universidad Industrial de Santander' },
  { anio: '2022', titulo: 'Programación Básica en Java y Python', institucion: 'Universidad Industrial de Santander' },
];

const competencias = [
  'Ciberseguridad defensiva', 'Análisis de vulnerabilidades', 'Seguridad informática', 'Desarrollo seguro',
  'Seguridad en aplicaciones', 'Linux', 'Redes', 'Sistemas operativos', 'Python', 'Java', 'Git',
  'Control de versiones', 'Pipelines', 'Buenas prácticas de código', 'Ada', 'Assembly',
  'Resolución de retos técnicos', 'Análisis de errores', 'Automatización básica',
];

export default function PerfilPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} id="contacto">
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.heroRole}>Desarrollador Junior con enfoque en Ciberseguridad</p>
            <h1 className={styles.heroName}>Raul Fernando Polanco Ortiz</h1>
            <p className={styles.heroTagline}>Python · Java · Linux · Seguridad Informática</p>
            <div className={styles.contactList}>
              <a href="tel:+573112305868" className={styles.contactItem}>
                <IconPhone size={15} /> +57 311 230 5868
              </a>
              <a href="mailto:rafepoor@gmail.com" className={styles.contactItem}>
                <IconMail size={15} /> rafepoor@gmail.com
              </a>
              <span className={styles.contactItem}>
                <IconLocation size={15} /> Bogotá D.C., Colombia
              </span>
            </div>
            <a
              href={`${import.meta.env.BASE_URL}CV_raul_Polanco.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
            >
              Descargar CV <IconExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <div className={styles.grid}>
        <div className={styles.left}>
          {/* Perfil profesional */}
          <section className={styles.section} id="perfil">
            <h2 className={styles.sectionTitle}>Perfil profesional</h2>
            <p className={styles.perfilText}>
              Ingeniero de sistemas, con conocimientos en Python, Java, desarrollo de software, redes, Linux y
              fundamentos de ciberseguridad. Actualmente curso un diplomado en ciberseguridad, orientando mi
              carrera hacia áreas como análisis de vulnerabilidades, seguridad defensiva, monitoreo de eventos,
              hardening de sistemas, seguridad en aplicaciones y protección de la información. Busco oportunidades
              para aplicar mis habilidades técnicas en proyectos relacionados con software seguro y ciberseguridad.
            </p>
          </section>

          {/* Logros clave */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Logros clave</h2>
            <ul className={styles.plainList}>
              {logrosClave.map((logro, i) => (
                <li key={i}>{logro}</li>
              ))}
            </ul>
          </section>

          {/* Experiencia profesional */}
          <section className={styles.section} id="experiencia">
            <h2 className={styles.sectionTitle}>Experiencia profesional</h2>
            <div className={styles.timeline}>
              {experiencias.map((exp, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.periodo}>{exp.periodo}</span>
                    <h3 className={styles.empresa}>{exp.empresa}</h3>
                    <ul className={styles.timelineList}>
                      {exp.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.aside}>
          {/* Formación académica y complementaria */}
          <section className={styles.section} id="formacion">
            <h2 className={styles.sectionTitle}>Formación académica</h2>
            <div className={styles.timeline}>
              {formacionAcademica.map((edu, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.periodo}>{edu.periodo}</span>
                    <h3 className={styles.empresa}>{edu.titulo}</h3>
                    <p className={styles.cargo}>{edu.institucion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Formación complementaria</h2>
            <ul className={styles.compactList}>
              {formacionComplementaria.map((f, i) => (
                <li key={i}>
                  <span className={styles.compactTitulo}>{f.titulo}</span>
                  <span className={styles.compactMeta}>{f.institucion} · {f.anio}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Competencias */}
          <section className={styles.section} id="competencias">
            <h2 className={styles.sectionTitle}>Competencias</h2>
            <div className={styles.tags}>
              {competencias.map((c) => (
                <span key={c} className={styles.tag}>{c}</span>
              ))}
            </div>
          </section>

          {/* Idiomas */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Idiomas</h2>
            <div className={styles.tags}>
              <span className={styles.tag}>Inglés B1</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
