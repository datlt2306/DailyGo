# Giới thiệu GitHub và tạo repository

> **Bài trước:** [06. Merge và Rebase](./06-merge-vs-rebase.md)  
> **Bài tiếp theo:** [08. Làm việc nhóm với GitHub](./08-collaboration.md)

## 🎯 Mục tiêu học tập

-   Hiểu GitHub là gì và khác biệt với Git
-   Tạo tài khoản GitHub và repository đầu tiên
-   Kết nối repository local với GitHub (remote)
-   Thực hành push và pull code

## 📘 Kiến thức lý thuyết

### GitHub là gì?

**GitHub** là một nền tảng lưu trữ code trên internet, sử dụng Git làm công cụ quản lý phiên bản. GitHub giống như "Google Drive cho code" - các em lưu code lên cloud và có thể truy cập từ bất kỳ đâu.

**So sánh Git vs GitHub:**

| Git                              | GitHub                                    |
| -------------------------------- | ----------------------------------------- |
| Công cụ trên máy tính của các em    | Website lưu trữ code trên internet         |
| Quản lý phiên bản local          | Chia sẻ code và làm việc nhóm              |
| Hoạt động offline                | Cần internet để upload/download            |
| Miễn phí, mã nguồn mở            | Miễn phí cho dự án public, trả phí private |
| Lệnh: `git init`, `git commit`   | Web interface + Git commands + PR         |

**Ví dụ minh họa:**
-   **Git**: Giống như Microsoft Word trên máy các em - các em viết và lưu file local
-   **GitHub**: Giống như Google Docs - các em lưu file trên cloud, có thể chia sẻ và làm việc nhóm

### Tại sao cần GitHub?

#### 1. **Backup code trên cloud**

**Ví dụ thực tế:**
-   Máy tính bị hỏng, mất hết code local
-   Có GitHub: Code vẫn còn trên cloud, chỉ cần clone lại
-   Không có GitHub: Mất hết code (nếu không backup thủ công)

#### 2. **Chia sẻ code với người khác**

**Ví dụ:** Bạn làm dự án website, muốn các em cùng lớp xem code:
-   Gửi file qua email? → Khó quản lý version
-   Upload lên Google Drive? → Không có version control
-   Push lên GitHub? → Dễ chia sẻ, có lịch sử, có thể collaborate

#### 3. **Làm việc nhóm hiệu quả**

**Ví dụ:** Team 3 người làm website:
-   Mỗi người clone repository về máy
-   Mỗi người làm trên branch riêng
-   Push lên GitHub, tạo Pull Request
-   Review code và merge vào main

#### 4. **Portfolio và học tập**

**Ví dụ:** Khi xin việc, nhà tuyển dụng muốn xem code của các em:
-   Có GitHub profile đầy đủ → Chứng tỏ các em biết version control
-   Có nhiều repository → Thể hiện kinh nghiệm
-   Có contribution history → Cho thấy các em code thường xuyên

### Repository trên GitHub

**Repository (Repo)** trên GitHub tương tự repository local, nhưng:
-   Lưu trữ trên server của GitHub (cloud)
-   Có thể truy cập qua URL
-   Có web interface để xem code, lịch sử, issues
-   Có thể set public (ai cũng xem được) hoặc private (chỉ các em xem)

**Ví dụ URL repository:**
```
https://github.com/username/my-website
```

### Remote Repository

**Remote** là "địa chỉ" của repository trên GitHub. Git cho phép các em kết nối repository local với remote repository trên GitHub.

**Các remote phổ biến:**
-   `origin`: Remote mặc định, thường là repository chính trên GitHub
-   `upstream`: Remote của repository gốc (khi fork)
-   `fork`: Remote của fork repository

**Ví dụ:**
```bash
git remote add origin https://github.com/username/my-website.git
# origin = Tên remote
# URL = Địa chỉ repository trên GitHub
```

## 💻 Ví dụ thực hành

### Tạo tài khoản GitHub

