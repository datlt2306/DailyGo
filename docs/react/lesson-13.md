# Buổi 13: CRUD Operations - Tour Management

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Implement đầy đủ CRUD cho Tours (15 phút)
2. ✅ Tối ưu state management (10 phút)
3. ✅ Loading và Error states (10 phút)
4. ✅ Validation form (10 phút)
5. ✅ Xây dựng Tour Management hoàn chỉnh (15 phút)

## 📋 Nội dung chính

### 1. CRUD Flow

```javascript
function TourManager() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // CREATE
    const createTour = async (tourData) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/tours', tourData);
            setTours([...tours, response.data]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    // READ - Fetch all
    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/tours');
            setTours(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    // UPDATE
    const updateTour = async (id, updatedData) => {
        setLoading(true);
        try {
            const response = await axios.put(`/api/tours/${id}`, updatedData);
            setTours(tours.map(t => t.id === id ? response.data : t));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    // DELETE
    const deleteTour = async (id) => {
        if (!confirm('Xác nhận xóa?')) return;
        
        setLoading(true);
        try {
            await axios.delete(`/api/tours/${id}`);
            setTours(tours.filter(t => t.id !== id));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    return <div>{/* Render */}</div>;
}
```

### 2. Loading & Error States

```javascript
function TourList() {
    // ...
    
    if (loading) {
        return (
            <div className="loading">
                <div className="spinner"></div>
                <p>Đang tải...</p>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="error">
                <p>❌ {error}</p>
                <button onClick={fetchTours}>Thử lại</button>
            </div>
        );
    }
    
    if (tours.length === 0) {
        return <div className="empty">Không có tour nào</div>;
    }
    
    return <div>{/* Tours */}</div>;
}
```

### 3. Optimistic Updates

```javascript
const handleLike = async (id) => {
    // Optimistic: Update UI ngay
    const oldTours = tours;
    setTours(tours.map(t => 
        t.id === id ? { ...t, liked: !t.liked } : t
    ));
    
    try {
        await axios.post(`/api/tours/${id}/like`);
    } catch (err) {
        // Rollback nếu thất bại
        setTours(oldTours);
        alert('Có lỗi xảy ra');
    }
};
```

## 🧪 Bài tập Thực hành: Tour Management - CRUD

### Mục tiêu
Xây dựng đầy đủ chức năng CRUD cho Tour Management.

### Lab 1: CRUD Tours hoàn chỉnh (50 phút)

#### Bước 1: Tạo Tour Form Component (20 phút)

```javascript [src/components/TourForm.jsx]
import { useState } from 'react';
import { toursAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

function TourForm({ initialData, onSubmit }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialData || {
        name: '',
        destination: '',
        duration: '',
        price: '',
        description: '',
        available: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Tên tour không được để trống';
        if (!formData.destination.trim()) newErrors.destination = 'Điểm đến không được để trống';
        if (!formData.price || formData.price <= 0) newErrors.price = 'Giá phải lớn hơn 0';
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
                available: Number(formData.available)
            };
            
            if (initialData) {
                await toursAPI.update(initialData.id, data);
            } else {
                await toursAPI.create(data);
            }
            
            navigate('/tours');
        } catch (err) {
            console.error('Error:', err);
            alert('Có lỗi xảy ra');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
                {initialData ? 'Sửa Tour' : 'Thêm Tour mới'}
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
                    {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
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
                    {loading ? 'Đang xử lý...' : 'Lưu'}
                </button>
                <button
                    type="button"
                    onClick={() => navigate('/tours')}
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

#### Bước 2: Thêm chức năng Delete (15 phút)

```javascript [src/components/TourCard.jsx]
import { Link, useNavigate } from 'react-router-dom';
import { toursAPI } from '../services/api';

function TourCard({ tour, onDelete }) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm('Bạn có chắc muốn xóa tour này?')) {
            try {
                await toursAPI.delete(tour.id);
                onDelete?.(tour.id);
            } catch (err) {
                alert('Có lỗi xảy ra khi xóa');
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

#### Bước 3: Tạo trang Tour Create/Edit (15 phút)

```javascript [src/pages/TourFormPage.jsx]
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toursAPI } from '../services/api';
import TourForm from '../components/TourForm';

function TourFormPage() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(!!id);

    useEffect(() => {
        if (id) {
            const fetchTour = async () => {
                try {
                    const response = await toursAPI.getById(id);
                    setTour(response.data);
                } catch (err) {
                    console.error('Error:', err);
                } finally {
                    setLoading(false);
                }
            };
            fetchTour();
        }
    }, [id]);

    if (loading) return <div>Đang tải...</div>;

    return <TourForm initialData={tour} />;
}

export default TourFormPage;
```

**Routes**:
```javascript
<Route path="/tours/new" element={<TourFormPage />} />
<Route path="/tours/:id/edit" element={<TourFormPage />} />
```

---

## 📝 Tổng kết

### Điểm chính

- ✅ CRUD đầy đủ: Create, Read, Update, Delete
- ✅ Form validation quan trọng
- ✅ Loading và Error states
- ✅ Confirm dialog trước khi xóa
- ✅ Navigation sau khi thao tác

### Checklist buổi 13

- [ ] Tạo Tour Form component
- [ ] Implement Create tour
- [ ] Implement Update tour
- [ ] Implement Delete tour
- [ ] Form validation
- [ ] Loading và error handling

---

**Xem**: [JSON-Server](https://github.com/typicode/json-server)

