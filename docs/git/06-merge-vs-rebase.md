# Merge và Rebase – khác nhau thế nào?

> **Bài trước:** [05. Làm việc với Branch](./05-git-branching.md)  
> **Bài tiếp theo:** [07. Giới thiệu GitHub](./07-github-intro.md)

## 🎯 Mục tiêu học tập

-   Hiểu sự khác biệt giữa Merge và Rebase
-   Biết khi nào nên dùng Merge, khi nào nên dùng Rebase
-   Thực hành merge branch vào main
-   Hiểu và xử lý merge conflict

## 📘 Kiến thức lý thuyết

### Merge là gì?

**Merge (Gộp)** là cách gộp code từ branch này sang branch khác bằng cách tạo một commit merge đặc biệt.

**Cách hoạt động:**
1.   Giữ nguyên lịch sử commit của cả 2 branch
2.   Tạo một commit mới (merge commit) để gộp chúng lại
3.   Giữ nguyên cấu trúc branch

**Ví dụ minh họa:**

```
Trước khi merge:
main:        A---B---C
                    \
feature:             D---E

Sau khi merge:
main:        A---B---C-----------M
                    \           /
feature:             D---E------
```

**Commit M** là merge commit, chứa tất cả thay đổi từ cả 2 branch.

### Rebase là gì?

**Rebase (Đặt lại cơ sở)** là cách "di chuyển" commit từ branch này lên đầu branch khác, tạo ra lịch sử thẳng, sạch sẽ.

**Cách hoạt động:**
1.   Lấy commit từ branch feature
2.   "Di chuyển" chúng lên đầu branch main
3.   Tạo lại commit (với hash mới)
4.   Không tạo merge commit

**Ví dụ minh họa:**

```
Trước khi rebase:
main:        A---B---C
                    \
feature:             D---E

Sau khi rebase:
main:        A---B---C
feature:             D'---E'
```

**Lưu ý:** Commit D' và E' là commit MỚI (hash khác), nhưng nội dung giống D và E.

### So sánh Merge vs Rebase

| Tiêu chí        | Merge                    | Rebase                    |
| --------------- | ------------------------ | ------------------------- |
| **Lịch sử**     | Có merge commit, phân nhánh | Lịch sử thẳng, sạch sẽ      |
| **Bảo toàn**    | Giữ nguyên tất cả commit | Tạo lại commit (hash mới)  |
| **Độ phức tạp** | Đơn giản, an toàn        | Phức tạp hơn, cần cẩn thận |
| **Khi nào dùng**| Branch công cộng, shared  | Branch cá nhân, local      |
| **Conflict**    | Resolve 1 lần            | Có thể resolve nhiều lần   |

### Khi nào dùng Merge?

✅ **Nên dùng Merge khi:**
-   Merge branch vào main/develop (code công cộng)
-   Làm việc nhóm, branch đã push lên GitHub
-   Muốn giữ nguyên lịch sử (traceable)
-   Branch có nhiều commit và đã được review

**Ví dụ thực tế:**
```bash
# Sau khi hoàn thành tính năng và review
git checkout main
git merge feature/login
# Tạo merge commit, giữ nguyên lịch sử
```

### Khi nào dùng Rebase?

✅ **Nên dùng Rebase khi:**
-   Branch cá nhân, chưa push hoặc chỉ mình bạn dùng
-   Muốn lịch sử sạch sẽ, dễ đọc
-   Update branch với code mới từ main
-   Trước khi tạo Pull Request

⚠️ **KHÔNG nên dùng Rebase khi:**
-   Branch đã được share với người khác
-   Người khác đang làm việc trên branch đó
-   Đã merge vào main rồi

**Ví dụ thực tế:**
```bash
# Update branch với code mới từ main
git checkout feature/new-feature
git rebase main
# Lịch sử sạch sẽ, dễ review
```

### Merge Conflict là gì?

**Merge Conflict (Xung đột khi gộp)** xảy ra khi Git không thể tự động merge vì:
-   Cùng một dòng code bị sửa ở 2 branch khác nhau
-   Cùng một file bị xóa ở branch này nhưng sửa ở branch kia

**Ví dụ:**
```
Branch main:        const name = "Nguyễn Văn A";
Branch feature:    const name = "Trần Thị B";
                    ↑
                  Conflict!
```

## 💻 Ví dụ thực hành

### Thực hành Merge

