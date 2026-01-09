# Buổi 1 (LT) — Môi trường & PHP 101

## 🎯 Mục tiêu

-   Cài đặt stack (XAMPP/MAMP/Laragon), chạy được file PHP đầu tiên.
-   Hiểu cú pháp cơ bản: echo, biến, kiểu dữ liệu, hằng, comment.

## 🧠 Nội dung chính

-   PHP chạy ở đâu? Web server, interpreter, document root.
-   Cấu trúc thư mục dự án: public/, src/, uploads/.
-   Chạy file đầu tiên: `index.php`, thẻ `<?php ... ?>`, lệnh `echo`, `print_r`.
-   Biến và kiểu: string, int, float, bool, null, array; ép kiểu nhẹ (type juggling).
-   Hằng: `define`, `const`.
-   Comment: `//`, `/* */`.

## 💻 Thực hành

-   Cài XAMPP/MAMP, đặt project trong htdocs (hoặc www root).
-   Tạo `public/index.php` in ra "Hello PHP", in biến và kiểu bằng `var_dump`.
-   Viết script in bảng cửu chương 5 bằng vòng lặp for (preview cho buổi 2).

### Hướng dẫn thực hiện

-   Cài stack: tải XAMPP/MAMP, bật Apache, kiểm tra http://localhost mở được trang mặc định.
-   Tạo thư mục `public/` trong htdocs, thêm `index.php` và đặt thẻ `<?php ... ?>`.
-   Dùng `echo` in chuỗi, sau đó tạo biến `$age`, `$name` và `var_dump($age)` để xem kiểu.
-   Viết vòng lặp `for ($i = 1; $i <= 10; $i++)` in ra bảng cửu chương 5, dùng nối chuỗi để định dạng.

#### Mẫu code gợi ý

```php
<?php
echo "Hello PHP" . PHP_EOL;

$name = "Dat";
$age = 20;

echo "Name: $name" . PHP_EOL;
var_dump($age);

for ($i = 1; $i <= 10; $i++) {
	echo "5 x $i = " . (5 * $i) . PHP_EOL;
}
```

## 📚 Tài liệu ngắn

-   https://www.php.net/manual/en/index.php (trang chủ manual)
-   https://www.apachefriends.org (XAMPP)
