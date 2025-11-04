# Resolve Conflict trong Teamwork - Hướng dẫn chi tiết từ A đến Z

> **Bài trước:** [15. Mini Project](./15-mini-project.md)  
> **Bài tiếp theo:** N/A (Bài cuối khóa)

## 🎯 Mục tiêu học tập

-   Hiểu sâu về conflict - tại sao xảy ra và khi nào
-   Thành thạo các cách resolve conflict phổ biến
-   Xử lý conflict trong nhiều tình huống teamwork thực tế
-   Biết cách phòng tránh conflict khi làm việc nhóm
-   Sử dụng tools để resolve conflict hiệu quả

## 📘 Kiến thức lý thuyết

### Conflict là gì và tại sao xảy ra?

**Conflict (Xung đột)** xảy ra khi Git không thể tự động merge code từ 2 branch hoặc 2 commit khác nhau.

**Nguyên nhân chính:**

1.  **Cùng sửa một dòng code:**


    ```
    Branch A: const API_URL = "https://api.old.com";
    Branch B: const API_URL = "https://api.new.com";
    → Git không biết nên giữ version nào!
    ```

2.  **Cùng thêm code vào cùng vị trí:**


    ```
    Branch A thêm: console.log("Debug A");
    Branch B thêm: console.log("Debug B");
    → Cùng vị trí, Git bối rối!
    ```

3.  **Một branch xóa file, branch kia sửa file:**


    ```
    Branch A: Xóa file config.js
    Branch B: Sửa file config.js
    → Xung đột!
    ```

4.  **Sửa code ở gần nhau:**


    ```
    Branch A sửa dòng 10-15
    Branch B sửa dòng 12-17
    → Có overlap, conflict!
    ```

### Khi nào conflict thường xảy ra?

**Trong teamwork, conflict thường xảy ra khi:**

1.  **Nhiều người cùng làm một feature:**


    -   Người A làm tính năng login
    -   Người B cũng làm tính năng login
    -   Cùng sửa file `Login.js` → Conflict!

2.  **Không pull trước khi làm việc:**


    -   Bạn checkout branch lúc 9h sáng
    -   Làm việc cả ngày
    -   Người khác đã push code mới
    -   Bạn push lên → Conflict!

3.  **Merge nhiều branch cùng lúc:**


    -   Merge feature A vào main → OK
    -   Merge feature B vào main → Conflict với feature A!

4.  **Rebase khi branch đã có người khác dùng:**


    -   Bạn rebase branch
    -   Người khác đang làm việc trên branch đó
    → Conflict khi họ pull!

### Các loại conflict

#### 1. **Content Conflict (Xung đột nội dung)**

Xung đột trong nội dung file.

**Ví dụ:**

```javascript
<<<<<<< HEAD
const name = "Nguyễn Văn A";
=======
const name = "Trần Thị B";
>>>>>>> feature/user-profile
```

#### 2. **Add/Add Conflict (Cùng thêm file)**

Cùng tên file, cùng thêm mới.

**Ví dụ:**

-   Branch A tạo file `utils/helper.js`
-   Branch B cũng tạo file `utils/helper.js`
-   Nội dung khác nhau → Conflict!

#### 3. **Modify/Delete Conflict (Sửa/Xóa)**

Một branch xóa, branch kia sửa.

**Ví dụ:**

-   Branch A xóa file `old-config.js`
-   Branch B sửa file `old-config.js`
-   Git không biết: giữ file hay xóa? → Conflict!

#### 4. **Rename/Move Conflict (Đổi tên/Di chuyển)**

Cùng một file bị đổi tên hoặc di chuyển khác nhau.

**Ví dụ:**

-   Branch A: `config.js` → `config/config.js`
-   Branch B: `config.js` → `settings/config.js`
-   → Conflict!

## 💻 Case Study 1: Conflict cơ bản - Cùng sửa một dòng

### Tình huống

**Team có 2 người:**

-   **An:** Làm tính năng đăng nhập, cập nhật API_URL
-   **Bình:** Làm tính năng đăng ký, cũng cập nhật API_URL

