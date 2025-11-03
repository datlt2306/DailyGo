# Tag và phát hành phiên bản (Release)

> **Bài trước:** [13. Lỗi thường gặp và khắc phục](./13-common-errors.md)  
> **Bài tiếp theo:** [15. Mini Project](./15-mini-project.md)

## 🎯 Mục tiêu học tập

-   Hiểu tag là gì và tại sao cần tag
-   Tạo và quản lý tag trong Git
-   Tạo release trên GitHub
-   Hiểu semantic versioning (SemVer)

## 📘 Kiến thức lý thuyết

### Git Tag là gì?

**Tag** là cách đánh dấu một commit cụ thể, thường dùng để đánh dấu version của phần mềm.

**Ví dụ minh họa:**
-   Version 1.0.0 của website
-   Version 2.5.3 của ứng dụng
-   Release v2024.01.15

**So sánh Tag vs Branch:**

| Tag                              | Branch                           |
| -------------------------------- | -------------------------------- |
| Đánh dấu một điểm cố định          | Có thể di chuyển, phát triển      |
| Không thay đổi sau khi tạo          | Thay đổi khi commit mới          |
| Dùng để release version           | Dùng để phát triển tính năng      |
| `git tag v1.0.0`                  | `git branch feature/new`         |

### Tại sao cần Tag?

#### 1. **Đánh dấu version**

**Ví dụ thực tế:**
-   Website version 1.0.0 - Release đầu tiên
-   Website version 1.1.0 - Thêm tính năng mới
-   Website version 2.0.0 - Thay đổi lớn, breaking changes

#### 2. **Deploy version cụ thể**

**Ví dụ:** Production đang chạy version 1.5.0, muốn rollback về 1.4.0:
```bash
git checkout v1.4.0
# Deploy code version 1.4.0
```

#### 3. **Tạo Release trên GitHub**

-   GitHub có tính năng Release dựa trên tag
-   Có thể đính kèm file binary, changelog
-   Users có thể download version cụ thể

### Semantic Versioning (SemVer)

**Semantic Versioning** là quy ước đặt tên version: `MAJOR.MINOR.PATCH`

-   **MAJOR** (1.0.0): Thay đổi lớn, breaking changes
-   **MINOR** (0.1.0): Thêm tính năng mới, backward compatible
-   **PATCH** (0.0.1): Sửa lỗi, không thay đổi API

**Ví dụ:**
-   `1.0.0` → `1.1.0`: Thêm tính năng mới
-   `1.1.0` → `1.1.1`: Sửa lỗi
-   `1.1.1` → `2.0.0`: Breaking changes

**Pre-release versions:**
-   `1.0.0-alpha.1`: Alpha version (đang test)
-   `1.0.0-beta.1`: Beta version (gần release)
-   `1.0.0-rc.1`: Release candidate (sẵn sàng release)

## 💻 Ví dụ thực hành

### Tạo tag cơ bản

```bash
# Tạo lightweight tag (không có message)
git tag v1.0.0

# Tạo annotated tag (có message, khuyến nghị)
git tag -a v1.0.0 -m "Release version 1.0.0"

# Tag commit cụ thể
git tag -a v1.0.0 abc1234 -m "Release version 1.0.0"
```

**So sánh:**
-   **Lightweight tag:** Chỉ là pointer đến commit
-   **Annotated tag:** Có metadata (người tạo, ngày, message)

**Khuyến nghị:** Luôn dùng annotated tag để có thông tin đầy đủ

### Xem và quản lý tag

```bash
# Xem danh sách tag
git tag

# Xem tag cụ thể
git show v1.0.0

# Xem tag theo pattern
git tag -l "v1.*"

# Xóa tag local
git tag -d v1.0.0

# Push tag lên GitHub
git push origin v1.0.0

# Push tất cả tag
git push origin --tags
```

### Checkout tag

```bash
# Checkout tag (sẽ ở trạng thái detached HEAD)
git checkout v1.0.0

# Tạo branch từ tag
git checkout -b release/v1.0.0 v1.0.0
```

### Tạo Release trên GitHub

**Trên GitHub web:**

1.   Vào repository → Releases → "Draft a new release"
2.   Chọn tag (hoặc tạo tag mới):
    -   Tag: `v1.0.0`
    -   Target: `main` (branch)
3.   Điền thông tin:
    -   **Title:** "Version 1.0.0 - First Release"
    -   **Description:** 
        ```markdown
        ## What's New
        - ✅ Initial release
        - ✅ User authentication
        - ✅ Product listing
        - ✅ Shopping cart
        
        ## Installation
        ```bash
        npm install
        npm start
        ```
        
        ## Full Changelog
        See [CHANGELOG.md](CHANGELOG.md)
        ```