```bash
# Bước 1: Tạo branch và commit
git checkout main
echo "Home page" > index.html
git add index.html
git commit -m "Thêm trang chủ"

# Bước 2: Tạo branch feature và làm việc
git checkout -b feature/about
echo "About page" > about.html
git add about.html
git commit -m "Thêm trang about"

# Bước 3: Merge vào main
git checkout main
git merge feature/about

# Kết quả:
# Merge made by the 'ort' strategy.
#  about.html | 1 +
#  1 file changed, 1 insertion(+)
```

**Giải thích:**
-   Git tự động merge vì không có conflict
-   Tạo merge commit trên main
-   File `about.html` xuất hiện trên main

### Xem lịch sử sau merge

```bash
git log --oneline --graph --all

# Kết quả:
# *   def5678 (HEAD -> main) Merge branch 'feature/about'
# |\
# | * abc1234 (feature/about) Thêm trang about
# * xyz9999 Thêm trang chủ
```

**Giải thích:**
-   `*` = commit
-   `|` và `\` = branch phân nhánh
-   Merge commit có 2 parent (main và feature/about)

### Thực hành Rebase

```bash
# Tình huống: Có code mới trên main, muốn update feature branch

# Bước 1: Tạo thêm commit trên main
git checkout main
echo "Contact page" > contact.html
git add contact.html
git commit -m "Thêm trang contact"

# Bước 2: Rebase feature branch lên main mới
git checkout feature/about
git rebase main

# Kết quả:
# First, rewinding head to replay your work on top of it...
# Applying: Thêm trang about
```

**Giải thích:**
-   Rebase "đặt lại" commit của feature/about lên đầu main
-   Commit "Thêm trang about" giờ có parent là "Thêm trang contact"
-   Lịch sử thẳng, không có merge commit

### So sánh lịch sử sau Rebase

```bash
git log --oneline --graph --all

# Sau merge:
# *   def5678 Merge branch 'feature/about'
# |\
# | * abc1234 Thêm trang about
# * xyz9999 Thêm trang chủ

# Sau rebase:
# * abc1234' (HEAD -> feature/about) Thêm trang about
# * xyz9999 (main) Thêm trang contact
# * xyz8888 Thêm trang chủ
```

**Quan sát:** Lịch sử thẳng hơn, không có merge commit

### Xử lý Merge Conflict

```bash
# Tình huống: Cùng một dòng code bị sửa ở 2 branch

# Branch main:
echo "const API_URL = 'https://api.example.com';" > config.js
git add config.js
git commit -m "Cấu hình API URL"

# Branch feature:
git checkout -b feature/new-api
echo "const API_URL = 'https://api.new.com';" > config.js
git add config.js
git commit -m "Cập nhật API URL mới"

# Merge vào main
git checkout main
git merge feature/new-api

# Kết quả: CONFLICT!
# Auto-merging config.js
# CONFLICT (content): Merge conflict in config.js
# Automatic merge failed; fix conflicts and then commit the result.
```

**Giải thích:** Git không biết nên giữ version nào

```bash
# Mở file config.js, sẽ thấy:
<<<<<<< HEAD
const API_URL = 'https://api.example.com';
=======
const API_URL = 'https://api.new.com';
>>>>>>> feature/new-api
```

**Cách xử lý:**

1.   **Chọn version nào giữ:**
    -   Giữ version của main (phía trên `=======`)
    -   Giữ version của feature (phía dưới `=======`)
    -   Hoặc viết lại hoàn toàn

2.   **Sửa file:**
    ```javascript
    // Giữ version mới
    const API_URL = 'https://api.new.com';
    ```

3.   **Đánh dấu đã resolve:**
    ```bash
    git add config.js
    git commit -m "Merge feature/new-api, cập nhật API URL"
    ```

### Rebase với conflict

```bash
# Rebase cũng có thể gặp conflict
git checkout feature/about
git rebase main

# Nếu có conflict, Git sẽ dừng lại
# Sửa conflict tương tự như merge
# Sau đó:
git add .
git rebase --continue

# Nếu muốn hủy rebase:
git rebase --abort
```

**Lưu ý:** Với rebase, bạn có thể phải resolve conflict nhiều lần (cho mỗi commit)

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Thực hành Merge**

1.  Tạo branch `main` với file `index.html`
2.  Tạo branch `feature/footer` với file `footer.html`
3.  Merge `feature/footer` vào `main`
4.  Sử dụng `git log --graph` để xem lịch sử merge
5.  Giải thích tại sao có merge commit

**Gợi ý:**
```bash
git init
echo "Home" > index.html
git add .
git commit -m "Initial commit"

