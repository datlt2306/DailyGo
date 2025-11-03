# Hiểu về Working Directory và Staging Area

> **Bài trước:** [03. Các lệnh cơ bản](./03-git-basic-commands.md)  
> **Bài tiếp theo:** [05. Làm việc với Branch](./05-git-branching.md)

## 🎯 Mục tiêu học tập

-   Hiểu rõ 3 khu vực trong Git: Working Directory, Staging Area, và Repository
-   Nắm được sự khác biệt giữa `git add` và `git commit`
-   Sử dụng `git diff` để xem thay đổi
-   Biết cách unstage file khi add nhầm

## 📘 Kiến thức lý thuyết

### 3 Khu vực quan trọng trong Git

Git quản lý code của bạn qua 3 khu vực:

```
┌─────────────────┐    git add    ┌─────────────────┐    git commit   ┌──────────────┐
│ Working         │  ───────────>  │ Staging         │  ────────────>  │ Repository   │
│ Directory       │                │ Area            │                 │ (.git/)      │
│ (Thư mục làm    │                │ (Chờ commit)    │                 │ (Lịch sử)    │
│  việc)          │                │                 │                 │              │
└─────────────────┘                └─────────────────┘                 └──────────────┘
```

#### 1. **Working Directory** (Thư mục làm việc)

-   **Là gì**: Thư mục dự án của bạn trên máy tính
-   **Chứa gì**: Tất cả file code (HTML, CSS, JS, v.v.)
-   **Đặc điểm**: Đây là nơi bạn sửa code hàng ngày

**Ví dụ:** Folder `my-website/` chứa `index.html`, `style.css`

#### 2. **Staging Area** (Khu vực staging)

-   **Là gì**: Khu vực "chờ commit" - nơi Git lưu danh sách file sẽ được commit
-   **Chứa gì**: Các file đã được `git add`
-   **Đặc điểm**: Có thể thêm/bớt file trước khi commit

**Ví dụ minh họa:** Giống như giỏ hàng mua sắm
-   Bạn chọn sản phẩm (git add) → Cho vào giỏ hàng
-   Có thể bỏ sản phẩm ra khỏi giỏ (git reset)
-   Khi thanh toán (git commit) → Mua tất cả trong giỏ

#### 3. **Repository** (.git folder)

-   **Là gì**: Nơi Git lưu trữ lịch sử commit
-   **Chứa gì**: Tất cả snapshot đã commit
-   **Đặc điểm**: Chỉ được cập nhật khi `git commit`

**Ví dụ minh họa:** Giống như album ảnh
-   Mỗi lần commit = Thêm một bức ảnh vào album
-   Có thể xem lại bất kỳ ảnh nào (git checkout)
-   Có thể phục hồi ảnh cũ (git revert)

### Tại sao cần Staging Area?

**Lý do 1: Chọn lọc file commit**
-   Bạn sửa 5 file nhưng chỉ muốn commit 3 file
-   Không có staging area: Phải commit tất cả hoặc không commit gì
-   Có staging area: Chọn 3 file commit, 2 file còn lại để lần sau

**Ví dụ thực tế:**
```bash
# Bạn vừa sửa:
# - index.html (hoàn thành tính năng mới)
# - style.css (hoàn thành)
# - test.js (đang thử nghiệm, chưa xong)
# - .env (file config, không muốn commit)

# Với staging area, bạn có thể:
git add index.html style.css  # Chỉ add 2 file hoàn thành
git commit -m "Thêm tính năng mới"
# 2 file kia không bị commit
```

**Lý do 2: Review trước khi commit**
-   Dùng `git diff --staged` để xem sẽ commit gì
-   Phát hiện lỗi kịp thời trước khi commit

### Sự khác biệt: Modified vs Staged vs Committed

| Trạng thái     | Mô tả                                          | Lệnh kiểm tra        |
| -------------- | ---------------------------------------------- | -------------------- |
| **Modified**   | File đã sửa nhưng chưa `git add`               | `git status` (đỏ)    |
| **Staged**     | File đã `git add`, chờ commit                   | `git status` (xanh)  |
| **Committed**  | File đã được commit, lưu vào repository         | `git log`            |

**Ví dụ workflow:**
```bash
# 1. Sửa file index.html
# → Trạng thái: Modified (chưa add)

# 2. git add index.html
# → Trạng thái: Staged (đã add, chờ commit)

# 3. git commit -m "Update"
# → Trạng thái: Committed (đã lưu vào lịch sử)
```