### Diễn biến

```bash
# Bước 1: An tạo branch và làm việc
git checkout main
git pull origin main
git checkout -b feature/login
# An sửa file config.js
echo "const API_URL = 'https://api.example.com/v1';" > config.js
git add config.js
git commit -m "feat: cập nhật API URL cho login"
git push -u origin feature/login

# Bước 2: Bình cũng tạo branch (từ main cũ)
git checkout main
git pull origin main  # Lấy code mới (chưa có An)
git checkout -b feature/register
# Bình cũng sửa file config.js
echo "const API_URL = 'https://api.example.com/v2';" > config.js
git add config.js
git commit -m "feat: cập nhật API URL cho register"
git push -u origin feature/register

# Bước 3: An merge PR vào main → OK
# Bước 4: Bình merge PR vào main → CONFLICT! 💥
```

### Cách resolve

**Bước 1: Xem conflict**

```bash
git checkout main
git pull origin main  # Lấy code mới từ An
git merge feature/register

# Output:
# Auto-merging config.js
# CONFLICT (content): Merge conflict in config.js
# Automatic merge failed; fix conflicts and then commit the result.
```

**Bước 2: Kiểm tra file conflict**

```bash
git status
# Unmerged paths:
#   (use "git add <file>..." to mark resolution)
#         both modified:   config.js
```

**Bước 3: Mở file và xem conflict markers**

```javascript
// File: config.js
<<<<<<< HEAD
const API_URL = 'https://api.example.com/v1';
=======
const API_URL = 'https://api.example.com/v2';
>>>>>>> feature/register
```

**Giải thích:**

-   `<<<<<<< HEAD`: Bắt đầu phần code từ main (version của An)
-   `=======`: Ngăn cách 2 phần
-   `>>>>>>> feature/register`: Kết thúc phần code từ feature/register (version của Bình)

**Bước 4: Quyết định và sửa**

**Tình huống A: Dùng version mới nhất (v2)**

```javascript
// Chọn version v2
const API_URL = "https://api.example.com/v2";
```

**Tình huống B: Dùng version cũ (v1)**

```javascript
// Chọn version v1
const API_URL = "https://api.example.com/v1";
```

**Tình huống C: Dùng cả hai (hợp nhất logic)**

```javascript
// Có thể tạo object chứa cả 2
const API_URLS = {
    login: "https://api.example.com/v1",
    register: "https://api.example.com/v2",
};
```

**Tình huống D: Viết lại hoàn toàn**

```javascript
// Thống nhất với team, dùng base URL
const API_BASE_URL = "https://api.example.com";
const API_URL = `${API_BASE_URL}/v2`; // Version mới nhất
```

**Bước 5: Đánh dấu đã resolve**

```bash
# Xóa conflict markers, chỉ giữ code đúng
# Ví dụ: giữ version v2
echo "const API_URL = 'https://api.example.com/v2';" > config.js

# Đánh dấu đã resolve
git add config.js
git status
# Changes to be committed:
#   modified:   config.js

# Hoàn tất merge
git commit -m "Merge feature/register, cập nhật API URL v2"
```

**Bước 6: Push lên**

```bash
git push origin main
```

### Lưu ý

✅ **Nên làm:**

-   Giao tiếp với team trước khi resolve (hỏi An nên dùng version nào)
-   Test code sau khi resolve
-   Commit message rõ ràng

❌ **Không nên:**

-   Tự ý chọn version mà không hỏi team
-   Xóa code mà không hiểu
-   Commit conflict markers (dấu `<<<<<<<`, `=======`, `>>>>>>>`)

## 💻 Case Study 2: Conflict nhiều dòng - Sửa nhiều chỗ trong cùng file

### Tình huống

**Team làm dự án React:**

-   **Cường:** Thêm validation cho form login
-   **Dũng:** Thêm error handling cho form login
-   Cùng sửa file `LoginForm.js`

### File gốc (trước conflict)

