import Hero from '../components/Hero'
import ClientsSection from '../components/ClientsSection'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import ContactForm from '../components/ContactForm'
import { clients, contactInfo, projects, services } from '../data/siteContent'

const Home = () => (
  <main>
    <Hero />
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-highlight">Layanan</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Dari Blueprint Hingga Training</h2>
          <p className="mt-4 text-base text-brand-secondary">
            Paket layanan lengkap memastikan project berjalan mulus dengan transfer knowledge yang rapi.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-brand-accent/60 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-background text-2xl">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-brand-primary">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-secondary">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <ClientsSection
      clientsList={clients}
      limit={6}
      title="Dipercaya brand nasional dan multinasional"
      description="Kolaborasi dengan tim operasional, maintenance, hingga IT memastikan solusi yang benar-benar terhubung."
    />
    <ProjectsSection
      projectsList={projects}
      highlightCount={3}
      title="Project terbaru"
      description="Contoh project dengan target ROI cepat serta integrasi data ke sistem bisnis."
    />
    <AboutSection compact />
    <section className="bg-brand-background py-16" id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-secondary">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-primary">Mulai diskusi project Anda</h2>
          <p className="mt-4 text-base leading-7 text-brand-secondary">
            Kirim kebutuhan atau jadwalkan konsultasi. Kami siap membantu melakukan studi kelayakan dan estimasi
            investasi.
          </p>
          <ul className="mt-6 space-y-3 text-brand-primary">
            <li>
              <span className="font-semibold">Alamat:</span> {contactInfo.address}
            </li>
            <li>
              <span className="font-semibold">Telepon:</span> {contactInfo.phone}
            </li>
            <li>
              <span className="font-semibold">Email:</span> {contactInfo.email}
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  </main>
)

export default Home