1.   Truy cập [https://github.com](https://github.com)
2.   Click "Sign up"
3.   Điền thông tin: Username, Email, Password
4.   Verify email
5.   Hoàn tất setup profile

**Các em các em lưu ý:** Username sẽ là một phần của URL repository, chọn cẩn thận!

### Tạo repository trên GitHub

1.   Đăng nhập GitHub
2.   Click nút "+" ở góc phải trên → "New repository"
3.   Điền thông tin:
    -   **Repository name**: `my-first-repo` (không có khoảng trắng, dùng dấu gạch ngang)
    -   **Description**: "My first GitHub repository" (tùy chọn)
    -   **Public/Private**: Chọn Public (miễn phí) hoặc Private (trả phí)
    -   **Initialize with README**: Có thể check nếu muốn có file README sẵn
    -   **Add .gitignore**: Chọn None hoặc template (Node, Python, v.v.)
    -   **Choose a license**: Chọn None hoặc MIT License (phổ biến)
4.   Click "Create repository"

**Kết quả:** GitHub sẽ hiển thị hướng dẫn kết nối repository local

### Kết nối repository local với GitHub

**Tình huống 1: Repository local đã có sẵn**

```bash
# Bước 1: Tạo repository local (nếu chưa có)
mkdir my-first-repo
cd my-first-repo
git init
echo "# My First Repo" > README.md
git add README.md
git commit -m "Initial commit"

# Bước 2: Thêm remote (copy URL từ GitHub)
git remote add origin https://github.com/username/my-first-repo.git

# Bước 3: Đổi tên branch thành main (nếu cần)
git branch -M main

# Bước 4: Push code lên GitHub
git push -u origin main
```

**Giải thích:**
-   `git remote add origin`: Thêm remote tên "origin" trỏ đến GitHub
-   `git push -u origin main`: Push branch main lên GitHub, `-u` để set upstream
-   Lần đầu sẽ hỏi username và password (hoặc dùng Personal Access Token)

**Tình huống 2: Clone repository từ GitHub**

```bash
# Clone repository về máy
git clone https://github.com/username/my-first-repo.git
cd my-first-repo

# Repository đã có remote origin sẵn
git remote -v
# origin  https://github.com/username/my-first-repo.git (fetch)
# origin  https://github.com/username/my-first-repo.git (push)
```

### Push code lên GitHub

```bash
# Sau khi commit local
git add .
git commit -m "Thêm tính năng mới"

# Push lên GitHub
git push

# Hoặc push branch cụ thể
git push origin main
```

**Kết quả:** Code sẽ xuất hiện trên GitHub, có thể xem qua web interface

### Pull code từ GitHub

```bash
# Lấy code mới nhất từ GitHub
git pull

# Hoặc pull từ remote cụ thể
git pull origin main
```

**Khi nào dùng:** Khi làm việc trên nhiều máy, hoặc khi làm việc nhóm

### Xem thông tin remote

```bash
# Xem danh sách remote
git remote

# Xem chi tiết remote (URL)
git remote -v

# Xem thông tin remote chi tiết
git remote show origin

# Đổi URL remote (nếu repository đổi tên)
git remote set-url origin https://github.com/username/new-name.git

# Xóa remote
git remote remove origin
```

### Xác thực với GitHub

**Phương thức cũ (deprecated):** Username + Password - GitHub không còn hỗ trợ từ 2021

**Phương thức mới:** Personal Access Token (PAT)

**Cách tạo PAT:**

1.   GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2.   Click "Generate new token (classic)"
3.   Đặt tên token, chọn scope:
    -   ✅ `repo`: Full control of private repositories
    -   ✅ `workflow`: Update GitHub Action workflows (nếu cần)
4.   Click "Generate token"
5.   Copy token (chỉ hiển thị 1 lần, lưu lại!)

**Cách dùng PAT:**

```bash
# Khi push/pull, Git sẽ hỏi:
Username: your-username
Password: paste-token-here  # KHÔNG phải password GitHub!
```

**Hoặc dùng Git Credential Manager:**
-   Trên Windows: Tự động lưu trong Windows Credential Manager
-   Trên macOS: Keychain
-   Trên Linux: Có thể dùng `git credential-store`

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Tạo repository GitHub và push code**

1.   Tạo tài khoản GitHub (nếu chưa có)
2.   Tạo repository mới tên `my-portfolio`
3.   Tạo repository local với file `index.html` đơn giản
4.   Kết nối local với GitHub (add remote)
5.   Push code lên GitHub
6.   Mở GitHub trên browser, xác nhận code đã có trên web

**Yêu cầu:**
-   Repository có ít nhất 1 commit
-   Có file README.md với mô tả ngắn về dự án
-   Có thể xem code trên GitHub web interface

**Gợi ý:**
```bash
mkdir my-portfolio && cd my-portfolio
git init
echo "# My Portfolio" > README.md
echo "<h1>Portfolio</h1>" > index.html
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/my-portfolio.git
git branch -M main
git push -u origin main
```

### Level 2: Nâng cao

**Bài tập 2: Làm việc với nhiều remote**

1.   Fork một repository public (ví dụ: [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife))
2.   Clone fork của các em về máy
3.   Thêm remote `upstream` trỏ đến repository gốc
4.   Xem cấu trúc remote:
    ```bash
    git remote -v
    # origin    https://github.com/your-username/Spoon-Knife.git (fork)
    # upstream  https://github.com/octocat/Spoon-Knife.git (gốc)
    ```
5.   Pull code mới từ upstream:
    ```bash
    git pull upstream main
    ```
6.   Push code lên fork của các em:
    ```bash
    git push origin main
    ```

**Mục tiêu:** Hiểu cách làm việc với fork và upstream (sẽ cần khi contribute open source)

## 💡 Mẹo & Lỗi thường gặp

### 1. **Lỗi: "remote origin already exists"**

**Nguyên nhân:** Đã có remote origin rồi

**Giải pháp:**
```bash
# Xem remote hiện tại
git remote -v

# Xóa remote cũ
git remote remove origin

# Thêm lại
git remote add origin https://github.com/username/repo.git
```

### 2. **Lỗi: "Authentication failed" khi push**

**Nguyên nhân:**
-   Dùng password thay vì Personal Access Token
-   Token đã hết hạn

**Giải pháp:**
1.   Tạo PAT mới (theo hướng dẫn ở trên)
2.   Dùng PAT khi Git hỏi password
3.   Hoặc cấu hình Git Credential Manager

**Trên Windows:**
```bash
git config --global credential.helper wincred
```

**Trên macOS:**
```bash
git config --global credential.helper osxkeychain
```

### 3. **Không nhớ URL remote**

**Mẹo:**
```bash
# Xem URL remote
git remote -v

# Hoặc xem trên GitHub: Repository → Code → Copy URL
```

### 4. **Push nhầm code nhạy cảm (password, API key)**

**Giải pháp:**
-   Xóa file khỏi Git history (khó, sẽ học ở bài nâng cao)
-   Tốt nhất: Dùng `.gitignore` ngay từ đầu!

**Cách tránh:**
```bash
# Tạo .gitignore
echo ".env" >> .gitignore
echo "*.key" >> .gitignore
git add .gitignore
git commit -m "Thêm .gitignore"

# File .env sẽ không bị track
```

### 5. **Không biết nên dùng HTTPS hay SSH**

**HTTPS:**
-   ✅ Dễ setup, không cần key
-   ✅ Phù hợp người mới
-   ❌ Phải nhập PAT mỗi lần (hoặc dùng credential manager)

**SSH:**
-   ✅ Không cần nhập password
-   ✅ Bảo mật hơn
-   ❌ Phải setup SSH key trước

**Khuyến nghị:** Người mới dùng HTTPS, người có kinh nghiệm có thể dùng SSH

### 6. **Repository quá lớn, push chậm**

**Mẹo:**
-   Không commit file lớn (video, ảnh chất lượng cao)
-   Dùng Git LFS cho file lớn (nếu cần)
-   Hoặc dùng service khác cho file lớn (Cloudinary cho ảnh, v.v.)

**Áp dụng vào làm việc nhóm:**
-   Luôn push code thường xuyên (không để quá lâu mới push)
-   Trước khi push, kiểm tra lại code và commit message
-   Không push code chưa test hoặc code tạm thời (test code)
-   Thống nhất quy ước đặt tên repository với team (ví dụ: `project-feature-name`)

---

**Kết luận:** GitHub là công cụ không thể thiếu khi làm web development. Nó giúp các em backup code, chia sẻ với người khác, và làm việc nhóm hiệu quả. Các em các em hãy tạo repository ngay và bắt đầu push code lên!

**Bài tiếp theo:** [08. Làm việc nhóm với GitHub](./08-collaboration.md) - Học cách clone, fork, và collaborate với người khác
