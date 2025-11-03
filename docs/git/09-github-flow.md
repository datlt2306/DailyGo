# GitHub Flow – quy trình teamwork chuẩn

> **Bài trước:** [08. Làm việc nhóm với GitHub](./08-collaboration.md)  
> **Bài tiếp theo:** [10. Pull Request và Review Code](./10-pull-request.md)

## 🎯 Mục tiêu học tập

-   Hiểu GitHub Flow là gì và các bước trong quy trình
-   Thực hành tạo branch từ main, phát triển tính năng, tạo Pull Request
-   Nắm được quy tắc vàng: không commit trực tiếp vào main
-   Áp dụng GitHub Flow vào dự án thực tế

## 📘 Kiến thức lý thuyết

### GitHub Flow là gì?

**GitHub Flow** là một quy trình làm việc nhóm đơn giản và hiệu quả, được GitHub đề xuất. Quy trình này phù hợp với các dự án có deploy thường xuyên.

**Đặc điểm:**

-   Đơn giản, dễ hiểu
-   Phù hợp với dự án nhỏ và vừa
-   Không có branch phức tạp (như Git Flow)
-   Main branch luôn deploy được

### Quy trình GitHub Flow (6 bước)

```
1. Tạo branch từ main
   ↓
2. Phát triển tính năng trên branch
   ↓
3. Commit và push lên GitHub
   ↓
4. Tạo Pull Request (PR)
   ↓
5. Review code và thảo luận
   ↓
6. Merge vào main và deploy
```

### Chi tiết từng bước

#### Bước 1: Tạo branch từ main

**Quy tắc vàng:** Luôn tạo branch mới từ main trước khi bắt đầu làm việc.

```bash
# Đảm bảo main đã cập nhật
git checkout main
git pull origin main

# Tạo branch mới
git checkout -b feature/add-login-form
```

**Quy ước đặt tên branch:**

-   `feature/ten-tinh-nang`: Tính năng mới
-   `bugfix/ten-loi`: Sửa lỗi
-   `hotfix/ten-sua`: Sửa khẩn cấp
-   `docs/cap-nhat`: Cập nhật tài liệu

#### Bước 2: Phát triển tính năng

-   Làm việc bình thường trên branch
-   Commit thường xuyên với message rõ ràng
-   Test code trước khi push

```bash
# Làm việc, commit nhiều lần
git add .
git commit -m "Thêm form đăng nhập"
git commit -m "Thêm validation cho form"
```

#### Bước 3: Push lên GitHub

```bash
# Push branch lên GitHub
git push -u origin feature/add-login-form
```

**Lưu ý:** Push branch riêng, không push trực tiếp vào main!

#### Bước 4: Tạo Pull Request

-   Vào GitHub → Repository → Click "New Pull Request"
-   Chọn branch source (branch của bạn) và target (main)
-   Điền mô tả về thay đổi
-   Gán reviewer (người review code)
-   Click "Create Pull Request"

**Pull Request mẫu:**

```
Title: Thêm form đăng nhập
Description:
- Thêm HTML form với các trường email và password
- Thêm validation client-side
- Responsive trên mobile

Related issue: #123
```

#### Bước 5: Review và thảo luận

-   Reviewer xem code, comment, đề xuất sửa đổi
-   Author sửa code, push thêm commit
-   Thảo luận đến khi mọi người đồng ý

**Best practices:**

-   Reviewer nên review trong vòng 24-48 giờ
-   Comment rõ ràng, constructive
-   Author nên sửa ngay khi có comment

#### Bước 6: Merge và deploy

-   Sau khi approve, merge PR vào main
-   Xóa branch (GitHub có tùy chọn tự động)
-   Deploy code mới lên production

### Tại sao dùng GitHub Flow?

#### ✅ Ưu điểm:

1.  **Đơn giản:** Dễ học, dễ áp dụng
2.  **Nhanh:** Tính năng được merge nhanh
3.  **An toàn:** Main branch luôn ổn định
4.  **Review code:** Đảm bảo chất lượng code
5.  **Lịch sử:** Mỗi PR là một "câu chuyện" về tính năng

#### ⚠️ Nhược điểm:

1.  **Không phù hợp dự án lớn:** Cần branch phức tạp hơn (Git Flow)
2.  **Cần discipline:** Mọi người phải tuân thủ quy trình

### So sánh với Git Flow

| GitHub Flow              | Git Flow                                      |
| ------------------------ | --------------------------------------------- |
| Đơn giản, 1 branch chính | Phức tạp, nhiều branch (dev, release, hotfix) |
| Phù hợp dự án nhỏ/vừa    | Phù hợp dự án lớn, có nhiều version           |
| Main luôn deploy được    | Có branch develop riêng                       |
| Dễ học                   | Khó học hơn                                   |

**Khuyến nghị:** Người mới nên bắt đầu với GitHub Flow

## 💻 Ví dụ thực hành

### Scenario: Thêm tính năng "Tìm kiếm sản phẩm"

```bash
# Bước 1: Cập nhật main
git checkout main
git pull origin main

# Bước 2: Tạo branch mới
git checkout -b feature/product-search

# Bước 3: Phát triển tính năng
# Tạo file search.js
echo "function searchProduct() { ... }" > search.js
git add search.js
git commit -m "Thêm function tìm kiếm sản phẩm"

# Tạo file search.html
echo "<input id='search' />" >> search.html
git add search.html
git commit -m "Thêm UI tìm kiếm"

# Bước 4: Test và commit cuối
git add .
git commit -m "Hoàn thành tính năng tìm kiếm"

# Bước 5: Push lên GitHub
git push -u origin feature/product-search
```

