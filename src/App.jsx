import React from 'react';
import {
  Stethoscope,
  Bot,
  CalendarCheck,
  FileCheck,
  ShieldCheck,
  Lock,
  Server,
  ChevronRight
} from 'lucide-react';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar glass">
        <div className="container">
          <div className="logo">
            <Stethoscope size={28} color="#06b6d4" />
            <span>Gestión de Horarios - OdontoSalud</span>
          </div>
          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#privacidad">Privacidad</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              El futuro de la gestión en<br />
              <span className="gradient-text">Gestión de Horarios - OdontoSalud</span>
            </h1>
            <p>
              Optimizamos los procesos administrativos mediante automatización inteligente,
              permitiendo que tu equipo se concentre en lo más importante: la salud de tus pacientes.
            </p>
            <div className="hero-actions">
              <a href="#servicios" className="btn btn-primary">
                Descubrir cómo <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Procesos que Automatizamos</h2>
            <p>Convertimos tareas repetitivas en flujos de trabajo eficientes, sin errores y completamente digitales.</p>
          </div>

          <div className="grid-3">
            <div className="glass-card glass">
              <div className="icon-container">
                <CalendarCheck size={28} />
              </div>
              <h3 className="card-title">Gestión de Citas Inteligente</h3>
              <p className="card-text">
                Recordatorios automáticos por WhatsApp y correo, confirmaciones de asistencia y reprogramación sin intervención manual.
              </p>
            </div>

            <div className="glass-card glass">
              <div className="icon-container">
                <FileCheck size={28} />
              </div>
              <h3 className="card-title">Expedientes Digitales</h3>
              <p className="card-text">
                Centralización de historiales clínicos, recetas médicas y consentimientos informados de forma estructurada y rápida.
              </p>
            </div>

            <div className="glass-card glass">
              <div className="icon-container">
                <Bot size={28} />
              </div>
              <h3 className="card-title">Asistente Virtual 24/7</h3>
              <p className="card-text">
                Atención constante para preguntas frecuentes de pacientes, información de servicios y derivación a especialistas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Rules Section */}
      <section id="privacidad" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Privacidad y Seguridad de Datos</h2>
            <p>Cumplimos con los más altos estándares de protección de información médica confidencial.</p>
          </div>

          <div className="grid-3">
            {/* Left side: descriptive card */}
            <div className="glass-card glass" style={{ gridColumn: '1 / -1', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px' }}>
                <div className="icon-container">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="card-title">Nuestro Compromiso</h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Sabemos que la información de tus pacientes es sagrada.
                  Nuestra plataforma como servicio (SaaS) está diseñada con una arquitectura de confianza cero (Zero Trust)
                  para garantizar que solo el personal autorizado acceda a los expedientes.
                </p>
                <button className="btn btn-outline">Leer Política Completa</button>
              </div>

              {/* Right side: rules list */}
              <div style={{ flex: '1 1 400px' }} className="rules-list">
                <div className="rule-item">
                  <Lock className="rule-icon" size={24} />
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Cifrado de Extremo a Extremo</h4>
                    <p className="card-text">Todos los datos en tránsito y en reposo se encuentran encriptados usando algoritmos AES-256 de grado militar.</p>
                  </div>
                </div>
                <div className="rule-item">
                  <Server className="rule-icon" size={24} />
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Alojamiento Seguro y Respaldo</h4>
                    <p className="card-text">Servidores dedicados con cumplimiento de normativas de salud (HIPAA / GDPR), garantizando disponibilidad del 99.9% y copias de seguridad diarias automatizadas.</p>
                  </div>
                </div>
                <div className="rule-item">
                  <FileCheck className="rule-icon" size={24} />
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Auditoría y Trazabilidad</h4>
                    <p className="card-text">Registro inmutable de accesos: sabrás exactamente quién, cuándo y desde dónde visualizó o editó el expediente de un paciente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer glass">
        <div className="container footer-content">
          <div className="logo" style={{ fontSize: '1.25rem' }}>
            <Stethoscope size={20} color="#06b6d4" />
            <span>Gestión de Horarios - OdontoSalud</span>
          </div>
          <div className="footer-text">
            © {new Date().getFullYear()} Gestión de Horarios - OdontoSalud. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
