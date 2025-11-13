# Buổi 7 – Giới thiệu Git & teamwork

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

### 2. Cài đặt và cấu hình Git

#### **Cài đặt Git:**

-   Windows: Tải Git for Windows
-   Mac: `brew install git` hoặc tải từ website
-   Linux: `sudo apt install git`

#### **Cấu hình Git:**

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Các lệnh Git cơ bản

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

### 4. Làm việc nhóm với Git

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

#### **Quy trình làm việc nhóm khuyến nghị (kết hợp local merge và cập nhật code trước khi push):**

1. **Clone repo về máy**
2. **Tạo branch riêng:**
    ```bash
    git checkout -b feature/my-feature
    ```
3. **Làm việc và commit trên branch đó**
4. **Khi muốn đẩy code và tạo pull request vào main, thực hiện theo thứ tự sau:**
    - _a. Chuyển sang branch `main`:_
        ```bash
        git checkout main
        ```
    - _b. Cập nhật code mới nhất từ remote:_
        ```bash
        git fetch origin
        git pull origin main
        ```
    - _c. Quay lại branch đang làm việc:_
        ```bash
        git checkout feature/my-feature
        ```
    - _d. Merge code mới nhất từ `main` vào branch đang làm:_
        ```bash
        git merge main
        ```
    - _e. Xử lý conflict (nếu có). Nếu không có conflict, đảm bảo code đã cập nhật theo main._
    - _f. Push branch lên GitHub:_
        ```bash
        git push origin feature/my-feature
        ```
    - _g. Tạo Pull Request để merge vào main trên GitHub._

**Lưu ý:**

-   Việc merge code mới nhất từ `main` về branch đang làm và xử lý conflict local trước khi push lên giúp hạn chế lỗi về sau, giúp code luôn đồng bộ, và pull request dễ review hơn.
-   Quy trình này thường an toàn và minh bạch hơn so với chỉ merge khi tạo Pull Request trên GitHub.

### 5. Quy tắc đặt tên commit và issue

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

Theo quy trình **GitHub Flow**, chỉ cần branch chính là `main`, tất cả các tính năng mới sẽ được phát triển trên branch riêng (ví dụ: `feature/[tên-feature]`), sau đó tạo Pull Request để merge vào `main`.

#### **Ví dụ:**

```
main
  ├── feature/booking
  ├── feature/tour-management
  └── feature/user-profile
```

### Xử lý conflict (xung đột)

**Khái niệm conflict (xung đột):**

-   Conflict xảy ra khi có hai hoặc nhiều commit cùng sửa đổi một phần giống nhau của file, khiến Git không thể tự động quyết định giữ phiên bản nào. Điều này thường gặp khi merge các branch lại với nhau.

**Các bước xử lý conflict:**

1. Git sẽ báo conflict xuất hiện khi merge/pull. Các file bị xung đột sẽ hiển thị trạng thái "CONFLICT".
2. Mở file bị conflict. Git sẽ chèn các dấu đánh dấu đặc biệt như sau:
    ```
    <<<<<<< HEAD
    // Current change (thay đổi hiện tại trên branch của bạn)
    =======
    // Incoming change (thay đổi mới sắp được merge vào)
    >>>>>>> [branch hoặc commit-id]
    ```
    - **<<<<<<< HEAD**: Phần code hiện tại trên branch bạn đang làm (Current change)
    - **=======**: Phần giao giữa hai thay đổi
    - **>>>>>>> ...**: Thay đổi mới được merge vào (Incoming change)
3. Các chọn lựa khi xử lý conflict:
    - **Chọn Current Change**: Giữ nguyên code hiện tại trên nhánh của bạn, bỏ thay đổi incoming.
    - **Chọn Incoming Change**: Giữ lấy code của side incoming (bên branch mình vừa merge xổ vào), bỏ code hiện tại.
    - **Merge bằng tay**: Kết hợp cả 2 thay đổi lại sao cho phù hợp nhất với logic dự án.
4. Xóa các dòng marker `<<<<<<<`, `=======`, `>>>>>>>` sau khi chọn xong.
5. Thực hiện lại lệnh add & commit để hoàn tất xử lý conflict.

**Ví dụ về conflict và cách xử lý:**

Giả sử có đoạn code sau trong file `message.txt`:

Trước khi merge:

```
Xin chào các bạn!
```

Bạn sửa trên branch của bạn:

```
Xin chào các bạn!
Chúc một ngày tốt lành.
```

Một bạn khác sửa trên branch khác:

```
Xin chào các bạn!
Hôm nay chúng ta học Git.
```

Khi merge, Git sẽ tạo conflict:

