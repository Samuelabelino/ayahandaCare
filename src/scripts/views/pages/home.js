/* eslint-disable eol-last */
/* eslint-disable indent */
const Home = {
    async render() {
        return `
    <section id="home">
    <div class="hero">
      <div class="tagline">
        <h1>
          AYO CEGAH STUNTING
        </h1>
        <h3>Ciptakan Generasi Cerdas Tanpa Stunting</h3>
        <p>Hitung gizi, rencanakan makanan, berbagi cerita dan tumbuh berkembang bersama ayahandaCare</p>
        <div class="button-hero">
          <button class="more"><a style="text-decoration: none;" href="#content">Pelajari Selengkapnya</a></button>
        </div>
      </div>
    </div>
    </div>
  </section>

  <main>
    <!-- Fitur -->
    <section id="features">
      <h1>Awesome Features</h1>
      <p>Beberapa fitur andalan Website ayahandaCare</p>
      <div class="features-card">
        <div class="features-box">
          <i class="fa-brands fa-nutritionix"></i>
          <h3>Calculating Nutrients</h3>
          <p>Hitung jumlah nutrisi yang dibutuhkan untuk balita dan ibu hamil</p>
        </div>
        <div class="features-box">
          <i class="fa-solid fa-newspaper"></i>
          <h3>Article</h3>
          <p>Beberapa artikel populer terkait stunting</p>
        </div>
        <div class="features-box">
          <i class="fa-solid fa-person-pregnant"></i>
          <h3>Rekomendasi</h3>
          <p>Beberapa rekomendasi makanan, minuman, dan buah - buahan untuk balita dan ibu hamil</p>
        </div>
      </div>
    </section>

    <!-- Content Article -->
    <section id="content">
      <article class="headline">
        <figure class="headline-figure">
          <img src="img/stunting2.jpg" alt="Stunting Foto">
        </figure>
        <div class="headline-content">
          <h1 class="headline-title">Apa Itu Stunting ?</h1>
          <p class="headline-description">Stunting adalah kondisi gagal tumbuh pada anak balita (bayi di bawah
            5 tahun) akibat dari kekurangan gizi kronis sehingga anak terlalu pendek untuk usianya.
            Kekurangan gizi terjadi sejak bayi dalam kandungan pada masa awal setelah bayi lahir akan
            tetapi, kondisi stunting baru nampak setelah bayi berusia 2 tahun. Balita pendek (stunted) dan
            sangat penting (severety stunted) adalah balita dengan panjang badan (PB/U) dan tinggi badan
            (TB/U) menurut umurnya dibandingkan dengan standar baku WHO-MGRS tahun 2006.</p>
          <button class="headline-button"><a href="https://www.alodokter.com/stunting">Baca Selengkapnya
          </a></button>
        </div>
      </article>
      </section>

      <div class="article">
        <h1 class="article-label">Popular Article</h1>
        <div class="posts">
          <article class="post-item">
            <img class="post-item-thumbnail" src="img/foto1.jpg" alt="">
            <div class="post-item-content">
              <p class="post-item-date">Rabu, 22 September 2021 <a href="https://www.unicef.org/indonesia/id/press-releases/pola-makan-anak-anak-balita-tidak-membaik-dalam-sepuluh-tahun-terakhir-dan-dapat" class="post-item-date-author">UNICEF
                </a></p>
              <h1 class="post-item-title">Pola makan buruk</h1>
              <p class="post-item-description">NEW YORK, 22 September 2021 – Anak-anak berusia di bawah 2
                tahun tidak mendapatkan makanan ataupun nutrisi yang sesuai dengan kebutuhan tumbuh
                kembangnya, sehingga menyebabkan hambatan perkembangan yang permanen. Temuan ini
                dinyatakan di dalam sebuah laporan baru yang diluncurkan oleh UNICEF hari ini.
              </p>
            </div>
          </article>

          <article class="post-item">
            <img class="post-item-thumbnail" src="img/foto2.jpg" alt="">
            <div class="post-item-content">
              <p class="post-item-date">Jumat, 02 Desember 2022 <a href="https://www.liputan6.com/health/read/5141295/23-persen-bayi-di-ri-lahir-stunting-intervensi-dini-penting-dilakukan" class="post-item-date-author">    Liputan6
                </a></p>
              <h1 class="post-item-title">23 Persen Bayi di RI Lahir Stunting</h1>
              <p class="post-item-description">Stunting adalah kondisi gagal timbuh pada balita akibat kurang gizi dalam jangka waktu lama, paparan infeksi berulang, dan kurang stimulasi.
                Stunting menjadi masalah serius, sebab ini tidak hanya mempengaruhi bentuk fisik anak-anak, tetapi juga fungsi kognitifnya. Menurut Ketua Tim Kerja Pemberdayaan dan Penggerakan Masyarakat, Kementerian Kesehatan RI, Dwi Adi Maryandi, SKM, MPH, kognitif menjadi permasalahan utama dalam kasus stunting.
              </p>
            </div>
          </article>
          <article class="post-item">
            <img class="post-item-thumbnail" src="img/hewani.jpg" alt="">
            <div class="post-item-content">
              <p class="post-item-date">Kamis, 21 Oktober 2022<a href="https://lifestyle.okezone.com/read/2022/10/21/298/2691777/anak-anak-harus-konsumsi-2-jenis-pangan-hewani-dalam-sehari" class="post-item-date-author">okelifestyle
                </a></p>
              <h1 class="post-item-title">Konsumsi pangan hewani</h1>
              <p class="post-item-description">Guru Besar Pangan dan Gizi Institut Pertanian Bogor (IPB) Prof. 
                Ali Khomsan mengimbau bahwa dalam satu hari harus ada dua jenis pangan hewani pada menu makan untuk 
                memperbaiki kondisi stunting. Selain pemberian dua jenis pangan hewani, lengkapi dengan nasi, sayur, 
                dan lauk lainnya juga tetap dianjurkan. Menurut Prof. Ali, pemberian dua jenis pangan hewani ini setidaknya 
                dilakukan selama enam bulan untuk memperbaiki stunting.
              </p>
            </div>
          </article>
          <article class="post-item">
            <img class="post-item-thumbnail" src="img/rokok.jpg" alt="">
            <div class="post-item-content">
              <p class="post-item-date">Rabu, 16 November 2022<a href="https://daerah.sindonews.com/read/942793/720/awas-asap-rokok-picu-kenaikan-kasus-stunting-di-palembang-1668564717" class="post-item-date-author">SINDONEWS
                </a></p>
              <h1 class="post-item-title">Asap Rokok dan Kasus Stunting</h1>
              <p class="post-item-description">Jumlah kasus stunting di 
                Kota Palembang mengalami peningkatan pada November 2022. Kenaikan kasus tersebut 
                dipengaruhi oleh gaya hidup orang tua yang tidak sehat seperti faktor asap rokok.
                Dijelaskan Artur, berdasarkan data yang dimiliki Dinas Kesehatan (Dinkes) dan TPPS 
                Palembang, jumlah anak penderita stunting atau kerdil mencapai 87 orang sejak Januari 
                hingga November 2022.
              </p>
            </div>
          </article>
          <article class="post-item">
            <img class="post-item-thumbnail" src="img/pengantin.jpg" alt="">
            <div class="post-item-content">
              <p class="post-item-date">Jumat, 11 Maret 2022<a href="https://www.cnnindonesia.com/nasional/20220311160551-20-770020/calon-pengantin-kini-wajib-cek-kesehatan-h-3-bulan-pernikahan" class="post-item-date-author">CNN Indonesia
                </a></p>
              <h1 class="post-item-title">Cek Kesehatan Pengantin</h1>
              <p class="post-item-description">Badan Kependudukan dan Keluarga Berencana Nasional (BKKBN) dan Kementerian Agama 
                mewajibkan calon pasangan pengantin untuk melakukan pemeriksaan kesehatan 3 bulan sebelum pernikahan.
                Tujuannya untuk mencegah anak mengalami stunting atau gizi buruk. Kesehatan calon pengantin dianggap 
                penting untuk menurunkan angka gizi buruk pada anak Indonesia. "Wajib diperiksa 3 bulan pra nikah," 
                kata Kepala BKKBN Hasto Wardoyo.
              </p>
            </div>
          </article>
          <article class="post-item">
            <img class="post-item-thumbnail" src="img/hewani.jpg" alt="">
            <div class="post-item-content">
              <p class="post-item-date">Senin, 14 November 2022<a href="https://jateng.suara.com/read/2022/11/14/061000/anak-berpostur-pendek-bukan-berarti-stunting-ini-cara-membedakannya" class="post-item-date-author">suarajawatengah.id
                </a></p>
              <h1 class="post-item-title">Badan Pendek Bukan Stunting</h1>
              <p class="post-item-description">Salah satu indikator dari anak stunting adalah tinggi badannya tidak berkembang sesuai dengan usia anak. 
                Tetapi, Dokter spesialis anak, Prof Aman Bhakti Pulungan mengatakan bahwa anak postur pendek bukan berarti stunting. Jika tinggi dan berat badan anak tidak mengalami pertumbuhan maka dia bisa dikatakan mengalami stunting. Sedangkan anak yang memiliki berat badan normal namun tidak bertambah tinggi dapat diperhatikan dengan melihat genetik keluarga.
              </p>
            </div>
          </article>
        </div>
      </div>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};
export default Home;