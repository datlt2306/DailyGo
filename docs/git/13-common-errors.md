# Lỗi thường gặp và cách khắc phục

> **Bài trước:** [12. Git Nâng cao](./12-git-advanced.md)  
> **Bài tiếp theo:** [14. Tag và Release](./14-git-tag-release.md)

## 🎯 Mục tiêu học tập

-   Nhận biết các lỗi Git phổ biến
-   Biết cách xử lý từng loại lỗi
-   Phòng tránh lỗi bằng best practices
-   Khôi phục code khi gặp sự cố

## 📘 Kiến thức lý thuyết

### Phân loại lỗi Git

| Loại lỗi           | Ví dụ                                    | Mức độ nghiêm trọng |
| -------------------- | --------------------------------------- | ------------------- |
| **Authentication**    | Permission denied, wrong credentials     | Trung bình           |
| **Merge conflict**    | CONFLICT khi merge/pull                  | Trung bình           |
| **Lost code**         | Reset --hard nhầm, xóa file             | Cao                 |
| **Sync issues**       | Push rejected, branch diverged          | Trung bình           |
| **Configuration**     | Wrong remote URL, missing config         | Thấp                |

## 💻 Ví dụ thực hành

### Lỗi 1: "Permission denied" khi push

**Lỗi:**
```bash
git push origin main
# ERROR: Permission to username/repo.git denied to other-user.
# fatal: Could not read from remote repository.
```

**Nguyên nhân:**
-   Không có quyền write vào repository
-   Dùng sai tài khoản GitHub
-   Personal Access Token hết hạn

**Giải pháp:**
```bash
# 1. Kiểm tra remote URL
git remote -v

# 2. Kiểm tra bạn có là collaborator không
# Vào GitHub → Repository → Settings → Collaborators

# 3. Nếu không có quyền, có 2 cách:
# Cách 1: Fork repository rồi push vào fork
# Cách 2: Xin quyền từ owner

# 4. Kiểm tra authentication
git config --global user.name
git config --global user.email

# 5. Tạo PAT mới nếu cần
# GitHub → Settings → Developer settings → Personal access tokens
```

### Lỗi 2: "Updates were rejected" khi push

**Lỗi:**
```bash
git push origin main
# ! [rejected]        main -> main (fetch first)
# error: failed to push some refs to 'origin'
# hint: Updates were rejected because the remote contains work that you do
# hint: not have locally.
```

**Nguyên nhân:** Code trên GitHub mới hơn code local

**Giải pháp:**
```bash
# Bước 1: Pull code mới trước
git pull origin main

# Nếu không có conflict, Git sẽ tự động merge
# Nếu có conflict, xử lý như bình thường:
git add .
git commit -m "Merge remote-tracking branch 'origin/main'"

# Bước 2: Push lại
git push origin main
```

**Cách tránh:** Luôn pull trước khi push!

### Lỗi 3: Merge conflict

**Lỗi:**
```bash
git merge feature/login
# Auto-merging file.js
# CONFLICT (content): Merge conflict in file.js
# Automatic merge failed; fix conflicts and then commit the result.
```

**Giải pháp:**
```bash
# Bước 1: Xem file conflict
git status
# Unmerged paths: file.js

# Bước 2: Mở file, tìm các dấu:
<<<<<<< HEAD
code của branch hiện tại
=======
code của branch merge vào
>>>>>>> feature/login

# Bước 3: Sửa file, giữ code đúng, xóa các dấu marker

# Bước 4: Đánh dấu đã resolve
git add file.js
git commit -m "Resolve merge conflict"
```

**Dùng tool để resolve:**
-   VS Code: Có UI để resolve conflict
-   `git mergetool`: Mở tool merge
-   GitHub: Resolve conflict trên web (nếu là PR)

### Lỗi 4: "Not a git repository"

**Lỗi:**
```bash
git status
# fatal: not a git repository (or any of the parent directories): .git
```

**Nguyên nhân:** Bạn đang ở thư mục không phải Git repository

**Giải pháp:**
```bash
# Kiểm tra xem có folder .git không
ls -la  # macOS/Linux
dir /a  # Windows

# Nếu không có, khởi tạo:
git init

# Hoặc clone repository:
git clone https://github.com/username/repo.git
```

### Lỗi 5: "fatal: bad object" hoặc corrupted repository

**Lỗi:**
```bash
git log
# fatal: bad object abc1234...
```

**Nguyên nhân:** Repository bị corrupt (hiếm nhưng có thể xảy ra)

**Giải pháp:**
```bash
# Kiểm tra repository
git fsck

# Nếu có lỗi, thử recover:
git gc --prune=now

# Nếu không được, clone lại từ remote:
cd ..
rm -rf repo-name
git clone https://github.com/username/repo.git
```

### Lỗi 6: Commit nhầm vào branch sai

**Tình huống:** Đang ở `main`, commit tính năng mới (nên ở branch riêng)

