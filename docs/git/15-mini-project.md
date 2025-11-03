# Mini Project: Làm việc nhóm theo GitHub Flow

> **Bài trước:** [14. Tag và Release](./14-git-tag-release.md)  
> **Bài tiếp theo:** Không có (Đây là bài cuối cùng)

## 🎯 Mục tiêu học tập

-   Áp dụng tất cả kiến thức đã học vào dự án thực tế
-   Thực hành làm việc nhóm với GitHub Flow
-   Tạo Pull Request, review code, và merge
-   Phát hành version đầu tiên của dự án

## 📘 Kiến thức lý thuyết

### Tổng hợp kiến thức đã học

Qua 14 bài học, bạn đã học được:

1.   ✅ Git cơ bản: init, add, commit, log
2.   ✅ Working directory và staging area
3.   ✅ Branch và merge
4.   ✅ GitHub: clone, fork, push, pull
5.   ✅ GitHub Flow workflow
6.   ✅ Pull Request và review code
7.   ✅ Commit message best practices
8.   ✅ Git nâng cao: stash, revert, reset, cherry-pick
9.   ✅ Xử lý lỗi thường gặp
10.  ✅ Tag và release version

### Dự án cuối khóa

**Mục tiêu:** Tạo một website portfolio đơn giản với team 2-3 người

**Yêu cầu:**
-   Áp dụng đầy đủ GitHub Flow
-   Mỗi người làm một component
-   Có ít nhất 3 Pull Request
-   Có code review và feedback
-   Phát hành version 1.0.0

## 💻 Ví dụ thực hành

### Setup dự án

**Người 1 (Owner):**

```bash
# Bước 1: Tạo repository trên GitHub
# Repository name: team-portfolio
# Description: Portfolio website của team

# Bước 2: Clone về máy
git clone https://github.com/username/team-portfolio.git
cd team-portfolio

# Bước 3: Tạo cấu trúc cơ bản
mkdir src
echo "<!DOCTYPE html>
<html>
<head>
    <title>Team Portfolio</title>
</head>
<body>
    <h1>Chào mừng đến với Portfolio của chúng tôi</h1>
</body>
</html>" > src/index.html

# Bước 4: Commit và push
git add .
git commit -m "feat: Khởi tạo dự án portfolio"
git push origin main

# Bước 5: Thêm collaborators
# GitHub → Settings → Collaborators → Add people
```

**Người 2 và 3:**

```bash
# Clone repository
git clone https://github.com/username/team-portfolio.git
cd team-portfolio
```

### Phát triển tính năng

**Người 1: Thêm Header Component**

```bash
# Tạo branch
git checkout -b feature/header

# Tạo file
echo "<header>
    <nav>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </nav>
</header>" > src/components/header.html

# Commit
git add .
git commit -m "feat(header): Thêm header component với navigation"

# Push
git push -u origin feature/header

# Tạo Pull Request trên GitHub
# Title: "feat: Thêm header component"
# Description: 
# - Thêm header với navigation menu
# - Responsive trên mobile
# - Links đến các section chính
```

**Người 2: Thêm Footer Component**

```bash
git checkout main
git pull origin main
git checkout -b feature/footer

echo "<footer>
    <p>&copy; 2024 Team Portfolio. All rights reserved.</p>
    <div class='social-links'>
        <a href='#'>Facebook</a>
        <a href='#'>Twitter</a>
        <a href='#'>LinkedIn</a>
    </div>
</footer>" > src/components/footer.html

git add .
git commit -m "feat(footer): Thêm footer component với social links"
git push -u origin feature/footer

# Tạo Pull Request
```

**Người 3: Thêm About Section**

```bash
git checkout main
git pull origin main
git checkout -b feature/about-section

echo "<section id='about'>
    <h2>About Us</h2>
    <p>Chúng tôi là một team phát triển web...</p>
</section>" > src/components/about.html

git add .
git commit -m "feat(about): Thêm section giới thiệu team"
git push -u origin feature/about-section

# Tạo Pull Request
```

### Review và Merge

**Người 1 review PR của Người 2:**

```markdown
@nguoi2 Cảm ơn PR này!

Có một số điểm cần xem xét:

1. ✅ Code structure tốt
2. 💡 Có thể thêm email contact vào footer không?
3. 💡 Social links nên mở tab mới (target="_blank")

Ngoài ra, có thể thêm một số styling cơ bản không?

Những điểm khác đều OK! 👍
```

**Người 2 reply và sửa:**

```bash
# Sửa theo comment
# ... sửa file footer.html

git add .
git commit -m "fix(footer): Thêm email và target blank cho social links"
git push origin feature/footer

# Reply trên PR
@nguoi1 Đã sửa theo review! Có thể xem lại không?
```

**Người 1 approve và merge:**

1.   Xem lại code mới
2.   Approve PR
3.   Merge PR (Create a merge commit)
4.   Xóa branch `feature/footer`

