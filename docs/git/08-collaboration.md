# Làm việc nhóm với GitHub: clone, fork, push, pull

> **Bài trước:** [07. Giới thiệu GitHub](./07-github-intro.md)  
> **Bài tiếp theo:** [09. GitHub Flow](./09-github-flow.md)

## 🎯 Mục tiêu học tập

-   Hiểu cách clone repository từ GitHub về máy
-   Nắm được khái niệm fork và khi nào dùng fork
-   Thực hành push và pull code khi làm việc nhóm
-   Xử lý conflict khi nhiều người cùng sửa code

## 📘 Kiến thức lý thuyết

### Clone - Lấy code từ GitHub về máy

**Clone** là cách lấy toàn bộ repository từ GitHub về máy tính của các em, bao gồm cả lịch sử Git.

**Khi nào dùng clone:**
-   Bạn mới tham gia dự án, muốn lấy code về máy
-   Làm việc trên nhiều máy tính khác nhau
-   Tham gia dự án open source

**Ví dụ thực tế:**
```bash
# Clone repository
git clone https://github.com/username/project.git
# Repository sẽ được tải về thư mục "project"
```

### Fork - Tạo bản sao repository

**Fork** là tạo một bản sao repository của người khác vào tài khoản GitHub của các em.

**Khi nào dùng fork:**
-   Muốn contribute vào dự án open source
-   Muốn thử nghiệm trên code của người khác
-   Muốn tạo phiên bản riêng của dự án

**So sánh Clone vs Fork:**

| Clone                           | Fork                              |
| ------------------------------- | --------------------------------- |
| Lấy code về máy để làm việc     | Tạo bản sao repository vào GitHub |
| Code thuộc về repository gốc    | Code thuộc về các em                 |
| Không thể push (trừ khi có quyền) | Có thể push vào fork của mình    |
| Dùng cho dự án các em có quyền      | Dùng cho dự án của người khác     |

### Push - Đẩy code lên GitHub

**Push** là đưa commit từ máy local lên GitHub.

**Workflow:**
```
Local (máy các em) → git push → GitHub (cloud)
```

**Các em các em lưu ý quan trọng:**
-   Push chỉ đẩy commit, không tự động merge
-   Cần quyền write để push vào repository
-   Push branch riêng, sau đó tạo Pull Request để merge vào main

### Pull - Lấy code mới từ GitHub

**Pull** là lấy code mới nhất từ GitHub về máy và tự động merge.

**Workflow:**
```
GitHub (cloud) → git pull → Local (máy các em)
```

**Pull = Fetch + Merge:**
```bash
# Pull thực chất là:
git fetch origin    # Lấy code mới
git merge origin/main  # Gộp vào branch hiện tại
```

### Conflict khi làm việc nhóm

**Conflict** xảy ra khi:
-   Nhiều người cùng sửa một file
-   Cùng sửa một dòng code
-   Git không thể tự động merge

**Ví dụ:**
```
Người A sửa: const API_URL = "https://api.old.com";
Người B sửa: const API_URL = "https://api.new.com";
→ Conflict!
```

## 💻 Ví dụ thực hành

### Clone repository

```bash
# Clone repository public
git clone https://github.com/username/project.git

# Clone vào thư mục với tên khác
git clone https://github.com/username/project.git my-project

# Clone branch cụ thể
git clone -b feature/new-feature https://github.com/username/project.git
```

**Sau khi clone:**
```bash
cd project
git remote -v
# origin  https://github.com/username/project.git (fetch)
# origin  https://github.com/username/project.git (push)
```

**Giải thích:** Remote `origin` đã được tự động setup

### Fork repository

**Trên GitHub web:**

1.   Vào repository muốn fork
2.   Click nút "Fork" ở góc phải trên
3.   Chọn tài khoản (hoặc organization) để fork vào
4.   Chờ vài giây, fork sẽ được tạo

**Sau khi fork:**
-   Repository sẽ xuất hiện trong GitHub của các em
-   URL: `https://github.com/your-username/original-repo-name`
-   Bạn có quyền push vào fork của mình

### Làm việc với fork

```bash
# Clone fork của các em về máy
git clone https://github.com/your-username/project.git
cd project

# Thêm remote upstream (repository gốc)
git remote add upstream https://github.com/original-username/project.git

# Xem remote
git remote -v
# origin    https://github.com/your-username/project.git (fork của các em)
# upstream  https://github.com/original-username/project.git (gốc)

# Update code từ upstream
git fetch upstream
git checkout main
git merge upstream/main

# Hoặc rebase
git rebase upstream/main
```

### Push code lên GitHub

```bash
# Tình huống: Bạn đã commit local, muốn push lên GitHub

# Bước 1: Kiểm tra branch hiện tại
git branch
# * main

# Bước 2: Push branch hiện tại
git push origin main

# Bước 3: Hoặc push branch khác
git checkout feature/login
git push origin feature/login

# Lần đầu push branch mới, cần set upstream
git push -u origin feature/login
```

