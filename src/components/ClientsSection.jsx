const ClientsSection = ({
  title = 'Klien Kami',
  description = 'Kami dipercaya oleh perusahaan lintas industri.',
  clientsList = [],
  limit,
  showTestimonials = false,
}) => {
  const displayedClients = limit ? clientsList.slice(0, limit) : clientsList

  return (
    <section className="bg-white py-16" id="clients">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center md:max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-highlight">Our Clients</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-primary">{title}</h2>
          <p className="mt-4 text-base text-brand-secondary">{description}</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {displayedClients.map((client) => (
            <div
              key={client.name}
              className="flex h-20 items-center justify-center rounded-2xl border border-brand-accent px-3 text-center text-sm font-semibold text-brand-secondary shadow-sm"
            >
              {client.name}
            </div>
          ))}
        </div>
        {showTestimonials && (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {displayedClients.slice(0, 3).map((client) => (
              <div key={client.name} className="rounded-2xl bg-brand-background p-6 shadow-inner">
                <p className="text-sm text-brand-secondary">“{client.testimonial}”</p>
                <p className="mt-4 text-sm font-semibold text-brand-primary">{client.name}</p>
                <p className="text-xs uppercase tracking-wide text-brand-secondary/70">{client.industry}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ClientsSection
