# Làm việc với Branch

> **Bài trước:** [04. Hiểu về Working Directory và Staging Area](./04-working-directory.md)  
> **Bài tiếp theo:** [06. Merge và Rebase](./06-merge-vs-rebase.md)

## 🎯 Mục tiêu học tập

-   Hiểu branch là gì và tại sao cần sử dụng branch
-   Tạo, chuyển đổi, và xóa branch
-   Hiểu cách Git quản lý các branch
-   Thực hành làm việc với nhiều branch song song

## 📘 Kiến thức lý thuyết

### Branch là gì?

**Branch (Nhánh)** là một phiên bản độc lập của code, cho phép các em phát triển tính năng mới mà không ảnh hưởng đến code chính.

**Ví dụ minh họa thực tế:**
Các em các em hãy tưởng tượng các em đang viết một cuốn sách:

-   **main branch**: Bản thảo chính, đã được review, ổn định
-   **chapter-5 branch**: Bạn đang viết chương 5, chưa hoàn thành
-   **fix-typo branch**: Bạn sửa lỗi chính tả ở chương 2

Nếu viết trực tiếp vào bản thảo chính, các em có thể làm hỏng toàn bộ sách. Nhưng với branch, các em có thể:

-   Viết chương 5 trên branch riêng
-   Sửa lỗi chính tả trên branch khác
-   Khi xong, "gộp" (merge) vào bản thảo chính

### Tại sao cần branch?

#### 1. **Làm việc song song nhiều tính năng**

**Ví dụ thực tế:** Website e-commerce đang có tính năng cơ bản (main branch)

Bạn muốn phát triển 3 tính năng mới:

-   Tính năng A: Thanh toán online (ước tính 3 ngày)
-   Tính năng B: Tìm kiếm sản phẩm (ước tính 2 ngày)
-   Tính năng C: Đánh giá sản phẩm (ước tính 4 ngày)

**Không dùng branch:**

-   Phải làm xong tính năng A mới làm B
-   Nếu tính năng A có bug, code chính bị ảnh hưởng
-   Khó làm song song nhiều người

**Dùng branch:**

-   Tạo `feature-payment`, `feature-search`, `feature-review`
-   Mỗi tính năng làm trên branch riêng
-   Khi xong và test kỹ, mới merge vào main
-   Nếu có bug, chỉ ảnh hưởng branch đó, không ảnh hưởng main

#### 2. **Thử nghiệm an toàn**

**Ví dụ:** Bạn muốn thử một thư viện CSS mới (Bootstrap → Tailwind)

**Không dùng branch:**

-   Sợ làm hỏng code hiện tại
-   Phải backup thủ công
-   Khó quay lại

**Dùng branch:**

```bash
# Tạo branch thử nghiệm
git checkout -b try-tailwind

# Thử nghiệm Tailwind
# Nếu không ổn, quay lại main branch
git checkout main
# Code cũ vẫn nguyên!
```

#### 3. **Làm việc nhóm hiệu quả**

**Ví dụ:** Team có 3 người:

-   Dev A: Làm frontend (React)
-   Dev B: Làm backend (API)
-   Dev C: Làm database (MongoDB)

**Mỗi người tạo branch riêng:**

```bash
git checkout -b feature/frontend-login
git checkout -b feature/api-authentication
git checkout -b feature/user-schema
```

Không bị conflict, mỗi người làm độc lập!

### Branch mặc định: main (hoặc master)

-   Khi tạo repository mới, Git tự động tạo branch `main`
-   Đây là branch "chính", code ổn định, đã test
-   Thường dùng để deploy lên production

**Quy tắc vàng:** Không bao giờ commit trực tiếp vào `main` trong dự án thực tế!

### Các loại branch phổ biến

| Tên branch              | Mục đích                                 | Ví dụ                   |
| ----------------------- | ---------------------------------------- | ----------------------- |
| `main` / `master`       | Code ổn định, production-ready           | Code đang chạy trên web |
| `develop` / `dev`       | Code đang phát triển, tích hợp tính năng | Code để test            |
| `feature/ten-tinh-nang` | Tính năng mới đang phát triển            | `feature/login`         |
| `bugfix/ten-loi`        | Sửa lỗi                                  | `bugfix/mobile-menu`    |
| `hotfix/ten-sua`        | Sửa khẩn cấp trên production             | `hotfix/payment-error`  |

**Quy ước đặt tên:**

