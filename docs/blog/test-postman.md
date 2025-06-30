
# Hướng dẫn tạo collections test API sử dụng Postman

### Export file Postman

1. Mở Postman và chọn Collection mà bạn muốn export (ví dụ: `FPL-WEB503`).
2. Nhấn chuột phải vào Collection và chọn **Export**.
3. Chọn định dạng **Collection v2.1** (khuyến nghị) và nhấn **Export**.
4. Lưu file JSON vào thư mục dự án, ví dụ: `FPL-WEB503/note/FPL-WEB503.postman_collection.json`.

### Sử dụng AI để tạo tài liệu từ file JSON

Nhập prompt sau:

<blockquote>Hãy tạo tài liệu API từ file JSON sau. File này chứa các endpoint CRUD cho bài viết, bao gồm các phương thức GET, POST, PUT, DELETE. Dưới đây là nội dung file JSON:</blockquote>

#### Kết quả mong đợi:

```json
{
    "info": {
        "name": "FPL-WEB503",
        "description": "Collection API CRUD cho bài viết",
        ...
    },
    "item": [
        {
            "name": "Lấy danh sách bài viết",
            "request": {
                "method": "GET",
                "url": "{{host}}/posts"
            },
            ...
        },
        {
            "name": "Thêm bài viết mới",
            "request": {
                "method": "POST",
                "url": "{{host}}/posts",
                "body": {
                    "mode": "raw",
                    "raw": "{ \"title\": \"Bài viết mới\", \"content\": \"Nội dung bài viết mới\" }"
                }
            },
            ...
        },
        ...
    ],
    "variable": [
        {
            "key": "host",
            "value": "http://localhost:8000/api"
        }
    ]
}
```

-   Tài liệu API được tạo từ file JSON, bao gồm:
    -   Tên endpoint.
    -   Phương thức HTTP (GET, POST, PUT, DELETE).
    -   URL endpoint.
    -   Mô tả dữ liệu gửi lên (nếu có).
    -   Mô tả dữ liệu trả về (nếu có).
    -   Biến môi trường `host` được thiết lập để dễ dàng thay đổi URL gốc.

### Import file JSON vào Postman

1. Mở Postman và nhấn vào nút **Import** ở góc trên bên trái.
2. Chọn tab **File** và nhấn **Upload Files**.
3. Chọn file JSON đã export (ví dụ: `FPL-WEB503.postman_collection.json`) và nhấn **Open**.
4. Sau khi import thành công, bạn sẽ thấy Collection xuất hiện trong Postman.