**Giải thích:**
-   `origin`: Tên remote (thường là GitHub repository)
-   `main`: Tên branch muốn push
-   `-u`: Set upstream, lần sau chỉ cần `git push`

### Pull code từ GitHub

```bash
# Lấy code mới nhất và merge
git pull origin main

# Hoặc chỉ fetch (không merge)
git fetch origin
git merge origin/main

# Xem thay đổi trước khi merge
git fetch origin
git diff main origin/main
```

### Xử lý conflict khi pull

```bash
# Tình huống: Bạn và người khác cùng sửa một file

# Pull code mới
git pull origin main

# Kết quả: CONFLICT!
# Auto-merging file.js
# CONFLICT (content): Merge conflict in file.js

# Mở file và sửa conflict
# Tìm dấu <<<<<<<, =======, >>>>>>>
# Sửa và giữ code đúng

# Đánh dấu đã resolve
git add file.js
git commit -m "Resolve merge conflict"
```

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Clone và làm việc với repository**

1.   Tìm một repository public trên GitHub (ví dụ: [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife))
2.   Clone repository về máy
3.   Tạo branch mới: `feature/my-changes`
4.   Sửa một file bất kỳ (ví dụ: README.md)
5.   Commit thay đổi
6.   Push branch lên GitHub (nếu có quyền) hoặc fork rồi push

**Gợi ý:**
```bash
git clone https://github.com/octocat/Spoon-Knife.git
cd Spoon-Knife
git checkout -b feature/my-changes
# Sửa file
git add .
git commit -m "Thay đổi của tôi"
# Push (nếu fork được) hoặc chỉ làm local
```

### Level 2: Nâng cao

**Bài tập 2: Làm việc nhóm giả lập**

Tạo một repository trên GitHub và mời 1-2 các em cùng thực hành:

1.   **Người A (Owner):**
    -   Tạo repository `team-project`
    -   Push code ban đầu
    -   Thêm collaborator (Settings → Collaborators)

2.   **Người B (Collaborator):**
    -   Clone repository về máy
    -   Tạo branch `feature/add-header`
    -   Thêm file `header.html`
    -   Push branch lên GitHub

3.   **Người A:**
    -   Pull code mới từ GitHub
    -   Tạo branch `feature/add-footer`
    -   Push lên GitHub

4.   **Cả hai:**
    -   Cùng sửa file `index.html` (cùng dòng)
    -   Push lên branch riêng
    -   Thử merge và xử lý conflict

**Mục tiêu:** Hiểu được workflow làm việc nhóm thực tế

## 💡 Mẹo & Lỗi thường gặp

### 1. **Lỗi: "Permission denied" khi push**

**Nguyên nhân:** Không có quyền push vào repository

**Giải pháp:**
-   Kiểm tra các em có là collaborator không
-   Hoặc fork repository rồi push vào fork
-   Hoặc xin quyền từ owner

### 2. **Lỗi: "Updates were rejected"**

**Nguyên nhân:** Code trên GitHub mới hơn code local

**Giải pháp:**
```bash
# Pull code mới trước
git pull origin main
# Sau đó push lại
git push origin main
```

### 3. **Không biết đang ở repository nào**

**Mẹo:**
```bash
# Xem remote URL
git remote -v

# Xem branch và commit gần nhất
git log --oneline -5
```

### 4. **Fork xong không biết cập nhật code mới**

**Workflow:**
```bash
# 1. Thêm upstream (repository gốc)
git remote add upstream https://github.com/original/repo.git

# 2. Fetch code mới
git fetch upstream

# 3. Merge vào branch của các em
git checkout main
git merge upstream/main

# 4. Push lên fork
git push origin main
```

### 5. **Conflict khi pull, không biết xử lý**

**Cách xử lý:**
1.   Xem file conflict: `git status`
2.   Mở file, tìm `<<<<<<<`, `=======`, `>>>>>>>`
3.   Sửa file, giữ code đúng
4.   `git add file.js`
5.   `git commit -m "Resolve conflict"`

**Áp dụng vào làm việc nhóm:**
-   **Luôn pull trước khi push:** Tránh conflict và giữ code đồng bộ
-   **Làm việc trên branch riêng:** Không commit trực tiếp vào main
-   **Giao tiếp:** Nếu sửa file quan trọng, báo team biết
-   **Commit message rõ ràng:** Giúp team hiểu các em làm gì

---

**Kết luận:** Làm việc nhóm với GitHub yêu cầu các em hiểu rõ workflow: clone → làm việc → commit → push → pull. Hãy thực hành nhiều để quen với quy trình này!

**Bài tiếp theo:** [09. GitHub Flow](./09-github-flow.md) - Học quy trình làm việc nhóm chuẩn trên GitHub
