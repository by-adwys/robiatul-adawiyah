// Data Makanan Khas Lombok
const foods = [
    {
        id: 'pelecing',
        name: 'Pelecing Kangkung',
        desc: `Pelecing Kangkung adalah salah satu ikon kuliner paling legendaris dari Pulau Lombok, Nusa Tenggara Barat. Hidangan ini menonjolkan kesegaran kangkung air yang direbus dengan tekstur yang tetap renyah, dipadukan dengan sambal tomat segar yang pedas menyengat. Ciri khas utamanya terletak pada penggunaan terasi Lombok yang memiliki aroma dan rasa yang sangat kuat serta khas, memberikan dimensi rasa umami yang mendalam.

Berbeda dengan sajian kangkung di daerah lain yang seringkali ditumis, Pelecing Kangkung disajikan dengan bumbu sambal mentah yang ditaruh di atasnya (bukan dicampur saat dimasak). Rasa pedas dari cabai rawit, asam segar dari jeruk limau, dan gurihnya terasi bakar menciptakan harmoni rasa yang meledak di mulut.

Hidangan ini biasanya disajikan sebagai pendamping Ayam Taliwang atau sebagai lauk utama bersama nasi putih hangat. Seringkali, Pelecing Kangkung juga dilengkapi dengan tambahan kacang tanah goreng, urap kelapa, atau tauge untuk memperkaya tekstur dan rasa.`,
        ingredients: [
            "2 ikat besar kangkung Lombok (atau kangkung air segar)",
            "100 gram tauge, seduh air panas",
            "50 gram kacang tanah goreng, untuk taburan",
            "1 sdt garam (untuk rebusan)",
            "<b>Bumbu Sambal:</b>",
            "15 buah cabai rawit merah (sesuai selera)",
            "3 buah cabai merah keriting",
            "2 buah tomat merah matang",
            "1,5 sdt terasi Lombok bakar",
            "1 sdt gula pasir",
            "1/2 sdt garam",
            "1 buah jeruk limau"
        ],
        steps: [
            "Didihkan air dalam panci, tambahkan garam. Masukkan kangkung dan rebus sebentar (1-2 menit) agar tetap renyah dan hijau.",
            "Angkat kangkung segera dan rendam di air es/dingin untuk menghentikan proses masak. Tiriskan dan belah batangnya.",
            "Rebus atau seduh tauge dengan air panas sebentar, tiriskan.",
            "Siapkan cobek. Ulek cabai rawit, cabai merah, terasi bakar, gula, dan garam hingga halus.",
            "Masukkan potongan tomat, ulek kasar agar tekstur tomat masih terasa.",
            "Beri perasan air jeruk limau, aduk rata. Koreksi rasa pedas, asin, dan asamnya.",
            "Tata kangkung dan tauge di piring saji.",
            "Siram sambal pelecing di atas sayuran, lalu taburi kacang tanah goreng.",
            "Sajikan segera selagi segar."
        ],
        tips: [
            "Pilihlah terasi udang asli Lombok berkualitas bagus dan bakar sesaat sebelum diulek untuk aroma terbaik.",
            "Jangan merebus kangkung terlalu lama (overcooked) karena akan menghilangkan tekstur 'kriuk' khasnya.",
            "Gunakan tomat ranti atau tomat sayur yang segar untuk rasa asam alami yang menyegarkan."
        ],
        img: 'img/placeholder_pelecing.jpg'
    },
    {
        id: 'ayam_rarang',
        name: 'Ayam Rarang',
        desc: `Ayam Rarang adalah sajian ayam pedas khas dari Desa Rarang, Lombok Timur. Hidangan ini terkenal dengan bumbu balado merah menyala yang melimpah, menyelimuti potongan ayam kampung yang gurih. Berbeda dengan Ayam Taliwang yang dibakar, Ayam Rarang dimasak dengan teknik menumis ayam goreng bersama bumbu pedas hingga meresap sempurna.

Cita rasanya didominasi oleh pedas cabai merah kering dan cabai rawit, namun diseimbangkan dengan gurihnya kemiri dan terasi. Bumbunya yang "medok" dan berminyak membuat hidangan ini sangat menggugah selera, terutama saat dimakan bersama nasi putih hangat.

Warisan kuliner ini telah menjadi kebanggaan masyarakat Rarang. Kunci kelezatannya ada pada teknik penumisan bumbu yang lama agar tidak langu, serta penggunaan cabai kering yang memberikan warna merah pekat yang cantik.`,
        ingredients: [
            "1 ekor ayam kampung muda, potong 10-12 bagian",
            "1 buah jeruk nipis",
            "Minyak goreng secukupnya",
            "<b>Bumbu Halus (Sebie):</b>",
            "15 buah cabai merah besar kering (rendam air panas)",
            "10 buah cabai rawit merah",
            "10 butir bawang merah",
            "6 siung bawang putih",
            "4 butir kemiri sangrai",
            "1 sdt terasi bakar",
            "1 sdt garam & penyedap rasa"
        ],
        steps: [
            "Cuci bersih ayam, lumuri air jeruk nipis dan garam. Diamkan 15 menit.",
            "Goreng ayam dalam minyak panas hingga matang dan berkulit kecokelatan. Angkat dan tiriskan.",
            "Haluskan semua bahan bumbu halus (cabai kering, rawit, bawang, kemiri, terasi).",
            "Panaskan minyak secukupnya. Tumis bumbu halus dengan api sedang hingga matang dan berminyak (tanak).",
            "Masukkan ayam goreng ke dalam tumisan bumbu.",
            "Tambahkan sedikit air agar bumbu meresap, masak dengan api kecil hingga air menyusut.",
            "Pastikan bumbu melimpah dan menempel pada ayam.",
            "Angkat dan sajikan dengan nasi hangat."
        ],
        tips: [
            "Gunakan cabai merah kering untuk warna merah yang menyala dan rasa pedas yang khas.",
            "Pastikan menumis bumbu hingga benar-benar matang agar tidak berbau langu dan tahan lama.",
            "Ayam kampung lebih disarankan karena tekstur dagingnya yang padat dan manis."
        ],
        img: 'img/placeholder_ayam.jpg'
    },
    {
        id: 'sate_bulayak',
        name: 'Sate Bulayak',
        desc: `Sate Bulayak adalah sate khas Lombok yang unik bukan hanya karena dagingnya, tetapi juga karena lontong pendampingnya yang disebut "Bulayak". Bulayak adalah lontong kecil yang dibungkus dengan daun aren (enau) secara melingkar spiral, memberikan aroma harum manis yang khas pada nasinya.

Satenya sendiri biasanya menggunakan daging sapi atau jeroan sapi, yang dibumbui dengan bumbu kacang tanah sangrai yang dicampur santan kental dan rempah-rempah khas Sassak. Rasa bumbunya gurih, sedikit pedas, dan creamy karena santan.

Cara memakannya pun unik, yaitu dengan mencocol bulayak ke dalam bumbu sate yang melimpah, lalu menyantapnya bersama tusukan sate. Hidangan ini banyak ditemui di kawasan wisata Narmada atau Suranadi.`,
        ingredients: [
            "500 gr daging sapi (has dalam), potong dadu",
            "200 ml santan kental",
            "1 buah jeruk limau",
            "Tusuk sate secukupnya",
            "Bulayak (lontong daun aren) secukupnya",
            "<b>Bumbu Halus:</b>",
            "100 gr kacang tanah goreng, haluskan",
            "5 siung bawang putih",
            "5 butir bawang merah",
            "3 buah cabai merah besar",
            "1 sdt ketumbar bubuk",
            "1/2 sdt jintan",
            "1 batang serai (geprek)",
            "Garam dan gula secukupnya"
        ],
        steps: [
            "Cuci bersih daging, potong dadu kecil-kecil agar cepat matang.",
            "Haluskan bumbu (bawang, cabai, ketumbar, jintan). Campur dengan kacang tanah halus.",
            "Tumis bumbu halus dan serai hingga harum. Masukkan santan kental, masak hingga menyusut dan berminyak.",
            "Ambil sebagian bumbu, lumuri ke daging sapi. Diamkan 30 menit agar meresap.",
            "Tusuk daging dengan tusuk sate (3-4 potong per tusuk).",
            "Bakar sate di atas arang sambil sesekali diolesi sisa bumbu hingga matang kecokelatan.",
            "Sisa bumbu dimasak kembali sebentar, beri perasan jeruk limau.",
            "Sajikan sate dengan siraman sisa bumbu kental dan bulayak."
        ],
        tips: [
            "Gunakan daging has dalam agar sate empuk dan tidak alot saat digigit.",
            "Jangan membakar sate terlalu lama agar daging tetap juicy.",
            "Santan kental adalah kunci gurihnya bumbu Sate Bulayak, jangan diganti air."
        ],
        img: 'img/placeholder_sate.jpg'
    },
    {
        id: 'sate_pusut',
        name: 'Sate Pusut',
        desc: `Sate Pusut adalah varian sate lilit khas Lombok yang memiliki cita rasa manis dan gurih. Berbeda dengan Sate Lilit Bali yang dominan ikan, Sate Pusut Lombok umumnya terbuat dari campuran daging sapi cincang dan kelapa parut muda yang dibumbui rempah lengkap.

Teksturnya empuk dan lembut, dengan serat kelapa yang memberikan sensasi gurih di setiap gigitan. Sate ini dililitkan pada tusuk sate yang lebar (katik) atau tusuk sate biasa.

Sate Pusut sering menjadi menu wajib dalam acara begibung (makan bersama adat Sasak) atau hajatan besar. Rasanya yang tidak terlalu pedas membuatnya disukai semua kalangan, termasuk anak-anak.`,
        ingredients: [
            "300 gr daging sapi giling",
            "100 gr kelapa parut muda (setengah tua)",
            "1 butir telur ayam (kocok lepas)",
            "2 lembar daun jeruk, iris sangat halus",
            "Tusuk sate (pilih yang agak tebal)",
            "<b>Bumbu Halus:</b>",
            "5 siung bawang putih",
            "3 butir bawang merah",
            "2 buah cabai merah (buang biji jika tidak mau pedas)",
            "1 sdt ketumbar bubuk",
            "1/2 sdt terasi bakar",
            "1 cm kencur",
            "1 sdt garam",
            "1 sdm gula merah sisir"
        ],
        steps: [
            "Campurkan daging sapi giling, kelapa parut, dan telur dalam satu wadah besar.",
            "Masukkan bumbu halus dan irisan daun jeruk. Aduk dan uleni hingga semua bahan tercampur rata dan adonan bisa dipulung.",
            "Ambil segenggam adonan (sekitar 1-2 sdm), kepalkan.",
            "Ambil tusuk sate, lilitkan adonan pada tusuk sate sambil ditekan-tekan agar menempel kuat dan tidak lepas.",
            "Lakukan hingga adonan habis.",
            "Siapkan panggangan arang atau wajan grill anti lengket.",
            "Bakar sate dengan api sedang sambil dibolak-balik hingga matang merata dan berwarna kecokelatan.",
            "Angkat dan sajikan selagi hangat."
        ],
        tips: [
            "Pastikan kelapa parut yang digunakan tidak terlalu tua agar teksturnya lembut dan menyatu dengan daging.",
            "Saat melilitkan, kepal-kepal dengan kuat agar sate tidak hancur saat dibakar.",
            "Gunakan sedikit santan kental jika adonan dirasa terlalu kering."
        ],
        img: 'img/placeholder_pusut.jpg'
    },
    {
        id: 'klepon',
        name: 'Klepon Kecerit',
        desc: `Klepon Khas Lombok, atau sering disebut Klepon Kecerit, memiliki bentuk yang sedikit berbeda dengan klepon Jawa. Bentuknya cenderung lebih runcing atau lonjong, tidak bulat sempurna. Isiannya tetap gula merah cair yang "muncrat" (kecerit) saat digigit di dalam mulut.

Tekstur kulitnya kenyal dan lembut karena terbuat dari tepung ketan berkualitas. Balutan kelapa parut yang gurih menyeimbangkan manisnya lelehan gula merah di dalamnya.

Klepon ini adalah jajanan pasar favorit untuk sarapan atau teman minum kopi di sore hari. Sensasi ledakan manis di mulut menjadi ciri khas yang selalu dirindukan.`,
        ingredients: [
            "250 gr tepung ketan putih",
            "50 gr tepung beras",
            "200 ml air hangat (campur pasta pandan/jus pandan)",
            "150 gr gula merah (sisir halus untuk isian)",
            "<b>Balutan:</b>",
            "1/2 butir kelapa parut (kukus sebentar)",
            "1/4 sdt garam"
        ],
        steps: [
            "Campur kelapa parut dengan sedikit garam, kukus selama 10 menit agar tidak mudah basi. Sisihkan.",
            "Dalam wadah, campur tepung ketan dan tepung beras.",
            "Tuang air pandan hangat sedikit demi sedikit sambil diuleni hingga adonan kalis (bisa dibentuk dan tidak lengket di tangan).",
            "Ambil sedikit adonan, pipihkan di telapak tangan.",
            "Isi tengahnya dengan gula merah sisir secukupnya. Tutup rapat dan bulatkan (bisa dibentuk lonjong khas Lombok).",
            "Didihkan air dalam panci.",
            "Masukkan bola-bola klepon ke air mendidih. Masak hingga klepon mengapung (tanda sudah matang).",
            "Angkat dan tiriskan airnya.",
            "Gulingkan klepon ke dalam kelapa parut hingga terbalut rata.",
            "Sajikan di atas daun pisang."
        ],
        tips: [
            "Pastikan adonan tertutup rapat agar gula merah tidak bocor saat direbus.",
            "Jangan merebus terlalu lama setelah mengapung agar tekstur tidak terlalu lembek.",
            "Gunakan gula merah aren berkualitas untuk rasa manis yang legit dan harum."
        ],
        img: 'img/placeholder_klepon.jpg'
    },
    {
        id: 'cerorot',
        name: 'Cerorot',
        desc: `Cerorot (atau Clorot) adalah kue tradisional unik yang dibungkus dengan janur (daun kelapa muda) yang dililit membentuk kerucut panjang seperti terompet. Kue ini terbuat dari campuran tepung beras, gula merah, dan santan, menghasilkan tekstur yang kenyal dan rasa manis gurih yang legit.

Cara memakannya pun unik: bagian bawah kerucut ditekan (didorong) hingga kue keluar ke atas, lalu digigit. Tradisi ini menjadi pengalaman seru tersendiri.

Kue ini sering hadir dalam upacara adat Sasak dan pasar tradisional. Keahlian membuat selongsong (wadah) dari janur adalah seni tersendiri yang membuat kue ini spesial.`,
        ingredients: [
            "250 gr gula merah",
            "500 ml santan encer",
            "250 gr tepung beras",
            "100 gr tepung kanji/tapioka",
            "200 ml santan kental (untuk kepala/lapisan atas)",
            "1/2 sdt garam",
            "Janur (daun kelapa muda) untuk selongsong"
        ],
        steps: [
            "Buat selongsong berbentuk kerucut panjang dari janur, pastikan rapat agar adonan tidak bocor.",
            "Rebus gula merah, santan encer, dan garam hingga larut. Saring dan dinginkan.",
            "Campur tepung beras dan tepung kanji. Tuang larutan gula merah sedikit demi sedikit sambil diaduk rata hingga licin (tidak bergerindil).",
            "Susun selongsong janur dalam posisi berdiri di kukusan (bisa diganjal ampas kelapa atau cetakan khusus).",
            "Tuang adonan cokelat ke dalam selongsong hingga 3/4 penuh.",
            "Kukus selama 20 menit hingga setengah matang/mengeras.",
            "Tuang santan kental di atasnya (untuk lapisan putih gurih).",
            "Kukus kembali selama 15-20 menit hingga matang sempurna.",
            "Angkat dan dinginkan sebelum disajikan."
        ],
        tips: [
            "Pastikan lilitan janur rapat, jika perlu tes dengan air dulu untuk memastikan tidak bocor.",
            "Gunakan santan segar agar rasanya lebih gurih alami.",
            "Tunggu hingga benar-benar dingin baru disajikan agar teksturnya set dan kenyal."
        ],
        img: 'img/placeholder_cerorot.jpg'
    },
    {
        id: 'kue_abuk',
        name: 'Kue Abuk',
        desc: `Kue Abuk adalah jajanan tradisional Lombok yang terbuat dari tepung ketan, kelapa parut, dan gula merah. Bentuknya biasanya kerucut, dibungkus dengan daun pisang. Kue ini mirip dengan kue putu atau kue awug di daerah lain, namun dengan kearifan lokal Sasak.

Teksturnya empuk, sedikit pera namun lembut saat digigit, dengan lelehan gula merah di sela-sela adonan putih. Aromanya sangat harum karena dikukus dalam daun pisang.

Kue Abuk sangat nikmat disantap selagi hangat di pagi hari sebagai teman minum kopi atau teh. Kesederhanaan bahannya justru menghasilkan rasa yang otentik dan ngangenin.`,
        ingredients: [
            "250 gr tepung ketan",
            "200 gr kelapa tua parut (kupas kulit ari)",
            "150 gr gula merah, sisir kasar",
            "1/2 sdt garam",
            "Daun pisang untuk membungkus",
            "Lidi untuk menyemat"
        ],
        steps: [
            "Campurkan tepung ketan, kelapa parut, dan garam dalam wadah. Aduk rata menggunakan tangan (awur-awur) hingga berbulir kasar, jangan ditekan padat.",
            "Ambil selembar daun pisang, bentuk menjadi kerucut (pincuk).",
            "Masukkan 1-2 sendok adonan tepung kelapa ke dalam daun.",
            "Beri isian gula merah sisir di tengahnya.",
            "Tutup kembali dengan adonan tepung kelapa hingga penuh.",
            "Lipat daun pisang menutupi alas kerucut, semat dengan lidi.",
            "Panaskan kukusan.",
            "Kukus bungkusan Kue Abuk selama sekitar 30-40 menit hingga matang.",
            "Angkat dan sajikan hangat."
        ],
        tips: [
            "Jangan menekan adonan terlalu padat saat membungkus agar kue bisa matang merata dan tidak keras.",
            "Pilih kelapa yang sedang (tidak terlalu muda atau tua) agar gurihnya pas.",
            "Layu-kan daun pisang di atas api sebentar agar tidak mudah sobek saat dibentuk."
        ],
        img: 'img/placeholder_abuk.jpg'
    },
    {
        id: 'serabi',
        name: 'Serabi Lombok (Serabi Lak-Lak)',
        desc: `Serabi Lombok, atau sering dikenal dengan Serabi Lak-Lak, adalah serabi bakar tradisional yang dimasak menggunakan tungku tanah liat kayu bakar. Proses memasak ini memberikan aroma *smoky* yang khas yang tidak bisa didapatkan dari kompor gas.

Berbeda dengan serabi modern yang memakai kuah kinca atau topping kekinian, Serabi Lombok biasanya disajikan sederhana dengan taburan parutan kelapa segar dan gula merah cair, atau terkadang santan kental gurih.

Teksturnya berpori-pori (bersarang), empuk, dan bagian bawahnya sedikit gosong renyah. Ini adalah sarapan favorit masyarakat lokal.`,
        ingredients: [
            "200 gr tepung beras",
            "500 ml santan kelapa (kekentalan sedang)",
            "1/2 sdt garam",
            "1 lembar daun pandan",
            "<b>Topping:</b>",
            "100 gr kelapa parut (kukus)",
            "Sirup gula merah (kinca) secukupnya"
        ],
        steps: [
            "Rebus santan dengan daun pandan dan garam hingga mendidih sambil diaduk. Biarkan hangat kuku.",
            "Tuang santan ke dalam tepung beras sedikit demi sedikit sambil diaduk menggunakan whisk hingga adonan licin dan tidak bergerindil.",
            "Tepuk-tepuk adonan (keplok) selama 15 menit untuk memasukkan udara (kunci agar bersarang). Diamkan adonan 1 jam.",
            "Panaskan wajan tanah liat kecil atau cetakan serabi di atas api hingga benar-benar panas.",
            "Tuang 1 sendok sayur adonan ke wajan. Tekan tengahnya sedikit dengan pantat sendok untuk membentuk pinggiran.",
            "Biarkan sebentar hingga muncul gelembung/pori-pori.",
            "Tutup wajan, masak hingga matang dan bagian bawah berwarna kecokelatan.",
            "Angkat serabi.",
            "Sajikan dengan taburan kelapa parut dan siraman gula merah."
        ],
        tips: [
            "Pastikan wajan/cetakan benar-benar panas sebelum menuang adonan agar serat/pori-pori terbentuk sempurna.",
            "Gunakan wajan tanah liat untuk aroma dan hasil panggangan terbaik.",
            "Santan yang direbus dulu membuat kue tidak mudah basi."
        ],
        img: 'img/placeholder_serabi.jpg'
    },
    {
        id: 'tuak_manis',
        name: 'Tuak Manis',
        desc: `Tuak Manis adalah minuman tradisional segar khas Lombok yang diambil langsung dari nira pohon aren (enau). Berbeda dengan tuak yang memabukkan, Tuak Manis ini **tidak mengandung alkohol** karena diambil saat pagi hari sebelum mengalami fermentasi.

Rasanya manis alami, segar, dan memiliki sedikit sensasi soda (karbonasi) natural. Warnanya putih keruh seperti susu encer atau air kelapa tua.

Minuman ini sangat populer di kawasan Pusuk atau hutan lindung Lombok, sering dijajakan di pinggir jalan dalam botol-botol kaca. Sangat nikmat diminum dingin saat cuaca panas.`,
        ingredients: [
            "1 liter air nira aren segar (baru disadap)",
            "Es batu secukupnya",
            "Potongan buah durian (opsional, variasi Tuak Durian)"
        ],
        steps: [
            "Pastikan air nira yang digunakan adalah nira baru (pagi hari) yang belum terfermentasi.",
            "Saring air nira menggunakan kain bersih untuk membuang kotoran atau serbuk sabut aren.",
            "Rebus sebentar hingga mendidih JIKA ingin lebih awet (namun rasa segar alaminya akan sedikit berubah), atau sajikan mentah segar.",
            "Siapkan gelas saji, beri es batu secukupnya.",
            "Tuang Tuak Manis ke dalam gelas.",
            "Bisa ditambahkan daging buah durian untuk aroma yang lebih eksotis.",
            "Sajikan segera. (Perhatian: Tuak manis mudah berubah menjadi cuka/asam jika didiamkan terlalu lama di suhu ruang)."
        ],
        tips: [
            "Segera simpan di kulkas jika tidak langsung diminum untuk mencegah fermentasi.",
            "Jangan mencampur dengan bahan asam lainnya agar rasa manis aslinya tidak rusak.",
            "Paling nikmat diminum langsung di lokasi penyadapan (hutan aren)."
        ],
        img: 'img/placeholder_tuak.jpg'
    },
    {
        id: 'es_poteng',
        name: 'Es Poteng',
        desc: `Es Poteng adalah dessert tradisional menyegarkan yang terdiri dari tape singkong (poteng) khas Lombok dan es serut. Poteng Lombok memiliki tekstur yang sangat lembut dan manis karena dibuat dari singkong pilihan dan ragi berkualitas, seringkali berwarna hijau alami dari daun katu/pandan.

Biasanya disajikan bersama Jaje Tujak (ketan tumbuk), namun versi Es Poteng fokus pada kesegaran kuah tape yang manis dingin.

Sangat cocok sebagai hidangan penutup setelah makan makanan pedas khas Lombok seperti Ayam Taliwang atau Pelecing.`,
        ingredients: [
            "200 gr Poteng (Tapai Singkong manis khas Lombok)",
            "Mangkok es serut",
            "5 sdm sirup gula atau susu kental manis",
            "Air matang/air es secukupnya"
        ],
        steps: [
            "Siapkan poteng yang sudah matang dan manis (biasanya yang berair).",
            "Siapkan mangkuk saji.",
            "Masukkan beberapa potong poteng beserta sedikit air tapenya ke dalam mangkuk.",
            "Tumpuk dengan es serut gunungan di atasnya.",
            "Siram dengan sirup gula merah, sirup cocopandan, atau susu kental manis sesuai selera.",
            "Aduk sedikit sebelum disantap agar dinginnya merata.",
            "Nikmati kesegaran manis asam khas tape."
        ],
        tips: [
            "Pilih poteng yang benar-benar matang (lembek dan berair) untuk rasa terbaik.",
            "Jika poteng sudah cukup manis, kurangi penggunaan sirup tambahan.",
            "Tambahkan adonan tepung beras (bubur sumsum) jika ingin variasi tekstur."
        ],
        img: 'img/placeholder_poteng.jpg'
    },
    {
        id: 'urap_urap',
        name: 'Urap-Urap Timun',
        desc: `Urap-urap khas Lombok, khususnya yang berbahan dasar mentimun cacah dan tauge, adalah pendamping wajib yang menyegarkan. Berbeda dengan urap Jawa yang bumbunya dikukus, urap Lombok seringkali menggunakan kelapa parut sangrai atau kelapa parut mentah yang dibumbui sambal terasi pedas.

Teksturnya renyah (crunchy) dan rasanya pedas gurih, sangat pas untuk menetralkan rasa lemak setelah makan daging. Biasanya disajikan dengan taburan kedelai goreng.

Sajian ini sederhana namun kaya serat dan vitamin, mencerminkan pola makan sehat masyarakat tradisional Lombok.`,
        ingredients: [
            "2 buah mentimun, cacah/cincang kasar",
            "100 gr tauge, buang ekor",
            "100 gr kacang panjang, potong kecil dan rebus sebentar",
            "150 gr kelapa parut setengah tua",
            "<b>Bumbu Halus:</b>",
            "3 buah cabai merah",
            "5 buah cabai rawit",
            "2 siung bawang putih",
            "1 cm kencur",
            "1 sdt terasi bakar",
            "1 sdt gula merah",
            "1 sdt garam",
            "1 buah jeruk limau"
        ],
        steps: [
            "Siapkan sayuran: Cacah mentimun (buang biji jika tidak suka berair). Rebus kacang panjang dan tauge sebentar saja, tiriskan.",
            "Haluskan bumbu (cabai, bawang, kencur, terasi, gula, garam).",
            "Campurkan bumbu halus dengan kelapa parut. Aduk rata atau ulek ringan agar bumbu meresap ke kelapa.",
            "Bisa dikukus sebentar bumbu kelapanya jika ingin lebih awet, atau biarkan mentah untuk rasa yang lebih fresh.",
            "Dalam wadah besar, campur sayuran (timun, tauge, kacang panjang) dengan bumbu kelapa.",
            "Aduk hingga tercampur rata.",
            "Beri perasan air jeruk limau untuk aroma segar.",
            "Sajikan segera."
        ],
        tips: [
            "Gunakan kelapa yang tidak terlalu tua agar rasanya manis dan milky.",
            "Jangan mencampur sayur dengan bumbu terlalu lama sebelum dimakan agar sayuran tidak layu/berair.",
            "Kencur adalah kunci aroma segar pada bumbu urap ini."
        ],
        img: 'img/placeholder_urap.jpg'
    },
    {
        id: 'ayam_taliwang',
        name: 'Ayam Taliwang',
        desc: `Ayam Taliwang adalah raja kuliner Lombok yang sudah mendunia. Berasal dari Karang Taliwang, Mataram, sajian ini menggunakan ayam kampung muda (usia 3-4 bulan) yang dibakar dengan bumbu pedas super kaya rempah.

Keunikannya ada pada proses memasaknya: ayam dibakar setengah matang, lalu digeprek (dimemarkan), dicelupkan ke dalam bumbu tumis pedas, lalu dibakar kembali hingga bumbu meresap dan terkaramelisasi. Rasa pedas, gurih, dan *smoky* bercampur jadi satu.

Wajib disajikan bersama Pelecing Kangkung dan Beberuk Terong. Ini adalah definisi "makan enak" bagi orang Lombok.`,
        ingredients: [
            "1 ekor ayam kampung muda (uk. 400-500gr), belah dadanya (bekakak)",
            "1 sdm air kapur sirih (opsional, untuk kerenyahan kulit)",
            "1 sdm garam",
            "Minyak untuk menumis",
            "<b>Bumbu Halus:</b>",
            "10 butir bawang merah",
            "5 siung bawang putih",
            "15 buah cabai merah keriting",
            "10 buah cabai rawit merah",
            "1,5 sdt terasi bakar khas Lombok",
            "1 ruas kencur",
            "1 buah tomat merah",
            "1 sdm gula merah",
            "1 sdt garam"
        ],
        steps: [
            "Cuci bersih ayam, lumuri garam. Diamkan 15 menit.",
            "Bakar ayam di atas bara api hingga setengah matang. Angkat.",
            "Memarkan/geprek ayam perlahan agar tulangnya sedikit remuk dan badan melebar, tapi jangan sampai hancur.",
            "Tumis bumbu halus hingga harum dan matang berminyak. Tambahkan sedikit air.",
            "Masukkan ayam bakar ke dalam tumisan bumbu. Masak ungkep sebentar hingga bumbu meresap ke dalam daging.",
            "Ambil ayam, bakar kembali di atas bara api.",
            "Sambil dibakar, olesi terus dengan sisa bumbu tumisan tadi bolak-balik hingga matang sempurna dan bumbu agak gosong/karamel.",
            "Sajikan panas dengan kucuran jeruk limau di atasnya."
        ],
        tips: [
            "Wajib memggunakan ayam kampung muda agar daging manis dan empuk. Ayam broiler rasanya akan berbeda.",
            "Gunakan api arang/batok kelapa untuk aroma asap yang otentik.",
            "Jangan pelit bumbu, Ayam Taliwang harus berlumur bumbu tebal."
        ],
        img: 'img/placeholder_taliwang.jpg'
    }
];

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// --- FUNGSI RENDER UTAMA (INDEX) ---

