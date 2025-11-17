import { Link } from 'react-router-dom'
import { companyInfo } from '../data/siteContent'

const Footer = () => (
  <footer className="bg-brand-secondary text-brand-accent">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
      <div>
        <p className="text-lg font-semibold text-white">Lembono Automation</p>
        <p className="mt-3 text-sm leading-7 text-brand-accent/80">{companyInfo.description}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-white uppercase tracking-wide">Perusahaan</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link to="/about" className="hover:text-white">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-white">
              Portfolio Project
            </Link>
          </li>
          <li>
            <Link to="/clients" className="hover:text-white">
              Klien Kami
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-white uppercase tracking-wide">Kontak</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>{companyInfo.name}</li>
          <li>Tel: +62 811-2233-4455</li>
          <li>Email: hello@lembono.com</li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-white uppercase tracking-wide">Ikuti Kami</p>
        <p className="mt-3 text-sm">LinkedIn · Instagram · YouTube</p>
      </div>
    </div>
    <div className="border-t border-white/10">
      <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-brand-accent/80 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Lembono Automation. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
