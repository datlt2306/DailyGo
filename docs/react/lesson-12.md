# Buổi 12: Axios & JSON-Server - Tour Management

## 🎯 Mục tiêu buổi học hôm nay

Sau buổi này, mấy bạn sẽ:

1. ✅ Cài đặt Axios và JSON-Server, chuẩn bị file db.json (10 phút)
2. ✅ Gửi GET request lấy danh sách tours (15 phút)
3. ✅ Thực hành thêm/sửa/xóa tour với POST, PUT, DELETE (15 phút)
4. ✅ Hiểu & xử lý Error + Loading khi call API (10 phút)
5. ✅ Xây dựng màn Tour Management dựa trên API vừa tạo (10 phút)

## 📋 Nội dung chính của buổi học

### 1. Setup

Các bạn mở terminal và gõ:

```bash
npm install axios json-server
```

#### Tạo db.json để quản lý Tour

Tạo file `db.json` với dữ liệu sau:

```json [db.json]
{
    "tours": [
        {
            "id": 1,
            "name": "Hà Nội - Sapa 3N2D",
            "destination": "Sapa",
            "duration": "3 ngày 2 đêm",
            "price": 2500000,
            "image": "https://picsum.photos/400/300?random=1",
            "description": "Khám phá Sapa với những ruộng bậc thang tuyệt đẹp",
            "available": 15
        },
        {
            "id": 2,
            "name": "Hạ Long - Cát Bà 2N1D",
            "destination": "Hạ Long",
            "duration": "2 ngày 1 đêm",
            "price": 1800000,
            "image": "https://picsum.photos/400/300?random=2",
            "description": "Du thuyền vịnh Hạ Long - Kỳ quan thiên nhiên thế giới",
            "available": 20
        },
        {
            "id": 3,
            "name": "Đà Lạt 4N3D",
            "destination": "Đà Lạt",
            "duration": "4 ngày 3 đêm",
            "price": 3200000,
            "image": "https://picsum.photos/400/300?random=3",
            "description": "Thành phố ngàn hoa với khí hậu mát mẻ quanh năm",
            "available": 10
        }
    ],
    "destinations": [
        {
            "id": 1,
            "name": "Sapa",
            "icon": "🏔️",
            "description": "Thiên đường núi rừng Tây Bắc"
        },
        {
            "id": 2,
            "name": "Hạ Long",
            "icon": "🌊",
            "description": "Kỳ quan thiên nhiên thế giới"
        },
        {
            "id": 3,
            "name": "Đà Lạt",
            "icon": "🌺",
            "description": "Thành phố ngàn hoa"
        }
    ]
}
```

#### Khởi động JSON-Server

```bash
npx json-server --watch db.json --port 3001
```

> 📝 **Lưu ý:** Mấy bạn chạy lệnh này ở 1 cửa sổ terminal riêng. Nhớ giữ server chạy trong lúc code nhé!

### 2. Lấy danh sách Tours với Axios (GET)

Ví dụ code dưới lấy dữ liệu tours từ API và render danh sách:

```javascript [src/pages/Tours.jsx]
import { useState, useEffect } from "react";
import axios from "axios";
import TourCard from "../components/TourCard";

function Tours() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:3001/tours");
                setTours(response.data);
                setError(null);
            } catch (err) {
                setError("Không thể tải danh sách tours");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-lg text-gray-600">Đang tải...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-6">
                <p className="text-red-500">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Thử lại
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">✈️ Danh sách Tours</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </div>
    );
}

export default Tours;
```

```javascript [src/components/TourCard.jsx]
import { Link } from "react-router-dom";

function TourCard({ tour }) {
    // Component này nhận tour qua props và hiển thị đẹp mắt từng tour
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.name}</h3>
                <p className="text-gray-600 mb-2">{tour.destination}</p>
                <p className="text-blue-600 font-semibold mb-2">
                    {tour.price.toLocaleString("vi-VN")} đ
                </p>
                <Link
                    to={`/tours/${tour.id}`}
                    className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Xem chi tiết
                </Link>
            </div>
        </div>
    );
}

export default TourCard;
```