```javascript
// LoginForm.js
import React, { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic đăng nhập
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Đăng nhập</button>
        </form>
    );
};

export default LoginForm;
```

### Diễn biến

```bash
# Cường: Thêm validation
git checkout -b feature/login-validation
# Sửa file, thêm validation logic

# Dũng: Thêm error handling
git checkout -b feature/login-error-handling
# Sửa file, thêm error handling

# Cả 2 đều push và tạo PR
# Merge Cường vào main → OK
# Merge Dũng vào main → CONFLICT! 💥
```

### Conflict markers

```javascript
// LoginForm.js sau khi merge
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email không được để trống';
    if (!password) newErrors.password = 'Mật khẩu không được để trống';
    return newErrors;
  };
=======
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleError = (err) => {
    setError(err.message || 'Có lỗi xảy ra');
  };
>>>>>>> feature/login-error-handling

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    // Logic đăng nhập
=======
    setLoading(true);
    setError(null);
    // Logic đăng nhập với try-catch
    try {
      // API call
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
>>>>>>> feature/login-error-handling
  };

  return (
    <form onSubmit={handleSubmit}>
<<<<<<< HEAD
      {errors.email && <span className="error">{errors.email}</span>}
=======
      {error && <div className="error">{error}</div>}
>>>>>>> feature/login-error-handling
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<<<<<<< HEAD
      {errors.password && <span className="error">{errors.password}</span>}
=======
      {loading && <div>Đang xử lý...</div>}
>>>>>>> feature/login-error-handling
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default LoginForm;
```

### Cách resolve - Hợp nhất cả 2 tính năng

**Mục tiêu:** Giữ cả validation CỦA CƯỜNG và error handling CỦA DŨNG

**File sau khi resolve:**

```javascript
// LoginForm.js - Hợp nhất cả 2
import React, { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Từ Cường: Validation errors
    const [errors, setErrors] = useState({});
    // Từ Dũng: API error và loading
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Từ Cường: Validation logic
    const validateForm = () => {
        const newErrors = {};
        if (!email) newErrors.email = "Email không được để trống";
        if (!password) newErrors.password = "Mật khẩu không được để trống";
        return newErrors;
    };

    // Từ Dũng: Error handling
    const handleError = (err) => {
        setError(err.message || "Có lỗi xảy ra");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Bước 1: Validate (từ Cường)
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Bước 2: Submit với error handling (từ Dũng)
        setLoading(true);
        setError(null);
        setErrors({}); // Clear validation errors

        try {
            // API call đăng nhập
            // loginAPI(email, password);
        } catch (err) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Validation errors (từ Cường) */}
            {errors.email && <span className="error">{errors.email}</span>}
            {errors.password && <span className="error">{errors.password}</span>}

            {/* API error (từ Dũng) */}
            {error && <div className="error">{error}</div>}

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" disabled={loading}>
                {loading ? "Đang xử lý..." : "Đăng nhập"}
            </button>
        </form>
    );
};

export default LoginForm;
```

**Bước tiếp theo:**

```bash
git add LoginForm.js
git commit -m "Merge feature/login-error-handling, hợp nhất validation và error handling"
git push origin main
```

### Kinh nghiệm

✅ **Khi resolve conflict nhiều dòng:**

-   Đọc kỹ code của cả 2 bên
-   Hiểu mục đích của mỗi phần code
-   Hợp nhất logic nếu có thể
-   Test kỹ sau khi resolve

❌ **Tránh:**

-   Xóa code mà không hiểu
-   Giữ duplicate code không cần thiết
-   Resolve vội vàng không test

## 💻 Case Study 3: Conflict khi pull - Người khác đã push trước

### Tình huống

**Tình huống rất phổ biến trong teamwork:**

-   Bạn checkout branch lúc sáng
-   Làm việc cả ngày, commit nhiều lần
-   Chiều muốn push lên
-   Nhưng người khác đã push code mới trước đó!
-   → Conflict khi pull!

### Diễn biến

