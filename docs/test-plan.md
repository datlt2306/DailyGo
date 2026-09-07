# DailyGo - Test Plan & Verification Specification

## 1. Overview
Tài liệu hướng dẫn kiểm thử toàn diện các tính năng của DailyGo để đảm bảo đáp ứng Definition of Done.

## 2. Test Cases Matrix

### 2.1 Authentication & Profile
| Test Case ID | Feature | Description | Expected Result |
|--------------|---------|-------------|-----------------|
| AUTH-01 | Register | Đăng ký tài khoản mới với email và password hợp lệ | Đăng ký thành công, tự động tạo profile và default template (4 categories, 13 items) |
| AUTH-02 | Login | Đăng nhập tài khoản đã tạo | Đăng nhập thành công, chuyển hướng vào `/today` |
| AUTH-03 | Protected Routes | Truy cập `/today` khi chưa đăng nhập | Tự động chuyển hướng về `/login` |
| AUTH-04 | Logout | Bấm Đăng xuất từ Settings hoặc Sidebar | Session bị xóa, chuyển hướng về `/login` |

### 2.2 Template Management
| Test Case ID | Feature | Description | Expected Result |
|--------------|---------|-------------|-----------------|
| TMPL-01 | Create Item | Thêm 1 item mới loại `duration` vào danh mục "Cá nhân & gia đình" | Item xuất hiện trong danh mục với icon/type chính xác |
| TMPL-02 | Edit Item | Thay đổi tiêu đề và loại item từ `checkbox` sang `text` | Template cập nhật thành công |
| TMPL-03 | Toggle Enable | Tắt 1 item trong template | Item mờ đi trong cấu hình và không xuất hiện khi lập kế hoạch ngày mới |
| TMPL-04 | Reorder Item | Đổi thứ tự item lên/xuống | Order index cập nhật chính xác |

### 2.3 Daily Checklist & Snapshot Independence
| Test Case ID | Feature | Description | Expected Result |
|--------------|---------|-------------|-----------------|
| DLY-01 | Plan Tomorrow | Nạp template, sửa chi tiết việc nhà "Đổ rác", bấm Lưu | Tạo daily checklist thành công cho ngày mai |
| DLY-02 | Edit Snapshot | Sửa task ngày hôm nay (VD: nhập 45 phút đọc sách) | Chỉ ngày hôm nay thay đổi, template và ngày mai KHÔNG bị ảnh hưởng |
| DLY-03 | Template Edit Impact | Sửa template sau khi đã tạo daily checklist | Các daily checklist đã tạo trước đó KHÔNG bị thay đổi |
| DLY-04 | No Duplicate | Bấm lập kế hoạch cho ngày đã tồn tại | Mở lại kế hoạch hiện tại, không tạo trùng lập bản ghi DB |

### 2.4 Progress & Custom Values
| Test Case ID | Feature | Description | Expected Result |
|--------------|---------|-------------|-----------------|
| PROG-01 | Checkbox Toggle | Tích chọn 1 checkbox trên `/today` | Tiến độ % cập nhật ngay lập tức, DB ghi nhận `is_completed = true` |
| PROG-02 | Duration Value | Nhập 30 phút vào item duration | Hiển thị "30 phút", tiến độ % tính đúng |
| PROG-03 | Text Value | Nhập text "Đổ rác" vào item text | Hiển thị "Đổ rác", tiến độ % tính đúng |

### 2.5 Security & RLS Isolation
| Test Case ID | Feature | Description | Expected Result |
|--------------|---------|-------------|-----------------|
| SEC-01 | User Isolation | User A truy cập API/Actions lấy daily checklist của User B | Supabase RLS từ chối, không trả về dữ liệu của User B |
| SEC-02 | Auth User Context | Client gửi request thay đổi `user_id` | Server lấy user ID từ session token, phớt lờ input từ client |

### 2.6 Timezone Handling
| Test Case ID | Feature | Description | Expected Result |
|--------------|---------|-------------|-----------------|
| TZ-01 | Local Date Boundary | Đăng nhập lúc 23:55 tại Asia/Ho_Chi_Minh | Ngày hôm nay hiển thị đúng ngày địa phương, chuyển sang 00:05 ngày mới tự động nhận diện ngày tiếp theo |

## 3. Automated & Build Checks
- **TypeScript**: `npx tsc --noEmit` (0 errors).
- **ESLint**: `npm run lint` (0 warnings/errors).
- **Production Build**: `npm run build` (Build thành công).
