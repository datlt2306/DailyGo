# Các lệnh cơ bản: init, add, commit, status, log

> **Bài trước:** [02. Cài đặt và cấu hình Git](./02-install-config.md)  
> **Bài tiếp theo:** [04. Hiểu về Working Directory và Staging Area](./04-working-directory.md)

## 🎯 Mục tiêu học tập

-   Nắm vững workflow cơ bản: init → add → commit
-   Hiểu cách sử dụng `git status` để kiểm tra trạng thái
-   Sử dụng `git log` để xem lịch sử commit
-   Thực hành tạo commit message có ý nghĩa

## 📘 Kiến thức lý thuyết

### Workflow cơ bản của Git

Khi làm việc với Git, bạn thường làm theo 3 bước:

```
1. Sửa code (tạo/sửa/xóa file)
   ↓
2. git add (thêm vào staging area)
   ↓
3. git commit (lưu snapshot)
```

**Ví dụ thực tế:**
Giống như chụp ảnh:

1.  **Sửa code** = Bạn sắp xếp cảnh vật
2.  **git add** = Bạn chọn những gì muốn chụp vào khung hình
3.  **git commit** = Bấm nút chụp ảnh (lưu lại snapshot)

### Các lệnh cơ bản

#### `git init` - Khởi tạo repository

**Chức năng:** Biến một thư mục thường thành Git repository

**Khi nào dùng:** Khi bắt đầu dự án mới hoặc muốn bắt đầu dùng Git cho dự án cũ

```bash
git init
# Tạo folder .git (ẩn) chứa toàn bộ lịch sử Git
```

#### `git status` - Kiểm tra trạng thái

**Chức năng:** Xem file nào đã thay đổi, file nào đã được stage

**Khi nào dùng:** Trước khi commit, để biết bạn đã add đủ file chưa

**Kết quả có thể có:**

-   **Untracked files**: File mới, Git chưa theo dõi
-   **Changes not staged**: File đã sửa nhưng chưa add
-   **Changes to be committed**: File đã add, sẵn sàng commit
-   **Clean working tree**: Không có thay đổi nào

#### `git add` - Thêm file vào staging area

**Chức năng:** Đánh dấu file sẽ được commit

**Các cách dùng:**

```bash
git add file.html          # Thêm 1 file cụ thể
git add *.html            # Thêm tất cả file .html
git add .                 # Thêm TẤT CẢ file thay đổi
git add src/              # Thêm cả thư mục src/
```

**Lưu ý:** `git add .` rất tiện nhưng cần cẩn thận - có thể add cả file không mong muốn!

#### `git commit` - Lưu snapshot

**Chức năng:** Lưu trạng thái hiện tại của code vào lịch sử

**Cú pháp:**

```bash
git commit -m "Mô tả ngắn gọn những gì bạn đã làm"
```

**Ví dụ commit message tốt:**

-   ✅ "Thêm nút đăng nhập vào trang chủ"
-   ✅ "Sửa lỗi responsive trên mobile"
-   ✅ "Cập nhật README với hướng dẫn cài đặt"

**Ví dụ commit message không tốt:**

-   ❌ "update" (quá mơ hồ)
-   ❌ "fix" (fix cái gì?)
-   ❌ "asdf" (không có nghĩa)

#### `git log` - Xem lịch sử commit

**Chức năng:** Xem tất cả các commit đã tạo

**Các tùy chọn hữu ích:**

```bash
git log                    # Xem toàn bộ log
git log --oneline          # Hiển thị gọn trên 1 dòng
git log -5                 # Chỉ xem 5 commit gần nhất
git log --graph            # Hiển thị dạng cây (tree)
git log --graph --oneline  # Kết hợp cả hai
```

### Commit Message Best Practice

**Quy tắc vàng:** Commit message nên:

1.  **Ngắn gọn**: Dưới 50 ký tự cho dòng đầu
2.  **Rõ ràng**: Mô tả chính xác bạn làm gì
3.  **Dùng câu mệnh lệnh**: "Thêm tính năng" thay vì "Đã thêm tính năng"

**Ví dụ tốt:**