4.   Đính kèm file (nếu có):
    -   Source code (zip, tar.gz)
    -   Binary files
5.   Click "Publish release"

**Hoặc dùng GitHub CLI:**
```bash
gh release create v1.0.0 \
  --title "Version 1.0.0" \
  --notes "Release notes here"
```

### Workflow tạo Release

```bash
# Bước 1: Đảm bảo code sẵn sàng
git checkout main
git pull origin main

# Bước 2: Test code
npm test

# Bước 3: Cập nhật version trong package.json (nếu có)
# "version": "1.0.0"

# Bước 4: Commit version update
git add package.json
git commit -m "chore: Bump version to 1.0.0"

# Bước 5: Tạo tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Bước 6: Push code và tag
git push origin main
git push origin v1.0.0

# Bước 7: Tạo Release trên GitHub (web interface)
```

### Changelog tự động

Với Conventional Commits, có thể tự động generate changelog:

```bash
# Dùng tool như standard-version
npm install --save-dev standard-version

# Tạo script trong package.json
"scripts": {
  "release": "standard-version"
}

# Chạy
npm run release
# Tự động:
# - Tăng version trong package.json
# - Tạo tag
# - Generate CHANGELOG.md
```

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Tạo tag và release đầu tiên**

1.   Tạo repository với ít nhất 3 commit
2.   Tạo tag `v1.0.0` cho commit mới nhất
3.   Push tag lên GitHub
4.   Tạo Release trên GitHub với:
    -   Title: "Version 1.0.0"
    -   Description: Mô tả các tính năng chính
5.   Download release và xác nhận

**Mục tiêu:** Hoàn thành quy trình tạo release

### Level 2: Nâng cao

**Bài tập 2: Quản lý version với semantic versioning**

Tạo một dự án và thực hiện:

1.   **Version 1.0.0:** Release đầu tiên
2.   **Version 1.1.0:** Thêm tính năng mới
3.   **Version 1.1.1:** Sửa lỗi
4.   **Version 2.0.0:** Breaking changes

**Yêu cầu:**
-   Mỗi version có tag và release trên GitHub
-   Mỗi release có changelog rõ ràng
-   Sử dụng semantic versioning đúng
-   Tạo file `VERSIONING_GUIDE.md` giải thích quy tắc versioning của team

**Mục tiêu:** Hiểu và áp dụng semantic versioning trong thực tế

## 💡 Mẹo & Lỗi thường gặp

### 1. **Quên push tag lên GitHub**

**Vấn đề:** Tag chỉ có local, không có trên GitHub

**Giải pháp:**
```bash
# Push tag cụ thể
git push origin v1.0.0

# Hoặc push tất cả tag
git push origin --tags
```

### 2. **Tag trùng tên**

**Vấn đề:** Tạo tag nhưng commit đã có tag rồi

**Giải pháp:**
```bash
# Xóa tag local
git tag -d v1.0.0

# Xóa tag trên GitHub
git push origin :refs/tags/v1.0.0

# Tạo lại tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### 3. **Không biết version nào đang chạy trên production**

**Giải pháp:**
-   Luôn tag khi deploy
-   Ghi lại version trong file config
-   Tạo endpoint `/api/version` trả về version hiện tại

### 4. **Version không tuân theo SemVer**

**Nguyên tắc:**
-   MAJOR: Breaking changes
-   MINOR: Tính năng mới, backward compatible
-   PATCH: Sửa lỗi

**Ví dụ:**
-   ✅ `1.0.0` → `1.1.0`: Thêm API endpoint mới (không ảnh hưởng API cũ)
-   ✅ `1.1.0` → `1.1.1`: Sửa bug
-   ✅ `1.1.1` → `2.0.0`: Thay đổi API endpoint (breaking)

### 5. **Release notes quá ngắn hoặc không có**

**Giải pháp:** Luôn viết release notes với:
-   What's new (tính năng mới)
-   Bug fixes (lỗi đã sửa)
-   Breaking changes (nếu có)
-   Migration guide (nếu có)

**Áp dụng vào làm việc nhóm:**
-   **Quy ước versioning:** Team thống nhất dùng SemVer
-   **Release process:** Có checklist rõ ràng trước khi release
-   **Changelog:** Luôn cập nhật changelog cho mỗi release
-   **Communication:** Thông báo team khi có release mới

---

**Kết luận:** Tag và Release giúp bạn quản lý version code một cách chuyên nghiệp. Semantic Versioning giúp users hiểu được mức độ thay đổi giữa các version!

**Bài tiếp theo:** [15. Mini Project](./15-mini-project.md) - Dự án cuối khóa: Làm việc nhóm theo GitHub Flow

