# Buổi 6: ĐÁNH GIÁ GIỮA KỲ 1

## 🎯 Mục tiêu của buổi học

Chào các em, buổi này thầy sẽ cùng các em:

1. ✅ Tổng kết và kiểm tra lại toàn bộ kiến thức Giai đoạn 1
2. ✅ Làm mini project: Website cá nhân của chính mình
3. ✅ Q&A và review, sửa lại các điểm chưa rõ hoặc yếu
4. ✅ Định hướng và chuẩn bị cho bước vào Giai đoạn 2

---

## 📋 Nội dung công việc

### Mini Project: Website Cá Nhân (90 phút trên lớp)

**Các bạn sẽ tự tay xây dựng một website cá nhân đơn giản với các chức năng sau:**

#### Chức năng bắt buộc

-   [ ] **Section Home**: Giới thiệu bản thân (tên, ảnh, slogan)
-   [ ] **Section About**: Giới thiệu thông tin cá nhân, sở thích, đôi nét về bản thân
-   [ ] **Section Skills**: Liệt kê các kỹ năng lập trình/công nghệ của bản thân
-   [ ] **Section Projects**: Trình bày 3-5 dự án cá nhân nho nhỏ (nếu chưa có thật thì sáng tạo ý tưởng)
-   [ ] **Section Contact**: Form liên hệ (không cần kết nối backend, chỉ cần hiển thị đã gửi là được)

**Ghi chú:** Website là single-page, các em hãy sử dụng state + conditional rendering (đã học buổi 4) để chuyển qua lại giữa các section.

#### Cấu trúc component khuyến nghị

```javascript
src/
├── components/
│   ├── Header.jsx          // Menu điều hướng giữa các section
│   ├── Footer.jsx
│   ├── SkillCard.jsx       // Component hiển thị thông tin 1 skill
│   └── ProjectCard.jsx     // Component hiển thị thông tin 1 project
├── sections/
│   ├── HomeSection.jsx     // Section giới thiệu
│   ├── AboutSection.jsx    // Section về bản thân
│   ├── SkillsSection.jsx   // Section kỹ năng
│   ├── ProjectsSection.jsx // Section dự án
│   └── ContactSection.jsx  // Section liên hệ
├── App.jsx                 // Chứa state quản lý section đang hiển thị
└── main.jsx
```

#### Cách chuyển các section

Các em nhớ sử dụng `useState` và conditional rendering để điều khiển section đang hiển thị giống ví dụ sau (đã làm ở buổi trước):

::: code-group

```javascript [App.jsx]
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

function App() {
    const [activeSection, setActiveSection] = useState("home"); // Mặc định vào Home

    return (
        <div className="app">
            <Header activeSection={activeSection} setActiveSection={setActiveSection} />

            {activeSection === "home" && <HomeSection />}
            {activeSection === "about" && <AboutSection />}
            {activeSection === "skills" && <SkillsSection />}
            {activeSection === "projects" && <ProjectsSection />}
            {activeSection === "contact" && <ContactSection />}

            <Footer />
        </div>
    );
}

export default App;
```

```javascript [components/Header.jsx]
function Header({ activeSection, setActiveSection }) {
    return (
        <nav>
            <button
                onClick={() => setActiveSection("home")}
                className={activeSection === "home" ? "active" : ""}
            >
                Home
            </button>
            <button onClick={() => setActiveSection("about")}>About</button>
            <button onClick={() => setActiveSection("skills")}>Skills</button>
            <button onClick={() => setActiveSection("projects")}>Projects</button>
            <button onClick={() => setActiveSection("contact")}>Contact</button>
        </nav>
    );
}

export default Header;
```

:::

---

#### Yêu cầu chất lượng

-   ✅ Responsive trên mobile, tablet, desktop (dùng flex/grid, media query)
-   ✅ UI hiện đại, đẹp mắt (dùng TailwindCSS hoặc CSS Module tuỳ ý)
-   ✅ Có animation chuyển section mượt (nếu làm được)
-   ✅ Code phải rõ ràng, nhiều comments giải thích
-   ✅ Commit git rõ ràng, ngắn gọn, đúng nội dung

#### Sample Data để các em tham khảo (có thể dùng luôn hoặc sửa theo ý mình):

```javascript [App.jsx]
// Danh sách skill mẫu cho section Skills
const skills = [
    { id: 1, name: "React", level: 80 },
    { id: 2, name: "JavaScript", level: 85 },
    { id: 3, name: "HTML/CSS", level: 90 },
];

// Dự án mẫu cho section Projects
const projects = [
    {
        id: 1,
        name: "Todo App",
        description: "Ứng dụng quản lý công việc",
        tech: ["React", "CSS"],
        github: "https://github.com/user/todo-app",
    },
    {
        id: 2,
        name: "Weather App",
        description: "Ứng dụng xem thời tiết",
        tech: ["React", "API"],
        github: "https://github.com/user/weather-app",
    },
];
```

**Lưu ý:** Data có thể truyền xuống các section bằng props.

---

### 3. Đánh giá (30 phút cuối)

**Cách tính điểm bài này như sau:**

-   **Quiz trên lớp**: 30%
-   **Mini Project Website cá nhân**: 70%

**Tiêu chí chấm điểm cụ thể:**

| Tiêu chí                 | Điểm    |
| ------------------------ | ------- |
| Đầy đủ chức năng         | 30      |
| UI/UX đẹp mắt            | 20      |
| Code chất lượng          | 20      |
| Responsive tốt           | 15      |
| Thói quen git & comments | 15      |
| **Tổng**                 | **100** |

---

## 📝 Checklist để tự đánh giá

### Kiến thức lý thuyết

-   [ ] Hiểu cú pháp JSX
-   [ ] Sử dụng thành thạo Component & Props
-   [ ] Quản lý state với useState
-   [ ] Xử lý các event cơ bản
-   [ ] Điều khiển hiển thị động (conditional rendering)
-   [ ] Render list với key

### Kỹ năng thực tế

-   [ ] Setup project với Vite + React
-   [ ] Tổ chức code theo component
-   [ ] Sử dụng Tailwind/CSS để style
-   [ ] Thiết kế responsive
-   [ ] Làm việc với git

---

**Mạnh dạn hỏi nếu chưa rõ, thầy luôn sẵn sàng hỗ trợ nhé! Chúc các em làm bài tốt và có một sản phẩm thật đẹp cho riêng mình! 🚀**
