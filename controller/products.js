export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    return matchingProduct;
}


export const products = [
    {
        id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        nama: '[3 WARNA ] Lampu 3D LED Kaca Transparan Hiasan Pajangan Tumblr Tidur Castle | Pajangan Rumah Cantik Lampu Rose Beauty',
        deskripsi: 'Lampu 3D LED kaca transparan ini hadir dengan 3 warna cahaya (warm white, putih, kuning) untuk menciptakan suasana nyaman dan elegan. Desain Castle atau Rose Beauty membuatnya cocok sebagai lampu tidur, pajangan estetik, atau hadiah istimewa. Praktis, hemat energi, dan mudah digunakan dengan kabel USB.',
        harga: '23.000',
        image: '"imgproduct/lamp.webp"',
        rating: '"img/4-green-stars.png"'
    },
    {
        id: 'b1298acd-3e4a-4d87-a19c-68f3ebc497f9',
        nama: 'Lampu Belajar Tricolour Sentuh 3 Warna Tempat Pulpen Baca Meja Kerja Duduk 2000mAh Lampu Tidur',
        deskripsi: 'Desain Fleksibel Portabel,lampu meja belajar ini tampil dgn bentuk yang simple membuatnya dapat dibawa kemanapun karena sudah menggunakan rechargeable baterai sehingga saat penggunaan tidak perlu selalu ditancap ke listrik.Ditambah dengan kemampuan lampu yang dapat ditekuk dan dibentuk sesuai keinginan.',
        harga: '36.000',
        image: '"imgproduct/lamp2.webp"',
        rating: '"img/4-green-stars.png"'
    },
    {
        id: 'c64f8be2-7a12-4b76-9e53-a82d2f6e4cb1',
        nama: 'Nakamichi My Music Hue Hear Super Bass Wireless Bluetooth Headphones - Beige',
        deskripsi: 'Nakamichi My Music Hue series menghadirkan headphone dengan fitur terupdate dengan desain yang lebih kekinian cocok dipakai untuk segala suasana.',
        harga: '200.000',
        image: '"imgproduct/headphone.webp"',
        rating: '"img/green-stars.png"'
    },
    {
        id: 'f17324bd-18a5-4a38-b29e-7132fc0d1f27',
        nama: 'Keyboard Mouse Set Wireless Bluetooth Touchpad Untuk Tablet Android / Ipad / Pc / Samsung Tab',
        deskripsi: 'Keyboard sentuh memiliki persyaratan yang lebih tinggi untuk versi perangkat yang digunakan. Tolong jangan pilih keyboard sentuh untuk perangkat yang dijual sebelum 2019！！！Touchpad Keyboard - "Fn+C" Turn on Bluetooth pairing Touchpad -you need to upgrade the iPad system to IOS13 or higher',
        harga: '161.000',
        image: '"imgproduct/keyboard.webp"',
        rating: '"img/4-green-stars.png"'
    },
    {
        id: 'd5487e9a-c2d0-49a6-a918-8d2fbd9269f1',
        nama: 'MINIBEST M5 Pro 2 TWS Earphone Headset Bluetooth V5.3 Chip H2 Wireless Charging Sound Dolby Quality',
        deskripsi: 'MINIBEST M5 TWS Earphone Headset Bluetooth V5.3 Chip H2 Wireless Charging Sound Dolby Quality',
        harga: '195.000',
        image: '"imgproduct/airpods.webp"',
        rating: '"img/green-stars.png"'
    },
    {
        id: 'a34c76fd-6d89-4fa3-91ce-0c2b378d49e8',
        nama: 'Kipas AC Portable Air Cooler / AC Mini / Mini AC Cooler Portable / Kipas Angin Portable Dingin⭐Mrlion⭐',
        deskripsi: 'Angin Kuat yang Dapat Disesuaikan Kipas turbo untuk mengurangi hambatan angin dan mengurangi kebisingan.',
        harga: '65.000',
        image: '"imgproduct/kipasac.webp"',
        rating: '"img/green-stars.png"'
    },
    {
        id: 'e1a6b498-9c5d-4b32-bde8-6142786f1c3d',
        nama: 'Kipas Pendingin Udara Portabel, Mini Ac Kipas kabut Portable / Kipas Angin Ac Mini / Kipas Ac Portable',
        deskripsi: 'Kipas Pendingin Udara Portabel ini adalah solusi praktis untuk menghadirkan kesejukan di mana saja. Dilengkapi fitur semprotan kabut, kipas ini memberikan sensasi udara sejuk seperti AC dalam ukuran mini. Cocok untuk digunakan di kamar, meja kerja, atau saat bepergian, kipas ini ringan, hemat energi, dan mudah dibawa ke mana saja. Ideal untuk Anda yang mencari kenyamanan dan kesejukan dalam satu perangkat praktis!',
        harga: '58.000',
        image: '"imgproduct/kipasac2.webp"',
        rating: '"img/green-stars.png"'
    },
    {
        id: 'b26e93fa-7d91-435a-b41e-cf34729b08d4',
        nama: 'Wireless Vacuum 3 In 1 Recharger TANPA KABEL Recharger VACUUM mobil 3 In 1 Portable ⭐ Panda99 ⭐',
        deskripsi: 'Wireless Vacuum 3 in 1 Portable ini adalah alat pembersih tanpa kabel yang praktis dan multifungsi. Dirancang untuk kebutuhan pembersihan mobil, rumah, atau area kecil lainnya, vacuum ini memiliki fitur 3-in-1 yang efisien dengan daya hisap kuat dan desain ringan.',
        harga: '27.000',
        image: '"imgproduct/vacuum.webp"',
        rating: '"img/4-green-stars.png"'
    },
    
    {
        id: 'b6482c73-914a-442d-88a5-bf23e9184c6f',
        nama: 'MASPION Setrika Listrik EX-1010 BB - Elektronik Rumah Tangga',
        deskripsi: 'Maspion EX-1010 BB Setrika Kering - Hitam, setrika persembahan Maspion ini hadir untuk membuat pakaian Anda tetap rapi dimanapun Anda berada. Setrika ini memiliki bobot yang ringan dan bentuk yang kompak, memudahkan Anda dalam menyimpannya ketika sedang tidak dipakai. Dilengkapi alas anti lengket serta handle ergonomis, setrika inipun mudah dioperasikan dan digunakan.',
        harga: '101.000',
        image: '"imgproduct/setrika.webp"',
        rating: '"img/green-stars.png"'
    },
    {
        id: 'f42831c9-a59c-49d7-bf19-d21c7ea823f2',
        nama: 'LAMPU HIAS LED 3D / LAMPU TIDUR HIAS DIMENSI 3 WARNA PUTIH KUNING WARMWHITE LAMPU 3D LED KACA TRANSPARAN',
        deskripsi: 'LED 3D TRANSPARAN yang hangat mempercantik kamar atau ruangan Anda dengan design yg menarik, bisa untuk hadiah/kado untuk pacar atau teman anda Banyak Pilihan Karakter  Bahan Akrilik Kabel Colokan Listrik Daya 1 Watt',
        harga: '24.000',
        image: '"imgproduct/lamp3.webp"',
        rating: '"img/4-green-stars.png"'
    }, 
    {
        id: 'd4e6987a-784d-4e39-a6f8-2f3e9d817f24',
        nama: 'Advance Mic Karaoke Profesional Dynamic Microphone Mic Kabel MIC884 Jack Besar 6,5MM Garansi 1 Tahun',
        deskripsi: 'Cocok Digunakan Mic Karaoke di Ruangan dan Diluar ruangan, desain futiuristik dan elegant sehingga memberikan kesan yang menarik. menggunakan bahan plastik ABS berkualitas tinggi yang tidak licin dalam penggunaan sehingga tidak akan mudah terlepas dari genggaman tangan. panjang kabel kurang lebih 3M , cocok untuk penggunaan jarak dekat dengan amplifer yang mewajibkan harus terhubung secara langsung.',
        harga: '38.000',
        image: '"imgproduct/mic.webp"',
        rating: '"img/4-green-stars.png"'
    },
    {
        id: 'a6f9834b-5a94-41cd-839a-fc5d8427b85a',
        nama: 'OSM - L6143 Lampu LED Malam Mode Baterai / Lampu Led Cute Hias Serbaguna / Topper Cake 3D Lampu Lucu / Figure Lampu Karakter Sanrio',
        deskripsi: 'OSM - L6143 Lampu LED Malam ini adalah lampu serbaguna yang menggabungkan desain lucu dengan fungsi praktis. Ditenagai oleh baterai, lampu ini cocok digunakan sebagai dekorasi kamar, lampu tidur, atau bahkan topper cake 3D yang unik.',
        harga: '10.000',
        image: '"imgproduct/lamp4.webp"',
        rating: '"img/4-green-stars.png"'
    },
    {
        id: 'e5b42a68-3d27-4a19-b9fa-9374d68f1c3b',
        nama: 'BARDI Smart Indoor PTZ IP Camera CCTV Wifi IoT Home Automation + Micro SD',
        deskripsi: 'BARDI Smart Indoor PTZ IP Camera adalah kamera CCTV pintar yang mendukung koneksi Wi-Fi, dirancang untuk keamanan rumah Anda. Dengan fitur PTZ (Pan, Tilt, Zoom), kamera ini memungkinkan pemantauan area secara fleksibel dan detail. Terintegrasi dengan teknologi IoT Home Automation, Anda dapat mengakses dan mengontrol kamera langsung dari smartphone. Kompatibel dengan micro SD untuk penyimpanan video, kamera ini menawarkan solusi keamanan yang praktis dan canggih untuk kebutuhan modern Anda!',
        harga: '646.000',
        image: '"imgproduct/cctv.webp"',
        rating: '"img/green-stars.png"'
    },
    {
        id: 'b85a61c2-2d34-490a-8f12-4b7c91e5d3a2',
        nama: 'Miyoshi Kipas Tornado 10 inci Bergaransi 1 Tahun Kipas 2in1 Bisa di Dinding Dan Meja Harga Termurah Bisa COD',
        deskripsi: 'Kipas Angin Berdiri 16 Inch adalah pilihan sempurna untuk memberikan kesejukan maksimal di rumah atau kantor. Dengan ukuran baling-baling 16 inch, kipas ini mampu menghasilkan angin yang kuat namun tetap hemat energi.',
        harga: '134.000',
        image: '"imgproduct/kipas.webp"',
        rating: '"img/4-green-stars.png"'
    },
    {
        id: 'f9d327c1-6b45-482d-b85a-8134e98b7d24',
        nama: 'PS3 500GB SLIM | SONY PLAYSTATION 3 SLIM SONY PRELOVED CFW VOID',
        deskripsi: 'Produk Asli Dari Sony Yang Berkualitas dan Terjamin Keaslian-nya. PS3 Super Slim Merupakan Seri Terbaru, PS3 Super Slim ini Dapat Digunakan Atau Dipakai Dalam Jangka Waktu Yang Lama Semaksimal Mungkin Dalam Waktu 24 Jam Non-stop, Lebih Tahan Panas dan Mesin Bekerja Lebih Maksimal,  Cocok Untuk Rental Atau Pemakaian Pribadi, Pemasangan Sangat Gampang Disertakan Petunjuk Plug n Play Pemasangan Tinggal Colok  ',
        harga: '850.000',
        image: '"imgproduct/ps3.webp"',
        rating: '"img/4-green-stars.png"'
    },
    {
        id: 'c1e78f9a-4b3a-4d62-9e85-a17c25f8b2a3',
        nama: 'NOVA V4 Lightweight Wireless Gaming Mouse by Press Play',
        deskripsi: 'NOVA V4 Lightweight Wireless Gaming Mouse by Press Play adalah mouse gaming tanpa kabel yang dirancang untuk performa tinggi dengan bobot ringan. Dilengkapi dengan sensor canggih, mouse ini memberikan respons cepat dan presisi, ideal untuk permainan cepat dan kompetitif.',
        harga: '509.000',
        image: '"imgproduct/mouse.webp"',
        rating: '"img/4-green-stars.png"'
    }
]

