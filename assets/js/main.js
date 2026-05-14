/**
 * main.js — Kelompok 2 | Pengkaderan Informatika
 * Handles: active nav, scroll effects, member modal, hero canvas
 */

/* ============================================================
   DATA MENTOR KELOMPOK 2 (Ganti dengan data asli)
   ============================================================ */
const mentors = [
  {
    id: "m1",
    name: "Dr. Budi Santoso, M.Kom.",
    npm: "NIP: 197504152005011002",
    role: "Dosen Pembimbing I",
    bio: "Dosen senior Departemen Informatika dengan spesialisasi di bidang Kecerdasan Buatan dan Machine Learning. Telah mengajar selama lebih dari 15 tahun dan aktif dalam penelitian deep learning terapan serta natural language processing.",
    photo: "https://ui-avatars.com/api/?name=Budi+Santoso&background=0f4c75&color=fff&size=200&bold=true",
    linkedin: "#",
    github: "#",
    instagram: "#"
  },
  {
    id: "m2",
    name: "Siti Rahayu, S.T., M.T.",
    npm: "NIP: 198902272015042001",
    role: "Dosen Pembimbing II",
    bio: "Dosen muda berprestasi di Departemen Informatika dengan fokus riset pada Keamanan Siber dan Rekayasa Perangkat Lunak. Aktif membimbing mahasiswa dalam kompetisi pemrograman tingkat nasional dan internasional.",
    photo: "https://ui-avatars.com/api/?name=Siti+Rahayu&background=0e4f74&color=fff&size=200&bold=true",
    linkedin: "#",
    github: "#",
    instagram: "#"
  }
];

/* ============================================================
   DATA ANGGOTA KELOMPOK 2 (Ganti dengan data asli)
   ============================================================ */