-   `feature/`: Tính năng mới
-   `bugfix/`: Sửa lỗi
-   `hotfix/`: Sửa khẩn cấp
-   `release/`: Chuẩn bị phát hành

## 💻 Ví dụ thực hành

### Tạo và chuyển đổi branch

```bash
# Bước 1: Kiểm tra branch hiện tại
git branch

# Kết quả:
# * main
# (Dấu * chỉ branch đang làm việc)

# Bước 2: Tạo branch mới (cách 1 - tạo rồi chuyển)
git branch feature-login
git checkout feature-login

# Hoặc cách 2 - tạo và chuyển luôn (ngắn gọn hơn)
git checkout -b feature-login

# Bước 3: Kiểm tra lại
git branch

# Kết quả:
#   main
# * feature-login
```

**Giải thích:**

-   `git branch`: Xem danh sách tất cả branch
-   `git branch tên-branch`: Tạo branch mới (nhưng chưa chuyển)
-   `git checkout tên-branch`: Chuyển sang branch khác
-   `git checkout -b tên-branch`: Tạo và chuyển luôn (tiện hơn)

### Làm việc trên branch mới

```bash
# Bạn đang ở branch feature-login
# Bước 1: Tạo file mới
echo "<form>Login form</form>" > login.html

# Bước 2: Commit trên branch này
git add login.html
git commit -m "Thêm form đăng nhập"

# Bước 3: Kiểm tra log
git log --oneline

# Kết quả:
# abc1234 (HEAD -> feature-login) Thêm form đăng nhập
# xyz5678 (main) Commit đầu tiên
```

**Giải thích:**

-   `HEAD -> feature-login`: HEAD đang trỏ đến branch feature-login
-   Commit `abc1234` chỉ có trên branch `feature-login`
-   Branch `main` vẫn ở commit `xyz5678` (chưa có file login.html)

### So sánh các branch

```bash
# Xem branch main có gì
git checkout main
ls
# index.html  (không có login.html)

# Xem branch feature-login có gì
git checkout feature-login
ls
# index.html  login.html  (có login.html)
```

**Quan sát:** Mỗi branch có code riêng, độc lập với nhau!

### Xem tất cả branch (kể cả remote)

```bash
# Xem branch local
git branch

# Xem tất cả branch (local + remote)
git branch -a

# Xem branch với thông tin commit gần nhất
git branch -v

# Xem branch đã merge vào main chưa
git branch --merged
git branch --no-merged
```

### Xóa branch

```bash
# Xóa branch local (chỉ xóa được khi không đang ở branch đó)
git checkout main              # Chuyển sang main trước
git branch -d feature-login     # Xóa branch (chỉ xóa khi đã merge)
git branch -D feature-login    # Force delete (xóa dù chưa merge)

# Xóa branch remote (sẽ học ở bài về GitHub)
git push origin --delete feature-login
```

**Các em các em lưu ý:**

-   `-d`: Chỉ xóa được branch đã merge (an toàn)
-   `-D`: Force delete, xóa dù chưa merge (cẩn thận!)
-   Phải chuyển sang branch khác trước khi xóa

### Thực hành: Tạo nhiều branch

```bash
# Tình huống: Phát triển website với nhiều tính năng

# Branch chính
git checkout main

# Tạo branch cho từng tính năng
git checkout -b feature/header
echo "<header>Header</header>" > header.html
git add header.html
git commit -m "Thêm header component"

git checkout main
git checkout -b feature/footer
echo "<footer>Footer</footer>" > footer.html
git add footer.html
git commit -m "Thêm footer component"

# Xem tất cả branch
git branch

# Kết quả:
#   feature/footer
#   feature/header
# * main
```

**Quan sát:** Mỗi branch phát triển độc lập, không ảnh hưởng nhau!

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Tạo và quản lý branch**

1.  Tạo repository và commit đầu tiên trên branch `main`
2.  Tạo branch `feature/about-page`
3.  Trên branch này, tạo file `about.html` và commit
4.  Chuyển về `main`, kiểm tra xem có file `about.html` không
5.  Chuyển lại `feature/about-page`, file có còn không?
6.  Sử dụng `git log --oneline --graph --all` để xem cấu trúc branch

**Gợi ý:**

```bash
git init
echo "Home" > index.html
git add .
git commit -m "Initial commit"

git checkout -b feature/about-page
echo "About" > about.html
git add .
git commit -m "Thêm trang about"

git checkout main
ls  # Không có about.html

git checkout feature/about-page
ls  # Có about.html

git log --oneline --graph --all
```