## 💻 Ví dụ thực hành

### Tình huống: Làm việc với nhiều file

```bash
# Bước 1: Tạo nhiều file
echo "<h1>Home</h1>" > index.html
echo "body { margin: 0; }" > style.css
echo "console.log('Hello');" > script.js

# Bước 2: Kiểm tra trạng thái
git status

# Kết quả:
# Untracked files:
#   index.html
#   style.css
#   script.js
```

**Giải thích:** Tất cả file đều ở Working Directory, chưa được track

```bash
# Bước 3: Chỉ add một số file
git add index.html style.css

# Bước 4: Kiểm tra lại
git status

# Kết quả:
# Changes to be committed: (xanh lá)
#   new file:   index.html
#   new file:   style.css
#
# Untracked files: (đỏ)
#   script.js
```

**Giải thích:**
-   `index.html` và `style.css`: Đã ở Staging Area (sẵn sàng commit)
-   `script.js`: Vẫn ở Working Directory (chưa add)

```bash
# Bước 5: Xem sự khác biệt
git diff                    # Xem file chưa add (script.js - không có gì vì chưa track)
git diff --staged           # Xem file đã add (index.html, style.css)

# Bước 6: Commit chỉ 2 file đã add
git commit -m "Thêm HTML và CSS cơ bản"

# Bước 7: Kiểm tra lại
git status

# Kết quả:
# Untracked files:
#   script.js
```

**Kết luận:** `script.js` vẫn còn ở Working Directory, chưa bị commit

### Sửa file đã commit

```bash
# Bước 1: Sửa file đã commit
echo "<p>New content</p>" >> index.html

# Bước 2: Kiểm tra
git status

# Kết quả:
# Changes not staged for commit:
#   modified:   index.html
```

**Giải thích:** File đã sửa nhưng chưa add → Ở trạng thái Modified

```bash
# Bước 3: Xem thay đổi cụ thể
git diff index.html

# Kết quả:
# diff --git a/index.html b/index.html
# index 1234567..abcdefg 100644
# --- a/index.html
# +++ b/index.html
# @@ -1 +1,2 @@
#  <h1>Home</h1>
# +<p>New content</p>
```

**Giải thích:**
-   `--- a/index.html`: File trong repository (version cũ)
-   `+++ b/index.html`: File trong working directory (version mới)
-   Dòng có `+`: Thêm mới
-   Dòng có `-`: Xóa

```bash
# Bước 4: Add vào staging
git add index.html

# Bước 5: Xem thay đổi đã staged
git diff --staged index.html

# Bước 6: Commit
git commit -m "Thêm paragraph mới vào trang chủ"
```

### Unstage file (Bỏ file khỏi staging area)

```bash
# Tình huống: Bạn add nhầm file
git add script.js  # File chưa hoàn thành, không muốn commit

# Kiểm tra
git status
# Changes to be committed:
#   new file:   script.js

# Bỏ file khỏi staging (NHƯNG không xóa file)
git reset script.js
# Hoặc
git restore --staged script.js

# Kiểm tra lại
git status
# Untracked files:
#   script.js

# File vẫn còn trong Working Directory, chỉ bị bỏ khỏi staging
```

**Lưu ý quan trọng:**
-   `git reset` chỉ bỏ khỏi staging, KHÔNG xóa file
-   File vẫn còn trong Working Directory
-   Có thể add lại sau

### So sánh các phiên bản

```bash
# So sánh Working Directory vs Staging Area
git diff                    # File chưa add

# So sánh Staging Area vs Repository (commit cuối)
git diff --staged           # File đã add, chưa commit

# So sánh Working Directory vs Repository (bỏ qua staging)
git diff HEAD               # Tất cả thay đổi (cả staged và unstaged)

# So sánh giữa 2 commit
git diff commit1 commit2    # Sẽ học ở bài sau
```

**Ví dụ thực tế:**
```bash
# Bạn sửa 2 file:
# - index.html (đã add)
# - style.css (chưa add)

git diff                    # Chỉ thấy style.css (chưa add)
git diff --staged           # Chỉ thấy index.html (đã add)
git diff HEAD               # Thấy cả 2 file
```

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Thực hành 3 khu vực**

