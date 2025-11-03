# Giới thiệu về Git và Version Control

> **Bài trước:** Không có (Đây là bài đầu tiên)  
> **Bài tiếp theo:** [02. Cài đặt và cấu hình Git](./02-install-config.md)

## 🎯 Mục tiêu học tập

-   Hiểu Version Control là gì và tại sao cần sử dụng khi làm dự án web
-   Nắm được khái niệm Git và phân biệt Git với GitHub
-   Hiểu được các lợi ích của Git trong làm việc nhóm
-   Chuẩn bị tâm thế để học các khái niệm Git cơ bản

## 📘 Kiến thức lý thuyết

### Version Control là gì?

**Version Control (Kiểm soát phiên bản)** là một hệ thống giúp bạn lưu trữ và quản lý các thay đổi trong mã nguồn theo thời gian. Nó giống như một "máy thời gian" cho code của bạn!

**Ví dụ thực tế:**
Hãy tưởng tượng bạn đang làm một website bán hàng:

-   **Hôm qua**: Bạn tạo trang chủ với menu đơn giản
-   **Hôm nay**: Bạn thêm form đăng nhập, nhưng code bị lỗi
-   **Vấn đề**: Làm sao quay lại code của hôm qua?

**Không có Git:** Bạn phải tự lưu file backup: `index.html`, `index.html.backup1`, `index.html.backup2`... Rất rối và dễ nhầm!

**Có Git:** Bạn chỉ cần một lệnh `git checkout hôm-qua` là quay lại được. Giống như undo nhưng mạnh hơn rất nhiều!

### Git là gì?

**Git** là một công cụ Version Control mã nguồn mở, được tạo bởi Linus Torvalds (người tạo Linux) vào năm 2005. Git được thiết kế để:

-   **Lưu trữ lịch sử thay đổi**: Mỗi lần bạn sửa code và "commit", Git lưu lại snapshot (ảnh chụp) toàn bộ dự án
-   **Làm việc nhóm dễ dàng**: Nhiều người có thể làm việc trên cùng một dự án mà không bị conflict
-   **Branch (nhánh)**: Tạo các phiên bản song song để thử nghiệm tính năng mới
-   **Không cần internet**: Git hoạt động offline, chỉ cần internet khi đồng bộ với GitHub

### Git vs GitHub - Khác nhau thế nào?

| Git                                | GitHub                             |
| ---------------------------------- | ---------------------------------- |
| Công cụ chạy trên máy tính của bạn | Website lưu trữ code trên internet |
| Quản lý phiên bản code local       | Chia sẻ code và làm việc nhóm      |
| Hoạt động offline                  | Cần internet để upload/download    |
| Miễn phí, mã nguồn mở              | Miễn phí cho dự án public          |
| Lệnh: `git init`, `git commit`     | Web interface + Git commands       |

**Ví dụ minh họa:**

-   **Git**: Giống như phần mềm Word trên máy bạn - bạn viết và lưu file trên máy
-   **GitHub**: Giống như Google Docs - bạn lưu file trên cloud, có thể chia sẻ và làm việc nhóm

### Tại sao học Git khi làm web development?

#### 1. **An toàn code của bạn**

Khi làm project web, bạn có thể:

-   Vô tình xóa file quan trọng
-   Code bị lỗi và không nhớ code cũ như thế nào
-   Muốn thử nghiệm tính năng mới nhưng sợ hỏng code cũ

**Với Git:** Bạn luôn có thể quay lại bất kỳ phiên bản nào trước đó!

#### 2. **Làm việc nhóm hiệu quả**

Trong thực tế, một dự án web thường có:

-   **Frontend Developer**: Làm giao diện (HTML, CSS, React)
-   **Backend Developer**: Làm API (Node.js, Express)
-   **Fullstack Developer**: Làm cả hai

**Vấn đề:** Làm sao 3 người cùng sửa code mà không bị conflict?

**Giải pháp:** Git branch! Mỗi người làm trên branch riêng, sau đó merge lại.

#### 3. **Tăng tốc độ phát triển**

-   **Rollback nhanh**: Nếu deploy lên server bị lỗi, quay lại version trước chỉ 1 lệnh
-   **So sánh code**: Xem code hôm nay khác gì so với hôm qua
-   **Tìm bug**: Xem lại lịch sử commit để tìm khi nào bug xuất hiện

### Các khái niệm cơ bản trong Git

#### Repository (Repo)

-   **Là gì**: Thư mục chứa toàn bộ code và lịch sử thay đổi
-   **Ví dụ**: Folder `my-website/` của bạn, sau khi chạy `git init` sẽ trở thành một Git repository

#### Commit

-   **Là gì**: Một snapshot (ảnh chụp) của code tại một thời điểm
-   **Ví dụ**: Mỗi lần bạn sửa xong một tính năng và chạy `git commit`, Git lưu lại trạng thái hiện tại
-   **Tương tự**: Giống như "Save Game" trong game - bạn có thể quay lại bất kỳ save nào

#### Branch (Nhánh)

-   **Là gì**: Một phiên bản độc lập của code
-   **Ví dụ**:
    -   `main` branch: Code ổn định, đã test
    -   `feature-login` branch: Đang thử nghiệm tính năng đăng nhập
