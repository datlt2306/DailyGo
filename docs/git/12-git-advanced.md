# Git Nâng cao: stash, revert, reset, cherry-pick

> **Bài trước:** [11. Commit Message Best Practices](./11-commit-best-practices.md)  
> **Bài tiếp theo:** [13. Lỗi thường gặp và khắc phục](./13-common-errors.md)

## 🎯 Mục tiêu học tập

-   Sử dụng `git stash` để tạm lưu thay đổi
-   Hiểu và sử dụng `git revert` để hoàn tác commit
-   Nắm được `git reset` và các mức độ reset
-   Sử dụng `git cherry-pick` để chọn commit cụ thể

## 📘 Kiến thức lý thuyết

### Git Stash - Tạm lưu thay đổi

**Stash** là cách tạm lưu thay đổi chưa commit để chuyển sang branch khác hoặc làm việc khác.

**Khi nào dùng stash:**
-   Đang làm dở trên branch A, cần chuyển sang branch B gấp
-   Muốn pull code mới nhưng có thay đổi chưa commit
-   Thử nghiệm code, chưa chắc có muốn commit không

**Ví dụ thực tế:**
```bash
# Bạn đang làm feature/login, code chưa xong
# Boss bảo sửa bug khẩn cấp trên main

# Không stash: Phải commit code dở hoặc xóa thay đổi
# Có stash: Lưu lại code, sửa bug xong, quay lại làm tiếp
```

### Git Revert - Hoàn tác commit

**Revert** tạo commit mới để hoàn tác thay đổi của commit cũ. An toàn hơn reset vì không thay đổi lịch sử.

**Khi nào dùng revert:**
-   Đã push commit lên GitHub
-   Muốn hoàn tác nhưng không muốn thay đổi lịch sử
-   Làm việc nhóm, commit đã được share

### Git Reset - Đặt lại HEAD

**Reset** di chuyển HEAD về commit trước đó. **NGUY HIỂM** vì có thể mất code!

**3 mức độ reset:**

| Mức độ    | Working Directory | Staging Area | Repository | Khi nào dùng             |
| --------- | ----------------- | ------------ | ---------- | ------------------------ |
| `--soft`  | ✅ Giữ            | ✅ Giữ       | 🔄 Thay đổi | Sửa commit message       |
| `--mixed` | ✅ Giữ            | 🔄 Bỏ        | 🔄 Thay đổi | Unstage và giữ code      |
| `--hard`  | 🔄 Xóa            | 🔄 Xóa       | 🔄 Thay đổi | **NGUY HIỂM!** Chỉ dùng local |

⚠️ **CẢNH BÁO:** `git reset --hard` **XÓA CODE**, chỉ dùng khi chắc chắn!

### Git Cherry-pick - Chọn commit cụ thể

**Cherry-pick** copy một commit từ branch này sang branch khác.

**Khi nào dùng cherry-pick:**
-   Có bug fix trên branch A, muốn apply vào branch B
-   Tính năng trên branch này muốn có trên branch kia
-   Tách commit ra khỏi branch

## 💻 Ví dụ thực hành

### Git Stash

```bash
# Tình huống: Đang làm feature, cần chuyển sang fix bug

# Bước 1: Stash thay đổi hiện tại
git stash
# Hoặc với message
git stash save "WIP: Đang làm tính năng login"

# Kết quả:
# Saved working directory and index state On feature/login: WIP: Đang làm tính năng login

# Bước 2: Kiểm tra trạng thái
git status
# working tree clean (sạch sẽ, có thể chuyển branch)

# Bước 3: Chuyển sang branch khác, làm việc
git checkout main
git checkout -b hotfix/payment-error
# ... sửa bug và commit

# Bước 4: Quay lại branch cũ, lấy stash ra
git checkout feature/login
git stash pop
# Hoặc
git stash apply  # Giữ stash trong danh sách
```

**Giải thích:**
-   `stash`: Lưu thay đổi vào stack
-   `stash pop`: Lấy stash ra và xóa khỏi stack
-   `stash apply`: Lấy stash ra nhưng giữ trong stack

```bash
# Xem danh sách stash
git stash list

# Xem nội dung stash
git stash show
git stash show -p  # Chi tiết hơn

# Xóa stash cụ thể
git stash drop stash@{0}

# Xóa tất cả stash
git stash clear
```

### Git Revert

```bash
# Tình huống: Commit có bug, đã push lên GitHub

# Bước 1: Tìm commit cần revert
git log --oneline
# abc1234 (HEAD -> main) Thêm tính năng X
# def5678 Sửa bug Y
# xyz9999 Commit ban đầu

# Bước 2: Revert commit abc1234
git revert abc1234

# Git sẽ mở editor để nhập commit message
# Mặc định: "Revert 'Thêm tính năng X'"

# Bước 3: Lưu và đóng editor

# Bước 4: Push lên GitHub
git push origin main

# Kết quả: Có commit mới để hoàn tác commit cũ
# Lịch sử vẫn giữ nguyên commit cũ
```

**So sánh revert vs reset:**
```bash
# Sau revert:
# abc1234 Thêm tính năng X (vẫn còn trong lịch sử)
# fgh7890 Revert "Thêm tính năng X" (commit mới)

# Sau reset --hard:
# xyz9999 Commit ban đầu (commit abc1234 biến mất!)
```

### Git Reset