**Mục tiêu:** Hiểu rõ mỗi branch có code riêng

### Level 2: Nâng cao

**Bài tập 2: Làm việc với nhiều branch**

Tạo một dự án website với cấu trúc branch như sau:

```
main
├── feature/header      (có file header.html)
├── feature/navigation (có file nav.html)
└── feature/footer     (có file footer.html)
```

**Yêu cầu:**

1.  Tất cả branch được tạo từ `main`
2.  Mỗi branch có file riêng và commit riêng
3.  Sử dụng `git log --graph --oneline --all` để visualize
4.  Tạo một file `BRANCH_INFO.md` mô tả:
    -   Branch nào có file gì
    -   Kế hoạch merge vào main như thế nào

**Gợi ý workflow:**

```bash
# Tạo từng branch
git checkout main
git checkout -b feature/header
# ... làm việc và commit

git checkout main
git checkout -b feature/navigation
# ... làm việc và commit

# Visualize
git log --graph --oneline --all --decorate
```

**Mục tiêu:** Làm quen với workflow làm việc nhiều branch

## 💡 Mẹo & Lỗi thường gặp

### 1. **Lỗi: "You are in 'detached HEAD' state"**

**Nguyên nhân:** Checkout vào một commit cụ thể thay vì branch

**Giải pháp:**

```bash
# Tạo branch từ commit hiện tại
git checkout -b new-branch-name

# Hoặc quay lại branch chính
git checkout main
```

**Cách tránh:** Luôn checkout vào branch, không checkout vào commit hash

### 2. **Quên đang ở branch nào**

**Mẹo:** Luôn check trước khi làm việc:

```bash
git branch              # Xem tất cả branch
git status              # Dòng đầu sẽ hiển thị branch hiện tại
# Hoặc trong terminal, cấu hình hiển thị branch name
```

**Cấu hình prompt hiển thị branch (PowerShell/Windows):**

```powershell
# Thêm vào profile
function prompt {
    $branch = git rev-parse --abbrev-ref HEAD 2>$null
    if ($branch) {
        Write-Host "($branch) " -NoNewline -ForegroundColor Cyan
    }
    "PS $($executionContext.SessionState.Path.CurrentLocation)$('>' * ($nestedPromptLevel + 1)) "
}
```

### 3. **Xóa nhầm branch quan trọng**

**Giải pháp:** Git lưu commit, branch chỉ là con trỏ

```bash
# Tìm lại commit của branch đã xóa
git reflog

# Tạo lại branch từ commit đó
git checkout -b feature-login abc1234
```

**Cách tránh:** Luôn đảm bảo đã merge hoặc backup trước khi xóa

### 4. **Commit nhầm vào branch sai**

**Ví dụ:** Đang ở `main` nhưng commit tính năng mới

**Giải pháp:**

```bash
# Tạo branch mới từ commit hiện tại
git branch feature-new
# Reset main về commit trước
git reset --hard HEAD~1
# Chuyển sang branch mới (commit vẫn còn đó)
git checkout feature-new
```

### 5. **Không biết nên tạo bao nhiêu branch**

**Nguyên tắc:**

-   **1 branch = 1 tính năng/1 task**
-   Không tạo branch quá nhỏ (ví dụ: "sửa 1 dòng code")
-   Không tạo branch quá lớn (ví dụ: "toàn bộ website")

**Ví dụ tốt:**

-   ✅ `feature/user-login`
-   ✅ `bugfix/mobile-menu`
-   ✅ `feature/payment-integration`

**Ví dụ không tốt:**

-   ❌ `fix` (quá mơ hồ)
-   ❌ `update` (không rõ update gì)
-   ❌ `everything` (quá rộng)

**Áp dụng vào làm việc nhóm:**

-   Mỗi developer tạo branch riêng cho task của mình
-   Đặt tên theo quy ước team (ví dụ: `feature/tên-người/tên-tính-năng`)
-   Không commit trực tiếp vào `main` hoặc `develop`
-   Khi hoàn thành, tạo Pull Request để review trước khi merge

---

**Kết luận:** Branch là công cụ mạnh mẽ giúp các em làm việc an toàn và hiệu quả. Các em các em hãy tạo branch cho mỗi tính năng mới, đừng sợ tạo quá nhiều branch - chúng rất nhẹ và dễ quản lý!

**Bài tiếp theo:** [06. Merge và Rebase](./06-merge-vs-rebase.md) - Học cách gộp code từ branch này sang branch khác