-   **Lợi ích**: Bạn có thể thử nghiệm mà không làm hỏng code chính

#### Merge

-   **Là gì**: Gộp code từ branch này sang branch khác
-   **Ví dụ**: Sau khi code tính năng đăng nhập xong, merge từ `feature-login` vào `main`

## 💻 Ví dụ thực hành

### Tạo dự án web đơn giản và khởi tạo Git

```bash
# Bước 1: Tạo thư mục dự án
mkdir my-first-website
cd my-first-website

# Bước 2: Tạo file HTML đơn giản
echo "<h1>Xin chào thế giới!</h1>" > index.html

# Bước 3: Khởi tạo Git repository
git init

# Kết quả: Initialized empty Git repository in /path/to/my-first-website/.git/
```

**Giải thích:**

-   `mkdir`: Tạo thư mục mới
-   `echo ... > file`: Tạo file với nội dung
-   `git init`: Khởi tạo Git repository (tạo folder `.git` ẩn)

### Kiểm tra trạng thái Git

```bash
# Xem trạng thái repository
git status

# Kết quả mẫu:
# On branch main
#
# No commits yet
#
# Untracked files:
#   index.html
#
# nothing added to commit but untracked files present (use "git add" to track)
```

**Giải thích:**

-   `git status`: Hiển thị trạng thái hiện tại của repository
-   "Untracked files": File chưa được Git theo dõi
-   Chúng ta sẽ học cách add và commit ở bài sau

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Tạo dự án web và khởi tạo Git**

1.  Tạo thư mục tên `my-portfolio` cho website portfolio của bạn
2.  Tạo file `index.html` với nội dung:
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Portfolio của tôi</title>
        </head>
        <body>
            <h1>Chào mừng đến với portfolio của tôi!</h1>
        </body>
    </html>
    ```
3.  Khởi tạo Git repository trong thư mục đó
4.  Chạy `git status` và quan sát kết quả

**Gợi ý:**

```bash
mkdir my-portfolio
cd my-portfolio
# Tạo file index.html (dùng editor hoặc echo command)
git init
git status
```

### Level 2: Nâng cao

**Bài tập 2: Tìm hiểu Git log và history**

Sau khi khởi tạo repository ở bài tập 1:

1.  Tìm hiểu lệnh `git log` (sẽ học ở bài 3, nhưng có thể thử trước)
2.  Đọc thông tin về Git trên website chính thức: [https://git-scm.com/](https://git-scm.com/)
3.  Xem video giải thích Git trong 15 phút (tìm trên YouTube: "Git tutorial 15 minutes")

**Mục tiêu:** Hiểu được tầm quan trọng của Git trước khi học các lệnh cụ thể

## 💡 Mẹo & Lỗi thường gặp

### 1. **Lỗi: "fatal: not a git repository"**

**Nguyên nhân:** Bạn đang ở thư mục không phải Git repository

**Giải pháp:**

```bash
# Kiểm tra xem có folder .git không
ls -la  # Trên macOS/Linux
dir /a  # Trên Windows

# Nếu không có, chạy git init
git init
```

### 2. **Không hiểu Git làm gì với code của mình**

**Mẹo:** Tưởng tượng Git như một "máy chụp ảnh"

-   Mỗi lần `commit` = Chụp ảnh toàn bộ dự án
-   Bạn có thể xem lại tất cả các bức ảnh đã chụp
-   Có thể "photoshop" (merge) nhiều ảnh lại với nhau

### 3. **Sợ Git làm hỏng code**

**Yên tâm:** Git KHÔNG BAO GIỜ xóa code của bạn trừ khi bạn cố tình!

-   Git chỉ lưu thêm thông tin, không thay đổi file của bạn
-   Code cũ vẫn còn nguyên trong lịch sử
-   Có thể quay lại bất kỳ lúc nào

### 4. **Nhầm lẫn Git và GitHub**

**Cách nhớ:**

-   **Git** = Công cụ trên máy bạn (như Word)
-   **GitHub** = Nơi lưu trữ online (như Google Drive)
-   Bạn có thể dùng Git mà không cần GitHub
-   Nhưng GitHub giúp làm việc nhóm dễ hơn

### 5. **Không biết khi nào nên commit**

**Nguyên tắc vàng:** Commit khi bạn hoàn thành một "công việc nhỏ"

-   ✅ Commit: "Thêm nút đăng nhập"
-   ✅ Commit: "Sửa lỗi responsive trên mobile"
-   ❌ Không commit: "Sửa code" (quá mơ hồ)
-   ❌ Không commit: "Cập nhật" (không rõ cập nhật gì)

**Áp dụng vào làm việc nhóm:**

-   Commit thường xuyên (mỗi 30 phút - 1 giờ làm việc)
-   Mỗi commit chỉ làm một việc nhỏ
-   Viết commit message rõ ràng để đồng nghiệp hiểu bạn làm gì

---

**Kết luận:** Git là công cụ không thể thiếu khi làm web development. Hãy xem Git như một "bảo hiểm" cho code của bạn - tốn ít thời gian học nhưng tiết kiệm rất nhiều thời gian khi gặp sự cố!

**Bài tiếp theo:** [02. Cài đặt và cấu hình Git](./02-install-config.md) - Học cách cài đặt Git và cấu hình thông tin cá nhân
