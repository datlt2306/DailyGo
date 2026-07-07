# Commit Message & Convention chuyên nghiệp

> **Bài trước:** [10. Pull Request và Review Code](./10-pull-request.md)  
> **Bài tiếp theo:** [12. Git Nâng cao](./12-git-advanced.md)

## 🎯 Mục tiêu học tập

-   Hiểu tại sao commit message quan trọng
-   Nắm vững Conventional Commits
-   Viết commit message rõ ràng, có ý nghĩa
-   Sử dụng commit message để tìm bug và hiểu lịch sử code

## 📘 Kiến thức lý thuyết

### Tại sao commit message quan trọng?

**Commit message** giống như "ghi chú" cho mỗi thay đổi code. Một commit message tốt giúp:

#### 1. **Hiểu lịch sử code**

**Ví dụ thực tế:**

```bash
git log --oneline

# Commit message tốt:
abc1234 feat: Thêm tính năng đăng nhập với JWT
def5678 fix: Sửa lỗi responsive trên mobile
xyz9999 docs: Cập nhật README với hướng dẫn cài đặt

# Commit message không tốt:
abc1234 update
def5678 fix
xyz9999 changes
```

Rõ ràng commit message tốt giúp các em hiểu code đã thay đổi như thế nào!

#### 2. **Tìm bug nhanh**

**Ví dụ:** Website bị lỗi đăng nhập sau khi deploy

```bash
# Với commit message tốt
git log --grep="login"
# → Tìm thấy commit liên quan ngay

# Với commit message không tốt
git log
# → Phải xem từng commit một, rất mất thời gian
```

#### 3. **Review code dễ dàng**

Khi review PR, commit message giúp reviewer:

-   Hiểu thay đổi trước khi xem code
-   Quyết định commit nào cần review kỹ
-   Đề xuất cải thiện dựa trên mục đích commit

### Conventional Commits là gì?

**Conventional Commits** là một chuẩn viết commit message, giúp commit message:

-   Nhất quán
-   Dễ đọc
-   Có thể tự động generate changelog
-   Hỗ trợ semantic versioning

**Cấu trúc:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Cấu trúc chi tiết

#### 1. **Type (Loại thay đổi)**

Các loại phổ biến:

| Type       | Mô tả                               | Ví dụ                            |
| ---------- | ----------------------------------- | -------------------------------- |
| `feat`     | Tính năng mới                       | `feat: Thêm form đăng nhập`      |
| `fix`      | Sửa lỗi                             | `fix: Sửa lỗi responsive`        |
| `docs`     | Thay đổi tài liệu                   | `docs: Cập nhật README`          |
| `style`    | Format code, không ảnh hưởng logic  | `style: Format với Prettier`     |
| `refactor` | Refactor code, không thêm tính năng | `refactor: Tách component Login` |
| `test`     | Thêm hoặc sửa test                  | `test: Thêm unit test cho Login` |
| `chore`    | Công việc bảo trì                   | `chore: Update dependencies`     |
| `perf`     | Cải thiện performance               | `perf: Optimize image loading`   |

#### 2. **Scope (Phạm vi - Tùy chọn)**

Chỉ định phần nào của code bị ảnh hưởng:

-   `feat(auth): Thêm JWT authentication`
-   `fix(ui): Sửa lỗi menu trên mobile`
-   `docs(readme): Cập nhật hướng dẫn`

#### 3. **Subject (Chủ đề)**

**Nguyên tắc:**

-   Dưới 50 ký tự
-   Dùng câu mệnh lệnh (imperative mood)
-   Không có dấu chấm cuối
-   Viết thường (trừ tên riêng)

**Ví dụ tốt:**

-   ✅ `feat: Thêm tính năng tìm kiếm`
-   ✅ `fix: Sửa lỗi validation email`
-   ✅ `docs: Cập nhật hướng dẫn cài đặt`

**Ví dụ không tốt:**

-   ❌ `feat: Đã thêm tính năng tìm kiếm` (quá khứ)
-   ❌ `fix: Sửa lỗi.` (có dấu chấm)
-   ❌ `FEAT: Thêm tính năng` (viết hoa type)

#### 4. **Body (Nội dung - Tùy chọn)**

Giải thích chi tiết:

-   Tại sao thay đổi?
-   Làm thế nào?
-   Ảnh hưởng gì?

**Ví dụ:**

```
feat(auth): Thêm JWT authentication

- Tạo middleware verifyJWT để xác thực token
- Thêm endpoint /api/auth/login để đăng nhập
- Sử dụng bcrypt để hash password
- Token hết hạn sau 24 giờ

Closes #45
```

#### 5. **Footer (Chân trang - Tùy chọn)**

Dùng cho:

-   Breaking changes
-   Link đến issue

**Ví dụ:**

```
BREAKING CHANGE: API endpoint đã thay đổi từ /api/users thành /api/v1/users

Closes #123
Refs #456
```

## 💻 Ví dụ thực hành

### Commit message tốt

```bash
# Ví dụ 1: Tính năng mới
git commit -m "feat(auth): Thêm tính năng đăng nhập với JWT

- Tạo component LoginForm
- Tích hợp với API backend /api/auth/login
- Thêm validation cho email và password
- Error handling và loading state

Closes #45"

# Ví dụ 2: Sửa lỗi
git commit -m "fix(ui): Sửa lỗi responsive trên mobile

Menu không hiển thị đúng trên màn hình nhỏ hơn 768px.
Đã sửa bằng cách thêm media query và điều chỉnh flexbox.

Closes #67"

# Ví dụ 3: Tài liệu
git commit -m "docs: Cập nhật README với hướng dẫn cài đặt

- Thêm phần Requirements
- Hướng dẫn cài đặt dependencies
- Thêm ví dụ sử dụng API

Related to #89"

# Ví dụ 4: Refactor
git commit -m "refactor(utils): Tách function validation ra file riêng

Di chuyển validateEmail và validatePassword từ component
sang file utils/validation.js để dùng lại.

No breaking changes."
```

