import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
    title: "Lê Trọng Đạt", // Thay đổi tiêu đề hiển thị
    description: "Học lập trình cùng Đạt",
    themeConfig: {
        nav: [
            { text: "Trang chủ", link: "/" },
            {
                text: "Lập trình Web",
                items: [
                    { text: "Javascript cơ bản", link: "/javascript/" },
                    { text: "Javascript nâng cao", link: "/javascript/lesson-9" },
                    { text: "ReactJs", link: "/react/" },
                    { text: "Vuejs", link: "/vuejs/" },
                    { text: "PHP cơ bản", link: "/php/" },
                    { text: "Wordpress", link: "/wordpress/" },
                    { text: "Lập trình C", link: "/laptrinhcanban/" },
                    { text: "Dự án 1", link: "/pro1014/" }
                ]
            },
            {
                text: "Kiến thức tổng hợp",
                items: [
                    { text: "Git Github", link: "/git/" }
                ]
            },
            { text: "Blog", link: "/blog/" }
        ],
        sidebar: {
            // "/html-css/": [
            //     {
            //         text: "Chapter 1: Cơ bản về HTML",
            //         collapsed: false,
            //         items: [
            //             { text: "1.1 Giới thiệu HTML", link: "/html-css/" },
            //             { text: "1.2 Cấu trúc trang HTML", link: "/html-css/html-structure" },
            //             { text: "1.3 Các thẻ HTML cơ bản", link: "/html-css/html-tags" },
            //         ],
            //     },
            //     {
            //         text: "Chapter 2: CSS Cơ bản",
            //         collapsed: false,
            //         items: [
            //             { text: "2.1 Giới thiệu CSS", link: "/html-css/intro-css" },
            //             { text: "2.2 Selectors & Properties", link: "/html-css/css-selectors" },
            //             { text: "2.3 Box Model", link: "/html-css/box-model" },
            //         ],
            //     },
            //     {
            //         text: "Chapter 3: Layout & Responsive Design",
            //         collapsed: false,
            //         items: [
            //             { text: "3.1 Flexbox", link: "/html-css/flexbox" },
            //             // { text: "3.2 CSS Grid", link: "/html-css/css-grid" },
            //             { text: "3.3 Media Queries", link: "/html-css/media-queries" },
            //         ],
            //     },
            //     {
            //         text: "Chapter 4: CSS Nâng cao",
            //         collapsed: false,
            //         items: [
            //             { text: "4.1 CSS Animations", link: "/html-css/animations" },
            //             { text: "4.2 CSS Variables", link: "/html-css/css-variables" },
            //             { text: "4.3 CSS Frameworks", link: "/html-css/frameworks" },
            //         ],
            //     },
            // ],
            "/javascript/": [
                {
                    text: "Tổng quan",
                    collapsed: false,
                    items: [
                        { text: "Giới thiệu khóa học", link: "/javascript/" },
                        { text: "Dự án cuối khóa", link: "/javascript/final-project" },
                    ],
                },
                {
                    text: "Giai đoạn 1: DOM & Sự kiện (Buổi 1-4)",
                    collapsed: false,
                    items: [
                        {
                            text: "Buổi 1: DOM Selection & Manipulation",
                            link: "/javascript/lesson-1",
                        },
                        {
                            text: "Buổi 2: Tích hợp UI & Render Danh sách",
                            link: "/javascript/lesson-2",
                        },
                        {
                            text: "Buổi 3: Sự kiện & Event Delegation",
                            link: "/javascript/lesson-3",
                        },
                        {
                            text: "Buổi 4: Tính năng Thêm & Xóa công việc",
                            link: "/javascript/lesson-4",
                        },
                    ],
                },
                {
                    text: "Giai đoạn 2: Quản lý State & CRUD (Buổi 5-6)",
                    collapsed: false,
                    items: [
                        {
                            text: "Buổi 5: Mảng, Object & Tư duy State",
                            link: "/javascript/lesson-5",
                        },
                        {
                            text: "Buổi 6: Tính năng Sửa, Tìm kiếm & Lọc",
                            link: "/javascript/lesson-6",
                        },
                    ],
                },
                {
                    text: "Giai đoạn 3: Web Storage & Dark Mode (Buổi 7-8)",
                    collapsed: false,
                    items: [
                        {
                            text: "Buổi 7: Web Storage APIs & JSON",
                            link: "/javascript/lesson-7",
                        },
                        {
                            text: "Buổi 8: Lưu trữ Todo & Đổi Theme",
                            link: "/javascript/lesson-8",
                        },
                    ],
                },
                {
                    text: "Giai đoạn 4: Async & Mock API (Buổi 9-12)",
                    collapsed: false,
                    items: [
                        {
                            text: "Buổi 9: Asynchronous JS & Fetch API",
                            link: "/javascript/lesson-9",
                        },
                        {
                            text: "Buổi 10: Mock API Setup & Tải dữ liệu",
                            link: "/javascript/lesson-10",
                        },
                        {
                            text: "Buổi 11: HTTP Methods & Tối ưu UI",
                            link: "/javascript/lesson-11",
                        },
                        {
                            text: "Buổi 12: Đồng bộ CRUD với Mock API",
                            link: "/javascript/lesson-12",
                        },
                    ],
                },
                {
                    text: "Giai đoạn 5: Code Organization (Buổi 13-14)",
                    collapsed: false,
                    items: [
                        {
                            text: "Buổi 13: ES6 Modules & Kiến trúc",
                            link: "/javascript/lesson-13",
                        },
                        {
                            text: "Buổi 14: Tách Module Code",
                            link: "/javascript/lesson-14",
                        },
                    ],
                },
                {
                    text: "Giai đoạn 6: Tối ưu & Demo (Buổi 15-16)",
                    collapsed: false,
                    items: [
                        {
                            text: "Buổi 15: Debugging & Performance",
                            link: "/javascript/lesson-15",
                        },
                        {
                            text: "Buổi 16: Tích hợp Debounce, Deploy & Demo",
                            link: "/javascript/lesson-16",
                        },
                    ],
                },
            ],
            "/react/": [
                {
                    text: "Khóa học ReactJS 16 buổi",
                    collapsed: false,
                    items: [
                        { text: "Tổng quan 16 buổi", link: "/react/" },
                        { text: "Dự án cuối khóa", link: "/react/final-project" },
                    ],
                },
                {
                    text: "Giai đoạn 1: Nền tảng React (Buổi 1-6)",
                    collapsed: false,
                    items: [
                        { text: "Buổi 1: React là gì? Vite Setup & JSX", link: "/react/lesson-1" },
                        { text: "Buổi 2: Component & Props", link: "/react/lesson-2" },
                        { text: "Buổi 3: State & Event Handling", link: "/react/lesson-3" },
                        { text: "Buổi 4: Conditional Rendering", link: "/react/lesson-4" },
                        { text: "Buổi 5: List & Key", link: "/react/lesson-5" },
                        { text: "Buổi 6: Đánh giá giữa kỳ 1", link: "/react/lesson-6" },
                    ],
                },
                {
                    text: "Giai đoạn 2: Hooks & Forms (Buổi 7-11)",
                    collapsed: false,
                    items: [
                        { text: "Buổi 7: useState & useEffect", link: "/react/lesson-7" },
                        { text: "Buổi 8: useRef & Custom Hooks", link: "/react/lesson-8" },
                        { text: "Buổi 9: Form & Controlled Components", link: "/react/lesson-9" },
                        { text: "Buổi 10: Routing với React Router", link: "/react/lesson-10" },
                        { text: "Buổi 11: Đánh giá giữa kỳ 2", link: "/react/lesson-11" },
                    ],
                },
                {
                    text: "Giai đoạn 3: API & Project (Buổi 12-16)",
                    collapsed: false,
                    items: [
                        { text: "Buổi 12: Axios & JSON-Server", link: "/react/lesson-12" },
                        { text: "Buổi 13: CRUD Operations", link: "/react/lesson-13" },
                        { text: "Buổi 14: Context API & Organization", link: "/react/lesson-14" },
                        { text: "Buổi 15: Styling & Responsive", link: "/react/lesson-15" },
                        { text: "Buổi 16: Project Presentation", link: "/react/lesson-16" },
                    ],
                },
            ],
            "/vuejs/": [
                {
                    text: "Khóa học VueJS 15 buổi",
                    collapsed: false,
                    items: [
                        { text: "Tổng quan 15 buổi", link: "/vuejs/" },
                        { text: "Dự án cuối khóa", link: "/vuejs/final-project" },
                    ],
                },
                {
                    text: "Giai đoạn 1: Nền tảng Vue 3 (Buổi 1-6)",
                    collapsed: false,
                    items: [
                        { text: "Buổi 1: Giới thiệu VueJS & Setup với Vite", link: "/vuejs/lesson-1" },
                        { text: "Buổi 2: Template Syntax & Directives", link: "/vuejs/lesson-2" },
                        { text: "Buổi 3: Reactivity cơ bản (ref, reactive, computed, watch)", link: "/vuejs/lesson-3" },
                        { text: "Buổi 4: Conditional & List Rendering", link: "/vuejs/lesson-4" },
                        { text: "Buổi 5: Component & Props", link: "/vuejs/lesson-5" },
                        { text: "Buổi 6: Custom Events & Provide/Inject", link: "/vuejs/lesson-6" },
                    ],
                },
                {
                    text: "Giai đoạn 2: Lifecycle & Router (Buổi 7-11)",
                    collapsed: false,
                    items: [
                        { text: "Buổi 7: Đánh giá giữa kỳ 1", link: "/vuejs/lesson-7" },
                        { text: "Buổi 8: Lifecycle Hooks & Template Refs", link: "/vuejs/lesson-8" },
                        { text: "Buổi 9: Form Handling & Validation", link: "/vuejs/lesson-9" },
                        { text: "Buổi 10: Routing với Vue Router", link: "/vuejs/lesson-10" },
                        { text: "Buổi 11: Đánh giá giữa kỳ 2", link: "/vuejs/lesson-11" },
                    ],
                },
                {
                    text: "Giai đoạn 3: State Management & API (Buổi 12-15)",
                    collapsed: false,
                    items: [
                        { text: "Buổi 12: Quản lý State với Pinia", link: "/vuejs/lesson-12" },
                        { text: "Buổi 13: Axios & JSON-Server", link: "/vuejs/lesson-13" },
                        { text: "Buổi 14: Styling, TailwindCSS & Slots", link: "/vuejs/lesson-14" },
                        { text: "Buổi 15: Dự án cuối khóa & Presentation", link: "/vuejs/lesson-15" },
                    ],
                },
            ],
            "/nodejs/": [
                {
                    text: "Phần 1: Node.js cơ bản",
                    collapsed: false,
                    items: [
                        { text: "Giới thiệu về Node.js", link: "/nodejs/" },
                        { text: "Modules & NPM", link: "/nodejs/module-npm" },
                    ],
                },
                {
                    text: "Phần 2: Xây dựng REST API Ecommerce (15 Buổi)",
                    collapsed: false,
                    items: [
                        { text: "Buổi 1: Intro Node.js & Setup Express", link: "/nodejs/api/lesson-1" },
                        { text: "Buổi 2: Request, Response & Middleware", link: "/nodejs/api/lesson-2" },
                        { text: "Buổi 3: CRUD với dữ liệu giả lập (In-memory)", link: "/nodejs/api/lesson-3" },
                        { text: "Buổi 4: MongoDB & Mongoose Schemas", link: "/nodejs/api/lesson-4" },
                        { text: "Buổi 5: CRUD Database & Error Handling", link: "/nodejs/api/lesson-5" },
                        { text: "Buổi 6: Filtering, Sorting & Pagination", link: "/nodejs/api/lesson-6" },
                        { text: "Buổi 7: User Model & Mã hóa Mật khẩu", link: "/nodejs/api/lesson-7" },
                        { text: "Buổi 8: Authentication (JWT)", link: "/nodejs/api/lesson-8" },
                        { text: "Buổi 9: Authorization (RBAC)", link: "/nodejs/api/lesson-9" },
                        { text: "Buổi 10: Upload hình ảnh với Multer", link: "/nodejs/api/lesson-10" },
                        { text: "Buổi 11: API Giỏ hàng (Cart)", link: "/nodejs/api/lesson-11" },
                        { text: "Buổi 12: API Đơn hàng & Checkout (Orders)", link: "/nodejs/api/lesson-12" },
                        { text: "Buổi 13: API Thống kê & Dashboard", link: "/nodejs/api/lesson-13" },
                        { text: "Buổi 14: Testing với Jest & Supertest", link: "/nodejs/api/lesson-14" },
                        { text: "Buổi 15: Deploy Production & CORS", link: "/nodejs/api/lesson-15" }
                    ],
                },
            ],
            "/php/": [
                {
                    text: "Khóa học PHP 12 buổi",
                    collapsed: false,
                    items: [
                        { text: "Tổng quan khóa", link: "/php/" },
                        { text: "Dự án cuối khóa", link: "/php/final-project" },
                    ],
                },
                {
                    text: "Giai đoạn 1: Cú pháp & dữ liệu",
                    collapsed: false,
                    items: [
                        { text: "Buổi 1: Môi trường & PHP 101", link: "/php/lesson-1" },
                        { text: "Buổi 2: Toán tử, điều kiện, vòng lặp", link: "/php/lesson-2" },
                        { text: "Buổi 3: Mảng, chuỗi, hàm xử lý", link: "/php/lesson-3" },
                    ],
                },
                {
                    text: "Giai đoạn 2: Form & trạng thái",
                    collapsed: false,
                    items: [
                        { text: "Buổi 4: Form GET/POST, validate", link: "/php/lesson-4" },
                        { text: "Buổi 5: Session, Cookie, Upload file", link: "/php/lesson-5" },
                        { text: "Buổi 6: Tổ chức mã, include/require", link: "/php/lesson-6" },
                    ],
                },
                {
                    text: "Giai đoạn 3: Database & PDO",
                    collapsed: false,
                    items: [
                        { text: "Buổi 7: MySQL cơ bản & ERD", link: "/php/lesson-7" },
                        { text: "Buổi 8: PDO & Prepared Statements", link: "/php/lesson-8" },
                        {
                            text: "Buổi 9: Pagination, Search, Error handling",
                            link: "/php/lesson-9",
                        },
                    ],
                },
                {
                    text: "Giai đoạn 4: Auth & hoàn thiện",
                    collapsed: false,
                    items: [
                        { text: "Buổi 10: Auth cơ bản, CSRF", link: "/php/lesson-10" },
                        { text: "Buổi 11: Layout, routing đơn giản", link: "/php/lesson-11" },
                        { text: "Buổi 12: Tổng hợp & Demo", link: "/php/lesson-12" },
                    ],
                },
            ],
            "/wordpress/": [
                {
                    text: "Tổng quan",
                    collapsed: false,
                    items: [
                        { text: "Lộ trình học WordPress", link: "/wordpress/" }
                    ]
                },
                {
                    text: "1. Lập trình Theme (Theme Development)",
                    collapsed: false,
                    items: [
                        { text: "Đề cương khóa học Theme", link: "/wordpress/theme-development/" },
                        { text: "Bài 1: Thiết lập môi trường phát triển", link: "/wordpress/theme-development/lesson-1" },
                        { text: "Bài 2: Nền tảng PHP trong WordPress", link: "/wordpress/theme-development/lesson-2" },
                        { text: "Bài 3: Vòng lặp Loop mặc định (The Loop)", link: "/wordpress/theme-development/lesson-3" },
                        { text: "Bài 4: Khởi tạo Theme từ con số 0", link: "/wordpress/theme-development/lesson-4" },
                        { text: "Bài 5: Phân tách Modular Layout", link: "/wordpress/theme-development/lesson-5" },
                        { text: "Bài 6: Nạp tệp CSS/JS chuẩn (Enqueue)", link: "/wordpress/theme-development/lesson-6" },
                        { text: "Bài 7: Hàm lấy đường dẫn an toàn", link: "/wordpress/theme-development/lesson-7" },
                        { text: "Bài 8: Template Hierarchy: Trang page.php", link: "/wordpress/theme-development/lesson-8" },
                        { text: "Bài 9: Hiển thị Trang cha - Trang con", link: "/wordpress/theme-development/lesson-9" },
                        { text: "Bài 10: Thiết kế Navigation Menus động", link: "/wordpress/theme-development/lesson-10" },
                        { text: "Bài 11: Thiết lập trang lưu trữ archive.php", link: "/wordpress/theme-development/lesson-11" },
                        { text: "Bài 12: Thiết lập trang chi tiết single.php", link: "/wordpress/theme-development/lesson-12" },
                        { text: "Bài 13: Đăng ký Custom Post Types (CPT)", link: "/wordpress/theme-development/lesson-13" },
                        { text: "Bài 14: Tạo thư mục mu-plugins bảo vệ CPT", link: "/wordpress/theme-development/lesson-14" },
                        { text: "Bài 15: Đăng ký CPT bổ sung", link: "/wordpress/theme-development/lesson-15" },
                        { text: "Bài 16: Tạo truy vấn tùy biến WP_Query", link: "/wordpress/theme-development/lesson-16" },
                        { text: "Bài 17: Lọc & Sắp xếp nâng cao (Meta Query)", link: "/wordpress/theme-development/lesson-17" },
                        { text: "Bài 18: Tích hợp Advanced Custom Fields", link: "/wordpress/theme-development/lesson-18" },
                        { text: "Bài 19: Thiết lập trường mối quan hệ", link: "/wordpress/theme-development/lesson-19" },
                        { text: "Bài 20: Custom Image Sizes trong Theme", link: "/wordpress/theme-development/lesson-20" },
                        { text: "Bài 21: Thiết lập WooCommerce & Theme Support", link: "/wordpress/theme-development/lesson-21" },
                        { text: "Bài 22: Cơ chế WooCommerce Template Overrides", link: "/wordpress/theme-development/lesson-22" },
                        { text: "Bài 23: Tùy biến trang cửa hàng (Shop Page)", link: "/wordpress/theme-development/lesson-23" },
                        { text: "Bài 24: Tùy biến trang chi tiết sản phẩm", link: "/wordpress/theme-development/lesson-24" },
                        { text: "Bài 25: Tích hợp ACF vào sản phẩm WooCommerce", link: "/wordpress/theme-development/lesson-25" },
                        { text: "Bài 26: WP_Query sản phẩm ngoài trang chủ", link: "/wordpress/theme-development/lesson-26" },
                        { text: "Bài 27: Tùy biến Giỏ hàng & Thanh toán", link: "/wordpress/theme-development/lesson-27" },
                        { text: "Bài 28: Bảo mật WordPress Theme chuyên sâu", link: "/wordpress/theme-development/lesson-28" },
                        { text: "Bài 29: Tối ưu hóa hiệu năng & Caching", link: "/wordpress/theme-development/lesson-29" },
                        { text: "Bài 30: Đóng gói & Cấu hình Production", link: "/wordpress/theme-development/lesson-30" }
                    ]
                },
                {
                    text: "2. Lập trình Plugin (Plugin Development)",
                    collapsed: false,
                    items: [
                        { text: "Đề cương khóa học Plugin", link: "/wordpress/plugin-development/" },
                        { text: "Buổi 1: Kiến trúc & Vòng đời Plugin", link: "/wordpress/plugin-development/lesson-1" },
                        { text: "Buổi 2: Làm chủ Actions & Filters Hooks", link: "/wordpress/plugin-development/lesson-2" },
                        { text: "Buổi 3: Options API & Transients API", link: "/wordpress/plugin-development/lesson-3" },
                        { text: "Buổi 4: Database tùy biến với $wpdb", link: "/wordpress/plugin-development/lesson-4" },
                        { text: "Buổi 5: Xây dựng Admin Settings Page", link: "/wordpress/plugin-development/lesson-5" },
                        { text: "Buổi 6: Gutenberg Block Development", link: "/wordpress/plugin-development/lesson-6" },
                        { text: "Buổi 7: Block Attributes & React/JS", link: "/wordpress/plugin-development/lesson-7" },
                        { text: "Buổi 8: Đăng ký Custom REST API", link: "/wordpress/plugin-development/lesson-8" },
                        { text: "Buổi 9: Bảo mật API (Permission Callbacks)", link: "/wordpress/plugin-development/lesson-9" },
                        { text: "Buổi 10: Tích hợp AJAX trong Plugin", link: "/wordpress/plugin-development/lesson-10" },
                        { text: "Buổi 11: Shortcodes & Custom Widgets", link: "/wordpress/plugin-development/lesson-11" },
                        { text: "Buổi 12: Đóng gói & Phát hành Plugin", link: "/wordpress/plugin-development/lesson-12" }
                    ]
                }
            ],
            "/laptrinhcanban/": [
                {
                    text: "Tổng quan",
                    collapsed: false,
                    items: [{ text: "Giới thiệu khóa học", link: "/laptrinhcanban/" }],
                },
                {
                    text: "Phần 1: Nền tảng ",
                    collapsed: false,
                    items: [
                        {
                            text: "Buổi 1: Làm quen với C & Chương trình đầu tiên",
                            link: "/laptrinhcanban/lesson-1",
                        },
                        {
                            text: "Buổi 2: Biến, kiểu dữ liệu và nhập xuất",
                            link: "/laptrinhcanban/lesson-2",
                        },
                        { text: "Buổi 3: Toán tử và biểu thức", link: "/laptrinhcanban/lesson-3" },
                        { text: "Buổi 4: Cấu trúc điều kiện", link: "/laptrinhcanban/lesson-4" },
                        { text: "Lab kiểm tra: Máy tính đơn giản", link: "/laptrinhcanban/lab" },
                    ],
                },
                {
                    text: "Phần 2: Vòng lặp và thuật toán",
                    collapsed: false,
                    items: [
                        { text: "Buổi 5: Vòng lặp for", link: "/laptrinhcanban/lesson-5" },
                        {
                            text: "Buổi 6: Vòng lặp while và do-while",
                            link: "/laptrinhcanban/lesson-6",
                        },
                        {
                            text: "Buổi 7: Vòng lặp lồng nhau và bài toán thực tế",
                            link: "/laptrinhcanban/lesson-7",
                        },
                    ],
                },
                {
                    text: "Phần 3: Hàm và cấu trúc",
                    collapsed: false,
                    items: [
                        { text: "Buổi 8: Hàm cơ bản", link: "/laptrinhcanban/lesson-8" },
                        {
                            text: "Buổi 9: Tham số, giá trị trả về và phạm vi biến",
                            link: "/laptrinhcanban/lesson-9",
                        },
                        { text: "Buổi 10: Đệ quy cơ bản", link: "/laptrinhcanban/lesson-10" },
                    ],
                },
                {
                    text: "Phần 4: Cấu trúc dữ liệu",
                    collapsed: false,
                    items: [
                        { text: "Buổi 11: Mảng một chiều", link: "/laptrinhcanban/lesson-11" },
                        {
                            text: "Buổi 12: Mảng hai chiều và ứng dụng",
                            link: "/laptrinhcanban/lesson-12",
                        },
                        {
                            text: "Buổi 13: Chuỗi ký tự và cấu trúc (struct)",
                            link: "/laptrinhcanban/lesson-13",
                        },
                    ],
                },
                {
                    text: "Phần 5: Dự án và tổng kết",
                    collapsed: false,
                    items: [
                        {
                            text: "Buổi 14: Đọc/ghi file và tổng kết",
                            link: "/laptrinhcanban/lesson-14",
                        },
                        { text: "Project cuối kỳ", link: "/laptrinhcanban/final-project" },
                    ],
                },
            ],
            "/git/": [
                {
                    text: "Tổng quan",
                    collapsed: false,
                    items: [{ text: "Giới thiệu khóa học", link: "/git/" }],
                },
                {
                    text: "Phần 1: Git Cơ bản",
                    collapsed: false,
                    items: [
                        {
                            text: "01. Giới thiệu về Git và Version Control",
                            link: "/git/01-intro-to-git",
                        },
                        { text: "02. Cài đặt & cấu hình Git", link: "/git/02-install-config" },
                        { text: "03. Các lệnh Git cơ bản", link: "/git/03-git-basic-commands" },
                        {
                            text: "04. Working Directory và Staging Area",
                            link: "/git/04-working-directory",
                        },
                    ],
                },
                {
                    text: "Phần 2: Branch và Merge",
                    collapsed: false,
                    items: [
                        { text: "05. Làm việc với Branch", link: "/git/05-git-branching" },
                        { text: "06. Merge và Rebase", link: "/git/06-merge-vs-rebase" },
                    ],
                },
                {
                    text: "Phần 3: GitHub",
                    collapsed: false,
                    items: [
                        { text: "07. Giới thiệu GitHub", link: "/git/07-github-intro" },
                        { text: "08. Làm việc nhóm với GitHub", link: "/git/08-collaboration" },
                    ],
                },
                {
                    text: "Phần 4: GitHub Flow",
                    collapsed: false,
                    items: [
                        { text: "09. GitHub Flow", link: "/git/09-github-flow" },
                        { text: "10. Pull Request và Review Code", link: "/git/10-pull-request" },
                    ],
                },
                {
                    text: "Phần 5: Best Practices",
                    collapsed: false,
                    items: [
                        {
                            text: "11. Commit Message Best Practices",
                            link: "/git/11-commit-best-practices",
                        },
                        { text: "12. Git Nâng cao", link: "/git/12-git-advanced" },
                    ],
                },
                {
                    text: "Phần 6: Nâng cao và Thực hành",
                    collapsed: false,
                    items: [
                        { text: "13. Lỗi thường gặp và khắc phục", link: "/git/13-common-errors" },
                        { text: "14. Tag và phát hành phiên bản", link: "/git/14-git-tag-release" },
                        { text: "15. Mini Project", link: "/git/15-mini-project" },
                        {
                            text: "16. Resolve Conflict trong Teamwork",
                            link: "/git/16-resolving-conflicts-teamwork",
                        },
                    ],
                },
            ],
            "/pro1014/": [
                {
                    text: "Tổng quan",
                    collapsed: false,
                    items: [{ text: "Giới thiệu môn học", link: "/pro1014/" }],
                },
                {
                    text: "TUẦN 1 – KHỞI ĐỘNG & PHÂN TÍCH ĐỀ TÀI",
                    collapsed: false,
                    items: [
                        {
                            text: "Buổi 1: Giới thiệu đề tài & chia nhóm",
                            link: "/pro1014/lesson-1",
                        },
                        {
                            text: "Buổi 2: Phân tích chức năng (Use Case)",
                            link: "/pro1014/lesson-2",
                        },
                        {
                            text: "Buổi 3: Viết Project Specification (Spec)",
                            link: "/pro1014/lesson-3",
                        },
                    ],
                },
                {
                    text: "TUẦN 2 – THIẾT KẾ DỮ LIỆU & QUẢN LÝ DỰ ÁN",
                    collapsed: false,
                    items: [
                        { text: "Buổi 4: Thiết kế dữ liệu (ERD)", link: "/pro1014/lesson-4" },
                        {
                            text: "Buổi 5: Thiết kế database nâng cao & chuẩn hóa",
                            link: "/pro1014/lesson-5",
                        },
                        { text: "Buổi 6: Giới thiệu Git & teamwork", link: "/pro1014/lesson-7" },
                    ],
                },
                {
                    text: "TUẦN 3 – TRIỂN KHAI GIAI ĐOẠN 1",
                    collapsed: false,
                    items: [{ text: "Buổi 7: Theo dõi tiến độ lần 1", link: "/pro1014/lesson-8" }],
                },
            ],
            "/blog/": [
                {
                    text: "Blog Posts",
                    collapsed: false,
                    items: [
                        { text: "Tất cả bài viết", link: "/blog/" },
                        {
                            text: "Giới thiệu về phát triển web",
                            link: "/blog/intro-to-web-development",
                        },
                        { text: "JavaScript Tips", link: "/blog/javascript-tips" },
                        { text: "CSS Grid vs Flexbox", link: "/blog/css-grid-vs-flexbox" },
                        { text: "Promise", link: "/blog/promise" },
                        { text: "API", link: "/blog/api" },
                        { text: "Test Postman", link: "/blog/test-postman" },
                    ],
                },
                {
                    text: "Chủ đề",
                    collapsed: false,
                    items: [
                        { text: "JavaScript", link: "/blog/tag/javascript" },
                        { text: "HTML & CSS", link: "/blog/tag/html-css" },
                        { text: "Web Performance", link: "/blog/tag/web-performance" },
                        { text: "Tutorials", link: "/blog/tag/tutorials" },
                    ],
                },
            ],
            // "/nextjs/": [
            //     {
            //         text: "Bắt đầu với Next.js",
            //         collapsed: false,
            //         items: [
            //             { text: "1. Chào mừng đến với khóa học", link: "/nextjs/" },
            //             {
            //                 text: "2. Nextjs là gì? tại sao sử dụng nó",
            //                 link: "/nextjs/nextjs-la-gi",
            //             },
            //         ],
            //     },
            //     {
            //         text: "Chapter 2: Advanced MongoDB",
            //         collapsed: false,
            //         items: [
            //             { text: "2.1 Aggregation Framework", link: "/mongodb/aggregation" },
            //             { text: "2.2 Indexing & Performance", link: "/mongodb/indexing" },
            //         ],
            //     },
            // ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/datlt2306/fpl-WEB503" }],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2025 by Lê Trọng Đạt",
        },
        search: {
            provider: "local",
        },
        outlineTitle: "Mục lục",
        lastUpdatedText: "Cập nhật lần cuối",
        darkModeSwitchLabel: "Chế độ hiển thị",
        returnToTopLabel: "Về đầu trang",
        sidebarMenuLabel: "Menu",
        docFooter: {
            prev: "Bài trước",
            next: "Bài tiếp theo",
        },
        // outline: [2, 3], // Hiển thị các tiêu đề từ cấp 2 (##) đến cấp 3 (###)
        logo: {
            svg: `<svg id="logo-86" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z" fill="#007DFC"></path><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z" fill="#007DFC"></path></svg>`,
        },
        title: false, // Ẩn tiêu đề, chỉ hiển thị logo
    },
    markdown: {
        lineNumbers: true,
    },
    vite: {
        optimizeDeps: {
            include: ['dayjs', 'mermaid']
        },
        resolve: {
            alias: {
                'dayjs/plugin/advancedFormat.js': 'dayjs/esm/plugin/advancedFormat',
                'dayjs/plugin/customParseFormat.js': 'dayjs/esm/plugin/customParseFormat',
                'dayjs/plugin/isoWeek.js': 'dayjs/esm/plugin/isoWeek'
            }
        }
    }
});