```bash
# Buổi sáng 9h: Bạn checkout branch
git checkout feature/user-dashboard
git pull origin feature/user-dashboard
# Code đồng bộ, bắt đầu làm việc

# Bạn commit nhiều lần trong ngày
git add .
git commit -m "feat: thêm component UserCard"
# ... làm việc ...
git add .
git commit -m "feat: thêm component UserStats"

# Chiều 5h: Bạn muốn push
git push origin feature/user-dashboard

# 💥 Lỗi!
# ! [rejected]        feature/user-dashboard -> feature/user-dashboard (fetch first)
# hint: Updates were rejected because the remote contains work that you do not have locally.
```

### Cách resolve

**Bước 1: Fetch code mới**

```bash
# Lấy code mới từ remote
git fetch origin
```

**Bước 2: Xem thay đổi**

```bash
# Xem khác biệt giữa local và remote
git log HEAD..origin/feature/user-dashboard
# Sẽ hiển thị commit của người khác

# Hoặc xem diff
git diff HEAD origin/feature/user-dashboard
```

**Bước 3: Pull và resolve conflict**

```bash
# Pull code mới (sẽ tự động merge)
git pull origin feature/user-dashboard

# Nếu không conflict, Git tự động merge và tạo merge commit
# Nếu có conflict, sẽ thấy:
# Auto-merging App.js
# CONFLICT (content): Merge conflict in App.js
```

**Bước 4: Resolve conflict (nếu có)**

```bash
# Xem file conflict
git status
# Unmerged paths:
#   both modified:   App.js

# Sửa file App.js
# ... resolve như case 1 và 2 ...

# Đánh dấu đã resolve
git add App.js
git commit -m "Merge remote-tracking branch 'origin/feature/user-dashboard'"
```

**Bước 5: Push lên**

```bash
git push origin feature/user-dashboard
```

### Cách tránh conflict này

✅ **Best practice:**

```bash
# Trước khi bắt đầu làm việc
git pull origin feature/user-dashboard

# Trong khi làm việc, thỉnh thoảng pull
git pull origin feature/user-dashboard

# Trước khi push
git pull origin feature/user-dashboard
git push origin feature/user-dashboard
```

**Hoặc dùng rebase để giữ lịch sử sạch:**

```bash
# Pull với rebase (không tạo merge commit)
git pull --rebase origin feature/user-dashboard

# Nếu có conflict, resolve từng commit
# Sau đó:
git rebase --continue
```

## 💻 Case Study 4: Conflict khi merge PR - Main đã có code mới

### Tình huống

**Workflow thực tế:**

-   Bạn tạo PR từ `feature/product-list` vào `main`
-   PR đang được review
-   Trong lúc đó, có PR khác merge vào `main` trước
-   PR của bạn bị conflict với code mới trong `main`
-   → Cần update PR branch!

### Diễn biến

```bash
# Bước 1: Bạn tạo PR
git checkout -b feature/product-list
# ... làm việc và commit ...
git push -u origin feature/product-list
# Tạo PR trên GitHub

# Bước 2: PR đang review
# Trong lúc đó, PR khác merge vào main

# Bước 3: GitHub báo conflict
# "This branch has conflicts that must be resolved"
```

### Cách resolve trên GitHub

**Option 1: Resolve trên GitHub Web (Dễ nhất)**

1.  Vào PR trên GitHub
2.  Click nút **"Resolve conflicts"**
3.  GitHub mở editor
4.  Sửa conflict trực tiếp trên web
5.  Click **"Mark as resolved"**
6.  Click **"Commit merge"**

**Lưu ý:** Cách này tạo merge commit

### Cách resolve local (Khuyến nghị)

**Bước 1: Update branch với main mới**

```bash
# Lấy code mới nhất
git checkout main
git pull origin main

# Chuyển về branch PR
git checkout feature/product-list

# Merge main vào branch (hoặc rebase)
git merge main
# Hoặc
git rebase main
```

**Bước 2: Resolve conflict**

