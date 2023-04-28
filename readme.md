# Ini adalah proyek backend yang dibuat menggunakan teknologi sebagai berikut:
1. TypeScript sebagai bahasa pemrograman
2. Express.js sebagai framework server
3. MongoDB sebagai database

Berikut adalah langkah-langkah untuk membuat proyek tersebut.
# Inisialisasi Proyek
Untuk menginisialisasi proyek, jalankan perintah berikut: <br>
<img src ="./src/assets/imgmd/1.png">

# Instalasi TypeScript
Untuk menginstal TypeScript pada pengembangan, jalankan perintah berikut:<br>
<img src="./src/assets/imgmd/2.png">

# Konfigurasi TypeScript
Untuk mengkonfigurasi TypeScript, jalankan perintah berikut:<br>
<img src="./src/assets/imgmd/3.png">

Setelah itu, ubah file tsconfig.json seperti berikut:<br>
<img src="./src/assets/imgmd/4.png">

# Instalasi Nodemon

Untuk menginstal Nodemon, jalankan perintah berikut:<br>
<img src="./src/assets/imgmd/5.png">

# Konfigurasi Nodemon
Untuk mengkonfigurasi Nodemon, buat file nodemon.json dan isi dengan kode berikut:<br>
<img src="./src/assets/imgmd/6.png">

# Konfigurasi package.json
Untuk mengkonfigurasi package.json, ubah script menjadi seperti berikut:<br>
<img src="./src/assets/imgmd/7.png">

# Uji Proyek
Untuk menguji proyek, buat file server.ts pada folder src dan isi dengan kode berikut:<br>
<img src="./src/assets/imgmd/8.png">

Lalu jalankan perintah npm run dev di terminal VSCode. Jika berhasil, maka hasilnya akan seperti berikut:<br>
<img src="./src/assets/imgmd/9.png">

# Instalasi Express.js
Untuk menginstal Express.js, jalankan perintah berikut:<br>
<img src="./src/assets/imgmd/10.png">

# Instalasi @types/express
Untuk menginstal @types/express, jalankan perintah berikut:<br>
<img src="./src/assets/imgmd/11.png">

# Konfigurasi EsLint
Untuk mengkonfigurasi EsLint pertama jalankan perintah berikut:<br>
<img src="./src/assets/imgmd/12.png"><br>
setelah itu pilih (y) lalu enter <br>
Setelah itu akan muncul beberapa pertanyaan: <br>

1. <img src="./src/assets/imgmd/13.png"> <br>
2. setelah langkah-langkah diatas selesai maka jalankan perintah berikut: <br>
   <img src="./src/assets/imgmd/14.png">

# Konfigurasi file .eslintrc.json <br>
<img src="./src/assets/imgmd/15.png">

# Instalasi Prettier
1. isntall extension terlebih dahulu
2. lalu install prettier dengan perintah: <br>
   <img src="./src/assets/imgmd/16.png">

# Konfigurasi Prettier
1. Buat file dengan nama .prettierrc
2. setelah itu isi file tersebut dengan: <br>
   <img src="./src/assets/imgmd/17.png">
3. lalu buat file .prettierignore dan isi file tersebut dengan: <br>
   <img src="./src/assets/imgmd/18.png">
4. edit file package.json <br>
   <img src="./src/assets/imgmd/19.png">

# Setup Pre-Commit Husky
Pre-commit hooks adalah alat yang sangat berguna untuk memverifikasi kualitas kode dan mencegah terjadinya kesalahan ketika melakukan commit pada repositori Git. Pada panduan ini, kita akan melakukan setup pre-commit hooks menggunakan Husky, sebuah library Node.js yang populer dan memungkinkan kita untuk menjalankan Git hooks dengan mudah.
# Instalasi Husky  dan Pretty-quick <br>
<img src="./src/assets/imgmd/20.png">

# Konfigurasi Husky pada package.json <br>
<img src="./src/assets/imgmd/21.png">

# Test Husky dengan cara <br> <img src="./src/assets/imgmd/22.png">