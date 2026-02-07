# KanbanFlow - Aplikasi Manajemen Tugas

KanbanFlow adalah aplikasi manajemen tugas berbasis web yang dirancang untuk membantu pengguna memvisualisasikan dan mengatur alur kerja mereka secara efisien. Aplikasi ini menerapkan metodologi Kanban dengan antarmuka yang intuitif, memungkinkan pengguna untuk memindahkan tugas antara status "To Do", "In Progress", dan "Done".

Dikembangkan menggunakan Vanilla JavaScript murni tanpa ketergantungan pada library atau framework eksternal, proyek ini menonjolkan pemahaman mendalam tentang konsep dasar pengembangan web modern.

## Demo Aplikasi

[Tautkan Link GitHub Pages atau Demo Langsung Di Sini]

## Fitur Utama

Aplikasi ini dilengkapi dengan serangkaian fitur untuk meningkatkan produktivitas pengguna:

* **Manajemen Tugas Visual:** Mengorganisir tugas ke dalam tiga kolom status utama.
* **Antarmuka Drag & Drop (Desktop):** Memanfaatkan HTML5 Drag and Drop API native untuk memindahkan kartu tugas antar kolom dengan mulus pada perangkat desktop.
* **Interaksi Ramah Seluler:** Sistem deteksi perangkat cerdas yang mengubah interaksi "drag & drop" menjadi "tap-to-move" pada layar sentuh atau perangkat kecil (< 768px), memastikan pengalaman pengguna yang optimal di smartphone.
* **Mode Gelap & Terang:** Dukungan tema ganda yang mendeteksi preferensi sistem pengguna dan menyimpan pilihan tema manual.
* **Penyimpanan Data Persisten:** Semua data tugas disimpan secara lokal menggunakan `localStorage` browser, sehingga data tidak hilang saat halaman dimuat ulang.
* **Indikator Prioritas:** Penandaan visual (kode warna) untuk tingkat prioritas tugas (Low, Medium, High).
* **Desain Responsif:** Tata letak adaptif menggunakan CSS Grid dan Flexbox yang menyesuaikan tampilan dari format horizontal (desktop) ke vertikal (mobile).

## Teknologi yang Digunakan

Proyek ini dibangun dengan standar teknologi web terkini:

* **HTML5:** Penggunaan elemen semantik untuk struktur dokumen yang baik dan aksesibilitas.
* **CSS3:**
    * CSS Variables untuk manajemen tema (Dark/Light mode).
    * CSS Grid & Flexbox untuk tata letak responsif.
    * Keyframe Animations untuk transisi antarmuka yang halus.
* **JavaScript (ES6+):**
    * Manipulasi DOM tingkat lanjut.
    * Event Handling (Drag events, Click events).
    * State Management menggunakan Array dan Object.
    * Local Storage API untuk persistensi data.

## Sorotan Teknis

Proyek ini mendemonstrasikan penyelesaian masalah teknis dalam pengembangan frontend, antara lain:

1.  **Logika Cross-Platform:**
    Tantangan utama adalah API Drag & Drop HTML5 yang tidak didukung secara native pada banyak browser seluler. Solusi yang diterapkan adalah logika kondisional: jika lebar layar di bawah 768px, event listener berubah menjadi `click` yang memindahkan status tugas secara otomatis ke tahap berikutnya (misal: To Do -> In Progress).

2.  **Manajemen State Tanpa Framework:**
    Alih-alih memanipulasi DOM secara langsung untuk setiap perubahan data, aplikasi ini menggunakan "Single Source of Truth" berupa array objek di JavaScript. Setiap perubahan data memperbarui array tersebut, menyimpannya ke Local Storage, dan merender ulang tampilan (Re-rendering) untuk menjaga konsistensi data.

3.  **Algoritma Pencarian & Filter (Drag & Drop):**
    Mengimplementasikan logika untuk mengidentifikasi ID tugas yang sedang ditarik (`dragstart`), mendeteksi zona target (`dragover`), dan memperbarui status tugas berdasarkan ID kolom tempat tugas dijatuhkan (`drop`).

## Cara Instalasi dan Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/altvesper/kanbanflow.git](https://github.com/altvesper/kanbanflow.git)
    ```

2.  **Buka direktori proyek:**
    ```bash
    cd kanbanflow
    ```

3.  **Jalankan aplikasi:**
    Cukup buka file `index.html` menggunakan browser web modern (Chrome, Firefox, Edge, Safari). Tidak diperlukan instalasi server backend atau dependensi Node.js.

## Struktur Proyek

```text
kanbanflow/
├── index.html      # Struktur utama dan markup aplikasi
├── style.css       # Gaya tampilan, tema, dan responsivitas
├── script.js       # Logika bisnis, manipulasi DOM, dan penanganan data
└── README.md       # Dokumentasi proyek