```bash
# Nếu có conflict
git status
# Unmerged paths: ProductList.js

# Sửa file conflict
# ... resolve như các case trước ...

# Nếu dùng merge:
git add ProductList.js
git commit -m "Merge main into feature/product-list"

# Nếu dùng rebase:
git add ProductList.js
git rebase --continue
```

**Bước 3: Push lên**

```bash
# Nếu dùng merge, push bình thường:
git push origin feature/product-list

# Nếu dùng rebase, cần force push (cẩn thận!):
git push --force-with-lease origin feature/product-list
```

**Lưu ý:** `--force-with-lease` an toàn hơn `--force` vì kiểm tra remote trước

### Workflow khuyến nghị

✅ **Nên làm thường xuyên:**

```bash
# Mỗi ngày, update branch với main
git checkout feature/your-branch
git fetch origin
git merge origin/main
# Hoặc
git rebase origin/main

# Push lên để PR luôn sync với main
git push origin feature/your-branch
```

## 💻 Case Study 5: Conflict với file bị xóa - Modify/Delete

### Tình huống

**Team refactor code:**

-   **Em:** Refactor, xóa file `old-utils.js` vì không dùng nữa
-   **Lan:** Thêm function vào file `old-utils.js` vì cần dùng
-   → Conflict!

### Diễn biến

```bash
# Em: Xóa file cũ
git checkout -b feature/refactor
rm old-utils.js
git add old-utils.js
git commit -m "refactor: xóa file old-utils.js không dùng"
git push -u origin feature/refactor

# Lan: Thêm function vào file cũ
git checkout -b feature/add-helper
# Sửa old-utils.js, thêm function helper()
git add old-utils.js
git commit -m "feat: thêm helper function vào old-utils"
git push -u origin feature/add-helper

# Merge Em vào main → OK
# Merge Lan vào main → CONFLICT! 💥
```

### Conflict message

```bash
git checkout main
git merge feature/add-helper

# Output:
# CONFLICT (modify/delete): old-utils.js deleted in HEAD and modified in feature/add-helper.
# Version feature/add-helper of old-utils.js left in tree.
```

**Giải thích:**

-   `HEAD` (main) đã xóa file `old-utils.js`
-   `feature/add-helper` đã sửa file `old-utils.js`
-   Git không biết: Giữ file hay xóa?

### Cách resolve

**Option 1: Giữ file (Lan đúng, Em sai)**

```bash
# File vẫn còn trong working directory
# Chỉ cần add lại
git add old-utils.js
git commit -m "Merge feature/add-helper, giữ lại old-utils.js với helper function"
```

**Option 2: Xóa file (Em đúng, Lan sai)**

```bash
# Xóa file
git rm old-utils.js
git commit -m "Merge feature/add-helper, xóa old-utils.js vì đã refactor"
```

**Option 3: Di chuyển code sang file mới**

```bash
# Tạo file mới, copy code từ old-utils.js
cp old-utils.js new-utils.js
# Sửa new-utils.js nếu cần

# Xóa old-utils.js
git rm old-utils.js
git add new-utils.js
git commit -m "Merge feature/add-helper, di chuyển helper sang new-utils.js"
```

### Best practice

✅ **Trước khi xóa file:**

-   Kiểm tra xem file có đang được dùng không
-   Hỏi team xem có ai đang làm việc với file đó không
-   Tạo issue/PR để team biết trước

## 💻 Case Study 6: Conflict với nhiều file - Complex merge

### Tình huống

**Team làm feature lớn:**

-   **Hùng:** Làm tính năng Shopping Cart (sửa 5 files)
-   **Mai:** Làm tính năng Checkout (sửa 3 files, 2 files trùng với Hùng)
-   → Multiple conflicts!

### Danh sách files

**Files Hùng sửa:**

1.  `components/Cart.js`
2.  `components/CartItem.js`
3.  `utils/cartHelper.js`
4.  `App.js` ← **Trùng**
5.  `styles/cart.css`

**Files Mai sửa:**

