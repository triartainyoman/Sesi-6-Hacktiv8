// Algoritma Kelulusan Mahasiswa
const MahasiswaFactory = {
  data: [
    {
      name: "Triarta",
      studentNumber: "1915091045",
      gpa: 3.86,
      score: 80,
    },
    {
      name: "Wayan",
      studentNumber: "1915091046",
      gpa: 3.6,
      score: 50,
    },
  ],
  lulus() {
    return this.data.filter((murid) => murid.score >= 60);
  },
};

console.log(MahasiswaFactory.lulus());
