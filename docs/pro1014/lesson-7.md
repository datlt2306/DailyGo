# Buổi 6 – Giới thiệu Git & teamwork

> **Bài trước:** [Buổi 5: Quản lý dự án với ClickUp & Lập kế hoạch triển khai](./lesson-5.md)  
> **Bài tiếp theo:** [Buổi 7: Theo dõi tiến độ lần 1](./lesson-7.md)

Xin chào các em! 🎉

Hôm nay chúng ta sẽ học một công cụ cực kỳ quan trọng trong làm việc nhóm: **Git và GitHub**! Đây là công cụ mà các em sẽ dùng suốt đời khi đi làm, nên hãy học kỹ nhé! 😊

## 🎯 Mục tiêu học tập

Sau buổi học hôm nay, các em sẽ:

-   ✅ Hiểu khái niệm Git và GitHub
-   ✅ Biết cách sử dụng các lệnh Git cơ bản: clone, add, commit, push, pull
-   ✅ Hiểu cách làm việc nhóm với Git: branch, merge, conflict
-   ✅ Tạo được repo GitHub và commit code đầu tiên
-   ✅ Nắm được quy tắc đặt tên commit và issue

---

## 📋 Nội dung chính

### 1. Git là gì? GitHub là gì? Tại sao lại cần?

Các em có bao giờ gặp tình huống này không: "Ồ, code của mình bị mất rồi!" hoặc "Code của mình và bạn bị trùng nhau, không biết dùng cái nào!" 😅

Đó chính là lý do tại sao chúng ta cần **Git**!

#### **Git là gì?**

**Git** là một hệ thống quản lý phiên bản (Version Control System) giúp:

-   ✅ Theo dõi mọi thay đổi trong code
-   ✅ Làm việc nhóm hiệu quả (không bị conflict)
-   ✅ Quay lại phiên bản cũ nếu có lỗi (như "Undo" nhưng mạnh hơn nhiều!)
-   ✅ Xem ai đã sửa gì, khi nào sửa

**Ví dụ:** Nếu em code xong nhưng bị lỗi, có thể quay lại code cũ chỉ bằng 1 lệnh! 😊

#### **GitHub là gì?**

**GitHub** là nền tảng lưu trữ code trên cloud, như "Google Drive" cho code:

-   ✅ Lưu trữ code trên internet (không lo mất code)
-   ✅ Làm việc nhóm dễ dàng (ai cũng có thể xem và sửa)
-   ✅ Hỗ trợ code review, issue tracking
-   ✅ **Miễn phí** cho public repo (đủ dùng cho dự án môn học)

#### **Tại sao cần Git cho dự án?**

-   ✅ Theo dõi tiến độ từng thành viên (ai commit gì, khi nào)
-   ✅ Tránh mất code (code được lưu trên GitHub)
-   ✅ Làm việc nhóm không bị conflict (mỗi người làm trên branch riêng)
-   ✅ Thầy dễ dàng review code (xem code trực tiếp trên GitHub)

### 2. Cài đặt và cấu hình Git (10 phút)

#### **Cài đặt Git:**

-   Windows: Tải Git for Windows
-   Mac: `brew install git` hoặc tải từ website
-   Linux: `sudo apt install git`

#### **Cấu hình Git:**

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Các lệnh Git cơ bản (25 phút)

#### **Lệnh cơ bản:**

**1. Khởi tạo repo:**

```bash
git init                    # Tạo repo local
git remote add origin [URL] # Kết nối với GitHub
```

**2. Thêm và commit:**

```bash
git add .                   # Thêm tất cả file thay đổi
git add [file]              # Thêm file cụ thể
git commit -m "message"     # Commit với message
git push origin main        # Đẩy code lên GitHub
```

**3. Lấy code mới nhất:**

```bash
git pull origin main        # Lấy code từ GitHub về
```

**4. Xem trạng thái:**

```bash
git status                  # Xem file đã thay đổi
git log                     # Xem lịch sử commit
```

### 4. Làm việc nhóm với Git (20 phút)

#### **Branch (Nhánh):**

-   Mỗi thành viên làm việc trên branch riêng
-   Tránh conflict khi làm việc đồng thời

**Các lệnh branch:**

```bash
git branch                  # Xem danh sách branch
git branch [tên-branch]     # Tạo branch mới
git checkout [tên-branch]   # Chuyển sang branch
git merge [tên-branch]      # Gộp branch vào branch hiện tại
```

#### **Quy trình làm việc nhóm:**

1. Clone repo về máy
2. Tạo branch riêng: `git checkout -b feature/my-feature`
3. Làm việc trên branch đó
4. Commit và push lên branch riêng
5. Tạo Pull Request để merge vào main

### 5. Quy tắc đặt tên commit và issue (15 phút)

#### **Format commit message (Conventional Commits):**

```
[type]: [mô tả ngắn gọn]

[body - mô tả chi tiết nếu cần]
```

**Các type:**

-   `feat`: Tính năng mới
-   `fix`: Sửa lỗi
-   `docs`: Cập nhật tài liệu
-   `style`: Format code (không ảnh hưởng logic)
-   `refactor`: Refactor code
-   `test`: Thêm test
-   `chore`: Công việc khác (setup, config)

**Ví dụ:**

```
feat: thêm chức năng đặt tour

- Thêm form đặt tour
- Validate thông tin khách hàng
- Lưu booking vào database
```

#### **Quy tắc đặt tên issue:**

