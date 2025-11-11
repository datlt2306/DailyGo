# Buổi 13: CRUD Operations - Tour Management

## 🎯 Mục tiêu của buổi học

Các bạn sinh viên thân mến, sau buổi học hôm nay, thầy kỳ vọng các bạn sẽ:

1. ✅ Cài đặt đầy đủ CRUD cho Tours (thực hành ~15 phút)
2. ✅ Hiểu cách tối ưu quản lý state trong React (10 phút)
3. ✅ Biết cách hiển thị trạng thái loading và error (10 phút)
4. ✅ Áp dụng kiểm tra dữ liệu (validation) cho form (10 phút)
5. ✅ Hoàn thiện toàn bộ chức năng quản lý Tour (15 phút)

## 📋 Nội dung chính

### 1. CRUD Flow

Các bạn cùng quan sát ví dụ dưới đây, thầy sẽ minh họa 4 thao tác CRUD cơ bản:

```javascript
function TourManager() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Tạo mới tour (CREATE)
    const createTour = async (tourData) => {
        setLoading(true);
        try {
            const res = await axios.post("/api/tours", tourData);
            setTours([...tours, res.data]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    // Lấy danh sách tour (READ)
    const fetchTours = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/api/tours");
            setTours(res.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    // Sửa thông tin tour (UPDATE)
    const updateTour = async (id, updatedData) => {
        setLoading(true);
        try {
            const res = await axios.put(`/api/tours/${id}`, updatedData);
            setTours(tours.map((t) => (t.id === id ? res.data : t)));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    // Xóa tour (DELETE)
    const deleteTour = async (id) => {
        if (!confirm("Bạn chắc chắn muốn xóa Tour này chứ?")) return;
        setLoading(true);
        try {
            await axios.delete(`/api/tours/${id}`);
            setTours(tours.filter((t) => t.id !== id));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return <div>{/* Render nội dung quản lý tour ở đây */}</div>;
}
```

### 2. Xử lý Loading & Error

Thầy khuyến khích các bạn luôn phải để ý trạng thái loading và error khi làm việc với API nhé:

```javascript
function TourList() {
    // ...

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner"></div>
                <p>Đang tải dữ liệu, các bạn chờ chút nhé...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <p>❌ Có lỗi: {error}</p>
                <button onClick={fetchTours}>Thử lại</button>
            </div>
        );
    }

    if (tours.length === 0) {
        return <div className="empty">Chưa có tour nào!</div>;
    }

    return <div>{/* Hiển thị các tour tại đây */}</div>;
}
```

### 3. Optimistic Updates

Có một mẹo hay là cập nhật UI trước khi gọi API xong để tạo cảm giác mượt mà. Đoạn này thầy ví dụ với "like":

```javascript
const handleLike = async (id) => {
    // Giả sử UI phản ứng ngay lập tức
    const oldTours = tours;
    setTours(tours.map((t) => (t.id === id ? { ...t, liked: !t.liked } : t)));

    try {
        await axios.post(`/api/tours/${id}/like`);
    } catch (err) {
        // Nếu lỗi, quay lại trạng thái cũ và báo cho user
        setTours(oldTours);
        alert("Có lỗi khi like tour này");
    }
};
```

## 🧪 Bài tập Thực hành: CRUD Quản Lý Tour

### Mục tiêu

Sau khi thực hành, các bạn sẽ tự xây dựng đầy đủ chức năng CRUD cho phần quản lý Tour.

### Lab 1: CRUD Tour hoàn chỉnh (Thời gian gợi ý: 50 phút)

#### Bước 1: Tạo component Tour Form (20 phút)

Thầy demo code cơ bản cho form thêm/sửa Tour bên dưới. Các bạn hãy đọc và thử triển khai nhé!

