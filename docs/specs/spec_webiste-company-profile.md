## 1. Tujuan Agent

AI Agent bertugas untuk:

- Scaffold project, setup struktur folder sesuai stack yang dipilih (React + Vite + Tailwind)
- Buat komponen UI sesuai spesifikasi desain (warna, font, layout)
- Generate halaman static: Home, Our Clients, Our Projects, About Us, Contact Us
- Menyiapkan build script & deployment guide ke Hostinger
- Membantu styling konsisten dengan brand (warna, font, spacing)
- (Opsional) Memasukkan placeholder data / contoh konten yang nantinya diganti manusia

---

## 2. Stack & Teknologi yang Digunakan

- Vite + React (JavaScript or TypeScript)
- Tailwind CSS untuk styling
- React Router atau bisa saja 1-page dengan anchor scroll (untuk kecepatan)
- Build output: static HTML/CSS/JS → bisa di-upload ke Hostinger (shared hosting)
- Git sebagai version control (opsional)
- Folder `dist/` sebagai hasil build yang akan di-upload

---

## 3. Struktur Folder & File

```
/project-root
  ├─ /public
  |     index.html
  ├─ /src
  |     main.jsx
  |     /components
  |         Navbar.jsx
  |         Footer.jsx
  |         Hero.jsx
  |         ClientsSection.jsx
  |         ProjectsSection.jsx
  |         AboutSection.jsx
  |         ContactForm.jsx
  |     /pages
  |         Home.jsx
  |         About.jsx
  |         Projects.jsx
  |         Clients.jsx
  |         Contact.jsx
  ├─ tailwind.config.js
  ├─ vite.config.js
  ├─ package.json
  └─ README.md

```

Penjelasan:

- `components/`: komponen UI yang bisa reuse di banyak halaman
- `pages/`: tiap halaman utama
- `public/index.html`: entry point
- Build script di `package.json`: `"build": "vite build"`
- Output build akan di folder `dist/`

---

## 4. Styling & Brand Guideline

### Warna

Mengikuti warna dari website Santo Indonesia (secara visual saya tangkap) — kita gunakan:

- **Primary colour**: #0D1B2A (biru/navy gelap)
- **Secondary colour**: #1B263B (biru sedikit lebih terang)
- **Accent colour**: #E0E1DD (abu-terang)
- **Highlight / CTA colour**: #4E8098 (biru kehijauan)
- **Background colour**: #F4F7F9 (abu sangat terang)

### Font

- Gunakan font sans-serif yang modern: e.g., ‘Inter’, ‘Poppins’, atau ‘Roboto’.
- Ukuran teks:
    - Heading utama: `text-4xl` (desktop)
    - Subheading: `text-2xl`
    - Body: `text-base`
- Spacing dan line-height: `leading-7` untuk body, `leading-10` untuk heading

### Layout & Responsiveness

- Mobile first: pastikan tampilan bagus di mobile, kemudian breakpoint `md` untuk desktop
- Grid untuk Projects / Clients: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Padding/global container: `px-4 sm:px-6 lg:px-8`
- Footer dan Navbar tetap ringan, tidak banyak efek animasi

---

## 5. Fungsionalitas Halaman

### Home

- Hero section: gambar besar / ilustrasi mesin automasi, headline dan subheadline, tombol CTA (“Lihat Project” / “Hubungi Kami”)
- Section highlight layanan (3 kartu)
- Section Our Clients (logo grid)
- Section Our Projects (preview beberapa project)
- Section About Us (teaser)
- Section Contact Us (CTA ke halaman Contact)

### Our Clients

- Grid logo klien
- Opsi testimoni singkat
- Seksi pengantar: “Kami telah bekerja dengan klien berikut …”

### Our Projects

- Daftar project dengan kartu: gambar, nama project, industri, lokasi, deskripsi pendek
- Filter sederhana (opsional) berdasarkan kategori industri

### About Us

- Profil perusahaan: tahun berdiri, spesialisasi automasi, visi & misi
- Foto tim / workshop (opsional)
- Nilai-nilai perusahaan

### Contact Us

- Form: Nama, Email, Perusahaan, Pesan
- Info kontak: alamat, telepon/WA, email
- Map embed Google (opsional)
- CTA tombol “Kirim”

---

## 6. Integrasi & Deployment

- Pastikan konfigurasi `vite.config.js` untuk base path cocok dengan hostinger (jika di subfolder)
- Build: `npm run build` → hasil di `dist/`
- Upload via FTP/File Manager ke folder `public_html` atau sesuai domain di Hostinger
- Pastikan file `index.html` ada di root direktori domain
- Caching basic: set headers via `.htaccess` (opsional)
- Uji mobile & desktop setelah upload

---

## 7. Job untuk AI Agent

Berikut contoh task yang bisa diberikan ke AI Agent:

1. Setup project + install dependencies (React, Vite, Tailwind)
2. Buat file config Tailwind & setup theme warna sesuai guideline
3. Bootstrap komponen `Navbar`, `Footer`
4. Bootstrap halaman Home dengan semua section
5. Bootstrap halaman lainnya (About, Projects, Clients, Contact)
6. Tambahkan responsif dan grid layout untuk Projects & Clients
7. Implement form di ContactForm dengan validasi sederhana
8. Script build + README dengan instruksi deploy ke Hostinger

---

## 8. Acceptance Criteria (Kriteria Penerimaan)

- Semua 5 halaman sudah ada, link di Navbar bekerja dan anchor scroll jika 1-page
- Styling sesuai warna dan font guideline di atas
- Responsif: tampilan mobile dan desktop baik
- Build output bisa di-upload ke Hostinger dan berjalan tanpa error
- Konten placeholder sudah ada, siap client ganti nanti
- Loading cepat (untuk static site)
- Navigasi jelas, identitas brand terlihat – kesan: **profesional & teknikal automasi**