### Hoàn thiện và Release

**Sau khi merge tất cả PR:**

```bash
# Update main local
git checkout main
git pull origin main

# Kiểm tra tất cả component đã có
ls src/components/
# header.html  footer.html  about.html

# Tạo tag và release
git tag -a v1.0.0 -m "Release version 1.0.0 - Initial release"
git push origin v1.0.0

# Tạo Release trên GitHub
# Title: "Version 1.0.0 - Initial Release"
# Description:
# ## What's New
# - ✅ Header component with navigation
# - ✅ Footer component with social links  
# - ✅ About section
# 
# ## Contributors
# - @nguoi1 (Header)
# - @nguoi2 (Footer)
# - @nguoi3 (About)
```

## 🧩 Bài tập

### Dự án: Website Portfolio Team

**Team:** 2-3 người

**Yêu cầu:**

1.   **Setup (Người 1):**
    -   Tạo repository trên GitHub
    -   Khởi tạo cấu trúc cơ bản
    -   Thêm README.md với mô tả dự án
    -   Thêm .gitignore

2.   **Phát triển (Mỗi người 1 component):**
    -   Component 1: Header/Navigation
    -   Component 2: Footer
    -   Component 3: About/Contact section
    -   Mỗi component là 1 Pull Request

3.   **Review:**
    -   Mỗi PR phải có ít nhất 1 người review
    -   Reviewer comment ít nhất 2 điểm
    -   Author reply và sửa (nếu cần)

4.   **Merge và Release:**
    -   Merge tất cả PR vào main
    -   Tạo tag v1.0.0
    -   Tạo Release trên GitHub với changelog

5.   **Documentation:**
    -   Tạo file `PROJECT_SUMMARY.md`:
        -   Tổng hợp các PR đã tạo
        -   Screenshot của website
        -   Lessons learned
        -   Best practices rút ra được

**Tiêu chí đánh giá:**

| Tiêu chí              | Điểm | Yêu cầu                                          |
| --------------------- | ---- | ------------------------------------------------ |
| **GitHub Flow**       | 25   | Đúng quy trình, không commit trực tiếp vào main |
| **Pull Request**      | 25   | PR có description đầy đủ, title rõ ràng          |
| **Code Review**       | 25   | Có review, comment, và sửa code                 |
| **Commit Message**    | 15   | Đúng chuẩn Conventional Commits                 |
| **Release**           | 10   | Có tag v1.0.0 và release trên GitHub             |

**Bonus:**
-   Có CI/CD pipeline (+5)
-   Có automated tests (+5)
-   Có documentation đầy đủ (+5)

## 💡 Mẹo & Lỗi thường gặp

### Checklist hoàn thành dự án

**Trước khi submit:**

-   ✅ Tất cả PR đã được merge
-   ✅ Code đã được review và approve
-   ✅ Commit message đúng chuẩn
-   ✅ Có tag v1.0.0 và release
-   ✅ README.md đầy đủ
-   ✅ Không có conflict
-   ✅ Main branch sạch sẽ, không có code tạm thời

### Best Practices tổng hợp

1.   **Luôn pull trước khi push**
2.   **Không commit trực tiếp vào main**
3.   **PR nhỏ, dễ review**
4.   **Commit message rõ ràng**
5.   **Review code kỹ trước khi approve**
6.   **Giao tiếp với team khi có vấn đề**

### Kết quả mong đợi

Sau khi hoàn thành dự án, bạn sẽ có:

-   ✅ Repository trên GitHub với code hoàn chỉnh
-   ✅ Ít nhất 3 Pull Request đã merge
-   ✅ Release v1.0.0 với changelog
-   ✅ Kinh nghiệm làm việc nhóm thực tế
-   ✅ Portfolio project để showcase

### Tiếp tục học tập

**Sau khóa học này, bạn có thể:**

1.   **Học Git Flow:** Quy trình phức tạp hơn cho dự án lớn
2.   **GitHub Actions:** Tự động hóa CI/CD
3.   **Advanced Git:** Interactive rebase, submodules
4.   **Contributing to Open Source:** Contribute vào các dự án lớn

**Tài nguyên:**
-   [Git Documentation](https://git-scm.com/doc)
-   [GitHub Guides](https://guides.github.com/)
-   [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

**Áp dụng vào làm việc nhóm:**
-   **Communication:** Luôn giao tiếp rõ ràng với team
-   **Documentation:** Ghi lại quy trình và best practices
-   **Code Review:** Coi code review là cơ hội học hỏi
-   **Continuous Improvement:** Luôn tìm cách cải thiện workflow

---

**Kết luận:** Chúc mừng bạn đã hoàn thành khóa học Git & GitHub! Với kiến thức này, bạn đã sẵn sàng làm việc nhóm chuyên nghiệp trên bất kỳ dự án nào. Hãy tiếp tục thực hành và áp dụng vào các dự án thực tế!

**Kết thúc khóa học!** 🎉