1.  `components/Checkout.js`
2.  `utils/paymentHelper.js`
3.  `App.js` ← **Trùng**
4.  `components/Cart.js` ← **Trùng**

### Diễn biến

```bash
# Hùng merge vào main → OK
# Mai merge vào main → CONFLICT ở 2 files! 💥
```

### Cách resolve từng file

**Bước 1: Xem tất cả conflicts**

```bash
git merge feature/checkout

# Output:
# Auto-merging App.js
# CONFLICT (content): Merge conflict in App.js
# Auto-merging components/Cart.js
# CONFLICT (content): Merge conflict in components/Cart.js
# Automatic merge failed; fix conflicts and then commit the result.
```

**Bước 2: Resolve từng file một**

**File 1: App.js**

```javascript
// Conflict trong App.js
<<<<<<< HEAD
import Cart from './components/Cart';
=======
import Checkout from './components/Checkout';
>>>>>>> feature/checkout

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Cart />
=======
      <Checkout />
>>>>>>> feature/checkout
    </div>
  );
}
```

**Resolve: Giữ cả 2 (hợp nhất)**

```javascript
// App.js sau khi resolve
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
    return (
        <div>
            <Cart />
            <Checkout />
        </div>
    );
}
```

**File 2: components/Cart.js**

```javascript
// Conflict trong Cart.js
const Cart = () => {
<<<<<<< HEAD
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };
=======
  const handleCheckout = () => {
    // Logic checkout
  };
>>>>>>> feature/checkout

  return (
    <div>
      {/* ... */}
    </div>
  );
};
```

**Resolve: Giữ cả 2 functions**

```javascript
// Cart.js sau khi resolve
const Cart = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const handleCheckout = () => {
        // Logic checkout
    };

    return <div>{/* ... */}</div>;
};
```

**Bước 3: Đánh dấu tất cả đã resolve**

```bash
git add App.js
git add components/Cart.js
git status
# All conflicts fixed but you are still merging.

# Hoàn tất merge
git commit -m "Merge feature/checkout, hợp nhất Cart và Checkout features"
```

### Checklist resolve nhiều files

✅ **Quy trình:**

1.  Liệt kê tất cả files conflict (`git status`)
2.  Resolve từng file một (không vội)
3.  Test từng file sau khi resolve
4.  Add từng file khi đã resolve xong
5.  Commit khi tất cả đã resolve

❌ **Tránh:**

-   Resolve nhiều files cùng lúc → dễ sai
-   Không test sau khi resolve
-   Commit khi còn conflict markers

## 💻 Case Study 7: Conflict khi rebase - Resolve nhiều lần

### Tình huống

**Rebase với conflict:**

-   Branch của bạn có 3 commits
-   Main đã có code mới
-   Rebase lên main → Mỗi commit có thể conflict!
-   → Phải resolve 3 lần!

### Diễn biến

```bash
# Branch của bạn
git log --oneline
# abc123 feat: thêm component A
# def456 feat: thêm component B
# ghi789 feat: thêm component C

# Main có code mới
git checkout main
git pull origin main

# Rebase
git checkout feature/my-feature
git rebase main

# 💥 Conflict ở commit đầu tiên!
# Auto-merging App.js
# CONFLICT (content): Merge conflict in App.js
# error: could not apply abc123... feat: thêm component A
```

### Cách resolve từng commit

**Commit 1: Resolve conflict**

```bash
# File App.js có conflict
# Sửa file App.js
# ... resolve conflict ...

# Đánh dấu đã resolve
git add App.js
git rebase --continue

# 💥 Conflict ở commit thứ 2!
# Auto-merging App.js
# CONFLICT (content): Merge conflict in App.js
# error: could not apply def456... feat: thêm component B
```

**Commit 2: Resolve conflict lại**

```bash
# File App.js lại có conflict (khác với lần trước!)
# Sửa file App.js
# ... resolve conflict ...

git add App.js
git rebase --continue

# Commit 3 có thể cũng conflict...
# Lặp lại quy trình
```

**Commit 3: Resolve conflict lần cuối**

