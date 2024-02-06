/* eslint-disable no-shadow */
const Nutrition = {
  async render() {
    return `
    <div class="kalori-container">
        <div class="row-kalori">
            <div class="col-left">
                <div class="kalori-desc">
                    <h1>Apa itu Kalori</h1>
                    <p>
                        Kalori adalah jumlah energi yang didapatkan dari makanan dan minuman. Ini juga merupakan jumlah energi yang dibakar tubuh melalui aktivitas sehari-hari.</br>
                        </br>
                        Artinya, kalori adalah energi yang dibutuhkan tubuh agar bisa beraktivitas dan menjalankan fungsinya dengan baik. </br>
                        </br>
                        Pada saat melihat label nutrisi pada kemasan makanan atau minuman, Anda mungkin melihat istilah “kkal”.
                    </p>
                </div>
                <div class="kalori-calc">
                    <h1>Penghitungan Kalori / Hari </h1>
                    <div class="hint">
                        Balita dan Ibu Hamil
                    </div>
                    <div class="kalori-form">
                        <p>Rumus Penghitungan BMR untuk Anak dan Ibu Hamil</br>
                            Anak = 0.167 * berat + 15.174 * tinggi - 617.6</br>
                            </br>
                            Ibu Hamil = 655 + 9.6 * berat + 1.85 * tinggi - 4.68 * umur.</br>
                            </br>
                        </p>

                    </div>
                </div>

            </div>
            <div class="col-right">
                <div class="kalori-result">
                    <div class="kalori-kalkulator">
                        <h2>Kalkulator Kalori</h2>
                        <div class="controls">
                            <form>
                                <h3>Umur (0 - 100)</h3>
                                <input type="text" id="umur" value="28" />

                                <div class="gender">
                                    <h3>Gender</h3>
                                    <input type="radio" id="balita" value="balita" name="gender" checked />
                                    <label for="balita">Balita</label>
                                    <input type="radio" id="ibuhamil" value="ibuhamil" name="gender" />
                                    <label for="ibuhamil">Ibu hamil</label>
                                </div>

                                <div class="tinggi">
                                    <h3>Tinggi</h3>
                                    <input type="text" id="tinggi" value="180" />
                                    <div class="unit">cm</div>
                                </div>

                                <div class="berat">
                                    <h3>Berat</h3>
                                    <input type="text" id="berat" value="65" />
                                    <div class="unit">kg</div>
                                </div>
                            </form>
                        </div>

                        <div class="hasil">
                            <button class="calculate-btn">Kalkulasi</button>

                            <div class="result-message">
                                <span class="kalori"></span> Kalori/hari
                            </div>

                            <div class="error-message">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
  },

  async afterRender() {
    const kalori = document.querySelector('.kalori-kalkulator .hasil .kalori');
    const calculateBtn = document.querySelector(
      '.kalori-kalkulator .hasil .calculate-btn',
    );
    const umur = document.querySelector('.kalori-kalkulator form #umur');
    const tinggi = document.querySelector('.kalori-kalkulator form #tinggi');
    const berat = document.querySelector('.kalori-kalkulator form #berat');
    const errorMessage = document.querySelector(
      '.kalori-kalkulator .hasil .error-message',
    );

    // Anak = 0.167 * berat + 15.174 * tinggi - 617.6;
    // Ibu Hamil = 655 + 9.6 * berat + 1.85 * tinggi - 4.68 * umur;

    const calculateBMR = (berat, tinggi, umur, gender) => {
      if (gender == 'balita') {
        return 0.167 * berat + 15.174 * tinggi - 617.6;
      }

      return 655 + 9.6 * berat + 1.85 * tinggi - 4.68 * umur;
    };

    calculateBtn.addEventListener('click', () => {
      if (
        umur.classList.contains('invalid')
        || tinggi.classList.contains('invalid')
        || berat.classList.contains('invalid')
      ) {
        errorMessage.classList.add('active');
        return;
      }

      errorMessage.classList.remove('active');

      const genderValue = document.querySelector(
        ".kalori-kalkulator form input[name='gender']:checked",
      ).value;

      const BMR = calculateBMR(berat.value, tinggi.value, umur.value, genderValue);

      kalori.innerHTML = BMR.toLocaleString('en-US');
    });

    // Input Validation
    umur.addEventListener('input', (e) => {
      const umurValue = e.target.value;

      if (!umurValue || isNaN(umurValue) || umurValue < 0 || umurValue > 100) {
        umur.classList.add('invalid');
      } else {
        umur.classList.remove('invalid');
      }
    });

    tinggi.addEventListener('input', (e) => {
      const tinggiValue = e.target.value;

      if (!tinggiValue || isNaN(tinggiValue) || tinggiValue < 0) {
        tinggi.classList.add('invalid');
      } else {
        tinggi.classList.remove('invalid');
      }
    });

    berat.addEventListener('input', (e) => {
      const beratValue = e.target.value;

      if (!beratValue || isNaN(beratValue) || beratValue < 0) {
        berat.classList.add('invalid');
      } else {
        berat.classList.remove('invalid');
      }
    });
  },
};

export default Nutrition;
