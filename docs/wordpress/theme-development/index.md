# Lập trình Giao diện WordPress (Theme Development) từ cơ bản đến nâng cao

Khóa học hướng dẫn chi tiết từng bước xây dựng một Giao diện WordPress tùy biến (Custom Theme) chuyên nghiệp và tích hợp cửa hàng bán hàng trực tuyến **WooCommerce**.

---

## 📚 Lộ trình 30 bài học thực chiến

### 📅 Phần 1: Môi trường & Nền tảng PHP trong WordPress (Bài 1 - 5)
| Bài | Loại | Chủ đề chính | Bài thực hành |
|---|---|---|---|
| [Bài 1](./lesson-1.md) | LT | Thiết lập môi trường phát triển | Khởi tạo trang web local bằng LocalWP |
| [Bài 2](./lesson-2.md) | TH | Nền tảng PHP trong WordPress | Nhúng mã PHP cơ bản vào giao diện HTML |
| [Bài 3](./lesson-3.md) | LT | Vòng lặp Loop mặc định (The Loop) | Duyệt danh sách bài viết mặc định bằng PHP |
| [Bài 4](./lesson-4.md) | TH | Khởi tạo Theme từ con số 0 | Tạo file style.css và index.php để kích hoạt theme |
| [Bài 5](./lesson-5.md) | LT | Phân tách Modular Layout | Chia nhỏ tệp giao diện thành header.php và footer.php |

### 📅 Phần 2: Nạp CSS/JS & Dựng các trang tĩnh (Bài 6 - 10)
| Bài | Loại | Chủ đề chính | Bài thực hành |
|---|---|---|---|
| [Bài 6](./lesson-6.md) | TH | Nạp tệp CSS/JS chuẩn (Enqueue) | Viết hàm wp_enqueue_scripts trong functions.php |
| [Bài 7](./lesson-7.md) | LT | Hàm lấy đường dẫn an toàn | Tối ưu hóa đường dẫn ảnh tĩnh bằng functions/API |
| [Bài 8](./lesson-8.md) | TH | Template Hierarchy: Trang page.php | Thiết kế cấu trúc hiển thị trang tĩnh mặc định |
| [Bài 9](./lesson-9.md) | LT | Hiển thị Trang cha - Trang con | Lập trình cây thư mục liên kết cha-con tự động |
| [Bài 10](./lesson-10.md) | TH | Thiết kế Navigation Menus động | Đăng ký và hiển thị thanh menu kéo thả từ admin |

### 📅 Phần 3: Lập trình trang Tin tức & CPT (Bài 11 - 15)
| Bài | Loại | Chủ đề chính | Bài thực hành |
|---|---|---|---|
| [Bài 11](./lesson-11.md) | LT | Thiết lập trang lưu trữ archive.php | Xây dựng giao diện trang danh mục kèm phân trang |
| [Bài 12](./lesson-12.md) | TH | Thiết lập trang chi tiết single.php | Hiển thị bài viết chi tiết cùng thông tin metadata |
| [Bài 13](./lesson-13.md) | LT | Đăng ký Custom Post Types (CPT) | Định nghĩa loại bài đăng "Sự kiện" (Events) bằng code |
| [Bài 14](./lesson-14.md) | TH | Tạo thư mục mu-plugins bảo vệ CPT | Lưu trữ code khai báo CPT độc lập giao diện |
| [Bài 15](./lesson-15.md) | LT | Đăng ký CPT bổ sung | Đăng ký CPT "Giảng viên" (Professors) |

### 📅 Phần 4: WP_Query, ACF & Meta Queries (Bài 16 - 20)
| Bài | Loại | Chủ đề chính | Bài thực hành |
|---|---|---|---|
| [Bài 16](./lesson-16.md) | TH | Tạo truy vấn tùy biến WP_Query | Hiển thị danh sách sự kiện lên trang chủ |
| [Bài 17](./lesson-17.md) | LT | Lọc & Sắp xếp nâng cao (Meta Query) | Lọc sự kiện theo ngày diễn ra so với hôm nay |
| [Bài 18](./lesson-18.md) | TH | Tích hợp Advanced Custom Fields | Tạo trường ngày tháng, địa điểm bằng ACF |
| [Bài 19](./lesson-19.md) | LT | Thiết lập trường mối quan hệ | Kết nối giảng viên với chương trình đào tạo tương ứng |
| [Bài 20](./lesson-20.md) | TH | Custom Image Sizes trong Theme | Viết hàm tự động crop ảnh giảng viên tỉ lệ vuông |

### 📅 Phần 5: Tích hợp và Tùy biến WooCommerce (Bài 21 - 27)
| Bài | Loại | Chủ đề chính | Bài thực hành |
|---|---|---|---|
| [Bài 21](./lesson-21.md) | LT | Thiết lập WooCommerce & Theme Support | Khai báo add_theme_support cho WooCommerce |
| [Bài 22](./lesson-22.md) | TH | Cơ chế WooCommerce Template Overrides | Sao chép template WooCommerce vào thư mục theme |
| [Bài 23](./lesson-23.md) | LT | Tùy biến trang cửa hàng (Shop Page) | Thiết kế archive-product.php hiển thị lưới sản phẩm |
| [Bài 24](./lesson-24.md) | TH | Tùy biến trang chi tiết sản phẩm | Điều chỉnh single-product.php, ẩn/hiện giá và nút mua |
| [Bài 25](./lesson-25.md) | LT | Tích hợp ACF vào sản phẩm WooCommerce | Bổ sung các trường chính sách bảo hành, xuất xứ |
| [Bài 26](./lesson-26.md) | TH | WP_Query sản phẩm ngoài trang chủ | Lấy sản phẩm nổi bật, sản phẩm giảm giá hiển thị |
| [Bài 27](./lesson-27.md) | LT | Tùy biến Giỏ hàng & Thanh toán | Viết CSS đè lại layout trang Cart và Checkout |

### 📅 Phần 6: Bảo mật, Hiệu năng & Deploy (Bài 28 - 30)
| Bài | Loại | Chủ đề chính | Bài thực hành |
|---|---|---|---|
| [Bài 28](./lesson-28.md) | TH | Bảo mật WordPress Theme chuyên sâu | Sử dụng Sanitization, Escaping và Nonce bảo vệ form |
| [Bài 29](./lesson-29.md) | LT | Tối ưu hóa hiệu năng & Caching | Khắc phục N+1 query bằng Transient Cache |
| [Bài 30](./lesson-30.md) | TH | Đóng gói & Cấu hình Production | Khóa editor và deploy mã nguồn lên máy chủ live |
