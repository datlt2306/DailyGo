# Cài đặt và cấu hình Git

> **Bài trước:** [01. Giới thiệu về Git và Version Control](./01-intro-to-git.md)  
> **Bài tiếp theo:** [03. Các lệnh cơ bản](./03-git-basic-commands.md)

## 🎯 Mục tiêu học tập

-   Cài đặt Git thành công trên Windows, macOS hoặc Linux
-   Cấu hình Git với tên và email của bạn
-   Kiểm tra phiên bản Git đã cài đặt
-   Thiết lập một số cấu hình cơ bản để làm việc hiệu quả hơn

## 📘 Kiến thức lý thuyết

### Tại sao cần cấu hình Git?

Git cần biết bạn là ai để ghi lại thông tin trong mỗi commit. Thông tin này bao gồm:

-   **Tên người dùng**: Ai đã tạo commit này?
-   **Email**: Liên hệ khi cần review code hoặc có vấn đề

**Ví dụ thực tế:**
Khi làm việc nhóm trên GitHub, bạn sẽ thấy:

```
Commit: "Thêm tính năng đăng nhập"
Author: Nguyễn Văn A <nguyenvana@example.com>
Date: 2024-01-15 10:30:45
```

Nếu không cấu hình, Git sẽ dùng tên máy tính (như "DESKTOP-ABC123") - không ai biết bạn là ai!

### Global vs Local Configuration

Git có 2 cấp độ cấu hình:

#### 1. **Global Configuration** (Toàn cục)

-   Áp dụng cho TẤT CẢ repository trên máy bạn
-   Dùng cho thông tin cá nhân (tên, email)
-   Lệnh: `git config --global`

**Khi nào dùng:** Cấu hình một lần, dùng mãi mãi

#### 2. **Local Configuration** (Cục bộ)

-   Chỉ áp dụng cho repository hiện tại
-   Dùng cho cấu hình đặc biệt của dự án
-   Lệnh: `git config` (không có `--global`)

**Khi nào dùng:** Dự án có yêu cầu đặc biệt (ví dụ: email công ty khác email cá nhân)

**Ví dụ thực tế:**

-   **Global**: Tên và email cá nhân → Dùng cho tất cả project
-   **Local**: Email công ty → Chỉ dùng cho project công ty

## 💻 Ví dụ thực hành

### Cài đặt Git

#### Trên Windows:

1.  Tải Git từ: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2.  Chạy file installer
3.  Giữ nguyên các tùy chọn mặc định (Next → Next → Install)
4.  Sau khi cài xong, mở **Git Bash** hoặc **Command Prompt**

#### Trên macOS:

**Cách 1: Dùng Homebrew (Khuyến nghị)**

```bash
# Cài Homebrew nếu chưa có
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Cài Git
brew install git
```

**Cách 2: Tải từ website**

