# Buổi 3 (LT) — Mảng, chuỗi, hàm xử lý

## 🎯 Mục tiêu

-   Quản lý dữ liệu với mảng và chuỗi, dùng hàm xử lý built-in.

## 🧠 Nội dung chính

-   Mảng indexed vs associative, mảng lồng nhau.
-   Thao tác: push/pop, unset, array_merge, array_keys/values.
-   Lọc và biến đổi: array_filter, array_map, array_reduce (giới thiệu).
-   Chuỗi: nối chuỗi, substr, strlen, trim, strtolower/upper, explode/implode.
-   Ép kiểu mảng/chuỗi; kiểm tra rỗng `empty`, `isset`.

## 💻 Thực hành

-   Biến mảng điểm số, tính trung bình, tìm max/min, lọc điểm >=5.
-   Nhận chuỗi danh sách tag "php, mysql, web", tách thành mảng và render dưới dạng danh sách `<li>`.
-   Viết hàm `slugify($text)` đơn giản: lowercase, trim, thay khoảng trắng thành gạch ngang, bỏ ký tự đặc biệt cơ bản.

### Hướng dẫn thực hiện

-   Điểm số: tạo mảng `$scores = [7, 5, 9, 4]`; dùng `array_sum / count` lấy trung bình; `max/min` cho giá trị biên; `array_filter` giữ điểm >=5.
-   Tag list: nhận chuỗi, `explode(', ', $input)`, trim từng phần tử, sau đó loop tạo chuỗi `<li>` và bao bằng `<ul>`.
-   slugify: `trim`, `strtolower`, thay khoảng trắng bằng `-` với `preg_replace('/\s+/', '-', $text)`, bỏ ký tự đặc biệt bằng regex `/[^a-z0-9-]/`; rút gọn dấu `--` về `-` và trim dấu `-` dư.

#### Mẫu code gợi ý

```php
<?php
$scores = [7, 5, 9, 4];
$avg = array_sum($scores) / count($scores);
$passed = array_filter($scores, fn($s) => $s >= 5);

echo "TB: $avg, Đỗ: " . implode(', ', $passed) . PHP_EOL;

$tagsInput = "php, mysql, web";
$tags = array_map('trim', explode(',', $tagsInput));

echo "<ul>";
foreach ($tags as $tag) {
	echo "<li>" . htmlspecialchars($tag) . "</li>";
}
echo "</ul>";

const slugify = function ($text) {
	$text = strtolower(trim($text));
	$text = preg_replace('/\s+/', '-', $text);
	$text = preg_replace('/[^a-z0-9-]/', '', $text);
	$text = preg_replace('/-+/', '-', $text);
	return trim($text, '-');
};

echo slugify('Hello PHP Basics!');
```

## 📚 Tài liệu ngắn

-   https://www.php.net/manual/en/ref.array.php
-   https://www.php.net/manual/en/ref.strings.php
