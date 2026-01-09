# Buổi 2 (TH) — Toán tử, điều kiện, vòng lặp, hàm

## 🎯 Mục tiêu

-   Viết các đoạn logic cơ bản với toán tử, if/else, vòng lặp, hàm tự định nghĩa.

## 🧠 Nội dung chính

-   Toán tử số học, so sánh, logic; == vs ===.
-   if/elseif/else, switch/case.
-   Vòng lặp for, while, foreach; break/continue.
-   Hàm: tham số, return, giá trị mặc định, scope biến.

## 💻 Thực hành

-   Bài tập tính chỉ số BMI, phân loại gầy/bình thường/thừa cân bằng if/elseif.
-   Bài tập định dạng chuỗi: nhập tên, in câu chào và đếm độ dài chuỗi.
-   Viết hàm `sumRange($start, $end)` và hàm `isPrime($n)` đơn giản.

### Hướng dẫn thực hiện
-   BMI: nhận $weight, $height (m), tính $bmi = $weight / ($height * $height); dùng if/elseif để in phân loại.
-   Định dạng chuỗi: đọc tên từ `readline()` (CLI) hoặc form nhỏ, dùng `strlen` và nối chuỗi để in lời chào.
-   sumRange: dùng for/while cộng dồn từ $start đến $end, trả về tổng; kiểm tra trường hợp $start > $end thì hoán đổi.
-   isPrime: trả false nếu $n < 2; lặp từ 2 đến sqrt($n), nếu chia hết trả false, ngược lại true; in ra danh sách số nguyên tố nhỏ hơn 50.

#### Mẫu code gợi ý
```php
<?php
// BMI
$weight = 60;
$height = 1.7;
$bmi = $weight / ($height * $height);

if ($bmi < 18.5) {
	$status = "Gầy";
} elseif ($bmi < 23) {
	$status = "Bình thường";
} else {
	$status = "Thừa cân";
}
echo "BMI: $bmi - $status" . PHP_EOL;

// sumRange
const sumRange = function ($start, $end) {
	if ($start > $end) {
		[$start, $end] = [$end, $start];
	}
	$total = 0;
	for ($i = $start; $i <= $end; $i++) {
		$total += $i;
	}
	return $total;
};

// isPrime
const isPrime = function ($n) {
	if ($n < 2) return false;
	for ($i = 2; $i * $i <= $n; $i++) {
		if ($n % $i === 0) return false;
	}
	return true;
};

for ($i = 2; $i < 50; $i++) {
	if (isPrime($i)) echo $i . " ";
}
```

## 📚 Tài liệu ngắn

-   https://www.php.net/manual/en/language.operators.php
-   https://www.php.net/manual/en/control-structures.if.php
