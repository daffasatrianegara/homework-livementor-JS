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

const hitungTrapesium = new Trapesium(5, 7, 8, 6, 4);
console.log("Luas trapesium: " + hitungTrapesium.hitungLuas());
console.log("Keliling trapesium: " + hitungTrapesium.hitungKeliling());