```
Xin chào các bạn!
<<<<<<< HEAD
Chúc một ngày tốt lành.
=======
Hôm nay chúng ta học Git.
>>>>>>> feature/other-feature
```

Các em có thể:

-   **Chọn Current (HEAD):**
    ```
    Xin chào các bạn!
    Chúc một ngày tốt lành.
    ```
-   **Chọn Incoming (feature/other-feature):**
    ```
    Xin chào các bạn!
    Hôm nay chúng ta học Git.
    ```
-   **Merge kết hợp tay:**
    ```
    Xin chào các bạn!
    Chúc một ngày tốt lành.
    Hôm nay chúng ta học Git.
    ```

**Lưu ý:**

-   Có thể sử dụng các editor (VS Code) để hỗ trợ chọn "Accept Current Change", "Accept Incoming Change" hoặc "Accept Both Changes" khi resolve conflict trực quan.
-   Sau khi sửa conflict, đừng quên commit lại để hoàn tất quá trình merge.

---

## 📘 Bài tập

### Case Study: Làm việc nhóm Git với 3 thành viên

#### **Tình huống giả định**

Giả sử nhóm của các em có 3 thành viên: An, Bình và Cường. Nhóm sẽ cùng xây dựng một trang web quản lý book tour đơn giản với các module nhỏ sau:

- Giao diện trang chủ (An)
- Chức năng đặt tour (Bình)
- Danh sách tours và chi tiết tour (Cường)

#### **Yêu cầu thực hành**

1. **Tạo repo nhóm trên GitHub:**
    - Tên repo: `[tên-nhóm]-tour-management` (vd: `team3-tour-management`)
    - Public repo
    - Thêm file README.md khi tạo repo

2. **Các bước làm việc:**

    **Bước 1:** Một thành viên (ví dụ An) tạo repo trên GitHub, thêm README.md (ghi thông tin nhóm, thành viên, mô tả ngắn dự án).

    **Bước 2:** Các thành viên khác (Bình, Cường) **clone** về máy cá nhân:
    ```bash
    git clone [URL-repo]
    cd [tên-repo]
    ```

    **Bước 3:** Mỗi thành viên tạo **branch riêng** cho feature mình phụ trách:
    - An: `feature/homepage`
    - Bình: `feature/booking`
    - Cường: `feature/tour-list`
    ```bash
    git checkout -b feature/[tên-feature]
    ```

    **Bước 4:** Mỗi người tạo 1 file đơn giản theo module đã phân công:
    - `src/homepage.html`
    - `src/booking.html`
    - `src/tour-list.html`

    Sau đó `add`, `commit` với message theo Conventional Commit:
    ```bash
    git add .
    git commit -m "feat: tạo file [tên file] cho [chức năng]"
    git push origin feature/[tên-feature]
    ```

    **Bước 5:** Tạo Pull Request cho từng branch lên `main`.
    - Các thành viên xem code của nhau, comment hoặc góp ý (nếu có).
    - Merge vào main (nếu cần xử lý conflict thì thực hiện xử lý theo hướng dẫn ở trên).

    **Bước 6:** Sau khi 3 file đã merge vào `main`, mỗi người thử update local và thêm một dòng giới thiệu vào README.md, commit theo dạng "docs: thêm thông tin bản thân vào README", rồi push theo flow branch.

    **Bước 7:** Lặp lại chu trình cho những feature/phần khác nếu cần.

#### **Check-list:**

- [ ] Repo nhóm có đủ README.md, folder src/
- [ ] Mỗi thành viên có branch riêng, Pull Request riêng
- [ ] Merge thành công tất cả vào main
- [ ] Có tối thiểu 3 file HTML (theo chức năng)
- [ ] Sử dụng đúng quy tắc đặt tên commit, issue

#### **Gợi ý cấu trúc thư mục:**

```
[tên-repo]/
├── README.md
├── src/
│   ├── homepage.html
│   ├── booking.html
│   └── tour-list.html
└── docs/
    ├── Spec_Module_[Tên module].pdf
    └── ERD_Module_[Tên module].pdf
```

---

## 📦 Kết quả mong đợi sau buổi học

-   ✅ Hiểu được cách sử dụng Git cơ bản
-   ✅ Hiểu và thực hành flow teamwork, Pull Request, merge
-   ✅ Tạo được repo GitHub teamwork, commit code đầu tiên
-   ✅ Nắm được quy tắc đặt tên commit và issue
-   ✅ Biết cách làm việc nhóm với branch, giải quyết conflict
-   ✅ Sẵn sàng bắt đầu code ở tuần 3

---

Chúc các em học tốt! 🎉
