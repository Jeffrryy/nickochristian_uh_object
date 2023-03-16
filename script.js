//no 1
function cetakFunction(a){
   return `Hallo nama saya ` + a
}

console.log(cetakFunction("haikal"))

//no 2





function myfunction(a,b){
    return angka1 + angka2;
}

let angka1 = 20;
let angka2 = 7;
let output= myfunction(angka1, angka2);
console.log(output);


// no 3
let halo = (x) => {
    console.log(x);

}
halo ('hello');


  //no 4
  let obj = {
    nama :"john",
    umur : 22,
    bahasa:"indonesia",
    showName : function(){
        console.log(`nama ${this.bahasa}`)
  },
  }

  console.log(obj.bahasa);

  //no 5
let arrayy=["john doe", "laki laki" , "baca buku", 1992]


  let objdata = {
nama : arrayy[0] ,
kelamin :arrayy[1],
hobi : arrayy[2],
tahun : arrayy[3],
  }
  console.log(objdata);


  //no 6

  let buah = [{
    nama: "nanas",
    warna : "kuning",
    berbiji: "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "orange",
    berbiji: "ada",
    harga: 9000,
  },
  {
    nama:"semangka",
    warna: "hijau & merah",
    berbiji: "ada",
    harga: 10000,
  },
  {
    nama:"pisang",
    warna:"kuning",
    berbiji: "tidak",
    harga: 12000,

  }
];


let data= buah.filter((buah) => buah.berbiji === "tidak" );
console.log(data.sort());