const members = [
  {
    id: 1,
    name: "Ahmad Rizki Pratama",
    npm: "22/504231/TK/55012",
    role: "Ketua Kelompok",
    bio: "Mahasiswa Informatika angkatan 2022 yang memiliki passion kuat di bidang pengembangan web fullstack dan mobile. Aktif berkontribusi di komunitas open source kampus dan senang berbagi pengetahuan melalui workshop coding.",
    photo: "https://ui-avatars.com/api/?name=Ahmad+Rizki&background=0ea5e9&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/ahmadrizki",
    github: "https://github.com/ahmadrizki",
    instagram: "https://instagram.com/ahmadrizki"
  },
  {
    id: 2,
    name: "Bunga Sari Dewi",
    npm: "22/504232/TK/55013",
    role: "Sekretaris",
    bio: "Tertarik mendalami kecerdasan buatan dan machine learning untuk aplikasi bidang kesehatan. Meraih juara 2 kompetisi Data Science tingkat nasional 2023. Juga aktif dalam kegiatan penelitian di lab AI kampus.",
    photo: "https://ui-avatars.com/api/?name=Bunga+Sari&background=0e7490&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/bungasari",
    github: "https://github.com/bungasari",
    instagram: "https://instagram.com/bungasari"
  },
  {
    id: 3,
    name: "Cahyo Nugroho",
    npm: "22/504233/TK/55014",
    role: "Anggota",
    bio: "Berfokus pada sistem operasi berbasis Linux dan administrasi jaringan komputer. Telah mendapatkan sertifikasi Cisco CCNA dan aktif mengelola infrastruktur server laboratorium komputer Informatika.",
    photo: "https://ui-avatars.com/api/?name=Cahyo+Nugroho&background=0369a1&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/cahyonugroho",
    github: "https://github.com/cahyonugroho",
    instagram: "https://instagram.com/cahyonugroho"
  },
  {
    id: 4,
    name: "Dina Fitriani",
    npm: "22/504234/TK/55015",
    role: "Anggota",
    bio: "Antusias di bidang basis data dan rekayasa perangkat lunak. Berpengalaman dalam desain skema relasional kompleks dan optimasi query SQL. Saat ini tengah mengerjakan skripsi tentang sistem manajemen inventaris berbasis cloud.",
    photo: "https://ui-avatars.com/api/?name=Dina+Fitriani&background=075985&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/dinafitriani",
    github: "https://github.com/dinafitriani",
    instagram: "https://instagram.com/dinafitriani"
  },
  {
    id: 5,
    name: "Eko Prasetyo",
    npm: "22/504235/TK/55016",
    role: "Anggota",
    bio: "Competitive programmer berpengalaman yang telah mengikuti ICPC Asia Regional dua kali berturut-turut. Sangat menyukai algoritma graf dan dynamic programming. Dalam waktu luang, ia menulis blog teknis tentang problem solving.",
    photo: "https://ui-avatars.com/api/?name=Eko+Prasetyo&background=1e40af&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/ekoprasetyo",
    github: "https://github.com/ekoprasetyo",
    instagram: "https://instagram.com/ekoprasetyo"
  },
  {
    id: 6,
    name: "Farah Amalina",
    npm: "22/504236/TK/55017",
    role: "Anggota",
    bio: "Passionate dalam pengembangan aplikasi mobile berbasis Flutter dan React Native. Menjuarai hackathon UI/UX tingkat nasional 2023 dengan aplikasi aksesibilitas untuk penyandang tunanetra. Percaya teknologi harus inklusif.",
    photo: "https://ui-avatars.com/api/?name=Farah+Amalina&background=0e4f74&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/farahamalina",
    github: "https://github.com/farahamalina",
    instagram: "https://instagram.com/farahamalina"
  },
  {
    id: 7,
    name: "Galih Wicaksono",
    npm: "22/504237/TK/55018",
    role: "Anggota",
    bio: "Berfokus pada cloud computing, containerization (Docker, Kubernetes), dan praktik DevOps modern. Telah memperoleh sertifikasi AWS Cloud Practitioner dan sedang menempuh AWS Solutions Architect Associate. Gemar mengotomasi hal-hal repetitif.",
    photo: "https://ui-avatars.com/api/?name=Galih+Wicaksono&background=164e63&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/galihwicaksono",
    github: "https://github.com/galihwicaksono",
    instagram: "https://instagram.com/galihwicaksono"
  },
  {
    id: 8,
    name: "Hana Kusuma Wardani",
    npm: "22/504238/TK/55019",
    role: "Anggota",
    bio: "Data enthusiast yang gemar mengeksplorasi dataset besar untuk menemukan insight berharga. Mahir menggunakan Python (Pandas, NumPy, Matplotlib) dan Tableau untuk visualisasi data. Saat ini magang sebagai Junior Data Analyst di perusahaan fintech lokal.",
    photo: "https://ui-avatars.com/api/?name=Hana+Kusuma&background=0a4f7c&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/hanakusuma",
    github: "https://github.com/hanakusuma",
    instagram: "https://instagram.com/hanakusuma"
  },
  {
    id: 9,
    name: "Irfan Maulana",
    npm: "22/504239/TK/55020",
    role: "Anggota",
    bio: "Backend developer yang berpengalaman dengan Node.js, Express, dan Go. Sangat menyukai desain arsitektur microservices dan API RESTful yang skalabel. Kontributor aktif beberapa proyek open source dan senang menulis dokumentasi teknis yang baik.",
    photo: "https://ui-avatars.com/api/?name=Irfan+Maulana&background=0c4a6e&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/irfanmaulana",
    github: "https://github.com/irfanmaulana",
    instagram: "https://instagram.com/irfanmaulana"
  },
  {
    id: 10,
    name: "Jihan Putri Cantika",
    npm: "22/504240/TK/55021",
    role: "Anggota",
    bio: "Tertarik mendalami computer vision dan pengolahan citra digital menggunakan OpenCV dan PyTorch. Aktif sebagai asisten laboratorium Computer Vision. Sedang mengerjakan riset tentang deteksi objek real-time untuk sistem keamanan kampus berbasis CCTV.",
    photo: "https://ui-avatars.com/api/?name=Jihan+Putri&background=0369a1&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/jihanputri",
    github: "https://github.com/jihanputri",
    instagram: "https://instagram.com/jihanputri"
  },
  {
    id: 11,
    name: "Kevin Andrianto",
    npm: "22/504241/TK/55022",
    role: "Anggota",
    bio: "Berfokus pada pengembangan game menggunakan Unity dan Unreal Engine, serta grafika komputer 3D. Telah merilis dua game indie di platform itch.io. Percaya bahwa game adalah medium seni yang paling ekspresif dan interaktif di era modern.",
    photo: "https://ui-avatars.com/api/?name=Kevin+Andrianto&background=1d4ed8&color=fff&size=200&bold=true",
    linkedin: "https://linkedin.com/in/kevinandrianto",
    github: "https://github.com/kevinandrianto",
    instagram: "https://instagram.com/kevinandrianto"
  }
];


/* ============================================================
   NAVBAR: Active Link & Scroll Effect
   ============================================================ */
function initNavbar() {
  // Tandai link aktif berdasarkan URL saat ini
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link-custom');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkFile = href.split('/').pop();

    // Home aktif
    if ((currentPath === 'index.html' || currentPath === '') && (linkFile === 'index.html' || href === '/')) {
      link.classList.add('active');
    }
    // Materi aktif (semua halaman materi)
    else if (
      linkFile === 'materi.html' &&
      (currentPath === 'materi.html' || currentPath.startsWith('materi') && currentPath !== 'index.html')
    ) {
      link.classList.add('active');
    }
    // About aktif
    else if (linkFile === 'about.html' && currentPath === 'about.html') {
      link.classList.add('active');
    }
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }
}