git checkout -b feature/footer
echo "Footer" > footer.html
git add .
git commit -m "Thêm footer"

git checkout main
git merge feature/footer
git log --oneline --graph
```

### Level 2: Nâng cao

**Bài tập 2: Merge conflict và Rebase**

1.  Trên `main`, tạo file `style.css` với `color: blue;`
2.  Tạo branch `feature/red-theme`, sửa thành `color: red;`
3.  Tạo branch `feature/green-theme`, sửa thành `color: green;`
4.  Merge `feature/red-theme` vào `main` (không conflict)
5.  Merge `feature/green-theme` vào `main` (sẽ có conflict!)
6.  Resolve conflict, chọn màu xanh lá
7.  Tạo lại `feature/red-theme` từ main mới
8.  Rebase `feature/red-theme` lên main
9.  So sánh lịch sử giữa merge và rebase

**Yêu cầu:**
-   Hiểu được cách xử lý conflict
-   Phân biệt được sự khác biệt giữa merge và rebase trong lịch sử
-   Viết tài liệu giải thích khi nào nên dùng merge, khi nào dùng rebase

## 💡 Mẹo & Lỗi thường gặp

### 1. **Lỗi: "Merge conflict" không biết xử lý**

**Cách xử lý:**
```bash
# Bước 1: Xem file conflict
git status
# Sẽ hiển thị: Unmerged paths: config.js

# Bước 2: Mở file, tìm các dấu <<<<<<<, =======, >>>>>>>
# Bước 3: Sửa file, giữ code đúng, xóa các dấu marker
# Bước 4: Đánh dấu đã resolve
git add config.js
git commit -m "Resolve merge conflict"
```

**Mẹo:** Dùng VS Code, nó có UI để resolve conflict dễ dàng!

### 2. **Rebase conflict nhiều lần**

**Vấn đề:** Rebase có thể tạo conflict cho mỗi commit

**Giải pháp:**
```bash
# Rebase từng commit một
git rebase -i main
# Hoặc skip commit gây conflict
git rebase --skip
```

**Cách tránh:** Nên rebase thường xuyên, không để branch lệch quá xa main

### 3. **Không biết nên dùng Merge hay Rebase**

**Nguyên tắc đơn giản:**
-   **Làm việc nhóm, branch đã share** → Dùng **Merge**
-   **Branch cá nhân, chưa push** → Có thể dùng **Rebase**
-   **Merge vào main** → Luôn dùng **Merge**
-   **Update branch với code mới** → Có thể dùng **Rebase** (nếu branch chưa share)

**Khi không chắc:** Dùng Merge - an toàn hơn!

### 4. **Rebase nhầm branch đã share**

**Vấn đề:** Người khác đang làm việc trên branch đó

**Hậu quả:** Họ sẽ gặp conflict khi pull

**Giải pháp:** Nếu đã rebase và push, không thể undo dễ dàng
```bash
# Tốt nhất: Không rebase branch đã share
# Hoặc hỏi team trước khi rebase
```

### 5. **Merge tạo quá nhiều merge commit**

**Vấn đề:** Lịch sử rối, khó đọc

**Giải pháp:**
```bash
# Dùng squash merge (sẽ học ở bài về GitHub)
# Hoặc rebase trước khi merge (nếu branch chưa share)
```

**Áp dụng vào làm việc nhóm:**
-   **Quy ước team:** Thống nhất dùng Merge hay Rebase
-   **Main branch:** Luôn dùng Merge để giữ nguyên lịch sử
-   **Feature branch:** Có thể rebase để sạch sẽ, nhưng phải hỏi team trước
-   **Khi có conflict:** Giao tiếp với người tạo conflict để giải quyết đúng

---

**Kết luận:** Merge và Rebase đều có ưu nhược điểm riêng. Hiểu rõ sự khác biệt giúp bạn chọn đúng công cụ cho từng tình huống. Khi làm việc nhóm, luôn ưu tiên an toàn - Merge thường là lựa chọn tốt hơn!

**Bài tiếp theo:** [07. Giới thiệu GitHub](./07-github-intro.md) - Học cách sử dụng GitHub để lưu trữ code trên cloud

