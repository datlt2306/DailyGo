# Buổi 6: ĐÁNH GIÁ GIỮA KỲ 1

## 🎯 Mục tiêu buổi

1. ✅ Kiểm tra kiến thức Giai đoạn 1
2. ✅ Mini Project: Website cá nhân
3. ✅ Q&A và Review
4. ✅ Chuẩn bị cho Giai đoạn 2

## 📋 Nội dung

### Mini Project: Website Cá nhân (90 phút)

**Yêu cầu**: Xây dựng website cá nhân đơn giản

#### Chức năng bắt buộc

-   [ ] **Section Home**: Giới thiệu bản thân
-   [ ] **Section About**: Thông tin cá nhân, sở thích
-   [ ] **Section Skills**: Danh sách kỹ năng
-   [ ] **Section Projects**: Danh sách 3-5 dự án nhỏ
-   [ ] **Section Contact**: Form liên hệ (không cần backend)

**Lưu ý**: Đây là single-page website, dùng state + conditional rendering để chuyển đổi giữa các section (đã học ở buổi 4).

#### Component structure

```javascript
src/
├── components/
│   ├── Header.jsx          # Navigation menu
│   ├── Footer.jsx
│   ├── SkillCard.jsx       # Component hiển thị từng skill
│   └── ProjectCard.jsx     # Component hiển thị từng project
├── sections/
│   ├── HomeSection.jsx     # Section giới thiệu
│   ├── AboutSection.jsx   # Section về bản thân
│   ├── SkillsSection.jsx  # Section kỹ năng
│   ├── ProjectsSection.jsx # Section dự án
│   └── ContactSection.jsx  # Section liên hệ
├── App.jsx                 # Main component với state quản lý active section
└── main.jsx
```

#### Cách chuyển đổi giữa các section

Dùng `useState` + conditional rendering (đã học ở buổi 4):

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
    const [activeSection, setActiveSection] = useState("home");

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

#### Requirements

-   ✅ Responsive design (mobile, tablet, desktop)
-   ✅ Modern UI (dùng TailwindCSS hoặc CSS Module)
-   ✅ Smooth transitions
-   ✅ Clean code với comments
-   ✅ Git commits có ý nghĩa

#### Sample Data

```javascript [App.jsx]
// Data cho Skills section
const skills = [
    { id: 1, name: "React", level: 80 },
    { id: 2, name: "JavaScript", level: 85 },
    { id: 3, name: "HTML/CSS", level: 90 },
];

// Data cho Projects section
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

**Gợi ý**: Truyền data này xuống các section component qua props.

### 3. Evaluation (30 phút)

**Chấm điểm**:

-   **Quiz**: 30%
-   **Mini Project**: 70%

**Tiêu chí**:
| Tiêu chí | Điểm |
|----------|------|
| Đầy đủ chức năng | 30 |
| UI/UX đẹp | 20 |
| Code chất lượng | 20 |
| Responsive | 15 |
| Git & Comments | 15 |
| **Tổng** | **100** |

---

## 📝 Checklist hoàn thành

### Kiến thức

-   [ ] Hiểu JSX syntax
-   [ ] Sử dụng Component & Props
-   [ ] Quản lý State với useState
-   [ ] Xử lý Events
-   [ ] Conditional Rendering
-   [ ] Render Lists với Key

### Practical Skills

-   [ ] Setup project Vite + React
-   [ ] Tổ chức components
-   [ ] Style với Tailwind/CSS
-   [ ] Responsive design
-   [ ] Git workflow

---

**Chúc các em làm tốt! 🚀**
