# Checklist bảo mật WordPress: 

Chào các em, hôm nay thầy sẽ chia sẻ với các em một checklist đầy đủ để bảo mật website WordPress của mình. Đây là danh sách các bước quan trọng mà thầy thường áp dụng cho các website của thầy. Các em hãy đi qua toàn bộ danh sách này và chọn những biện pháp phù hợp với nhu cầu của mình nhé!


## Kiểm tra ban đầu và sao lưu

### Không nằm trong plugin
- [ ] **Tắt PHP error reporting** để tránh lộ thông tin nhạy cảm.

### Menu Scanner
- [ ] Vào tab **File Change Detection**, nhấn **Scan Now** để chụp snapshot các file hiện tại của website.
- [ ] Kích hoạt **Enable Automated File Change Detection Scan** và đặt thời gian quét là **4 tuần**.

### Menu Settings
- [ ] Sao lưu **Database**.
- [ ] Sao lưu file **.htaccess**.
- [ ] Sao lưu file **wp-config.php**.
- [ ] Vào tab **WP Version Info** và chọn **Remove WP Generator Meta** để ẩn thông tin phiên bản WordPress.


## Thiết lập bảo mật

### Menu User Security
- [ ] Vào tab **User Accounts**:
  - Đảm bảo không có tài khoản nào sử dụng tên đăng nhập **admin**.
  - Đảm bảo không có tài khoản nào sử dụng tên đăng nhập giống với tên hiển thị.
  - Tắt **User Enumeration**.
- [ ] Vào tab **Login Lockout**, kích hoạt **Login Lockdown** và đặt thông số phù hợp.
- [ ] Vào tab **Force Logout**, kích hoạt **Login Lockout** nếu cần.
- [ ] Nếu cho phép người dùng đăng ký, vào tab **Manual Approval** và kích hoạt **Manual Approvals**.
- [ ] Vào tab **Additional Settings**, tắt **Application Passwords**.

### Menu Database Security
- [ ] Vào tab **Database Prefix**, đảm bảo không sử dụng tiền tố mặc định `wp_`.

### Menu File Security
- [ ] Vào tab **File Permissions**, thực hiện các **Recommended Actions** nếu có.
- [ ] Vào tab **File Protection**:
  - Xóa các file mặc định của WordPress và đặt chế độ **Auto-Delete After Updates**.
  - Kích hoạt **Hotlink Prevention**.
  - Tắt **PHP File Editing**.
- [ ] Vào tab **Copy Protection**, quyết định có muốn tắt **Right-Click** trên giao diện người dùng hay không.
- [ ] Vào tab **Frames**, kích hoạt **iFrame Protection**.

### Menu Firewall
- [ ] Vào tab **PHP Rules**:
  - Trong **Security Enhancements**, tắt **Pingback Functionality**.
  - Trong **Comment Protection**, cấm **Proxy Comment Posting**.
- [ ] Vào tab **WP REST API**, cấm **Unauthorized REST Requests** và whitelist tất cả các routes cần thiết.
- [ ] Vào tab **6G Firewall Rules**, kích hoạt **6G Firewall Protection**.
- [ ] Sau khi plugin chạy ổn định:
  - Vào tab **Internet Bots**, kích hoạt **Block Fake Googlebots**.
  - Kích hoạt **Ban POST Requests with Blank User-Agent and Referrer**.

### Menu Brute Force
- [ ] Vào tab **Cookie-Based Brute Force Prevention**:
  - Thực hiện **Cookie Test**.
  - Nhập **Secret Word** và kích hoạt **Brute Force Attack Prevention**.
  - Nếu không thành công, sử dụng tab **Rename Login Page** thay thế.
- [ ] Vào tab **CAPTCHA Settings**, thiết lập captcha cho trang đăng nhập và/hoặc đăng ký.
- [ ] Vào tab **404 Detection**, cân nhắc kích hoạt **404 IP Detection**.
- [ ] Vào tab **Honeypot**, kích hoạt **Honeypot on Login Page**. Nếu cho phép đăng ký, kích hoạt **Honeypot on Registration Page**.


## Ngăn chặn SPAM

### Tab Comment Spam
- [ ] Kích hoạt **Detect Spambots Posting Comments**.
- [ ] Kích hoạt **Cookies to Detect Spam**.
- [ ] Xóa bình luận spam sau **14 ngày**.
- [ ] Quyết định xem bình luận spam sẽ bị **Discarded** hay **Marked as Spam**.

### Tab Comment SPAM IP Monitoring
- [ ] Kích hoạt **Auto Block of SPAM Comment IPs**.
- [ ] Đặt số lượng tối thiểu cho **Minimum Number of SPAM Comments** (ví dụ: 3).


## Menu Tools

### Tab Password Tool
- [ ] Kiểm tra độ mạnh của mật khẩu và thay đổi nếu mật khẩu quá yếu.


## Tóm tắt nhanh

- **Sao lưu**: Luôn sao lưu database, `.htaccess`, và `wp-config.php`.
- **Thiết lập bảo mật**: Thay đổi tên admin, tắt các tính năng không cần thiết, và kích hoạt các biện pháp bảo vệ.
- **Ngăn chặn SPAM**: Phát hiện và xử lý bình luận spam hiệu quả.
- **Kiểm tra mật khẩu**: Đảm bảo mật khẩu đủ mạnh để bảo vệ tài khoản.


Hy vọng checklist này giúp các em dễ dàng thực hiện các bước bảo mật WordPress. Nếu có thắc mắc, các em cứ hỏi thầy nhé! Chúc các em thành