# Buổi 13: CRUD Operations

## 🎯 Mục tiêu học tập (SMART)

1. ✅ Implement đầy đủ CRUD
2. ✅ Tối ưu state management
3. ✅ Loading và Error states
4. ✅ Validation form
5. ✅ Optimistic updates

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

## 🧪 Bài tập Lab

### Lab 1: Full CRUD Tours
Complete CRUD với UI/UX tốt.

### Lab 2: Tour Management Dashboard
Admin panel với search, filter, sort.

### Lab 3: Optimistic Updates
Like, favorite với instant feedback.

---

## ✅ Quiz (5 câu)

1. CRUD viết tắt của:
   - A. Create, Read, Update, Delete ✅
   - B. Create, Render, Update, Delete
   - C. Config, Read, Update, Deploy
   - D. Connect, Run, Update, Debug

---

**Xem**: [JSON-Server](https://github.com/typicode/json-server)