function renderFoodList() {
    const listContainer = document.getElementById('food-container');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    foods.forEach(food => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
    <img src="${food.img}" alt="${food.name}" class="card-img">
    <h3>${food.name}</h3>
    <p>${food.desc.substring(0, 150)}...</p>
    <div class="card-actions">
        <button onclick="showRecipe('${food.id}')" class="btn">Lihat Resep</button>
        <button onclick="addToFavorite('${food.id}')" class="btn btn-favorite">
    ❤️ Favorit
</button>

    </div>
`;
        listContainer.appendChild(card);
    });
}

// --- FUNGSI TOGGLE RESEP ---

function showRecipe(id) {
    const food = foods.find(f => f.id === id);
    if (!food) return;

    // Toggle Visibility
    document.getElementById('food-list').style.display = 'none';
    const recipeView = document.getElementById('recipe-view');
    recipeView.style.display = 'block';

    // Set Data
    document.getElementById('recipe-title').innerText = `Resep ${food.name}`;
    const recipeContent = document.getElementById('recipe-content');

    recipeContent.innerHTML = `
        <div class="recipe-card" style="margin-top: 0;">
            <div class="recipe-desc" style="margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                <p>${food.desc.replace(/\n\n/g, '<br><br>')}</p>
            </div>

            <p><strong>Bahan-bahan:</strong></p>
            <ul style="margin-bottom: 20px;">
                ${food.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>

            <p><strong>Langkah Memasak:</strong></p>
            <ol style="margin-bottom: 20px;">
                ${food.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>

            <div class="recipe-tips" style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 5px solid #ffc107;">
                <p><strong>💡 Tips Koki:</strong></p>
                <ul>
                     ${food.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    // Scroll
    recipeView.scrollIntoView({ behavior: 'smooth' });
}

function backToList() {
    document.getElementById('recipe-view').style.display = 'none';
    const foodList = document.getElementById('food-list');
    foodList.style.display = 'block';
    foodList.scrollIntoView({ behavior: 'smooth' });
}

// --- FUNGSI HALAMAN FAVORIT ---

function renderFavorites() {
    const favContainer = document.getElementById('favorite-list');
    const emptyMsg = document.getElementById('empty-message');
    if (!favContainer) return;

    const favIds = JSON.parse(localStorage.getItem('lombokFavorites') || '[]');
    const favFoods = foods.filter(f => favIds.includes(f.id));

    if (favFoods.length === 0) {
        emptyMsg.style.display = 'block';
        favContainer.innerHTML = '';
        return;
    } else {
        emptyMsg.style.display = 'none';
    }

    favContainer.innerHTML = '';
    favFoods.forEach(food => {
        const card = document.createElement('div');
        card.className = 'card';
        // Tampilan Favorit sederhana: Nama, Deskripsi, dan tombol Hapus
        card.innerHTML = `
            <h3>${food.name}</h3>
            <p>${food.desc.substring(0, 150)}...</p>
            <div class="card-actions">
                <button onclick="removeFromFavorite('${food.id}')" class="btn btn-danger">Hapus dari Favorit</button>
            </div>
        `;
        favContainer.appendChild(card);
    });
}

// --- LOGIKA MENYIMPAN DATA ---

function addToFavorite(id) {
    let favs = JSON.parse(localStorage.getItem('lombokFavorites') || '[]');

    // Cek Duplikasi
    if (!favs.includes(id)) {
        favs.push(id);
        localStorage.setItem('lombokFavorites', JSON.stringify(favs));
        showToast('❤️ Ditambahkan ke favorit');
    } else {
        showToast('⚠️ Makanan ini sudah ada di daftar Favorit Anda.');
    }
}

function removeFromFavorite(id) {
    let favs = JSON.parse(localStorage.getItem('lombokFavorites') || '[]');
    favs = favs.filter(favId => favId !== id);
    localStorage.setItem('lombokFavorites', JSON.stringify(favs));
    renderFavorites(); // Refresh list immediately
}

// --- INIT ---

document.addEventListener('DOMContentLoaded', () => {
    // Determine page context by checking element existence
    if (document.getElementById('food-container')) {
        renderFoodList();
    }

    if (document.getElementById('favorite-list')) {
        renderFavorites();
    }
});