-   Truy cập: [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
-   Tải và cài đặt

#### Trên Linux (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install git
```

### Kiểm tra cài đặt thành công

```bash
# Kiểm tra phiên bản Git
git --version

# Kết quả mẫu:
# git version 2.42.0
```

**Giải thích:**

-   Nếu hiển thị số phiên bản → Git đã cài thành công ✅
-   Nếu báo lỗi "command not found" → Cần cài lại Git hoặc thêm vào PATH

### Cấu hình Git cơ bản

#### Bước 1: Cấu hình tên và email

```bash
# Cấu hình tên (thay "Nguyễn Văn A" bằng tên của bạn)
git config --global user.name "Nguyễn Văn A"

# Cấu hình email (thay email bằng email của bạn)
git config --global user.email "nguyenvana@example.com"

# Xác nhận cấu hình
git config --global --list

# Kết quả mẫu:
# user.name=Nguyễn Văn A
# user.email=nguyenvana@example.com
```

**Lưu ý quan trọng:**

-   Email nên dùng email GitHub của bạn (nếu có tài khoản GitHub)
-   Email này sẽ hiển thị công khai trên GitHub (nếu repository public)
-   Có thể dùng email công ty hoặc email cá nhân

#### Bước 2: Cấu hình editor mặc định

```bash
# Trên macOS/Linux - Dùng VS Code
git config --global core.editor "code --wait"

# Trên Windows - Dùng VS Code
git config --global core.editor "code --wait"

# Hoặc dùng Notepad (Windows)
git config --global core.editor "notepad"

# Hoặc dùng nano (macOS/Linux - đơn giản hơn)
git config --global core.editor "nano"
```

**Giải thích:**

-   Editor này sẽ mở khi Git cần bạn nhập commit message
-   `code --wait`: VS Code sẽ đợi bạn đóng file mới tiếp tục
-   Nên dùng VS Code vì có syntax highlighting và dễ dùng

#### Bước 3: Cấu hình branch mặc định

```bash
# Đặt tên branch mặc định là "main" thay vì "master"
git config --global init.defaultBranch main
```

**Lý do:** GitHub đã đổi từ "master" sang "main" để tránh các vấn đề về thuật ngữ.

#### Bước 4: Cấu hình line ending (Quan trọng khi làm việc nhóm!)

```bash
# Trên Windows
git config --global core.autocrlf true

# Trên macOS/Linux
git config --global core.autocrlf input
```

**Giải thích:**

-   Windows dùng `CRLF` (Carriage Return + Line Feed)
-   macOS/Linux dùng `LF` (Line Feed)
-   Cấu hình này tự động chuyển đổi để tránh conflict khi làm việc nhóm

### Xem và sửa cấu hình

```bash
# Xem tất cả cấu hình global
git config --global --list

# Xem một cấu hình cụ thể
git config --global user.name
git config --global user.email

# Sửa cấu hình (chạy lại lệnh config với giá trị mới)
git config --global user.name "Tên mới"

# Xóa cấu hình
git config --global --unset user.name
```

### Cấu hình nâng cao (Tùy chọn)

```bash
# Màu sắc cho terminal output (dễ nhìn hơn)
git config --global color.ui auto

# Bật alias cho các lệnh thường dùng
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit

# Sau khi alias, bạn có thể dùng:
git st    # Thay vì git status
git co    # Thay vì git checkout
```

**Giải thích:**

-   Alias giúp gõ nhanh hơn, tiết kiệm thời gian
-   Nhưng nhớ rõ alias là gì, không thì dùng lệnh gốc vẫn ổn

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Cài đặt và cấu hình Git**

1.  Cài đặt Git trên máy tính của bạn (theo hướng dẫn ở trên)
2.  Kiểm tra phiên bản: `git --version`
3.  Cấu hình tên và email của bạn
4.  Xác nhận cấu hình bằng `git config --global --list`
5.  Chụp màn hình kết quả và lưu lại

**Kết quả mong đợi:**

```
user.name=Tên của bạn
user.email=email@example.com
core.editor=code --wait
init.defaultBranch=main
```

### Level 2: Nâng cao

**Bài tập 2: Thiết lập Git cho dự án web**

1.  Tạo một repository Git mới: `git init test-config`
2.  Cấu hình email local khác với email global (ví dụ: email công ty)
3.  Kiểm tra sự khác biệt:

    ```bash
    # Xem cấu hình global
    git config --global user.email

    # Xem cấu hình local (trong repo)
    cd test-config
    git config user.email

    # Nếu chưa set local, sẽ không có output
    # Set local khác:
    git config user.email "company@example.com"
    ```

4.  Tạo một commit test và quan sát author
5.  Giải thích tại sao cần có cả global và local config

**Gợi ý:**

-   Global config: Dùng cho tất cả project cá nhân
-   Local config: Dùng cho project công ty (email công ty)

## 💡 Mẹo & Lỗi thường gặp

### 1. **Lỗi: "git: command not found"**

**Nguyên nhân:**

-   Git chưa được cài đặt
-   Git chưa được thêm vào PATH

**Giải pháp:**

```bash
# Kiểm tra Git đã cài chưa
which git    # macOS/Linux
where git    # Windows

# Nếu không tìm thấy, cài lại Git
# Trên Windows: Tải từ git-scm.com
# Trên macOS: brew install git
# Trên Linux: sudo apt install git
```

### 2. **Email không hiển thị đúng trên GitHub**

**Nguyên nhân:** Email trong Git config không khớp với email GitHub

**Giải pháp:**

1.  Vào GitHub → Settings → Emails
2.  Xem email nào đã được verify
3.  Cấu hình Git dùng đúng email đó:
    ```bash
    git config --global user.email "email-da-verify-tren-github@example.com"
    ```

**Lưu ý:** GitHub chỉ hiển thị avatar và link profile nếu email khớp!

### 3. **Quên đã cấu hình gì**

**Mẹo:** Tạo file note cá nhân lưu lại cấu hình

```bash
# Xem tất cả config và lưu vào file
git config --global --list > my-git-config.txt
```

Hoặc nhớ 3 lệnh quan trọng nhất:

```bash
git config --global user.name "Tên"
git config --global user.email "email"
git config --global init.defaultBranch main
```

### 4. **Cấu hình nhầm email/username**

**Giải pháp:**

```bash
# Xem config hiện tại
git config --global user.name
git config --global user.email

# Sửa lại
git config --global user.name "Tên đúng"
git config --global user.email "Email đúng"
```

### 5. **Không biết nên dùng email nào**

**Nguyên tắc:**

-   **Email cá nhân**: Dùng cho project cá nhân, học tập
-   **Email công ty**: Dùng cho project công ty (dùng local config)
-   **Email GitHub**: Nên dùng email đã verify trên GitHub để hiển thị đúng profile

**Áp dụng vào làm việc nhóm:**

-   Hỏi team lead xem có quy định email không
-   Thường thì dùng email công ty để dễ liên hệ
-   Đảm bảo email trong Git config khớp với GitHub để hiển thị đúng người commit

---

**Kết luận:** Cấu hình Git đúng cách ngay từ đầu sẽ giúp bạn làm việc hiệu quả và chuyên nghiệp hơn. Đặc biệt quan trọng khi làm việc nhóm - mọi người cần biết ai đã commit code gì!

**Bài tiếp theo:** [03. Các lệnh cơ bản](./03-git-basic-commands.md) - Học cách sử dụng `git init`, `git add`, `git commit`, và `git log`
