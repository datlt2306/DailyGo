# Buổi 12: Axios & JSON-Server - Tour Management

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Setup Axios và JSON-Server với db.json (10 phút)
2. ✅ Thực hiện GET requests để lấy danh sách tours (15 phút)
3. ✅ Thực hiện POST, PUT, DELETE cho tours (15 phút)
4. ✅ Xử lý Error handling và Loading states (10 phút)
5. ✅ Xây dựng Tour Management với API (10 phút)

## 📋 Nội dung chính

### 1. Setup

```bash
npm install axios json-server
```

#### Tạo db.json cho Tour Management

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

#### Start JSON-Server

```bash
npx json-server --watch db.json --port 3001
```

**Lưu ý**: Chạy server này trong terminal riêng, giữ chạy trong suốt quá trình development.

### 2. Axios GET - Lấy danh sách Tours

```javascript [src/pages/Tours.jsx]
import { useState, useEffect } from 'react';
import axios from 'axios';
import TourCard from '../components/TourCard';

function Tours() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchTours = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3001/tours');
                setTours(response.data);
                setError(null);
            } catch (err) {
                setError('Không thể tải danh sách tours');
                console.error('Error:', err);
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                ✈️ Danh sách Tours
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </div>
    );
}

export default Tours;
```

```javascript [src/components/TourCard.jsx]
import { Link } from 'react-router-dom';

function TourCard({ tour }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img 
                src={tour.image} 
                alt={tour.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {tour.name}
                </h3>
                <p className="text-gray-600 mb-2">{tour.destination}</p>
                <p className="text-blue-600 font-semibold mb-2">
                    {tour.price.toLocaleString('vi-VN')} đ
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

### 3. Axios POST

```javascript
const handleAdd = async (tourData) => {
    try {
        const response = await axios.post(
            'http://localhost:3001/tours',
            tourData
        );
        setTours([...tours, response.data]);
    } catch (error) {
        console.error('Error:', error);
    }
};
```

### 4. Axios PUT

```javascript
const handleUpdate = async (id, updatedData) => {
    try {
        await axios.put(
            `http://localhost:3001/tours/${id}`,
            updatedData
        );
        // Update local state
    } catch (error) {
        console.error('Error:', error);
    }
};
```

### 5. Axios DELETE

```javascript
const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:3001/tours/${id}`);
        setTours(tours.filter(tour => tour.id !== id));
    } catch (error) {
        console.error('Error:', error);
    }
};
```

## 🧪 Bài tập Thực hành: Tour Management - API Setup

### Mục tiêu
Xây dựng Tour Management với kết nối API sử dụng Axios và JSON-Server.

### Lab 1: Setup Tour Management Project (50 phút)

#### Bước 1: Cài đặt dependencies (5 phút)

```bash
npm install axios
npm install -D json-server
```

#### Bước 2: Tạo db.json (10 phút)

Tạo file `db.json` ở root project với dữ liệu mẫu như trên.

#### Bước 3: Tạo API Service (15 phút)

```javascript [src/services/api.js]
import axios from 'axios';

const API_URL = 'http://localhost:3001';

// Tạo axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Tours API
export const toursAPI = {
    getAll: () => api.get('/tours'),
    getById: (id) => api.get(`/tours/${id}`),
    create: (data) => api.post('/tours', data),
    update: (id, data) => api.put(`/tours/${id}`, data),
    delete: (id) => api.delete(`/tours/${id}`)
};

export default api;
```

#### Bước 4: Tạo TourList Component với API (20 phút)

```javascript [src/pages/Tours.jsx]
import { useState, useEffect } from 'react';
import { toursAPI } from '../services/api';
import TourCard from '../components/TourCard';

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
                setError('Không thể tải danh sách tours');
                console.error('Error:', err);
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                ✈️ Danh sách Tours
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </div>
    );
}

export default Tours;
```

### Kết quả mong đợi

- ✅ JSON-Server chạy trên port 3001
- ✅ Tours được load từ API
- ✅ Hiển thị loading state
- ✅ Xử lý error state
- ✅ Tour cards hiển thị đẹp với TailwindCSS

---

## 📝 Tổng kết

### Điểm chính

- ✅ Axios là HTTP client cho React
- ✅ JSON-Server tạo REST API từ JSON file
- ✅ GET request để fetch data
- ✅ Loading và Error states quan trọng
- ✅ Tổ chức API service riêng

### Checklist buổi 12

- [ ] Setup Axios và JSON-Server
- [ ] Tạo db.json với dữ liệu tours
- [ ] Tạo API service
- [ ] Fetch và hiển thị tours
- [ ] Xử lý loading và error states

---

**Xem**: [Axios Docs](https://axios-http.com/) | [JSON-Server](https://github.com/typicode/json-server)

