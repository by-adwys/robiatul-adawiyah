// Data Makanan Khas Lombok
const foods = [
    {
        id: 'pelecing',
        name: 'Pelecing Kangkung',
        desc: 'Hidangan kangkung rebus yang disajikan dengan sambal tomat khas Lombok.',
        ingredients: ['1 ikat kangkung', 'Cabai rawit & tomat', 'Terasi bakar', 'Kacang tanah goreng'],
        steps: ['Rebus kangkung hingga layu.', 'Ulek cabai, tomat, terasi, garam.', 'Campurkan sambal dengan kangkung.', 'Taburi kacang goreng.'],
        img: 'img/placeholder_pelecing.jpg'
    },
    {
        id: 'ayam_rarang',
        name: 'Ayam Rarang',
        desc: 'Ayam kampung dengan bumbu pedas berwarna merah menyala khas Rarang.',
        ingredients: ['500g ayam kampung', 'Cabai merah kering', 'Bawang merah & putih', 'Kemiri'],
        steps: ['Goreng ayam setengah matang.', 'Tumis bumbu halus hingga harum.', 'Masukkan ayam, masak hingga meresap.', 'Sajikan dengan nasi hangat.'],
        img: 'img/placeholder_ayam.jpg'
    },
    {
        id: 'sate_bulayak',
        name: 'Sate Bulayak',
        desc: 'Sate daging sapi dengan bumbu khas dan lontong dibungkus daun aren (bulayak).',
        ingredients: ['Daging sapi potong dadu', 'Santan kental', 'Bawang & Cabai', 'Lontong (Bulayak)'],
        steps: ['Tusuk daging sapi.', 'Celup bumbu dan bakar.', 'Masak sisa bumbu dengan santan.', 'Sajikan sate dengan kuah santan.'],
        img: 'img/placeholder_sate.jpg'
    },
    {
        id: 'sate_pusut',
        name: 'Sate Pusut',
        desc: 'Sate lilit khas Lombok yang terbuat dari campuran daging dan kelapa parut.',
        ingredients: ['250g daging giling', '100g kelapa parut', 'Daun jeruk', 'Tusuk sate'],
        steps: ['Campur daging, kelapa, dan bumbu.', 'Lilitkan pada tusuk sate.', 'Bakar hingga matang.', 'Sajikan hangat.'],
        img: 'img/placeholder_pusut.jpg'
    },
    {
        id: 'klepon',
        name: 'Klepon',
        desc: 'Kue tradisional isi gula merah cair yang "muncrat" saat digigit.',
        ingredients: ['Tepung ketan', 'Gula merah sisir', 'Parutan kelapa', 'Air pandan'],
        steps: ['Uleni tepung dengan air pandan.', 'Isi adonan dengan gula merah.', 'Rebus bola-bola hingga mengapung.', 'Baluri kelapa parut.'],
        img: 'img/placeholder_klepon.jpg'
    },
    {
        id: 'cerorot',
        name: 'Cerorot',
        desc: 'Kue dari tepung beras dan gula merah, dibungkus janur berbentuk kerucut.',
        ingredients: ['Tepung beras', 'Gula merah cair', 'Santan', 'Janur (daun kelapa muda)'],
        steps: ['Buat selongsong kerucut dari janur.', 'Masak adonan tepung dan gula.', 'Tuang ke selongsong.', 'Kukus hingga matang.'],
        img: 'img/placeholder_cerorot.jpg'
    },
    {
        id: 'kue_abuk',
        name: 'Kue Abuk',
        desc: 'Kue jajanan pasar berbentuk kerucut dari tepung ketan dan gula merah.',
        ingredients: ['Tepung ketan', 'Kelapa parut', 'Gula merah', 'Daun pisang'],
        steps: ['Campur tepung dan kelapa.', 'Siapkan cetakan daun pisang.', 'Isi selang-seling adonan dan gula.', 'Kukus sampai matang.'],
        img: 'img/placeholder_abuk.jpg'
    },
    {
        id: 'serabi',
        name: 'Serabi Lombok',
        desc: 'Serabi bakar tungku tanah liat, biasa disajikan dengan parutan kelapa.',
        ingredients: ['Tepung beras', 'Santan kelapa', 'Garam', 'Kayu bakar (untuk aroma)'],
        steps: ['Campur bahan menjadi adonan cair.', 'Tuang ke wajan tanah liat panas.', 'Tutup dan tunggu berlubang.', 'Angkat dan sajikan.'],
        img: 'img/placeholder_serabi.jpg'
    },
    {
        id: 'tuak_manis',
        name: 'Tuak Manis',
        desc: 'Minuman segar dari nira pohon aren, tanpa alkohol dan manis.',
        ingredients: ['Air nira segar', 'Es batu (opsional)'],
        steps: ['Ambil air nira dari pohon.', 'Saring hingga bersih.', 'Sajikan dingin lebih nikmat.', 'Minum selagi segar.'],
        img: 'img/placeholder_tuak.jpg'
    },
    {
        id: 'es_poteng',
        name: 'Es Poteng',
        desc: 'Minuman es dengan isian tape singkong (poteng) khas Lombok.',
        ingredients: ['Tape singkong (poteng)', 'Es serut', 'Sirup gula', 'Susu kental manis'],
        steps: ['Siapkan mangkuk.', 'Masukkan poteng dan es serut.', 'Siram sirup dan susu.', 'Sajikan segera.'],
        img: 'img/placeholder_poteng.jpg'
    },
    {
        id: 'urap_urap',
        name: 'Urap-urap',
        desc: 'Sayuran rebus yang dicampur dengan kelapa parut berbumbu pedas.',
        ingredients: ['Kangkung/Bayam', 'Tauge', 'Kelapa parut', 'Cabai & Bawang'],
        steps: ['Rebus sayuran.', 'Tumis/kukus bumbu kelapa.', 'Campur sayuran dengan bumbu.', 'Sajikan.'],
        img: 'img/placeholder_urap.jpg'
    },
    {
        id: 'ayam_taliwang',
        name: 'Ayam Taliwang',
        desc: 'Ayam bakar khas Taliwang dengan bumbu super pedas.',
        ingredients: ['Ayam kampung muda', 'Cabai merah & rawit', 'Bawang merah & putih', 'Terasi'],
        steps: ['Tumis bumbu halus.', 'Ungkep ayam dengan bumbu.', 'Bakar ayam sambil dioles sisa bumbu.', 'Sajikan dengan plecing.'],
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
    <p>${food.desc}</p>
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
            <p><strong>Bahan-bahan:</strong></p>
            <ul>
                ${food.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <br>
            <p><strong>Langkah Memasak:</strong></p>
            <ol>
                ${food.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
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
            <p>${food.desc}</p>
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
