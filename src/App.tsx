import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Misión', href: '#mision' },
  { label: 'Visión', href: '#vision' },
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Contacto', href: '#contacto' },
];

const OBJECTIVES_SPECIFIC = [
  {
    icon: '📊',
    title: 'Recolección de Datos',
    desc: 'Capturamos información precisa de los cultivos de fresas: humedad del suelo, temperatura, pH, nutrientes y condiciones climáticas en tiempo real.',
  },
  {
    icon: '🔬',
    title: 'Análisis Avanzado',
    desc: 'Procesamos la información recopilada para identificar patrones, tendencias y oportunidades de mejora en la producción.',
  },
  {
    icon: '📡',
    title: 'Monitoreo Digital',
    desc: 'Implementamos sensores y plataformas digitales que permiten vigilar el cultivo de forma continua y tomar decisiones basadas en datos.',
  },
];

const STATS = [
  { value: '94%', label: 'Precisión de análisis' },
  { value: '3x', label: 'Mayor rendimiento' },
  { value: '60+', label: 'Agricultores en Tabio' },
  { value: '2026', label: 'Meta de cobertura' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FFEEF7', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,238,247,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(233,26,133,0.15)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 5vw',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'linear-gradient(135deg, #E91A85, #ff6eb4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18,
            }}>🍓</div>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 20, color: '#E91A85', letterSpacing: '-0.3px' }}>
              Strawberry Bells
            </span>
          </div>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} style={{
                color: '#1a1a2e', textDecoration: 'none', fontSize: 14, fontWeight: 500,
                letterSpacing: '0.02em', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E91A85')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1a1a2e')}
              >{link.label}</a>
            ))}
            <a href="#contacto" style={{
              background: '#E91A85', color: '#fff', padding: '8px 20px',
              borderRadius: 24, textDecoration: 'none', fontSize: 14, fontWeight: 600,
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#B8146A')}
              onMouseLeave={e => (e.currentTarget.style.background = '#E91A85')}
            >Únete</a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 4,
          }} className="show-mobile" aria-label="Menú">
            <span style={{ display: 'block', width: 24, height: 2, background: '#E91A85', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#E91A85', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 16, height: 2, background: '#E91A85', borderRadius: 2 }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: '#fff', borderTop: '1px solid rgba(233,26,133,0.15)',
            padding: '16px 5vw',
          }}>
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '10px 0', color: '#1a1a2e',
                textDecoration: 'none', fontWeight: 500, borderBottom: '1px solid #f0e0ea',
              }}>{link.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="inicio" style={{
        minHeight: '100vh', display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '100px 5vw 60px',
        gap: 48,
        maxWidth: 1200, margin: '0 auto',
      }} className="hero-grid">
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(233,26,133,0.1)', borderRadius: 20,
            padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ fontSize: 13, color: '#E91A85', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Analítica Agrícola · Tabio, Colombia
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 700,
            fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 1.1,
            color: '#E91A85', marginBottom: 24, letterSpacing: '-1px',
          }}>
            Datos que<br />
            <em style={{ fontStyle: 'italic', color: '#B8146A' }}>transforman</em><br />
            cosechas
          </h1>
          <p style={{
            fontSize: 18, color: '#4a3050', lineHeight: 1.7,
            maxWidth: 460, marginBottom: 36,
          }}>
            Strawberry Bells convierte los datos de sus cultivos en estrategias
            rentables y sostenibles — desde la salud del suelo hasta la
            optimización de recursos.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#mision" style={{
              background: '#E91A85', color: '#fff', padding: '14px 32px',
              borderRadius: 32, textDecoration: 'none', fontWeight: 600, fontSize: 15,
              boxShadow: '0 8px 24px rgba(233,26,133,0.35)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#B8146A'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#E91A85'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >Conocer el proyecto →</a>
            <a href="#objetivos" style={{
              border: '2px solid #E91A85', color: '#E91A85', padding: '12px 28px',
              borderRadius: 32, textDecoration: 'none', fontWeight: 600, fontSize: 15,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E91A85'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#E91A85'; }}
            >Ver objetivos</a>
          </div>
        </div>

        {/* Hero image collage */}
        <div style={{ position: 'relative', height: 520 }} className="hero-image-col">
          <div style={{
            position: 'absolute', top: 0, left: '5%', right: 0, height: 340,
            borderRadius: 24, overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(233,26,133,0.2)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1734313237433-9b0ecafc2d42?w=700&h=420&fit=crop&auto=format"
              alt="Persona recogiendo fresas en el campo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(233,26,133,0.25) 0%, transparent 50%)',
            }} />
          </div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, width: '55%', height: 220,
            borderRadius: 20, overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
            border: '4px solid #FFEEF7',
          }}>
            <img
              src="https://images.unsplash.com/photo-1594041816808-38a0230bb59b?w=400&h=260&fit=crop&auto=format"
              alt="Fresas rojas de cerca"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Floating stat card */}
          <div style={{
            position: 'absolute', bottom: 60, right: -12,
            background: '#fff', borderRadius: 16, padding: '16px 20px',
            boxShadow: '0 12px 32px rgba(233,26,133,0.18)',
            minWidth: 160,
          }}>
            <div style={{ fontSize: 28, fontFamily: "'Fraunces', serif", fontWeight: 700, color: '#E91A85' }}>+94%</div>
            <div style={{ fontSize: 13, color: '#7a5070', marginTop: 2 }}>Precisión de análisis</div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: '#E91A85', padding: '32px 5vw' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24, textAlign: 'center',
        }} className="stats-grid">
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 36, fontWeight: 700, color: '#fff' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISIÓN */}
      <section id="mision" style={{ padding: '100px 5vw', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="two-col-grid">
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 24, overflow: 'hidden', height: 460 }}>
              <img
                src="https://images.unsplash.com/photo-1734313237467-1f93eb3abbe0?w=600&h=520&fit=crop&auto=format"
                alt="Productor sosteniendo fresas recién cosechadas"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              position: 'absolute', top: -20, right: -20,
              width: 120, height: 120, borderRadius: '50%',
              background: 'rgba(233,26,133,0.12)',
            }} />
          </div>
          <div>
            <Label>Misión</Label>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 3vw, 48px)',
              fontWeight: 700, color: '#E91A85', lineHeight: 1.15, marginBottom: 24,
            }}>
              Análisis preciso<br />para mejores cosechas
            </h2>
            <p style={{ fontSize: 17, color: '#4a3050', lineHeight: 1.75, marginBottom: 20 }}>
              Strawberry Bells analiza a los productores de fresas con <strong>datos precisos</strong> y
              recomendaciones metodológicas accionables, identificando las variables de mayor
              impacto desde la salud del suelo hasta la optimización de recursos.
            </p>
            <p style={{ fontSize: 17, color: '#4a3050', lineHeight: 1.75 }}>
              El objetivo es maximizar consistentemente el <strong>rendimiento y la calidad</strong> de
              cada cosecha, poniendo la ciencia de datos al servicio del agricultor.
            </p>
          </div>
        </div>
      </section>

      {/* VISIÓN */}
      <section id="vision" style={{ padding: '100px 5vw', background: '#FFEEF7' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="two-col-grid reverse-grid">
          <div>
            <Label>Visión · 2026</Label>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 3vw, 48px)',
              fontWeight: 700, color: '#E91A85', lineHeight: 1.15, marginBottom: 24,
            }}>
              El motor analítico<br />de Tabio
            </h2>
            <p style={{ fontSize: 17, color: '#4a3050', lineHeight: 1.75, marginBottom: 20 }}>
              En <strong>2026</strong>, Strawberry Bells será el motor analítico que transforma los datos de
              producción de fresas en la estrategia más rentable y sostenible para los agricultores
              de la región de Tabio.
            </p>
            <p style={{ fontSize: 17, color: '#4a3050', lineHeight: 1.75 }}>
              Garantizamos excelencia y eficiencia, destacando siempre la función clave de cada
              decisión basada en evidencia real del campo.
            </p>
            <div style={{
              marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 12,
              background: 'rgba(233,26,133,0.08)', padding: '14px 20px', borderRadius: 16,
              border: '1px solid rgba(233,26,133,0.2)',
            }}>
              <span style={{ fontSize: 28 }}>🌱</span>
              <div>
                <div style={{ fontWeight: 700, color: '#E91A85', fontSize: 14 }}>Tabio, Cundinamarca</div>
                <div style={{ fontSize: 13, color: '#7a5070' }}>Capital fresera de la región</div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 24, overflow: 'hidden', height: 460 }}>
              <img
                src="https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?w=600&h=520&fit=crop&auto=format"
                alt="Agricultor trabajando en el campo de fresas"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top right, rgba(233,26,133,0.15) 0%, transparent 60%)',
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section id="objetivos" style={{ padding: '100px 5vw', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <Label>Objetivos</Label>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 3vw, 52px)',
              fontWeight: 700, color: '#E91A85', lineHeight: 1.15, marginBottom: 20,
            }}>
              ¿Qué buscamos lograr?
            </h2>
            <p style={{ fontSize: 17, color: '#4a3050', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
              Demostrar soluciones de análisis de datos para optimizar la producción, el cultivo
              y la sostenibilidad de los cultivos de fresas, mejorando la calidad del producto y
              contribuyendo al desarrollo económico y ambiental de la comunidad.
            </p>
          </div>

          {/* Objetivo General */}
          <div style={{
            background: 'linear-gradient(135deg, #E91A85 0%, #c4146e 100%)',
            borderRadius: 24, padding: '48px', marginBottom: 32, color: '#fff',
            display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 32, alignItems: 'center',
          }} className="general-obj">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 64 }}>🎯</div>
              <div style={{
                marginTop: 12, fontWeight: 700, fontSize: 13,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: 12, display: 'inline-block',
              }}>Objetivo General</div>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
                Optimizar la producción sostenible de fresas
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.75, opacity: 0.92 }}>
                Demostrar soluciones de análisis de datos para optimizar la producción, el cultivo y
                la sostenibilidad de los cultivos de fresas, mejorando la calidad del producto y
                contribuyendo al <strong>desarrollo económico y ambiental</strong> de la comunidad.
              </p>
            </div>
          </div>

          {/* Objetivos Específicos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="three-col-grid">
            {OBJECTIVES_SPECIFIC.map((obj, i) => (
              <div key={i} style={{
                background: '#FFEEF7', borderRadius: 20, padding: '36px 28px',
                border: '1px solid rgba(233,26,133,0.15)',
                transition: 'all 0.25s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(233,26,133,0.18)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{obj.icon}</div>
                <h4 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 700,
                  fontSize: 22, color: '#E91A85', marginBottom: 12,
                }}>{obj.title}</h4>
                <p style={{ fontSize: 15, color: '#4a3050', lineHeight: 1.7 }}>{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '80px 5vw', background: '#FFEEF7' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          background: 'linear-gradient(135deg, #2D6A4F 0%, #1b4332 100%)',
          borderRadius: 28, padding: '64px 5vw',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
        }} className="cta-grid">
          <div>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3vw, 44px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 20,
            }}>
              ¿Eres productor<br />de fresas en Tabio?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.7 }}>
              Únete al proyecto y transforma tus datos de campo en decisiones
              inteligentes. El análisis es gratuito para los primeros agricultores de la región.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#contacto" style={{
              background: '#E91A85', color: '#fff', padding: '18px 40px',
              borderRadius: 32, textDecoration: 'none', fontWeight: 700, fontSize: 16,
              boxShadow: '0 12px 32px rgba(233,26,133,0.4)',
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#ff3fa0'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#E91A85'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Registrarme al proyecto →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ padding: '100px 5vw', background: '#fff' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Label>Contacto</Label>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 3vw, 48px)',
            fontWeight: 700, color: '#E91A85', lineHeight: 1.15, marginBottom: 16,
          }}>
            Hablemos
          </h2>
          <p style={{ fontSize: 17, color: '#4a3050', marginBottom: 40, lineHeight: 1.7 }}>
            ¿Eres agricultor, investigador o aliado estratégico? Contáctanos y juntos
            construyamos el futuro de la producción de fresas en Tabio.
          </p>
          <form onSubmit={e => { e.preventDefault(); alert('Mensaje enviado. ¡Nos pondremos en contacto pronto!'); }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-grid">
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#4a3050', marginBottom: 6 }}>Nombre</label>
                <input type="text" placeholder="Tu nombre completo" required style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#4a3050', marginBottom: 6 }}>Email</label>
                <input type="email" placeholder="correo@ejemplo.com" required style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#4a3050', marginBottom: 6 }}>Soy…</label>
              <select style={inputStyle}>
                <option>Productor de fresas</option>
                <option>Investigador / académico</option>
                <option>Entidad gubernamental</option>
                <option>Aliado comercial</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#4a3050', marginBottom: 6 }}>Mensaje</label>
              <textarea placeholder="Cuéntanos sobre tu cultivo o interés en el proyecto..." rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
            <button type="submit" style={{
              background: '#E91A85', color: '#fff', border: 'none',
              padding: '16px 32px', borderRadius: 32, fontWeight: 700, fontSize: 16,
              cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
              boxShadow: '0 8px 24px rgba(233,26,133,0.35)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#B8146A'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#E91A85'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Enviar mensaje →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#1a0a14', color: 'rgba(255,255,255,0.75)',
        padding: '48px 5vw', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 24 }}>🍓</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 22, color: '#E91A85' }}>
              Strawberry Bells
            </span>
          </div>
          <p style={{ fontSize: 14, marginBottom: 8 }}>
            Analítica de datos para productores de fresas · Tabio, Cundinamarca, Colombia
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Strawberry Bells. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; padding-top: 80px !important; }
          .hero-image-col { display: none !important; }
          .two-col-grid { grid-template-columns: 1fr !important; }
          .reverse-grid > div:first-child { order: 2; }
          .reverse-grid > div:last-child { order: 1; }
          .three-col-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .general-obj { grid-template-columns: 1fr !important; text-align: center; }
          .cta-grid { grid-template-columns: 1fr !important; text-align: center; }
          .form-grid { grid-template-columns: 1fr !important; }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'rgba(233,26,133,0.1)', borderRadius: 20,
      padding: '5px 14px', marginBottom: 16,
    }}>
      <span style={{ fontSize: 12, color: '#E91A85', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {children}
      </span>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px',
  borderRadius: 12, border: '2px solid rgba(233,26,133,0.2)',
  background: '#FFEEF7', fontSize: 15,
  fontFamily: "'Outfit', sans-serif",
  outline: 'none', color: '#1a1a2e',
  transition: 'border-color 0.2s',
};