**Sau đó trên GitHub:**

1.  Vào repository
2.  GitHub sẽ hiện banner "feature/product-search had recent pushes"
3.  Click "Compare & pull request"
4.  Điền thông tin PR
5.  Click "Create pull request"

### Review và sửa code

```bash
# Tình huống: Reviewer yêu cầu sửa

# Bước 1: Sửa code trên branch
git checkout feature/product-search

# Sửa file theo comment
# ...

# Bước 2: Commit và push
git add .
git commit -m "Sửa theo review: thêm error handling"
git push origin feature/product-search

# PR sẽ tự động cập nhật, reviewer sẽ thấy thay đổi mới
```

### Merge Pull Request

**Trên GitHub web:**

1.  Vào PR → Xem lại code và comment
2.  Nếu OK, click "Merge pull request"
3.  Chọn merge type:


    -   **Create a merge commit**: Giữ nguyên lịch sử (khuyến nghị)
    -   **Squash and merge**: Gom tất cả commit thành 1
    -   **Rebase and merge**: Rebase lên main (lịch sử thẳng)

4.  Click "Confirm merge"
5.  Xóa branch (nếu muốn)

**Sau khi merge:**

```bash
# Cập nhật main local
git checkout main
git pull origin main

# Xóa branch local (đã merge xong)
git branch -d feature/product-search
```

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Thực hành GitHub Flow đơn giản**

1.  Tạo repository trên GitHub tên `github-flow-practice`
2.  Clone về máy và tạo file `index.html` cơ bản
3.  Commit và push lên main
4.  Tạo branch `feature/add-styles`
5.  Thêm file `style.css` và commit
6.  Push branch lên GitHub
7.  Tạo Pull Request trên GitHub
8.  Merge PR vào main
9.  Pull code mới về máy và xác nhận có file `style.css`

**Mục tiêu:** Hoàn thành đầy đủ quy trình GitHub Flow

### Level 2: Nâng cao

**Bài tập 2: Làm việc nhóm với GitHub Flow**

Tạo team 2-3 người, mỗi người làm một tính năng:

**Người 1:**

-   Tạo branch `feature/header`
-   Thêm component header
-   Tạo PR

**Người 2:**

-   Tạo branch `feature/footer`
-   Thêm component footer
-   Tạo PR

**Người 3:**

-   Review PR của 2 người kia
-   Comment và yêu cầu sửa (nếu cần)
-   Approve và merge PR

**Yêu cầu:**

-   Mỗi người phải tạo branch từ main mới nhất
-   Mỗi PR phải có description rõ ràng
-   Có ít nhất 1 lần review và sửa code
-   Sau khi merge, main phải có đủ tất cả tính năng

**Mục tiêu:** Hiểu được workflow thực tế khi làm việc nhóm

## 💡 Mẹo & Lỗi thường gặp

### 1. **Quên cập nhật main trước khi tạo branch**

**Vấn đề:** Branch mới dựa trên main cũ, thiếu code mới

**Giải pháp:**

```bash
# Luôn pull main trước
git checkout main
git pull origin main
git checkout -b feature/new
```

### 2. **Push nhầm vào main**

**Vấn đề:** Commit trực tiếp vào main, vi phạm quy trình

**Giải pháp:**

```bash
# Tạo branch từ commit hiện tại
git branch feature/fix
# Reset main về commit trước
git reset --hard origin/main
# Chuyển sang branch mới (commit vẫn còn)
git checkout feature/fix
```

**Cách tránh:** Cấu hình branch protection trên GitHub (chỉ merge qua PR)

### 3. **PR quá lớn, khó review**

**Vấn đề:** PR có 50+ file thay đổi, reviewer không biết bắt đầu từ đâu

**Giải pháp:**

-   Tách thành nhiều PR nhỏ
-   Mỗi PR chỉ làm 1 tính năng
-   Commit message rõ ràng

**Nguyên tắc:** PR nên review được trong 1 giờ

### 4. **Không biết khi nào nên tạo PR**

**Quy tắc:**

-   Tính năng đã hoàn thành và test
-   Code đã clean, không có console.log thừa
-   Đã tự review lại code của mình
-   Có description rõ ràng

**KHÔNG tạo PR khi:**

-   Code đang làm dở (dùng draft PR)
-   Code chưa test
-   Có TODO hoặc comment tạm thời

### 5. **Conflict khi merge PR**

**Nguyên nhân:** Main đã có code mới trong lúc bạn làm branch

**Giải pháp:**

```bash
# Update branch với main mới nhất
git checkout feature/your-branch
git fetch origin
git merge origin/main
# Hoặc rebase
git rebase origin/main

# Resolve conflict nếu có
# Push lại
git push origin feature/your-branch
# PR sẽ tự động update
```

**Áp dụng vào làm việc nhóm:**

-   **Quy tắc team:** Thống nhất dùng GitHub Flow
-   **Code review:** Mỗi PR phải có ít nhất 1 người review
-   **Communication:** Comment trên PR khi có vấn đề
-   **Merge strategy:** Thống nhất dùng "Create a merge commit" hay "Squash and merge"

---

**Kết luận:** GitHub Flow là quy trình đơn giản nhưng mạnh mẽ. Nắm vững quy trình này giúp bạn làm việc nhóm hiệu quả và chuyên nghiệp. Nhớ quy tắc vàng: Không bao giờ commit trực tiếp vào main!

**Bài tiếp theo:** [10. Pull Request và Review Code](./10-pull-request.md) - Học cách tạo PR chuyên nghiệp và review code hiệu quả