```bash
# Resolve conflict
git add App.js
git rebase --continue

# ✅ Rebase hoàn tất!
# Successfully rebased and updated refs/heads/feature/my-feature.
```

### Hủy rebase nếu quá phức tạp

```bash
# Nếu conflict quá nhiều, có thể hủy
git rebase --abort

# Quay về trạng thái trước khi rebase
# Dùng merge thay vì rebase
git merge main
```

### So sánh Merge vs Rebase với conflict

| Merge                  | Rebase                   |
| ---------------------- | ------------------------ |
| Resolve conflict 1 lần | Có thể resolve nhiều lần |
| Tạo merge commit       | Không tạo merge commit   |
| Giữ nguyên lịch sử     | Viết lại lịch sử         |
| An toàn hơn            | Phức tạp hơn             |

✅ **Khuyến nghị:**

-   Nếu branch đã share → Dùng **merge**
-   Nếu branch local, muốn lịch sử sạch → Dùng **rebase** (nhưng phải kiên nhẫn resolve nhiều lần)

## 🛠️ Tools để resolve conflict

### 1. VS Code (Khuyến nghị cho sinh viên)

**Cách dùng:**

1.  Mở file conflict trong VS Code
2.  VS Code tự động highlight conflict
3.  Click vào:


    -   **"Accept Current Change"** (giữ version HEAD)
    -   **"Accept Incoming Change"** (giữ version merge vào)
    -   **"Accept Both Changes"** (giữ cả 2)
    -   **"Compare Changes"** (xem diff)

**Ưu điểm:**

-   UI trực quan, dễ dùng
-   Highlight rõ ràng
-   Preview changes trước khi resolve

### 2. Git Mergetool

```bash
# Mở mergetool (VS Code làm mergetool)
git mergetool

# Hoặc config mergetool
git config --global merge.tool vscode
git mergetool
```

### 3. GitHub Web Editor

**Khi resolve conflict trong PR:**

-   Click "Resolve conflicts" trên GitHub
-   Sửa trực tiếp trên web
-   Click "Mark as resolved"

**Ưu điểm:**

-   Không cần clone về máy
-   Dễ dùng cho conflict đơn giản

### 4. Command line (Cho người quen)

```bash
# Xem conflict trong file
git diff

# Chấp nhận version của mình (HEAD)
git checkout --ours file.js

# Chấp nhận version của người khác
git checkout --theirs file.js

# Sau đó sửa thủ công nếu cần
```

## 📋 Checklist resolve conflict

### Trước khi resolve

-   [ ] Pull code mới nhất (`git pull`)
-   [ ] Hiểu rõ conflict (xem `git status`, `git diff`)
-   [ ] Giao tiếp với team (hỏi nên giữ version nào)

### Trong khi resolve

-   [ ] Đọc kỹ code của cả 2 bên
-   [ ] Hiểu mục đích của mỗi phần code
-   [ ] Resolve từng file một
-   [ ] Xóa tất cả conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
-   [ ] Giữ code đúng, không xóa nhầm

### Sau khi resolve

-   [ ] Test code sau khi resolve
-   [ ] Kiểm tra không còn conflict markers
-   [ ] Add tất cả files đã resolve (`git add`)
-   [ ] Commit với message rõ ràng
-   [ ] Push lên và thông báo team

## 💡 Mẹo phòng tránh conflict

### 1. **Làm việc trên branch riêng**

```bash
# ✅ Đúng
git checkout -b feature/your-feature
# Làm việc trên branch riêng

# ❌ Sai
git checkout main
# Commit trực tiếp vào main
```

### 2. **Pull thường xuyên**

```bash
# Mỗi buổi sáng, pull code mới
git pull origin main

# Trước khi push, pull lại
git pull origin main
git push origin main
```

### 3. **Giao tiếp với team**

```
Trước khi sửa file quan trọng:
"Team ơi, mình định sửa file App.js,
có ai đang làm việc với file này không?"
```

### 4. **Chia nhỏ PR**

