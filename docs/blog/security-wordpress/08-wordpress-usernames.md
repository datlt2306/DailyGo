# Tên đăng nhập WordPress: Đừng để hacker có cơ hội!

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách chọn tên đăng nhập (username) an toàn cho website WordPress của mình. Đây là một yếu tố quan trọng không kém mật khẩu trong việc bảo vệ website khỏi hacker.

## Tại sao tên đăng nhập lại quan trọng?

Khi đăng nhập vào WordPress, các em cần cung cấp hai thông tin:
1. **Tên đăng nhập hoặc email.**
2. **Mật khẩu.**

Nếu hacker biết được tên đăng nhập của các em, họ đã có một nửa thông tin cần thiết để truy cập vào website. Vì vậy, việc chọn tên đăng nhập an toàn là rất quan trọng.

## Đừng dùng tên đăng nhập mặc định "admin"

Tên đăng nhập mặc định của WordPress là **admin**, và rất nhiều người dùng vẫn giữ nguyên tên này. Đây là một sai lầm lớn vì hacker thường thử tên "admin" đầu tiên khi tấn công. Các em hãy chọn một tên đăng nhập khác, không liên quan đến "admin".

### Cách chọn tên đăng nhập an toàn
- Sử dụng chữ hoa, chữ thường, số và ký tự đặc biệt.
- Độ dài khoảng 8 ký tự là đủ.
- Tránh dùng thông tin cá nhân như tên, ngày sinh, hoặc email.

Ví dụ: `UserXyz123`

## Cách thay đổi tên đăng nhập nếu đã dùng "admin"

Nếu các em đã sử dụng tên đăng nhập "admin", đừng lo. Các em có thể thay đổi bằng một trong các cách sau:

### 1. Tạo người dùng mới và xóa "admin"
1. Vào **Users > Add New** trong WordPress.
2. Tạo một tài khoản mới với tên đăng nhập an toàn.
3. Gán quyền **Administrator** cho tài khoản mới.
4. Đăng nhập bằng tài khoản mới và xóa tài khoản "admin".

### 2. Sử dụng plugin
- Tìm kiếm plugin hỗ trợ đổi tên đăng nhập, ví dụ: **Username Changer**.
- Cài đặt và sử dụng plugin để đổi tên đăng nhập.

### 3. Chỉnh sửa trực tiếp cơ sở dữ liệu (không khuyến khích)
- Truy cập vào cơ sở dữ liệu MySQL của website.
- Tìm bảng `wp_users` và chỉnh sửa tên đăng nhập.
- **Lưu ý:** Cách này chỉ dành cho người có kinh nghiệm vì có thể gây lỗi hệ thống.

## Mẹo nhỏ

- Sử dụng trình quản lý mật khẩu như **Roboform** hoặc **1Password** để lưu trữ tên đăng nhập và mật khẩu. Các em không cần phải nhớ tất cả, chỉ cần nhớ một mật khẩu chính của trình quản lý.

## Tóm tắt nhanh

- Không dùng tên đăng nhập mặc định "admin".
- Chọn tên đăng nhập an toàn với chữ hoa, chữ thường, số và ký tự đặc biệt.
- Nếu đã dùng "admin", hãy tạo người dùng mới hoặc sử dụng plugin để thay đổi.
- Sử dụng trình quản lý mật khẩu để lưu trữ thông tin đăng nhập.

Hãy bảo vệ website của các em ngay từ bước đầu tiên bằng cách chọn tên đăng nhập thật an toàn nhé!