1.  Tạo repository mới và 3 file: `file1.txt`, `file2.txt`, `file3.txt`
2.  Chỉ add `file1.txt` và `file2.txt` vào staging
3.  Kiểm tra với `git status` - quan sát sự khác biệt giữa staged và untracked
4.  Commit 2 file đã add
5.  Kiểm tra lại `git status` - `file3.txt` có bị commit không?

**Gợi ý:**
```bash
git init
echo "Content 1" > file1.txt
echo "Content 2" > file2.txt
echo "Content 3" > file3.txt
git add file1.txt file2.txt
git status  # Quan sát kết quả
git commit -m "Thêm file1 và file2"
git status  # file3.txt vẫn còn untracked
```

**Mục tiêu:** Hiểu rõ staging area chỉ commit file đã được add

### Level 2: Nâng cao

**Bài tập 2: Làm việc với thay đổi**

1.  Tạo file `about.html` và commit
2.  Sửa file `about.html` (thêm nội dung mới)
3.  Sử dụng `git diff` để xem thay đổi
4.  Add file vào staging
5.  Sử dụng `git diff --staged` để xem thay đổi đã staged
6.  So sánh kết quả của 2 lệnh `git diff` và `git diff --staged`
7.  Unstage file và add lại
8.  Commit với message mô tả rõ ràng

**Yêu cầu:**
-   Hiểu được sự khác biệt giữa `git diff` và `git diff --staged`
-   Thực hành unstage và stage lại file
-   Giải thích được tại sao cần staging area

## 💡 Mẹo & Lỗi thường gặp

### 1. **Lỗi: "Changes not staged for commit"**

**Nguyên nhân:** Đã sửa file nhưng quên `git add`

**Giải pháp:**
```bash
# Xem file nào chưa add
git status

# Add file cụ thể
git add filename

# Hoặc add tất cả
git add .
```

**Mẹo:** Luôn check `git status` trước khi commit!

### 2. **Add nhầm file không mong muốn**

**Ví dụ:** Add file `.env` chứa password hoặc file test chưa xong

**Giải pháp:**
```bash
# Unstage file (không xóa file)
git reset filename
# Hoặc
git restore --staged filename

# Sau đó thêm vào .gitignore để tránh add lại
echo "filename" >> .gitignore
git add .gitignore
git commit -m "Thêm file vào .gitignore"
```

### 3. **Không hiểu sự khác biệt giữa các lệnh diff**

**Cách nhớ:**
-   `git diff`: So sánh Working Directory vs Staging Area
-   `git diff --staged`: So sánh Staging Area vs Repository
-   `git diff HEAD`: So sánh Working Directory vs Repository (bỏ qua staging)

**Ví dụ minh họa:**
```
Repository:    [File A, File B]
                    ↑
                    | git diff --staged
                    |
Staging Area:  [File A]          ← File B chưa add
                    ↑
                    | git diff
                    |
Working Dir:   [File A (sửa), File B (sửa)]
```

### 4. **Commit quá nhiều thay đổi cùng lúc**

**Vấn đề:** Gom nhiều tính năng khác nhau vào 1 commit

**Giải pháp:** Tách thành nhiều commit nhỏ:
```bash
# Commit 1: Tính năng A
git add feature-a.js
git commit -m "Thêm tính năng A"

# Commit 2: Tính năng B
git add feature-b.js
git commit -m "Thêm tính năng B"
```

**Lợi ích:** Dễ rollback, dễ review, dễ tìm bug

### 5. **Quên kiểm tra trước khi commit**

**Mẹo:** Luôn làm theo workflow:
```bash
# 1. Sửa code
# 2. Kiểm tra thay đổi
git status
git diff --staged    # Xem sẽ commit gì

# 3. Nếu OK, commit
git commit -m "Message"
```

**Áp dụng vào làm việc nhóm:**
-   Luôn review `git diff --staged` trước khi commit
-   Đảm bảo không commit file nhạy cảm (.env, password, API keys)
-   Commit từng tính năng nhỏ, không gom tất cả vào 1 commit

---

**Kết luận:** Hiểu rõ 3 khu vực trong Git giúp bạn làm việc có chủ đích và tránh commit nhầm. Staging Area là tính năng mạnh mẽ để bạn kiểm soát chính xác những gì sẽ được commit!

**Bài tiếp theo:** [05. Làm việc với Branch](./05-git-branching.md) - Học cách tạo và quản lý các nhánh trong Git

