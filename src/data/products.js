export const products = [
  {
    id: "teddy-blossom",
    name: "Teddy Blossom",
    price: 89000,
    category: "Boneka Beruang",
    tag: "Terlaris",
    rating: 4.9,
    reviews: 128,
    image: "/images/teddy-blossom.jpg",
    imagePosition: "50% 62%",
    alt: "Teddy Blossom, boneka beruang cokelat muda berbusana garis dengan tempelan hati merah",
    description:
      "Boneka beruang kecil manis dengan hati di perutnya dan senyuman yang menghangatkan hati. Teddy Blossom cocok untuk teman tidur, sahabat di meja kerja, maupun hadiah penuh makna.",
    perks: ["Bahan lembut & nyaman dipeluk", "Bordir tempelan hati", "Pilihan sempurna untuk boneka pertama"],
  },
  {
    id: "little-bunny",
    name: "Little Bunny",
    price: 75000,
    category: "Boneka Kelinci",
    tag: "Pilihan Gemas",
    rating: 4.8,
    reviews: 96,
    image: "/images/little-bunny.jpg",
    imagePosition: "18% 30%",
    alt: "Little Bunny, boneka kelinci krem dengan telinga panjang terkulai dan hidung merah muda",
    description:
      "Telinga panjang terkulai, mata sayu, dan hidung kecil merah muda. Little Bunny adalah teman paling lembut untuk menemani saat santai dan sore yang tenang.",
    perks: ["Telinga panjang yang empuk", "Tekstur sangat halus & nyaman", "Detail hidung merah muda"],
  },
  {
    id: "pink-cuddle",
    name: "Pink Cuddle",
    price: 95000,
    category: "Koleksi Pink",
    tag: "Populer",
    rating: 4.9,
    reviews: 142,
    image: "/images/pink-cuddle.jpg",
    imagePosition: "42% 70%",
    alt: "Pink Cuddle, boneka kelinci balerina merah muda dengan rok tutu di antara bantal pink",
    description:
      "Kelinci merah muda berbalut rok tutu cantik, siap mencerahkan tempat tidur, rak pajangan, atau sudut baca. Pink Cuddle adalah bintang dari Koleksi Pink kami.",
    perks: ["Rok tutu yang manis", "Palet warna pink pastel", "Sangat cocok untuk kado"],
  },
  {
    id: "cloudy-bear",
    name: "Cloudy Bear",
    price: 110000,
    category: "Boneka Beruang",
    tag: "Terbaru",
    rating: 4.7,
    reviews: 41,
    image: "/images/cloudy-bear.jpg",
    imagePosition: "22% 40%",
    alt: "Cloudy Bear, boneka beruang putih lembut yang duduk dengan tangan terbuka",
    description:
      "Lembut bagaikan awan dan selalu penuh mimpi. Cloudy Bear duduk dengan tangan terbuka, selalu siap memberikan pelukan hangat kapan pun kamu butuhkan.",
    perks: ["Warna putih selembut awan", "Pose peluk tangan terbuka", "Koleksi beruang terbaru kami"],
  },
  {
    id: "mochi-cat",
    name: "Mochi Cat",
    price: 85000,
    category: "Boneka Kucing",
    tag: "Edisi Terbatas",
    rating: 4.9,
    reviews: 77,
    image: "/images/mochi-cat.jpg",
    imagePosition: "50% 50%",
    alt: "Mochi Cat, boneka kucing bulat berbulu putih dengan telinga kecil merah muda",
    description:
      "Bulat, kenyal, dan luar biasa lembut. Mochi Cat terlihat persis seperti kue mochi yang manis. Edisi terbatas khusus untuk para pencinta kucing.",
    perks: ["Bentuk bulat & squishy", "Telinga kecil warna pink", "Koleksi edisi terbatas"],
  },
  {
    id: "knitted-duck",
    name: "Knitted Duck",
    price: 79000,
    category: "Boneka Bebek",
    tag: "Favorit Pelanggan",
    rating: 4.8,
    reviews: 113,
    image: "/images/knitted-duck.jpg",
    imagePosition: "50% 50%",
    alt: "Knitted Duck, boneka rajut bebek kuning buatan tangan dengan topi rajut lucu dan pipi merona",
    description:
      "Boneka rajut buatan tangan yang penuh kehangatan, dilengkapi topi rajut manis dan pipi merona. Knitted Duck hadir dengan rajutan rapi dan empuk, sempurna untuk teman pajangan meja maupun kado istimewa.",
    perks: ["Rajutan tangan (handmade) rapi", "Dilengkapi topi rajut manis", "Bahan benang lembut & empuk"],
  },
];

export const categories = ["Semua", ...new Set(products.map((p) => p.category))];

export function formatRupiah(value) {
  return "Rp" + new Intl.NumberFormat("id-ID").format(value);
}
