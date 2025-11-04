# Buổi 12: Axios & JSON-Server

## 🎯 Mục tiêu học tập (SMART)

1. ✅ Setup Axios và JSON-Server
2. ✅ Thực hiện GET requests
3. ✅ Thực hiện POST, PUT, DELETE
4. ✅ Xử lý Error handling
5. ✅ Loading states với API calls

## 📋 Nội dung chính

### 1. Setup

```bash
npm install axios json-server
```

#### Start JSON-Server

```json [db.json]
{
  "tours": [
    {
      "id": 1,
      "name": "Hà Nội - Sapa",
      "price": 2500000
    }
  ]
}
```

```bash
npx json-server --watch db.json --port 3001
```

### 2. Axios GET

```javascript
import axios from 'axios';

function TourList() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get('http://localhost:3001/tours');
                setTours(response.data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchTours();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    
    return (
        <div>
            {tours.map(tour => (
                <div key={tour.id}>{tour.name}</div>
            ))}
        </div>
    );
}
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

## 🧪 Bài tập Lab

### Lab 1: Fetch Tours
GET danh sách tours và hiển thị.

### Lab 2: CRUD Tours
Full Create, Read, Update, Delete operations.

### Lab 3: Error Handling
Hiển thị error messages và retry logic.

---

**Xem**: [Axios Docs](https://axios-http.com/)

