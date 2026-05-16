# LOX

web jual beli barang (smartphone, laptop, monitor)

# SPESIFIKASI

1. website dengan mobile-first UI
2. gunakan css module sesuai penggunaan di next.js
3. gunakan data dummy JSON (statis tanpa database/external API)
4. zero dependencies / agnostic as possible
5. pages: Home (banner, kategori, promo barang jualan)
6. gunakan bahasa indonesia
7. buat dengan acuan toko online yang ada di indonesia
8. sederhana saja, tidak perlu kompleks
9. icon gunkan lucide react

# MOTIVATIONS

website ini dibutuhkan untuk "properti" film, jadi yang penting tampil di layar dengan proper, sederhana

# CONSTRAINT

1. tidak perlu jauh dan kompleks,gunakan css sederhana, dan data statis dengan JSON saja
2. bahasa indonesia
3. mobile-first UI

# IMPLEMENTATION NOTES

1. gunakan `pnpm fix` jika menemukan error saat `pnpm lint` (manfaatkan auto fix dari eslint)
2. gunakan `pnpm format` untuk format code

# REVISI

1. gunakan gaya, system design dari OLX (olx.co.id) lebih mirip lebih bagus, hanya saja namanya kita plesetkan jadi LOX
2. ada halaman detail produk
3. halaman detail bisa di akses via product card di halaman utama
4. halaman detail bisa di akses via search result
5. search result sugesstion memunculkan prediksi barang
