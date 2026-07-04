# Thiết lập môi trường phát triển WordPress: 

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách thiết lập môi trường phát triển WordPress cục bộ trên máy tính cá nhân. Đây là bước đầu tiên để các em bắt đầu hành trình trở thành nhà phát triển WordPress. Nào, cùng bắt đầu nhé!


## Môi trường phát triển là gì?

### Môi trường dành cho nhà phát triển
Môi trường phát triển là một bản sao riêng biệt của trang web, nơi các em có thể thử nghiệm và thực hành mà không ảnh hưởng đến trang web thực tế. Đây là "hộp cát" an toàn để các em làm việc mà không lo lắng về việc công chúng nhìn thấy các thay đổi chưa hoàn thiện.

### Làm việc cục bộ nghĩa là gì?
Làm việc cục bộ nghĩa là các em sẽ cài đặt WordPress trực tiếp trên máy tính cá nhân của mình, thay vì làm việc trên một máy chủ từ xa. Điều này cho phép các em:
- Thử nghiệm mà không cần kết nối internet.
- Lưu các thay đổi ngay lập tức mà không cần tải lên máy chủ.
- Chỉ đẩy các tệp lên máy chủ khi trang web đã hoàn thiện.


## Cài đặt WordPress cục bộ

### Yêu cầu môi trường
WordPress cần ba thành phần để hoạt động:
1. **PHP**: Ngôn ngữ lập trình cốt lõi của WordPress.
2. **Apache hoặc Nginx**: Máy chủ web.
3. **MySQL hoặc MariaDB**: Cơ sở dữ liệu.

Hầu hết các máy tính không có sẵn các thành phần này, nhưng may mắn là có nhiều công cụ miễn phí giúp cài đặt chúng tự động.

### Công cụ đề xuất: Local by Flywheel
Thầy khuyên các em sử dụng **Local by Flywheel** vì nó dễ sử dụng và miễn phí.

#### Các bước cài đặt:
1. **Tải xuống Local by Flywheel**:
   - Mở trình duyệt và tìm kiếm "Local by Flywheel".
   - Truy cập trang chính thức tại [localwp.com](https://localwp.com).
   - Nhấn nút **Download Free** và tải xuống phần mềm.

2. **Cài đặt phần mềm**:
   - Mở tệp tải xuống và tiến hành cài đặt.
   - Quá trình này có thể mất vài phút, hãy kiên nhẫn.

3. **Tạo trang web mới**:
   - Mở Local by Flywheel và nhấn **Create a New Site**.
   - Đặt tên cho trang web, ví dụ: "Trường Đại học Hư Cấu".
   - Sử dụng các tùy chọn mặc định và nhập tên người dùng, mật khẩu, cùng email của bạn.
   - Nhấn **Add Site** để hoàn tất.

4. **Khởi động trang web**:
   - Nhấn **Start Site** ở góc trên cùng bên phải.
   - Nhấn **View Site** để xem trang web WordPress cục bộ của bạn.


## Quản lý tệp WordPress

### Vị trí tệp trên máy tính
- **Mac**: Tệp nằm trong thư mục `Local Sites` trong thư mục chính của tài khoản người dùng.
- **Windows**: Tệp nằm trong thư mục `Local Sites` trong thư mục người dùng chính.

### Thư mục quan trọng
- **wp-content**: Chứa các tệp hệ thống của WordPress.
  - **themes**: Chứa các chủ đề đã cài đặt.
  - Trong khóa học này, chúng ta sẽ tạo một thư mục mới tại đây để phát triển chủ đề tùy chỉnh.


## Tóm tắt nhanh

- **Môi trường phát triển**: Là nơi thử nghiệm an toàn, không ảnh hưởng đến trang web thực tế.
- **Làm việc cục bộ**: Cài đặt WordPress trên máy tính cá nhân để làm việc mà không cần internet.
- **Công cụ đề xuất**: Sử dụng Local by Flywheel để cài đặt dễ dàng.
- **Quản lý tệp**: Tìm hiểu vị trí và cấu trúc tệp WordPress trên máy tính.


Hy vọng bài viết này giúp các em thiết lập môi trường phát triển WordPress một cách dễ dàng. Trong bài học tiếp theo, chúng ta sẽ bắt đầu tìm hiểu về PHP, ngôn ngữ cốt lõi của WordPress. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu viết mã ngay