### Commit message không tốt (Cần tránh)

```bash
# ❌ Quá ngắn, không rõ ràng
git commit -m "update"
git commit -m "fix"
git commit -m "changes"

# ❌ Dùng thì quá khứ
git commit -m "feat: Đã thêm tính năng đăng nhập"
git commit -m "fix: Đã sửa lỗi"

# ❌ Quá dài, khó đọc
git commit -m "feat: Thêm tính năng đăng nhập với email và password và validation và error handling và loading state"

# ❌ Không có type
git commit -m "Thêm tính năng đăng nhập"

# ❌ Viết hoa type
git commit -m "FEAT: Thêm tính năng đăng nhập"
```

### Sử dụng commit message để tìm code

```bash
# Tìm commit liên quan đến login
git log --grep="login" --oneline

# Tìm commit sửa bug
git log --grep="fix" --oneline

# Tìm commit của một file cụ thể
git log --oneline -- index.html

# Tìm commit theo author
git log --author="Nguyễn Văn A" --oneline

# Xem thay đổi của một commit
git show abc1234
```

### Tạo changelog tự động

Với Conventional Commits, có thể tự động generate changelog:

```bash
# Sử dụng tool như conventional-changelog
npx conventional-changelog -p angular -i CHANGELOG.md -s
```

**Kết quả:**

```markdown
# Changelog

## [1.1.0] - 2024-01-15

### Added

-   Thêm tính năng đăng nhập với JWT

### Fixed

-   Sửa lỗi responsive trên mobile

### Changed

-   Cập nhật README với hướng dẫn cài đặt
```

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Viết lại commit message**

Cho các commit message không tốt, viết lại theo Conventional Commits:

1.  `git commit -m "update"`
2.  `git commit -m "fix bug"`
3.  `git commit -m "Đã thêm tính năng search"`
4.  `git commit -m "sửa lỗi"`
5.  `git commit -m "thay đổi README"`

**Gợi ý:**

-   Xác định type phù hợp (feat, fix, docs, v.v.)
-   Viết subject rõ ràng, dùng câu mệnh lệnh
-   Thêm body nếu cần giải thích

### Level 2: Nâng cao

**Bài tập 2: Thực hành commit message trong dự án**

Tạo một dự án và thực hiện các commit sau (với message đúng chuẩn):

1.  **Initial commit:** Khởi tạo dự án với README
2.  **Feature:** Thêm tính năng đăng nhập
3.  **Feature:** Thêm tính năng tìm kiếm
4.  **Fix:** Sửa lỗi responsive
5.  **Docs:** Cập nhật README
6.  **Refactor:** Tách component Login ra file riêng
7.  **Style:** Format code với Prettier

**Yêu cầu:**

-   Mỗi commit phải có message đúng chuẩn Conventional Commits
-   Commit có body nếu cần giải thích
-   Sử dụng `git log --oneline --graph` để xem lịch sử
-   Tạo file `COMMIT_GUIDELINES.md` mô tả quy ước commit của team

**Mục tiêu:** Làm quen với viết commit message chuyên nghiệp

## 💡 Mẹo & Lỗi thường gặp

### 1. **Commit message quá ngắn**

**Vấn đề:** `git commit -m "fix"` - Không ai biết fix cái gì

**Giải pháp:** Luôn mô tả rõ ràng

```bash
git commit -m "fix(ui): Sửa lỗi menu không hiển thị trên mobile"
```

### 2. **Dùng thì quá khứ**

**Vấn đề:** `git commit -m "feat: Đã thêm tính năng"`

**Giải pháp:** Dùng câu mệnh lệnh

```bash
git commit -m "feat: Thêm tính năng đăng nhập"
```

### 3. **Type không đúng**

**Vấn đề:** Dùng `feat` cho mọi thứ

**Giải pháp:** Chọn type đúng:

-   Tính năng mới → `feat`
-   Sửa lỗi → `fix`
-   Tài liệu → `docs`
-   Format code → `style`

### 4. **Commit message quá dài**

**Vấn đề:** Subject dài quá 50 ký tự

**Giải pháp:**

-   Subject: < 50 ký tự, tóm tắt ngắn gọn
-   Body: Giải thích chi tiết nếu cần

### 5. **Không link issue**

**Giải pháp:** Luôn link issue nếu có

```bash
git commit -m "feat: Thêm tính năng đăng nhập

Closes #45
Refs #67"
```

**Áp dụng vào làm việc nhóm:**

-   **Thống nhất quy ước:** Team dùng cùng format commit message
-   **Code review:** Check commit message trong PR
-   **Tool hỗ trợ:** Có thể dùng tool để validate commit message (commitlint)
-   **Documentation:** Tạo file `CONTRIBUTING.md` với hướng dẫn commit

---

**Kết luận:** Commit message tốt giúp các em và team hiểu lịch sử code, tìm bug nhanh, và làm việc hiệu quả hơn. Hãy bắt đầu viết commit message chuyên nghiệp ngay hôm nay!

**Bài tiếp theo:** [12. Git Nâng cao](./12-git-advanced.md) - Học các lệnh Git nâng cao: stash, revert, reset, cherry-pick
