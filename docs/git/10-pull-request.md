# Pull Request, Review Code và Merge Conflict

> **Bài trước:** [09. GitHub Flow](./09-github-flow.md)  
> **Bài tiếp theo:** [11. Commit Message Best Practices](./11-commit-best-practices.md)

## 🎯 Mục tiêu học tập

-   Tạo Pull Request (PR) chuyên nghiệp với description rõ ràng
-   Hiểu cách review code và đưa feedback có ý nghĩa
-   Xử lý merge conflict trong Pull Request
-   Nắm được best practices khi làm việc với PR

## 📘 Kiến thức lý thuyết

### Pull Request là gì?

**Pull Request (PR)** là cách đề xuất thay đổi code từ branch này sang branch khác. PR cho phép team review code trước khi merge.

**Ví dụ minh họa:**

-   Bạn hoàn thành tính năng trên branch `feature/login`
-   Tạo PR để đề xuất merge vào `main`
-   Team xem code, comment, yêu cầu sửa
-   Sau khi approve, merge vào `main`

### Tại sao cần Pull Request?

#### 1. **Review code**

-   Phát hiện bug trước khi merge
-   Đảm bảo code đúng chuẩn
-   Học hỏi từ code của người khác

#### 2. **Thảo luận**

-   Bàn về cách implement
-   Đề xuất cải thiện
-   Giải thích code phức tạp

#### 3. **Lịch sử dự án**

-   Mỗi PR là một "câu chuyện" về tính năng
-   Dễ trace lại thay đổi
-   Có link đến issue liên quan

### Cấu trúc Pull Request tốt

#### 1. **Title (Tiêu đề)**

**Nguyên tắc:**

-   Ngắn gọn, dưới 60 ký tự
-   Mô tả rõ ràng thay đổi
-   Dùng câu mệnh lệnh

**Ví dụ tốt:**

-   ✅ "Thêm tính năng đăng nhập với JWT"
-   ✅ "Sửa lỗi responsive trên mobile"
-   ✅ "Cập nhật README với hướng dẫn cài đặt"

**Ví dụ không tốt:**

-   ❌ "Update"
-   ❌ "Fix"
-   ❌ "Thêm code"

#### 2. **Description (Mô tả)**

**Template mẫu:**

```markdown
## Mô tả

Thêm form đăng nhập với validation và JWT authentication.

## Thay đổi

-   Thêm component LoginForm
-   Tích hợp với API backend
-   Thêm error handling
-   Responsive trên mobile

## Screenshots

(Ảnh chụp màn hình - nếu có UI)

## Related Issues

Closes #123
Related to #456
```

#### 3. **Labels và Assignees**

-   Labels: `feature`, `bugfix`, `documentation`
-   Assignees: Người review code
-   Milestone: Nếu có

### Review Code - Best Practices

#### Cho Reviewer (Người review):

1.  **Review nhanh (trong 24-48 giờ)**
2.  **Comment constructive (xây dựng)**

    -   ✅ "Có thể tối ưu function này bằng cách..."
    -   ❌ "Code này sai rồi!"

3.  **Praise code tốt**

    -   "Cách implement này hay!"

4.  **Đề xuất thay vì chỉ trích**
5.  **Approve khi code OK**

#### Cho Author (Người tạo PR):

1.  **Tự review code trước**
2.  **Sửa ngay khi có comment**
3.  **Giải thích nếu cần**
4.  **Cảm ơn reviewer**

### Merge Conflict trong PR

**Conflict xảy ra khi:**

-   Main branch có code mới
-   PR branch và main cùng sửa một file
-   Git không thể tự động merge

**Cách xử lý:**

```bash
# Bước 1: Update branch với main mới
git checkout feature/your-branch
git fetch origin
git merge origin/main

# Hoặc rebase
git rebase origin/main

# Bước 2: Resolve conflict
# Mở file conflict, sửa
git add .
git commit -m "Resolve merge conflict"
git push origin feature/your-branch
```

**GitHub cũng có thể resolve conflict trên web interface!**

## 💻 Ví dụ thực hành

### Tạo Pull Request chuyên nghiệp

```bash
# Bước 1: Hoàn thành code trên branch
git checkout -b feature/add-search
# ... làm việc và commit
git push -u origin feature/add-search

# Bước 2: Trên GitHub, click "Compare & pull request"
```

**Điền PR:**

**Title:**

```
Thêm tính năng tìm kiếm sản phẩm
```

**Description:**

```markdown
## Mô tả

Thêm tính năng tìm kiếm sản phẩm với autocomplete và filtering.

## Thay đổi

-   ✅ Thêm component SearchBox
-   ✅ Tích hợp với API backend `/api/products/search`
-   ✅ Thêm debounce để tối ưu performance
-   ✅ Responsive trên mobile
-   ✅ Error handling và loading state

## Screenshots

![Search feature](screenshot.png)

## Testing

-   [x] Test trên Chrome
-   [x] Test trên Mobile
-   [x] Test với empty result
-   [x] Test error handling

## Related Issues

Closes #45
```