```javascript [src/components/TourForm.jsx]
import { useState } from "react";
import { toursAPI } from "../services/api";
import { useNavigate } from "react-router-dom";

function TourForm({ initialData, onSubmit }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(
        initialData || {
            name: "",
            destination: "",
            duration: "",
            price: "",
            description: "",
            available: "",
        }
    );
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Kiểm tra dữ liệu đầu vào
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Tên tour không được để trống";
        if (!formData.destination.trim()) newErrors.destination = "Điểm đến không được để trống";
        if (!formData.price || formData.price <= 0) newErrors.price = "Giá phải lớn hơn 0";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            const data = {
                ...formData,
                price: Number(formData.price),
                available: Number(formData.available),
            };

            if (initialData) {
                await toursAPI.update(initialData.id, data);
            } else {
                await toursAPI.create(data);
            }

            navigate("/tours");
        } catch (err) {
            console.error("Error:", err);
            alert("Gặp lỗi khi lưu, các bạn vui lòng thử lại!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
        >
            <h2 className="text-2xl font-bold mb-4">
                {initialData ? "Sửa thông tin Tour" : "Thêm Tour mới"}
            </h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-2">Tên tour</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Điểm đến</label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                    {errors.destination && (
                        <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
                    )}
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Thời gian</label>
                    <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder="VD: 3 ngày 2 đêm"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Giá (VNĐ)</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Mô tả</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Số chỗ còn lại</label>
                    <input
                        type="number"
                        name="available"
                        value={formData.available}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
            </div>

            <div className="flex gap-4 mt-6">
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? "Đang xử lý..." : "Lưu"}
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/tours")}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                    Hủy
                </button>
            </div>
        </form>
    );
}

export default TourForm;
```

#### Bước 2: Thêm chức năng Xóa tour (15 phút)

Các bạn chú ý, nên xác nhận lại với user trước khi xóa nhé:

```javascript [src/components/TourCard.jsx]
import { Link, useNavigate } from "react-router-dom";
import { toursAPI } from "../services/api";

function TourCard({ tour, onDelete }) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm("Bạn có chắc chắn muốn xóa tour này?")) {
            try {
                await toursAPI.delete(tour.id);
                onDelete?.(tour.id);
            } catch (err) {
                alert("Xóa không thành công, thử lại sau nhé!");
            }
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            {/* ... card content ... */}
            <div className="p-4 flex gap-2">
                <Link
                    to={`/tours/${tour.id}`}
                    className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Xem chi tiết
                </Link>
                <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Xóa
                </button>
            </div>
        </div>
    );
}
```

#### Bước 3: Xây dựng trang Thêm/Sửa Tour (15 phút)

Thầy lấy ví dụ code tạo trang form tổng hợp dưới đây. Các bạn có thể chỉnh sửa thêm nhé!

```javascript [src/pages/TourFormPage.jsx]
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toursAPI } from "../services/api";
import TourForm from "../components/TourForm";

function TourFormPage() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(!!id);

    useEffect(() => {
        if (id) {
            const fetchTour = async () => {
                try {
                    const res = await toursAPI.getById(id);
                    setTour(res.data);
                } catch (err) {
                    console.error("Error:", err);
                } finally {
                    setLoading(false);
                }
            };
            fetchTour();
        }
    }, [id]);

    if (loading) return <div>Đang tải dữ liệu...</div>;

    return <TourForm initialData={tour} />;
}

export default TourFormPage;
```

**Định tuyến:**

```javascript
<Route path="/tours/new" element={<TourFormPage />} />
<Route path="/tours/:id/edit" element={<TourFormPage />} />
```

---

## 📝 Tổng kết buổi học

### Những điểm chính các bạn cần nhớ

-   ✅ Đã thực hành đủ 4 thao tác CRUD: Tạo, Đọc, Sửa, Xóa Tour
-   ✅ Biết kiểm tra dữ liệu đầu vào (form validation)
-   ✅ Hiện thị trạng thái loading và lỗi khi call API
-   ✅ Luôn xác nhận khi thực hiện thao tác xóa để tránh nhầm lẫn
-   ✅ Hiểu cách điều hướng (navigation) giữa các trang khi thao tác

### Checklist buổi 13

-   [ ] Tạo component form Tour
-   [ ] Implement chức năng tạo tour
-   [ ] Implement chức năng sửa tour
-   [ ] Implement chức năng xóa tour
-   [ ] Thêm kiểm tra dữ liệu (validate)
-   [ ] Xử lý trạng thái loading và lỗi

---

**Tài liệu tham khảo:** [JSON-Server](https://github.com/typicode/json-server)