```
Thêm form đăng nhập với validation
Sửa lỗi hiển thị menu trên mobile
Cập nhật API endpoint cho sản phẩm
```

## 💻 Ví dụ thực hành

### Tạo dự án web và thực hiện commit đầu tiên

```bash
# Bước 1: Tạo thư mục và khởi tạo Git
mkdir my-blog
cd my-blog
git init

# Bước 2: Tạo file HTML
echo "<!DOCTYPE html>
<html>
<head>
    <title>Blog của tôi</title>
</head>
<body>
    <h1>Xin chào!</h1>
</body>
</html>" > index.html

# Bước 3: Kiểm tra trạng thái
git status

# Kết quả:
# On branch main
# Untracked files:
#   index.html
```

**Giải thích:**

-   `git status` cho thấy có file `index.html` chưa được track

```bash
# Bước 4: Thêm file vào staging area
git add index.html

# Hoặc thêm tất cả file:
# git add .

# Bước 5: Kiểm tra lại trạng thái
git status

# Kết quả:
# On branch main
# Changes to be committed:
#   new file:   index.html
```

**Giải thích:**

-   File đã chuyển sang "Changes to be committed" = Sẵn sàng commit

```bash
# Bước 6: Tạo commit đầu tiên
git commit -m "Thêm trang chủ HTML cơ bản"

# Kết quả:
# [main (root-commit) abc1234] Thêm trang chủ HTML cơ bản
# 1 file changed, 7 insertions(+)
```

**Giải thích:**

-   `(root-commit)`: Đây là commit đầu tiên (gốc)
-   `abc1234`: Hash của commit (mã định danh)
-   `1 file changed, 7 insertions(+)`: Thống kê thay đổi

```bash
# Bước 7: Xem lịch sử commit
git log --oneline

# Kết quả:
# abc1234 (HEAD -> main) Thêm trang chủ HTML cơ bản
```

### Thực hiện commit thứ hai

```bash
# Bước 1: Sửa file (thêm CSS)
echo "<style>
    body { font-family: Arial; }
    h1 { color: blue; }
</style>" >> index.html

# Bước 2: Kiểm tra thay đổi
git status

# Kết quả:
# Changes not staged for commit:
#   modified:   index.html
```

**Giải thích:**

-   "Changes not staged" = Đã sửa nhưng chưa add

```bash
# Bước 3: Xem thay đổi cụ thể (sẽ học ở bài sau)
git diff

# Bước 4: Add và commit
git add index.html
git commit -m "Thêm CSS styling cho trang chủ"

# Bước 5: Xem log
git log --oneline

# Kết quả:
# def5678 (HEAD -> main) Thêm CSS styling cho trang chủ
# abc1234 Thêm trang chủ HTML cơ bản
```

**Giải thích:**

-   `HEAD -> main`: HEAD đang trỏ đến commit mới nhất trên branch main
-   Có 2 commit, commit mới nhất ở trên

### Xem thông tin chi tiết commit

```bash
# Xem thông tin chi tiết commit gần nhất
git show

# Hoặc xem commit cụ thể
git show abc1234

# Xem log với thông tin đầy đủ
git log

# Kết quả mẫu:
# commit def5678
# Author: Nguyễn Văn A <nguyenvana@example.com>
# Date:   Mon Jan 15 10:30:45 2024 +0700
#
#     Thêm CSS styling cho trang chủ
#
# commit abc1234
# Author: Nguyễn Văn A <nguyenvana@example.com>
# Date:   Mon Jan 15 09:15:20 2024 +0700
#
#     Thêm trang chủ HTML cơ bản
```

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Tạo website portfolio với Git**

1.  Tạo thư mục `portfolio` và khởi tạo Git
2.  Tạo file `index.html` với nội dung cơ bản
3.  Tạo commit đầu tiên với message: "Khởi tạo dự án portfolio"
4.  Thêm file `style.css` với một số CSS
5.  Tạo commit thứ hai: "Thêm file CSS cơ bản"
6.  Xem lịch sử bằng `git log --oneline`

**Kết quả mong đợi:** Có ít nhất 2 commit trong log

**Gợi ý:**