-   Format: `[Module] - [Mô tả ngắn]`
-   Ví dụ: `[Booking] - Thêm chức năng hủy đơn đặt tour`
-   Gán label: `bug`, `feature`, `enhancement`

---

## 🧠 Kiến thức trọng tâm / Giải thích

### Git Workflow cơ bản

```
Working Directory → Staging Area → Local Repository → Remote Repository (GitHub)
     (làm việc)      (git add)      (git commit)        (git push)
```

### Các trạng thái file trong Git

1. **Untracked**: File mới, chưa được Git theo dõi
2. **Modified**: File đã thay đổi, chưa add
3. **Staged**: File đã add, sẵn sàng commit
4. **Committed**: File đã commit

### Branch strategy cho dự án

#### **Mô hình đơn giản:**

-   `main`: Code chính, ổn định
-   `develop`: Code đang phát triển
-   `feature/[tên-feature]`: Branch cho từng tính năng

#### **Ví dụ:**

```
main
  └── develop
       ├── feature/booking
       ├── feature/tour-management
       └── feature/user-profile
```

### Xử lý conflict (xung đột)

Khi 2 người cùng sửa 1 file và merge lại:

1. Git báo conflict
2. Mở file, tìm dòng `<<<<<<<`, `=======`, `>>>>>>>`
3. Chọn code cần giữ, xóa các marker
4. Add và commit lại

---

## 📘 Bài tập

### Tạo repo GitHub public + commit đầu tiên

#### **Yêu cầu:**

1. **Tạo repo trên GitHub:**

    - Tên repo: `[tên-nhóm]-tour-management` (ví dụ: `team1-tour-management`)
    - Public repo
    - Thêm README.md khi tạo

2. **Clone repo về máy:**

    ```bash
    git clone [URL-repo]
    cd [tên-repo]
    ```

3. **Tạo cấu trúc thư mục:**

    ```
    [tên-repo]/
    ├── README.md
    ├── docs/
    │   ├── Spec_Module_[Tên module].pdf
    │   └── ERD_Module_[Tên module].pdf
    ├── src/
    │   ├── css/
    │   ├── js/
    │   └── images/
    └── database/
        └── schema.sql
    ```

4. **Commit đầu tiên:**

    - Thêm README.md với thông tin nhóm, module
    - Thêm folder docs với Spec và ERD
    - Commit với message: `docs: thêm spec và ERD module`

5. **Push lên GitHub:**
    ```bash
    git add .
    git commit -m "docs: thêm spec và ERD module"
    git push origin main
    ```

#### **Nội dung README.md:**

```markdown
# [Tên Module] - Tour Management System

## Thông tin nhóm

-   Tên nhóm: [Tên nhóm]
-   Thành viên:
    -   [Tên] - [Vai trò]
    -   [Tên] - [Vai trò]

## Module phụ trách

[Tên module]

## Mô tả

[Mô tả ngắn gọn về module]

## Tài liệu

-   Spec: `docs/Spec_Module_[Tên module].pdf`
-   ERD: `docs/ERD_Module_[Tên module].pdf`
```

### Deadline

Nộp link repo GitHub trước buổi 7

---

## 📦 Kết quả mong đợi sau buổi học

-   ✅ Hiểu được cách sử dụng Git cơ bản
-   ✅ Tạo được repo GitHub và commit code đầu tiên
-   ✅ Nắm được quy tắc đặt tên commit và issue
-   ✅ Biết cách làm việc nhóm với branch
-   ✅ Sẵn sàng bắt đầu code ở tuần 3

---

## 💬 Gợi ý giảng viên

### ⏱ Thời lượng gợi ý

-   Giới thiệu Git & GitHub: 20 phút
-   Cài đặt: 10 phút
-   Lệnh cơ bản: 25 phút
-   Làm việc nhóm: 20 phút
-   Quy tắc đặt tên: 15 phút
-   Tổng: ~90 phút

### 💡 Tips hướng dẫn

1. **Thực hành trực tiếp**: Cho sinh viên thực hành ngay trên máy
2. **Giải thích rõ conflict**: Nhiều sinh viên gặp vấn đề với conflict
3. **Khuyến khích commit thường xuyên**: Commit nhỏ, thường xuyên tốt hơn commit lớn
4. **Gợi ý tool**: GitHub Desktop cho người mới bắt đầu (dễ dùng hơn command line)

### 🔍 Câu hỏi thường gặp

-   **Q: "Em không cài được Git trên máy, phải làm sao?"**

    -   A: Có thể dùng GitHub Desktop hoặc hỏi giảng viên/TA để được hỗ trợ.

-   **Q: "Nếu em commit nhầm, có thể sửa không?"**

    -   A: Có thể dùng `git commit --amend` hoặc `git reset` (cẩn thận với reset).

-   **Q: "Em và bạn cùng sửa 1 file, bị conflict, phải làm sao?"**
    -   A: Git sẽ báo conflict, mở file và sửa thủ công, sau đó commit lại.

### 📝 Checklist đánh giá repo

Giảng viên có thể check repo của từng nhóm:

-   [ ] Repo public, dễ truy cập
-   [ ] Có README.md với thông tin đầy đủ
-   [ ] Có folder docs với Spec và ERD
-   [ ] Cấu trúc thư mục hợp lý
-   [ ] Commit message đúng format
-   [ ] Ít nhất 1 commit thành công

---

---

**📌 Lưu ý:** Tuần 3 sẽ bắt đầu code! Các nhóm nhớ hoàn thành setup Git và repo GitHub trước buổi 7 nhé!

Chúc các em học tốt! 🎉
