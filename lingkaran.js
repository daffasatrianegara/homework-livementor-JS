class Lingkaran {
	constructor(jariJari) {
		this.jariJari = jariJari;
	}

	hitungLuas() {
		return Math.PI * this.jariJari * this.jariJari;
	}

	hitungKeliling() {
		return 2 * Math.PI * this.jariJari;
	}
}

const lingkaran = new Lingkaran(3);

console.log("Hasil perhitungan luas dan keliling Lingkaran :");
console.log(`Jari-Jari: ${lingkaran.jariJari}`);
console.log(`Luas: ${lingkaran.hitungLuas()}`);
console.log(`Keliling: ${lingkaran.hitungKeliling()}`);