/* ============================================================
   HERO CANVAS: Particle Effect
   ============================================================ */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r  = Math.random() * 1.5 + 0.5;
      this.a  = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(14,165,233,${this.a})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    const count = Math.floor((W * H) / 9000);
    particles = Array.from({ length: count }, () => new Particle());
  }

  function drawLines() {
    const MAX_DIST = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(14,165,233,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resize(); init(); }, { passive: true });
  init();
  animate();
}


/* ============================================================
   SCROLL REVEAL ANIMATION
   ============================================================ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Staggered delay for groups
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, 80 * (entry.target.dataset.delay || 0));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el, i) => {
    el.dataset.delay = i % 4; // Stagger within groups of 4
    observer.observe(el);
  });
}


/* ============================================================
   ABOUT PAGE: Render Mentors + Members, Shared Modal
   ============================================================ */
function initMemberModal() {
  const modal      = document.getElementById('memberModal');
  if (!modal) return;

  const modalPhoto = document.getElementById('modal-photo');
  const modalName  = document.getElementById('modal-name');
  const modalNpm   = document.getElementById('modal-npm');
  const modalRole  = document.getElementById('modal-role');
  const modalBio   = document.getElementById('modal-bio');
  const modalLi    = document.getElementById('modal-linkedin');
  const modalGh    = document.getElementById('modal-github');
  const modalIg    = document.getElementById('modal-instagram');

  /* ── Helper: build one card HTML ── */
  function buildCard(person, isMentor) {
    const borderStyle = isMentor
      ? 'border-color: rgba(250,204,21,0.35); background: linear-gradient(145deg, #141f33, #1a2540);'
      : '';
    const badge = isMentor
      ? `<span style="display:inline-block;font-family:var(--font-head);font-size:0.58rem;letter-spacing:0.14em;text-transform:uppercase;color:#fbbf24;background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.25);padding:0.2rem 0.6rem;border-radius:100px;margin-bottom:0.5rem;">${person.role}</span>`
      : `<div class="member-role">${person.role}</div>`;
    return `
      <div class="member-card" data-id="${person.id}" data-type="${isMentor ? 'mentor' : 'member'}"
           title="Klik untuk lihat profil" style="${borderStyle}">
        ${isMentor ? `<div style="position:absolute;top:10px;right:10px;width:8px;height:8px;border-radius:50%;background:#fbbf24;box-shadow:0 0 8px #fbbf24;"></div>` : ''}
        <img src="${person.photo}" alt="${person.name}" class="member-avatar" loading="lazy"
             onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=0ea5e9&color=fff&size=200'">
        <div class="member-name">${person.name}</div>
        ${badge}
      </div>`;
  }

  /* ── Render Mentor Grid ── */
  const mentorGrid = document.getElementById('mentors-grid');
  if (mentorGrid) {
    mentors.forEach((m) => {
      const col = document.createElement('div');
      col.className = 'col-sm-6 col-md-4 col-lg-3 reveal';
      col.innerHTML = buildCard(m, true);
      mentorGrid.appendChild(col);
    });
  }

  /* ── Render Member Grid ── */
  const memberGrid = document.getElementById('members-grid');
  if (memberGrid) {
    members.forEach((m) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4 col-lg-3 reveal';
      col.innerHTML = buildCard(m, false);
      memberGrid.appendChild(col);
    });
  }

  // Refresh scroll reveal for dynamically added cards
  initScrollReveal();

  /* ── Event delegation: open modal on any card click ── */
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.member-card[data-id]');
    if (!card) return;

    const rawId  = card.dataset.id;
    const type   = card.dataset.type;
    const person = type === 'mentor'
      ? mentors.find(m => m.id === rawId)
      : members.find(m => m.id === parseInt(rawId));
    if (!person) return;

    // ── Populate modal ──
    if (modalPhoto) { modalPhoto.src = person.photo; modalPhoto.alt = person.name; }
    if (modalName)  modalName.textContent  = person.name;
    if (modalNpm)   modalNpm.textContent   = person.npm;
    if (modalBio)   modalBio.textContent   = person.bio;
    if (modalLi)    modalLi.href  = person.linkedin;
    if (modalGh)    modalGh.href  = person.github;
    if (modalIg)    modalIg.href  = person.instagram;

    // Role badge: gold for mentor, blue for member
    if (modalRole) {
      modalRole.textContent = person.role;
      if (type === 'mentor') {
        modalRole.style.color          = '#fbbf24';
        modalRole.style.borderColor    = 'rgba(251,191,36,0.3)';
        modalRole.style.background     = 'rgba(251,191,36,0.08)';
      } else {
        modalRole.style.color          = 'var(--accent)';
        modalRole.style.borderColor    = '';
        modalRole.style.background     = '';
      }
    }

    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
  });
}


/* ============================================================
   INIT ON DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroCanvas();
  initScrollReveal();
  initMemberModal();
});