```bash
# ✅ Tốt: PR nhỏ, dễ review
# - PR 1: Thêm component Button
# - PR 2: Thêm component Input
# - PR 3: Thêm form với Button và Input

# ❌ Không tốt: PR quá lớn
# - PR: Thêm toàn bộ form với 20 components
```

### 5. **Update branch thường xuyên**

```bash
# Mỗi ngày, update branch với main
git checkout feature/your-branch
git fetch origin
git merge origin/main
# Hoặc
git rebase origin/main
```

### 6. **Sử dụng file khác nhau**

```bash
# ✅ Tốt: Mỗi người làm file riêng
# An: components/LoginForm.js
# Bình: components/RegisterForm.js

# ❌ Dễ conflict: Cùng sửa một file
# An và Bình đều sửa: components/Form.js
```

## 🧩 Bài tập thực hành

### Level 1: Cơ bản

**Bài tập 1: Conflict đơn giản**

Tạo tình huống conflict cơ bản và resolve:

1.  Tạo repo, tạo file `config.js` với nội dung `const API_URL = 'old';`
2.  Tạo branch `feature/A`, sửa thành `const API_URL = 'new-A';`, commit
3.  Quay lại `main`, sửa thành `const API_URL = 'new-main';`, commit
4.  Merge `feature/A` vào `main`
5.  Resolve conflict, giữ version `new-A`
6.  Hoàn tất merge

**Mục tiêu:** Làm quen với conflict và cách resolve

### Level 2: Nâng cao

**Bài tập 2: Conflict nhiều files với teamwork**

**Tình huống:**

-   Làm việc nhóm 2-3 người
-   Mỗi người làm một feature khác nhau
-   Cùng sửa một số files

**Yêu cầu:**

1.  Tạo repo shared trên GitHub
2.  Mỗi người tạo branch riêng
3.  Làm việc song song, cùng sửa một số files
4.  Tạo PR và resolve conflict
5.  Viết tài liệu ghi lại:


    -   Files nào bị conflict
    -   Cách resolve
    -   Bài học rút ra

**Mục tiêu:** Thực hành teamwork với conflict thực tế

### Level 3: Expert

**Bài tập 3: Complex merge với nhiều conflicts**

1.  Tạo branch `feature/complex-A` với 5 commits, sửa 10 files
2.  Tạo branch `feature/complex-B` với 5 commits, sửa 8 files (5 files trùng với A)
3.  Merge A vào main
4.  Merge B vào main
5.  Resolve tất cả conflicts
6.  Đảm bảo code chạy đúng sau khi resolve

**Mục tiêu:** Thành thạo resolve conflict phức tạp

## 🎓 Tổng kết

### Những điều quan trọng cần nhớ

1.  **Conflict không đáng sợ:** Đây là điều bình thường khi làm việc nhóm
2.  **Giao tiếp là chìa khóa:** Luôn hỏi team trước khi resolve
3.  **Test sau khi resolve:** Đảm bảo code chạy đúng
4.  **Pull thường xuyên:** Giảm thiểu conflict
5.  **Dùng tools:** VS Code giúp resolve dễ dàng hơn

### Workflow khuyến nghị

```
1. Pull code mới → 2. Làm việc trên branch riêng
→ 3. Commit thường xuyên → 4. Pull lại trước khi push
→ 5. Nếu conflict → Resolve → 6. Test → 7. Push
```

### Tài nguyên học thêm

-   [Git Merge Conflicts - Atlassian](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)
-   [Resolving Merge Conflicts - GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
-   [Git Conflict Resolution - GitKraken](https://www.gitkraken.com/learn/git/tutorials/how-to-resolve-merge-conflict-in-git)

---

**Kết luận:** Conflict là một phần tất yếu của teamwork. Đừng sợ conflict, hãy học cách resolve nó một cách chuyên nghiệp. Với kiến thức từ bài này, bạn đã sẵn sàng làm việc nhóm hiệu quả!

**Nhớ:** Practice makes perfect - Hãy thực hành nhiều với các case study trên để thành thạo!
