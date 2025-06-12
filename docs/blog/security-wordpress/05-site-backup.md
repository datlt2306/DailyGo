# Sao lưu website WordPress: Bí quyết bảo vệ website của các em

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách sao lưu website WordPress – một bước cực kỳ quan trọng để bảo vệ website của mình trước các nguy cơ như hacker hoặc lỗi hệ thống. Hãy cùng thầy tìm hiểu nhé!

## Tại sao cần sao lưu website?

Với các website HTML truyền thống, việc sao lưu khá đơn giản: chỉ cần copy các file HTML từ server về máy tính. Nhưng với WordPress, mọi thứ phức tạp hơn một chút vì WordPress gồm hai phần chính:
- **Cơ sở dữ liệu (database):** Lưu trữ nội dung website và các thông tin khác.
- **Các file WordPress:** Bao gồm file plugin, theme, và các cài đặt.

Do đó, để sao lưu đầy đủ, các em cần sao lưu cả cơ sở dữ liệu và các file.

## Các loại sao lưu

- **Sao lưu một phần:** Chỉ sao lưu cơ sở dữ liệu.
- **Sao lưu toàn bộ:** Bao gồm cơ sở dữ liệu, plugin, theme, cài đặt, và các file khác.

## Hướng dẫn sử dụng plugin UpdraftPlus để sao lưu

### 1. Cài đặt plugin
- Vào **Plugins > Add New**.
- Tìm kiếm plugin **UpdraftPlus**.
- Cài đặt và kích hoạt plugin.

### 2. Truy cập dashboard của UpdraftPlus
Sau khi kích hoạt, các em sẽ thấy một mục mới trong menu tên là **UpdraftPlus**. Nhấp vào đó để vào dashboard.

### 3. Sao lưu ngay lập tức
- Trong tab **Backup/Restore**, nhấp vào nút **Backup Now**.
- Chọn các tùy chọn sao lưu cơ sở dữ liệu và file.
- Nếu chưa thiết lập lưu trữ từ xa, backup sẽ chỉ lưu trên server.

### 4. Thiết lập lưu trữ từ xa
- Vào tab **Settings**.
- Chọn nơi lưu trữ từ xa như Dropbox, Google Drive, hoặc các tùy chọn khác.
- Xác thực tài khoản lưu trữ từ xa.
- Lưu thay đổi.

### 5. Lên lịch sao lưu
- Trong tab **Settings**, thiết lập lịch sao lưu:
  - **File backup schedule:** Sao lưu file (có thể chọn hàng tháng, hàng tuần, hoặc hàng ngày).
  - **Database backup schedule:** Sao lưu cơ sở dữ liệu (nên sao lưu thường xuyên hơn vì cơ sở dữ liệu thay đổi liên tục).
- Thầy khuyên các em nên giữ tối thiểu 3 bản sao lưu để đảm bảo an toàn.

### 6. Khôi phục website từ bản sao lưu
- Nếu website bị hack hoặc gặp sự cố, các em có thể khôi phục từ bản sao lưu:
  - Cài đặt lại WordPress trên server mới.
  - Cài đặt plugin UpdraftPlus.
  - Tải lên các file sao lưu từ lưu trữ từ xa và khôi phục.

### 7. Tải xuống bản sao lưu về máy tính
- Trong danh sách backup, nhấp vào các mục như **Themes**, **Database**, hoặc **Plugins** để tải xuống bản sao lưu về máy tính.

## Mẹo nhỏ
- **Sao lưu thường xuyên:** Nếu các em làm việc trên website hàng ngày, hãy thiết lập sao lưu hàng ngày.
- **Kiểm tra bản sao lưu:** Đảm bảo rằng các bản sao lưu không bị lỗi và có thể khôi phục được.
- **Lưu trữ an toàn:** Sử dụng lưu trữ từ xa để tránh mất dữ liệu nếu server bị hack.

## Tóm tắt nhanh

- WordPress cần sao lưu cả cơ sở dữ liệu và file.
- Plugin **UpdraftPlus** giúp tự động sao lưu và lưu trữ từ xa.
- Thiết lập lịch sao lưu phù hợp với tần suất thay đổi website.
- Giữ tối thiểu 3 bản sao lưu để đảm bảo an toàn.
- Khôi phục website dễ dàng từ bản sao lưu nếu gặp sự cố.

Hãy nhớ rằng sao lưu là cách tốt nhất để bảo vệ website của các em trước mọi rủi ro. Chúc các em thành công!
