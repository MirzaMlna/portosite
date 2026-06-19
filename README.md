# PortoSite

Panduan kerja untuk membuat dan mengirim website portofolio klien dalam bentuk file HTML siap pakai.

## Konsep Produk

Klien membeli paket website portofolio. Setelah data dan foto dari klien lengkap, file template HTML diedit sesuai kebutuhan klien lalu dikirim sebagai folder website.

Output akhir untuk klien bisa dibuka langsung dari browser tanpa harus install React, Vite, Node.js, atau tools developer lain.

## Lokasi Template

Template HTML ada di:

```text
src/pages/templates/
```

Daftar template:

```text
paket-starter.html
paket-professional.html
paket-custom.html
template1-mahasiswa.html
template2-designer.html
template4-umkm.html
```

Gunakan file di atas sebagai bahan awal. Jangan edit file template utama langsung untuk pesanan klien. Salin dulu ke folder kerja klien, lalu edit hasil salinannya.

## Ketentuan Paket Section

Paket Starter berisi 4 section:

```text
Hero
About
Skill
Resume
```

Paket Profesional berisi 6 section:

```text
Hero
About
Skill
Resume
Project
Kontak
```

Saat menawarkan paket ke klien, gunakan ketentuan section di atas sebagai acuan utama. Jangan menambahkan section di luar paket kecuali klien memilih paket Custom atau ada kesepakatan tambahan.

## Lokasi Folder Kerja

Folder hasil kerja pesanan bisa dibuat sebagai folder terpisah dari template utama.

```text
pesanan/
```

Contoh:

```text
pesanan/budi-santoso/
```

Folder `templates` dipakai untuk file master template. Folder kerja pesanan dipakai untuk hasil salinan yang sudah diedit.

## Struktur Folder Untuk Klien

Untuk setiap klien, buat folder baru dengan format nama yang jelas.

Contoh:

```text
pesanan/
  nama-klien/
    index.html
    assets/
      images/
        profile.jpg
        project-1.jpg
        project-2.jpg
        project-3.jpg
      documents/
        cv.pdf
```

Struktur di dalam folder klien:

```text
nama-klien/
    index.html
    assets/
      images/
        profile.jpg
        project-1.jpg
        project-2.jpg
        project-3.jpg
      documents/
        cv.pdf
```

Minimal yang dikirim ke klien:

```text
nama-klien/
  index.html
  assets/
    images/
```

Jika website tidak memakai dokumen PDF atau file tambahan, folder `documents` tidak perlu dibuat.

## Penempatan Foto

Semua foto klien diletakkan di:

```text
assets/images/
```

Gunakan nama file yang pendek, rapi, huruf kecil, dan tanpa spasi.

Contoh nama file yang disarankan:

```text
profile.jpg
hero.jpg
about.jpg
project-1.jpg
project-2.jpg
project-3.jpg
logo.png
```

Hindari nama seperti:

```text
Foto Saya Final Banget (1).jpg
IMG_20260618_123456.jpg
WhatsApp Image 2026-06-18 at 19.00.00.jpeg
```

## Cara Memasang Foto Ke HTML

Di dalam file `index.html`, path foto harus relatif dari posisi file HTML.

Contoh:

```html
<img src="assets/images/profile.jpg" alt="Foto profil" />
```

Contoh untuk gambar project:

```html
<img src="assets/images/project-1.jpg" alt="Project 1" />
<img src="assets/images/project-2.jpg" alt="Project 2" />
<img src="assets/images/project-3.jpg" alt="Project 3" />
```

Jika file `index.html` berada di luar folder `assets`, gunakan format:

```text
assets/images/nama-file.jpg
```

Jangan gunakan path dari komputer sendiri seperti:

```text
C:\Users\User\Pictures\foto.jpg
D:\folder\foto.jpg
```

Path seperti itu hanya jalan di komputer pembuat, bukan di komputer klien atau hosting.

## Prosedur Pengerjaan Pesanan

1. Buat folder kerja baru untuk klien.

```text
pesanan/nama-klien/
```

2. Salin salah satu template dari `src/pages/templates/`.

Contoh:

```text
src/pages/templates/paket-starter.html
```

Salin ke:

```text
pesanan/nama-klien/index.html
```

3. Buat folder asset.

```text
pesanan/nama-klien/assets/images/
```

4. Masukkan semua foto klien ke folder `assets/images/`.

5. Rename foto agar rapi.

Contoh:

```text
profile.jpg
project-1.jpg
project-2.jpg
project-3.jpg
```

6. Edit isi `index.html`.

Bagian yang biasanya diedit:

- Nama klien
- Profesi atau posisi
- Deskripsi singkat
- Hero
- About atau tentang saya
- Skill
- Resume
- Project, khusus paket Profesional atau Custom
- Kontak, khusus paket Profesional atau Custom
- Link WhatsApp, Instagram, LinkedIn, GitHub, atau email
- Path gambar di tag `<img>`

7. Buka `index.html` di browser untuk cek tampilan.

Klik dua kali file:

```text
pesanan/nama-klien/index.html
```

8. Cek semua gambar, tombol, dan link.

9. Jika sudah selesai, kompres folder `nama-klien` menjadi `.zip`.

10. Kirim file `.zip` ke klien atau upload folder tersebut ke hosting.

## Checklist Sebelum Dikirim

- File utama bernama `index.html`.
- Semua foto berada di `assets/images/`.
- Tidak ada path lokal seperti `C:\Users\...` atau `D:\...`.
- Semua gambar muncul saat `index.html` dibuka.
- Semua tombol dan link bisa diklik.
- Nomor WhatsApp sudah benar.
- Email dan sosial media sudah benar.
- Tampilan mobile sudah dicek lewat browser.
- Tidak ada teks dummy seperti `Lorem ipsum`.
- Folder sudah dikompres dalam format `.zip` jika akan dikirim manual.

## Format Link WhatsApp

Gunakan format:

```html
<a href="https://wa.me/6281234567890">Hubungi Saya</a>
```

Aturan nomor:

- Pakai kode negara Indonesia `62`.
- Jangan pakai angka `0` di depan.
- Jangan pakai spasi, tanda plus, atau strip.

Contoh benar:

```text
6281234567890
```

Contoh salah:

```text
081234567890
+62 812-3456-7890
```

## Upload Ke Hosting

Jika website akan diupload ke hosting, upload isi folder klien.

Struktur di hosting harus tetap seperti ini:

```text
public_html/
  index.html
  assets/
    images/
      profile.jpg
      project-1.jpg
      project-2.jpg
```

Jangan upload hanya file `index.html` tanpa folder `assets`, karena gambar tidak akan muncul.

## Catatan Untuk Maintenance

Jika klien minta revisi:

1. Edit file `index.html` di folder kerja klien.
2. Jika ada foto baru, masukkan ke `assets/images/`.
3. Update path gambar di HTML jika nama file berubah.
4. Buka ulang di browser untuk cek.
5. Kirim ulang folder `.zip` atau upload ulang ke hosting.

Simpan backup setiap pesanan agar mudah direvisi di kemudian hari.
