// Smooth scrolling ketika link navigasi diklik
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah aksi default (melompat langsung)
    const targetId = link.getAttribute('href'); // Mendapatkan ID tujuan
    const targetSection = document.querySelector(targetId); // Memilih section tujuan

    // Scroll ke section dengan behavior smooth
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Highlight link aktif berdasarkan posisi scroll
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = ''; // Menyimpan ID section yang aktif

  // Mengecek posisi scroll pada setiap section
  sections.forEach((section) => {
    const sectionTop = section.offsetTop; // Jarak atas section dari awal halaman
    const sectionHeight = section.clientHeight; // Tinggi section
    if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
      current = section.getAttribute('id'); // Simpan ID section aktif
    }
  });

  // Menambahkan/menghapus kelas 'active' pada link navigasi
  navLinks.forEach((link) => {
    link.classList.remove('active'); // Hapus semua kelas 'active'
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active'); // Tambahkan kelas 'active' pada link yang sesuai
    }
  });
});