```bash
mkdir portfolio && cd portfolio
git init
# Tạo file index.html
git add index.html
git commit -m "Khởi tạo dự án portfolio"
# Tạo file style.css
git add style.css
git commit -m "Thêm file CSS cơ bản"
git log --oneline
```

### Level 2: Nâng cao

**Bài tập 2: Thực hành workflow đầy đủ**

Tạo một dự án website đơn giản với các bước:

1.  **Commit 1:** Tạo file `index.html` với cấu trúc HTML cơ bản
2.  **Commit 2:** Thêm file `style.css` và link vào HTML
3.  **Commit 3:** Thêm file `script.js` với JavaScript đơn giản
4.  **Commit 4:** Cập nhật HTML thêm một section mới
5.  **Commit 5:** Sửa CSS để responsive trên mobile

**Yêu cầu:**

-   Mỗi commit phải có message rõ ràng, mô tả đúng việc làm
-   Sau mỗi commit, chạy `git log --oneline` để xem lịch sử
-   Cuối cùng, có ít nhất 5 commit trong log

**Mẹo:** Làm từng bước một, không làm tất cả rồi mới commit!

## 💡 Mẹo & Lỗi thường gặp

### 1. **Lỗi: "nothing to commit, working tree clean"**

**Nguyên nhân:** Bạn chưa add file hoặc chưa có thay đổi nào

**Giải pháp:**

```bash
# Kiểm tra trạng thái
git status

# Nếu có file "Untracked" hoặc "Changes not staged", add chúng trước
git add .
git commit -m "Commit message"
```

### 2. **Quên message khi commit**

**Giải thích:**

```bash
# Lệnh này sẽ mở editor để bạn nhập message
git commit

# Hoặc dùng -m ngay:
git commit -m "Message của bạn"
```

**Mẹo:** Luôn dùng `-m` để tránh mở editor không mong muốn

### 3. **Commit nhầm file không mong muốn**

**Ví dụ:** Commit cả file `.env` chứa password

**Giải pháp:**

-   Sửa ngay bằng cách unstage file (sẽ học ở bài sau)
-   Hoặc dùng `.gitignore` để bỏ qua file (sẽ học ở bài sau)

**Phòng tránh:** Luôn check `git status` trước khi commit!

### 4. **Commit message quá dài**

**Nguyên tắc:**

-   Dòng đầu: Dưới 50 ký tự, tóm tắt ngắn gọn
-   Dòng trống
-   Body (nếu cần): Giải thích chi tiết hơn, mỗi dòng dưới 72 ký tự

**Ví dụ tốt:**

```
Thêm tính năng tìm kiếm sản phẩm

- Tạo component SearchBox
- Tích hợp với API backend
- Thêm loading state và error handling
```

### 5. **Không biết đã commit gì trong quá khứ**

**Mẹo:** Dùng `git log` với các tùy chọn:

```bash
# Xem log gọn gàng
git log --oneline --graph --all

# Xem log với tác giả và ngày
git log --pretty=format:"%h - %an, %ar : %s"

# Xem log của file cụ thể
git log -- index.html
```

### 6. **Commit quá nhiều lần cho một tính năng**

**Vấn đề:**

```bash
commit 1: "update"
commit 2: "fix"
commit 3: "update again"
commit 4: "finally done"
```

**Giải pháp:** Nên gom lại thành 1 commit có nghĩa:

```bash
commit 1: "Thêm tính năng đăng nhập với validation"
```

**Cách gom commit:** Sẽ học ở bài về `git rebase` (bài 6)

**Áp dụng vào làm việc nhóm:**

-   Commit thường xuyên (mỗi 30 phút - 1 giờ) để không mất code
-   Nhưng trước khi push, xem lại và gom các commit liên quan lại
-   Mỗi commit nên là một "đơn vị công việc" hoàn chỉnh, có thể test được

---

**Kết luận:** Nắm vững các lệnh cơ bản này là nền tảng để học các tính năng Git nâng cao hơn. Hãy thực hành nhiều để quen tay!

**Bài tiếp theo:** [04. Hiểu về Working Directory và Staging Area](./04-working-directory.md) - Hiểu sâu hơn về cách Git quản lý file
