class Trapesium {
    constructor(a, b, c, d, tinggi) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tinggi = tinggi;
    }

    hitungLuas() {
        return ((this.a + this.b) / 2) * this.tinggi;
    }

    hitungKeliling() {
        return this.a + this.b + this.c + this.d;
    }
}

class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  // Menghitung luas
  hitungLuas() {
    return this.panjang * this.lebar;
  }
  
  // Menghitung keliling
  hitungKeliling() {
    return 2 * (this.panjang + this.lebar)
  }
}

const hitungTrapesium = new Trapesium(5, 7, 8, 6, 4);
const persegiPanjang = new PersegiPanjang(2,3)


console.log("Luas trapesium: " + hitungTrapesium.hitungLuas());
console.log("Keliling trapesium: " + hitungTrapesium.hitungKeliling());
console.log(`Keliling persegi panjang adalah: ${ persegiPanjang.hitungKeliling()}`)
console.log(`Luas persegi panjang adalah: ${ persegiPanjang.hitungLuas()}`)
