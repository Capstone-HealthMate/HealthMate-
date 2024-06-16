const rumus = (() => {
  function BMICalculate(beratBadan, tinggiBadan, gender) {

    if (beratBadan < 3 || tinggiBadan < 45) {
      throw new Error("Input must have right value");
    } else {
      const tinggiMeter = tinggiBadan / 100;
      const BMI = beratBadan / (tinggiMeter * tinggiMeter);

      let kategori = "";
      let saran = [];

      if (gender === "laki-laki") {
        if (BMI < 18.5) {
          kategori = "Kurus";
          saran = [
            "Makan lebih banyak kalori dari yang kamu bakar.",
            "Konsumsilah makanan yang kaya protein.",
            "Lakukan latihan kekuatan untuk membangun otot.",
          ];
        } else if (BMI >= 18.5 && BMI < 24.9) {
          kategori = "Normal";
          saran = [
            "Pertahankan pola makan seimbang.",
            "Tetap aktif dengan berolahraga secara teratur.",
            "Monitor kesehatan secara rutin.",
          ];
        } else if (BMI >= 25 && BMI < 29.9) {
          kategori = "Overweight";
          saran = [
            "Kurangi asupan kalori.",
            "Tingkatkan aktivitas fisik.",
            "Pilih makanan sehat dan rendah lemak.",
          ];
        } else {
          kategori = "Obesitas";
          saran = [
            "Ikuti program diet dengan pengawasan medis.",
            "Rutin berolahraga, fokus pada cardio.",
            "Cari dukungan dari ahli gizi atau dokter.",
          ];
        }
      } else {
        if (BMI < 18.5) {
          kategori = "Kurus";
          saran = [
            "Makan lebih banyak kalori dari yang kamu bakar.",
            "Konsumsilah makanan yang kaya protein.",
            "Lakukan latihan kekuatan untuk membangun otot.",
          ];
        } else if (BMI >= 18.5 && BMI < 24.9) {
          kategori = "Normal";
          saran = [
            "Pertahankan pola makan seimbang.",
            "Tetap aktif dengan berolahraga secara teratur.",
            "Monitor kesehatan secara rutin.",
          ];
        } else if (BMI >= 25 && BMI < 29.9) {
          kategori = "Overweight";
          saran = [
            "Kurangi asupan kalori.",
            "Tingkatkan aktivitas fisik.",
            "Pilih makanan sehat dan rendah lemak.",
          ];
        } else {
          kategori = "Obesitas";
          saran = [
            "Ikuti program diet dengan pengawasan medis.",
            "Rutin berolahraga, fokus pada cardio.",
            "Cari dukungan dari ahli gizi atau dokter.",
          ];
        }
      }

      return { BMI, kategori, saran };
    }
  }

  function CaloriesCalculate(beratBadan, tinggiBadan, umur, aktivitas, gender) {
    if (beratBadan < 3 || tinggiBadan < 45 || umur < 0) {
      throw new Error("Input must have right value");
    } else {
      let BMR;

      if (gender === "laki-laki") {
        BMR = 88.362 + 13.397 * beratBadan + 4.799 * tinggiBadan - 5.677 * umur;
      } else if (gender === "perempuan") {
        BMR = 447.593 + 9.247 * beratBadan + 3.098 * tinggiBadan - 4.33 * umur;
      } else {
        throw new Error("Jenis kelamin harus dipilih");
      }

      let maintenanceCalories;
      let restingCalories = BMR * 1.2;

      switch (aktivitas) {
        case "Jarang":
          maintenanceCalories = BMR * 1.2;
          break;
        case "Cukup":
          maintenanceCalories = BMR * 1.375;
          break;
        case "Sering":
          maintenanceCalories = BMR * 1.55;
          break;
        default:
          throw new Error("Tingkat aktivitas harus dipilih");
      }

      let saran = [];

      if (maintenanceCalories < 1500) {
        saran = [
          "Makan lebih banyak makanan bergizi.",
          "Tambah asupan protein dan karbohidrat.",
          "Pertimbangkan untuk makan lebih sering dalam porsi kecil.",
        ];
      } else if (maintenanceCalories >= 1500 && maintenanceCalories < 2000) {
        saran = [
          "Pertahankan pola makan seimbang.",
          "Tetap aktif dengan berolahraga secara teratur.",
          "Pantau kesehatan dan berat badan secara rutin.",
        ];
      } else if (maintenanceCalories >= 2000 && maintenanceCalories < 2500) {
        saran = [
          "Lanjutkan gaya hidup sehat.",
          "Pastikan untuk mendapatkan cukup nutrisi.",
          "Monitor asupan kalori agar tetap dalam batas.",
        ];
      } else {
        saran = [
          "Hindari makanan tinggi kalori dan rendah nutrisi.",
          "Fokus pada makanan rendah lemak dan tinggi serat.",
          "Konsultasikan dengan ahli gizi untuk panduan lebih lanjut.",
        ];
      }

      return { BMR, maintenanceCalories, restingCalories, saran };
    }
  }

  function GreseCalculate(
    gender,
    beratBadan,
    tinggiBadan,
    umur,
    pangkalPaha,
    panjangLeher,
    lebarPinggang
  ) {
    if (
      beratBadan < 3 ||
      tinggiBadan < 45 ||
      umur < 0 ||
      pangkalPaha < 5 ||
      panjangLeher < 2 ||
      lebarPinggang < 10
    ) {
      throw new Error("Input must have right value");
    } else {
      // Convert inputs to numbers
      beratBadan = parseFloat(beratBadan);
      tinggiBadan = parseFloat(tinggiBadan);
      pangkalPaha = parseFloat(pangkalPaha);
      panjangLeher = parseFloat(panjangLeher);
      lebarPinggang = parseFloat(lebarPinggang);

      // Check if any value is not a number
      if (
        isNaN(beratBadan) ||
        isNaN(tinggiBadan) ||
        isNaN(pangkalPaha) ||
        isNaN(panjangLeher) ||
        isNaN(lebarPinggang)
      ) {
        throw new Error("All inputs must be valid numbers");
      }

      // Check for valid log arguments (logarithm of zero or negative number is not defined)
      if (gender === "laki-laki") {
        if (lebarPinggang <= panjangLeher || tinggiBadan <= 0) {
          throw new Error("Invalid input values for calculation");
        }
      } else if (gender === "perempuan") {
        if (lebarPinggang + pangkalPaha <= panjangLeher || tinggiBadan <= 0) {
          throw new Error("Invalid input values for calculation");
        }
      } else {
        throw new Error("Jenis kelamin harus dipilih");
      }

      let bodyFatPercentage = 0;

      if (gender === "laki-laki") {
        bodyFatPercentage =
          495 /
            (1.0324 -
              0.19077 * Math.log10(lebarPinggang - panjangLeher) +
              0.15456 * Math.log10(tinggiBadan)) -
          450;
      } else if (gender === "perempuan") {
        bodyFatPercentage =
          495 /
            (1.29579 -
              0.35004 * Math.log10(lebarPinggang + pangkalPaha - panjangLeher) +
              0.221 * Math.log10(tinggiBadan)) -
          450;
      }

      let suggestions = [];

      if (bodyFatPercentage < 10) {
        suggestions = [
          "Makan lebih banyak kalori dari yang kamu bakar.",
          "Konsumsilah makanan yang kaya protein.",
          "Lakukan latihan kekuatan untuk membangun otot.",
        ];
      } else if (bodyFatPercentage >= 10 && bodyFatPercentage < 20) {
        suggestions = [
          "Pertahankan pola makan seimbang.",
          "Tetap aktif dengan berolahraga secara teratur.",
          "Monitor kesehatan secara rutin.",
        ];
      } else if (bodyFatPercentage >= 20 && bodyFatPercentage < 25) {
        suggestions = [
          "Kurangi asupan kalori.",
          "Tingkatkan aktivitas fisik.",
          "Pilih makanan sehat dan rendah lemak.",
        ];
      } else {
        suggestions = [
          "Ikuti program diet dengan pengawasan medis.",
          "Rutin berolahraga, fokus pada cardio.",
          "Cari dukungan dari ahli gizi atau dokter.",
        ];
      }

      return { bodyFatPercentage, suggestions };
    }
  }

  function WaterIntakeCalculate(
    gender,
    beratBadan,
    tinggiBadan,
    umur,
    aktivitas
  ) {
    if (beratBadan < 3 || tinggiBadan < 45 || umur < 0 && beratBadan) {
      throw new Error("Input must have right value");
    } else {
      // Base water requirement (liters per kg of body weight)
      let baseWaterIntake = 0.03; // 30 ml per kg of body weight

      // Adjustments based on gender
      let genderFactor = 1.0;
      if (gender === "perempuan") {
        genderFactor = 0.9; // Women generally have slightly lower water requirements
      }

      // Adjustments based on height (using BMI approach as an approximation)
      let heightFactor = 1.0;
      let bmi = beratBadan / (tinggiBadan / 100) ** 2; // Calculate BMI
      if (bmi < 18.5) {
        heightFactor = 0.9; // Lower BMI suggests potentially lower water needs
      } else if (bmi > 25) {
        heightFactor = 1.1; // Higher BMI suggests potentially higher water needs
      }

      // Calculate initial water requirement based on body weight
      let waterIntake =
        beratBadan * baseWaterIntake * genderFactor * heightFactor;

      // Adjustments based on age
      if (umur > 50) {
        waterIntake *= 1.1; // Increase by 10% for older adults
      }

      // Adjustments based on activity level
      let activityFactor;
      switch (aktivitas) {
        case "Jarang":
          activityFactor = 1.0;
          break;
        case "Cukup":
          activityFactor = 1.2;
          break;
        case "Sering":
          activityFactor = 1.4;
          break;
        default:
          throw new Error("Tingkat aktivitas harus dipilih");
      }

      // Apply activity factor to water requirement
      waterIntake *= activityFactor;

      // Suggestions for meeting daily water needs
      let suggestions = [
        "Minum air putih secara rutin sepanjang hari.",
        "Bawa botol air minum saat beraktivitas di luar rumah.",
        "Konsumsi buah dan sayur yang mengandung banyak air seperti semangka dan mentimun.",
        "Hindari minuman berkafein atau beralkohol yang dapat menyebabkan dehidrasi.",
      ];

      return { waterIntake: waterIntake.toFixed(2) + " liter", suggestions };
    }
  }

  return {
    BMICalculate,
    CaloriesCalculate,
    GreseCalculate,
    WaterIntakeCalculate,
  };
})();

export default rumus;