**Giải pháp:**
```bash
# Bước 1: Tạo branch từ commit hiện tại
git branch feature/new-feature

# Bước 2: Reset main về commit trước
git reset --hard HEAD~1

# Bước 3: Chuyển sang branch mới (commit vẫn còn đó)
git checkout feature/new-feature
```

### Lỗi 7: Xóa nhầm file quan trọng

**Tình huống:** `rm important-file.js` (xóa nhầm)

**Giải pháp:**
```bash
# Nếu chưa commit xóa:
git checkout important-file.js

# Nếu đã commit xóa, tìm lại từ commit trước:
git log --all --full-history -- important-file.js
git checkout commit-hash -- important-file.js
```

### Lỗi 8: "fatal: refusing to merge unrelated histories"

**Lỗi:**
```bash
git pull origin main
# fatal: refusing to merge unrelated histories
```

**Nguyên nhân:** Repository local và remote không có lịch sử chung

**Giải pháp:**
```bash
# Cho phép merge unrelated histories
git pull origin main --allow-unrelated-histories

# Sau đó resolve conflict nếu có
```

### Lỗi 9: Push quá chậm hoặc timeout

**Nguyên nhân:**
-   File quá lớn
-   Network chậm
-   Repository lớn

**Giải pháp:**
```bash
# Tăng buffer size
git config --global http.postBuffer 524288000

# Hoặc dùng SSH thay vì HTTPS
git remote set-url origin git@github.com:username/repo.git

# Hoặc dùng Git LFS cho file lớn
```

### Lỗi 10: "fatal: ambiguous argument 'HEAD'"

**Lỗi:**
```bash
git reset HEAD
# fatal: ambiguous argument 'HEAD'
```

**Nguyên nhân:** Repository mới, chưa có commit nào

**Giải pháp:**
```bash
# Tạo commit đầu tiên trước
git add .
git commit -m "Initial commit"

# Sau đó mới có thể dùng HEAD
```

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Thực hành xử lý conflict**

1.   Tạo repository và commit file `app.js` với nội dung `const x = 1;`
2.   Tạo branch `feature/A`, sửa thành `const x = 2;`, commit
3.   Quay lại `main`, sửa thành `const x = 3;`, commit
4.   Merge `feature/A` vào `main`
5.   Xử lý conflict (giữ `const x = 3;`)
6.   Hoàn tất merge

**Mục tiêu:** Làm quen với xử lý conflict

### Level 2: Nâng cao

**Bài tập 2: Khôi phục code bị mất**

Tạo tình huống:
1.   Tạo 3 commit với nội dung khác nhau
2.   `git reset --hard HEAD~2` (xóa 2 commit)
3.   Khôi phục lại bằng `git reflog`
4.   Tạo file `RECOVERY_NOTES.md` ghi lại:
    -   Cách khôi phục
    -   Lưu ý khi dùng reset --hard
    -   Best practices để tránh mất code

**Mục tiêu:** Hiểu cách khôi phục code khi gặp sự cố

## 💡 Mẹo & Lỗi thường gặp

### Checklist trước khi push

✅ **Luôn check:**
-   `git status` - Xem có file nào chưa commit không
-   `git log --oneline -5` - Xem commit message đúng chưa
-   `git diff` - Xem thay đổi có đúng không
-   Pull trước khi push

### Phòng tránh lỗi

1.   **Backup thường xuyên:**
    -   Push code lên GitHub thường xuyên
    -   Không để code chỉ ở local quá lâu

2.   **Commit message rõ ràng:**
    -   Dễ tìm lại commit khi cần
    -   Dễ revert nếu có lỗi

3.   **Không dùng force push:**
    ```bash
    # ⚠️ KHÔNG làm:
    git push --force origin main
    # Trừ khi bạn chắc chắn và đã báo team!
    ```

4.   **Test code trước khi commit:**
    -   Chạy test
    -   Kiểm tra không có console.log thừa

### Khi gặp lỗi không biết xử lý

**Các bước:**

1.   **Đọc error message kỹ:** Thường có gợi ý
2.   **Google error message:** Rất nhiều người đã gặp
3.   **Check Git documentation:** `git help <command>`
4.   **Hỏi team:** Có thể họ đã gặp và biết cách xử lý
5.   **Backup trước khi thử:** Clone repository sang chỗ khác

**Áp dụng vào làm việc nhóm:**
-   **Giao tiếp:** Nếu gặp lỗi, báo team biết
-   **Documentation:** Ghi lại lỗi và cách xử lý vào team wiki
-   **Code review:** Review code để phát hiện lỗi sớm
-   **Testing:** Test kỹ trước khi push

---

**Kết luận:** Lỗi Git là điều không thể tránh, nhưng biết cách xử lý và phòng tránh giúp bạn làm việc hiệu quả hơn. Nhớ luôn backup code và giao tiếp với team khi gặp vấn đề!

**Bài tiếp theo:** [14. Tag và Release](./14-git-tag-release.md) - Học cách đánh dấu version và phát hành phiên bản