**Assignees:** Chọn 1-2 người review

**Labels:** `feature`, `frontend`

### Review và comment

**Reviewer comment:**

````markdown
@username Cảm ơn PR này!

Có một số điểm cần xem xét:

1. Function `handleSearch` có thể tách ra file riêng để dễ test
    ```javascript
    // Suggestion: Move to utils/search.js
    ```
````

2. Thiếu propTypes cho component SearchBox

    ```javascript
    SearchBox.propTypes = {
        onSearch: PropTypes.func.isRequired,
    };
    ```

3. Có thể thêm unit test cho search function

Những điểm khác đều OK! 👍

````

**Author reply:**
```markdown
Cảm ơn review! Đã sửa:
- ✅ Tách function `handleSearch` ra file utils
- ✅ Thêm PropTypes
- ✅ Unit test đang viết, sẽ push sau

@reviewer Có thể xem lại không?
````

### Resolve conflict trên GitHub

**Nếu có conflict khi merge:**

1.  GitHub hiện button "Resolve conflicts"
2.  Click vào, GitHub mở editor
3.  Chọn version muốn giữ hoặc sửa thủ công
4.  Click "Mark as resolved"
5.  Click "Commit merge"

**Hoặc resolve local:**

```bash
git checkout feature/add-search
git fetch origin
git merge origin/main
# Resolve conflict local
git add .
git commit -m "Resolve merge conflict"
git push origin feature/add-search
```

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Tạo PR đầu tiên**

1.  Tạo repository trên GitHub
2.  Clone về máy, tạo file `index.html` cơ bản
3.  Push lên main
4.  Tạo branch `feature/add-styles`
5.  Thêm file `style.css` với styling đơn giản
6.  Push branch lên GitHub
7.  Tạo Pull Request với:

    -   Title rõ ràng
    -   Description đầy đủ
    -   Screenshot (nếu có)

8.  Merge PR vào main

**Mục tiêu:** Hoàn thành đầy đủ quy trình PR

### Level 2: Nâng cao

**Bài tập 2: Review code thực tế**

Team 3 người, mỗi người làm một PR:

**Người 1:** Tạo PR thêm header component
**Người 2:** Review PR của người 1, comment và approve
**Người 3:** Tạo PR thêm footer component

**Yêu cầu:**

-   Mỗi PR phải có description đầy đủ
-   Reviewer phải comment ít nhất 2 điểm (tích cực hoặc đề xuất cải thiện)
-   Author phải reply comment và sửa (nếu cần)
-   Sau khi approve, merge PR
-   Tạo file `REVIEW_NOTES.md` tổng hợp:
    -   Những điểm học được từ review
    -   Best practices cho PR
    -   Common issues và cách tránh

**Mục tiêu:** Hiểu được quy trình review code chuyên nghiệp

## 💡 Mẹo & Lỗi thường gặp

### 1. **PR quá lớn, khó review**

**Vấn đề:** 50+ file thay đổi, reviewer không biết bắt đầu

**Giải pháp:**

-   Tách thành nhiều PR nhỏ
-   Mỗi PR chỉ làm 1 tính năng
-   PR lý tưởng: < 20 file thay đổi

### 2. **Description quá ngắn hoặc không có**

**Vấn đề:** Reviewer không hiểu PR làm gì

**Giải pháp:** Luôn điền description với:

-   Mô tả rõ ràng
-   List thay đổi
-   Screenshots (nếu có UI)
-   Link issue liên quan

### 3. **Không reply comment của reviewer**

**Vấn đề:** Reviewer không biết các em đã đọc comment chưa

**Giải pháp:** Luôn reply:

-   "Cảm ơn review!"
-   "Đã sửa, xem lại nhé"
-   Hoặc giải thích nếu không đồng ý

### 4. **Merge conflict không biết xử lý**

**Giải pháp:**

-   Update branch thường xuyên với main
-   Resolve conflict ngay khi có
-   Dùng GitHub web interface nếu không quen command line

### 5. **Review quá khắt khe hoặc quá dễ dãi**

**Nguyên tắc:**

-   **Khắt khe:** Chỉ trích không xây dựng → Không tốt
-   **Dễ dãi:** Approve mọi PR → Code chất lượng kém
-   **Cân bằng:** Review kỹ nhưng constructive → Tốt nhất

**Áp dụng vào làm việc nhóm:**

-   **PR size:** Giữ PR nhỏ, dễ review
-   **Review time:** Phản hồi trong 24-48 giờ
-   **Communication:** Comment rõ ràng, lịch sự
-   **Approval:** Cần ít nhất 1 approval trước khi merge (thiết lập branch protection)

---

**Kết luận:** Pull Request là cách chuyên nghiệp để review và merge code. Nắm vững quy trình PR giúp team làm việc hiệu quả và đảm bảo chất lượng code!

**Bài tiếp theo:** [11. Commit Message Best Practices](./11-commit-best-practices.md) - Học cách viết commit message chuyên nghiệp