### 3. Gửi request thêm Tour (POST)

Thêm 1 tour mới:

```javascript
const handleAdd = async (tourData) => {
    try {
        const response = await axios.post("http://localhost:3001/tours", tourData);
        setTours([...tours, response.data]);
    } catch (error) {
        console.error("Error:", error);
    }
};
```

### 4. Sửa Tour (PUT)

Cập nhật thông tin 1 tour đã có:

```javascript
const handleUpdate = async (id, updatedData) => {
    try {
        await axios.put(`http://localhost:3001/tours/${id}`, updatedData);
        // Update state sau khi sửa nếu cần
    } catch (error) {
        console.error("Error:", error);
    }
};
```

### 5. Xóa Tour (DELETE)

```javascript
const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:3001/tours/${id}`);
        setTours(tours.filter((tour) => tour.id !== id));
    } catch (error) {
        console.error("Error:", error);
    }
};
```

## 🧪 Bài tập Thực hành: Khởi tạo Tour Management (API)

### Mục tiêu

Mục tiêu là các bạn xây dựng tính năng Tour Management, lấy dữ liệu qua API với Axios & JSON-Server.

### Lab 1: Setup Project (50 phút)

#### Bước 1: Cài thư viện (5 phút)

```bash
npm install axios
npm install -D json-server
```

#### Bước 2: Tạo db.json (10 phút)

Tạo file db.json ở gốc project và copy dữ liệu mẫu bên trên vào.

#### Bước 3: Tạo file API service (15 phút)

Thầy hướng dẫn các bạn tạo 1 file riêng để quản lý gọi API cho gọn gàng:

```javascript [src/services/api.js]
import axios from "axios";

const API_URL = "http://localhost:3001";

// Tạo axios instance để dùng chung
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Gói gọn các hàm gọi API tours
export const toursAPI = {
    getAll: () => api.get("/tours"),
    getById: (id) => api.get(`/tours/${id}`),
    create: (data) => api.post("/tours", data),
    update: (id, data) => api.put(`/tours/${id}`, data),
    delete: (id) => api.delete(`/tours/${id}`),
};

export default api;
```

#### Bước 4: Hiển thị List Tour dùng API (20 phút)

```javascript [src/pages/Tours.jsx]
import { useState, useEffect } from "react";
import { toursAPI } from "../services/api";
import TourCard from "../components/TourCard";

function Tours() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                setLoading(true);
                const response = await toursAPI.getAll();
                setTours(response.data);
                setError(null);
            } catch (err) {
                setError("Không thể tải danh sách tours");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-lg text-gray-600">Đang tải...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-6">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">✈️ Danh sách Tours</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </div>
    );
}

export default Tours;
```

### Kết quả mong muốn

-   ✅ Mấy bạn chạy được JSON-Server ở cổng 3001
-   ✅ Tours khi vào trang sẽ load qua API thực sự
-   ✅ Quá trình load hiện ra loading rõ ràng
-   ✅ Xử lý khi lỗi kết nối API
-   ✅ Layout tour đẹp mắt với TailwindCSS

---

## 📝 Tổng kết buổi 12

### Nội dung mấu chốt

-   ✅ Axios là thư viện call API cực mạnh cho React
-   ✅ JSON-Server giúp backend giả lập nhanh, thao tác như REST API thật
-   ✅ GET để lấy data về, POST/PUT/DELETE để thêm - sửa - xóa
-   ✅ Đừng quên loading và error state khi fetch API
-   ✅ Đóng gói logic gọi API riêng file cho dễ bảo trì

### Checklist cuối buổi

-   [ ] Đã setup Axios, JSON-Server
-   [ ] Đã có file db.json mẫu
-   [ ] Đã tách API service
-   [ ] Đã fetch và render được tours
-   [ ] Đã code loading và error states

---

**Tài liệu thêm**: [Axios Docs](https://axios-http.com/) | [JSON-Server](https://github.com/typicode/json-server)
