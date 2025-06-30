# Bảo mật khi thêm người dùng mới vào WordPress: 

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách bảo mật khi thêm người dùng mới vào website WordPress. Đây là một phần rất quan trọng để bảo vệ website của các em khỏi những rủi ro không đáng có. Nào, cùng bắt đầu nhé!


## Tắt tính năng "Anyone Can Register"

### Vì sao cần tắt?
Nếu các em là quản trị viên duy nhất của website, hãy đảm bảo rằng tùy chọn "Anyone Can Register" (Bất kỳ ai cũng có thể đăng ký) trong phần cài đặt chung của WordPress được tắt. Tính năng này nếu bật có thể dẫn đến việc spam thành viên, gây phiền phức và tiềm ẩn nguy cơ bảo mật.

### Cách thực hiện
1. Vào **Dashboard** của WordPress.
2. Chọn **Settings** > **General**.
3. Tìm checkbox **Anyone Can Register**.
4. Đảm bảo rằng checkbox này **đang tắt** (mặc định là tắt).

> **Mẹo nhỏ:** Nếu các em muốn tạo một website thành viên hoặc cho phép người dùng đăng ký, hãy sử dụng plugin chuyên dụng như **Wishlist Member** để đảm bảo tính bảo mật và linh hoạt.


## Hiểu về các vai trò người dùng trong WordPress

WordPress cung cấp các vai trò người dùng khác nhau, mỗi vai trò có quyền hạn riêng. Việc hiểu rõ các vai trò này sẽ giúp các em phân quyền chính xác và tránh rủi ro bảo mật.

### Các vai trò người dùng
1. **Super Administrator**: Chỉ xuất hiện trong mạng lưới WordPress (WordPress Multisite). Người dùng này có quyền quản lý tất cả các website trong mạng.
2. **Administrator**: Là quản trị viên toàn quyền của website. Các em sẽ thường là người giữ vai trò này.
3. **Editor**: Có quyền quản lý và xuất bản tất cả bài viết, kể cả bài viết của người khác.
4. **Author**: Chỉ có quyền quản lý và xuất bản bài viết của chính mình.
5. **Contributor**: Có thể viết bài nhưng không thể xuất bản. Đây là vai trò phù hợp nhất cho người viết bài khách (guest post).
6. **Subscriber**: Quyền hạn thấp nhất, chỉ có thể quản lý hồ sơ cá nhân.

> **Lưu ý:** Hãy luôn phân quyền tối thiểu cần thiết cho người dùng. Đừng cấp quyền cao hơn chỉ vì "có thể cần trong tương lai". Nếu cần, các em có thể thay đổi vai trò sau.


## Thêm người dùng mới vào WordPress

### Các bước thực hiện
1. Vào **Dashboard** > **Users** > **Add New**.
2. Nhập thông tin người dùng:
   - **Username**: Chọn tên đăng nhập an toàn (tránh tên dễ đoán như "admin").
   - **Email Address**: Địa chỉ email của người dùng.
   - **First Name** và **Last Name**: Tên đầy đủ của người dùng.
   - **Password**: Tạo mật khẩu mạnh (WordPress có thể tự tạo mật khẩu ngẫu nhiên dài 24 ký tự).
3. Chọn vai trò phù hợp:
   - Nếu người dùng chỉ viết bài, chọn **Contributor**.
   - Nếu người dùng có quyền xuất bản bài viết, chọn **Author** (chỉ khi các em tin tưởng họ).
4. Gửi thông báo tài khoản cho người dùng (tùy chọn).

> **Cảnh báo:** Không cho phép người dùng thay đổi mật khẩu thành mật khẩu yếu. Nếu họ không thích mật khẩu dài, hãy khuyên họ sử dụng trình quản lý mật khẩu như **RoboForm** hoặc **1Password**.


## Tóm tắt nhanh

- **Tắt "Anyone Can Register"** để tránh spam thành viên.
- **Phân quyền người dùng hợp lý**: Chỉ cấp quyền tối thiểu cần thiết.
- **Thêm người dùng mới**: Sử dụng mật khẩu mạnh và vai trò phù hợp.
- **Bảo mật mật khẩu**: Không cho phép người dùng sử dụng mật khẩu yếu.


Hy vọng bài hướng dẫn này giúp các em hiểu rõ hơn về cách quản lý người dùng trong WordPress một cách an toàn. Nếu có thắc mắc, các em cứ hỏi thầy nhé! Chúc các em thành