```bash
# ⚠️ CẢNH BÁO: Chỉ dùng khi chắc chắn, tốt nhất là local chưa push!

# Reset soft: Giữ code, chỉ đổi HEAD
git reset --soft HEAD~1
# Code vẫn còn, staging area vẫn có, chỉ không có commit

# Reset mixed (mặc định): Giữ code, bỏ staging
git reset HEAD~1
# Code vẫn còn, nhưng chưa được add

# Reset hard: XÓA TẤT CẢ (NGUY HIỂM!)
git reset --hard HEAD~1
# ⚠️ Code bị XÓA, không thể khôi phục dễ dàng!
```

**Ví dụ an toàn:**
```bash
# Tình huống: Commit nhầm message, chưa push

# Reset soft để sửa message
git reset --soft HEAD~1
git commit -m "Commit message đúng"

# Code vẫn nguyên, chỉ đổi message
```

**Ví dụ nguy hiểm:**
```bash
# ⚠️ KHÔNG làm điều này nếu đã push!
git reset --hard HEAD~3
# Xóa 3 commit cuối, có thể làm người khác gặp conflict!
```

### Git Cherry-pick

```bash
# Tình huống: Có bug fix trên branch feature/A, muốn apply vào main

# Bước 1: Tìm commit cần cherry-pick
git checkout feature/A
git log --oneline
# abc1234 Fix bug login trên mobile

# Bước 2: Chuyển sang branch main
git checkout main

# Bước 3: Cherry-pick commit
git cherry-pick abc1234

# Kết quả:
# [main abc5678] Fix bug login trên mobile
# 1 file changed, 5 insertions(+), 2 deletions(-)

# Commit abc1234 giờ có trên cả 2 branch (nhưng hash khác)
```

**Cherry-pick nhiều commit:**
```bash
# Cherry-pick từ commit A đến B (không bao gồm A)
git cherry-pick A..B

# Cherry-pick từ commit A đến B (bao gồm cả A)
git cherry-pick A^..B
```

**Xử lý conflict khi cherry-pick:**
```bash
# Nếu có conflict
# Sửa conflict như bình thường
git add .
git cherry-pick --continue

# Hoặc hủy cherry-pick
git cherry-pick --abort
```

## 🧩 Bài tập

### Level 1: Cơ bản

**Bài tập 1: Thực hành Stash**

1.   Tạo branch `feature/test` với một số thay đổi chưa commit
2.   Stash thay đổi
3.   Chuyển sang branch `main`
4.   Tạo commit trên main
5.   Quay lại `feature/test` và apply stash
6.   Xác nhận code đã quay lại

**Mục tiêu:** Hiểu cách stash hoạt động

### Level 2: Nâng cao

**Bài tập 2: Revert và Reset**

Tạo một chuỗi commit:
1.   Commit 1: Thêm file `app.js`
2.   Commit 2: Thêm tính năng X
3.   Commit 3: Thêm tính năng Y (có bug)

**Yêu cầu:**
-   Revert commit 3 (đã push)
-   Reset --soft commit 2 (local chưa push)
-   Reset --hard commit 1 (local chưa push)
-   So sánh kết quả và giải thích sự khác biệt

**Bài tập 3: Cherry-pick**

1.   Tạo branch `feature/A` với 3 commit
2.   Tạo branch `feature/B` từ main
3.   Cherry-pick commit thứ 2 từ `feature/A` sang `feature/B`
4.   Kiểm tra code đã được copy đúng chưa

## 💡 Mẹo & Lỗi thường gặp

### 1. **Stash mất code**

**Nguyên nhân:** Stash bị xóa nhầm

**Giải pháp:**
```bash
# Git lưu stash trong reflog
git fsck --unreachable | grep commit | cut -d' ' -f3 | xargs git log --merges --no-walk --grep=WIP

# Hoặc dùng tool: git-stash-recover
```

**Cách tránh:** Không dùng `git stash clear` nếu không chắc!

### 2. **Reset --hard xóa code**

**Vấn đề:** Code bị mất sau reset --hard

**Giải pháp:**
```bash
# Tìm lại commit (nếu chưa quá lâu)
git reflog

# Reset lại commit đó
git reset --hard HEAD@{1}
```

**Cách tránh:** 
-   Luôn commit trước khi reset
-   Không reset --hard nếu đã push
-   Backup code trước khi reset

### 3. **Revert gây conflict**

**Giải pháp:**
```bash
# Sửa conflict như bình thường
git add .
git revert --continue

# Hoặc hủy revert
git revert --abort
```

### 4. **Cherry-pick conflict**

**Nguyên nhân:** Code ở 2 branch khác nhau quá nhiều

**Giải pháp:**
-   Sửa conflict thủ công
-   Hoặc dùng merge thay vì cherry-pick

### 5. **Không biết khi nào dùng revert vs reset**

**Nguyên tắc:**
-   **Đã push lên GitHub** → Dùng **revert**
-   **Local chưa push** → Có thể dùng **reset**
-   **Làm việc nhóm** → Luôn dùng **revert**

**Áp dụng vào làm việc nhóm:**
-   **Stash:** Dùng khi cần chuyển task gấp, không commit code dở
-   **Revert:** Dùng khi cần hoàn tác commit đã share
-   **Reset:** Chỉ dùng local, không bao giờ reset --hard commit đã push
-   **Cherry-pick:** Dùng khi cần apply bug fix vào nhiều branch

---

**Kết luận:** Các lệnh Git nâng cao này rất mạnh nhưng cần cẩn thận. Hãy hiểu rõ từng lệnh trước khi dùng, đặc biệt là `reset --hard`!

**Bài tiếp theo:** [13. Lỗi thường gặp và khắc phục](./13-common-errors.md) - Tổng hợp các lỗi phổ biến và cách xử lý

