# 🎉 Website Thiệp Mời Sinh Nhật Cho Bé

Website thiệp mời sinh nhật đẹp mắt, sinh động với nhiều hiệu ứng animation và hoàn toàn responsive trên mọi thiết bị!

## ✨ Tính năng

### 🎈 Các phần chính:
- **Hero Section**: Trang chủ với countdown timer và hiệu ứng bóng bay
- **Introduction**: Lời mời và thông tin chi tiết về buổi tiệc
- **Gallery**: Thư viện ảnh với lightbox xem phóng to
- **Timeline**: Lịch trình chi tiết của buổi tiệc
- **Location**: Bản đồ Google Maps và thông tin địa điểm
- **RSVP**: Nút xác nhận tham dự

### 🌟 Hiệu ứng đặc biệt:
- ✅ AOS (Animate On Scroll) - Animation khi cuộn trang
- ✅ Countdown Timer - Đếm ngược thời gian thực
- ✅ Confetti Animation - Hiệu ứng confetti rơi
- ✅ Floating Balloons - Bóng bay bay lơ lửng
- ✅ Parallax Effect - Hiệu ứng cuộn mượt mà
- ✅ Lightbox Gallery - Xem ảnh toàn màn hình
- ✅ Hover Animations - Hiệu ứng di chuột/chạm
- ✅ Loading Screen - Màn hình chờ đẹp mắt
- ✅ Responsive Design - Tối ưu cho mobile, tablet, desktop

## 📱 Responsive Support

Website được tối ưu hoàn toàn cho:
- 📱 **Mobile**: iPhone, Android phones (360px - 480px)
- 📱 **Large Mobile**: (481px - 768px)
- 💻 **Tablets**: iPad, Android tablets (769px - 1024px)
- 🖥️ **Desktop**: Laptop, PC (1025px+)
- 🔄 **Landscape Mode**: Hỗ trợ cả chế độ ngang

### Mobile Optimizations:
- ✅ Touch-friendly buttons (min 44px)
- ✅ Swipe to close lightbox
- ✅ Optimized animations for performance
- ✅ Reduced particle effects on mobile
- ✅ Better font sizes for readability
- ✅ Prevent zoom on double tap
- ✅ Smooth scrolling with touch
- ✅ Fixed viewport issues

## 🚀 Cách sử dụng

### 1. Mở website
Chỉ cần mở file `index.html` trong trình duyệt web.

### 2. Tùy chỉnh thông tin

#### Thay đổi ngày sinh nhật:
Mở file `script.js`, tìm dòng:
```javascript
const targetDate = new Date('2025-12-15T16:00:00').getTime();
```
Thay đổi thành ngày tháng năm và giờ của bạn.

#### Thay đổi tên bé:
Trong file `index.html`, tìm và thay:
```html
<span class="name-highlight">Bé Yêu</span>
```

#### Thay đổi tuổi:
Tìm và thay:
```html
<span class="age-number">🎂 5 Tuổi 🎂</span>
```

#### Thay đổi thông tin sự kiện:
Tìm phần Event Details trong HTML:
```html
<div class="detail-item">
    <strong>Ngày:</strong>
    <span>Chủ Nhật, 15/12/2025</span>
</div>
```

#### Thay đổi địa chỉ và số điện thoại:
```html
<p class="address">123 Đường ABC, Quận 1, TP.HCM</p>
<p class="phone"><a href="tel:0123456789">0123 456 789</a></p>
```

#### Thay đổi Google Maps:
Thay URL trong iframe:
```html
<iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
```
Lấy URL từ Google Maps > Share > Embed a map

#### Thay đổi hình ảnh:
Tìm các thẻ `<img src="...">` và thay URL bằng ảnh của bạn.

### 3. Tùy chỉnh màu sắc

Mở file `style.css`, tìm phần `:root` để thay đổi màu chủ đạo:
```css
:root {
    --primary-color: #ff6b9d;      /* Màu hồng chính */
    --secondary-color: #ffc93c;     /* Màu vàng */
    --accent-color: #a8e6cf;        /* Màu xanh mint */
    --purple: #c780fa;              /* Màu tím */
    --blue: #4facfe;                /* Màu xanh dương */
}
```

## 📁 Cấu trúc File

```
Personal Project/
├── index.html          # File HTML chính
├── style.css           # File CSS với animations
├── script.js           # File JavaScript với interactive features
└── README.md           # File hướng dẫn này
```

## 🎨 Thư viện sử dụng

- **AOS** (Animate On Scroll) - https://michalsnik.github.io/aos/
- **Font Awesome** - Icons
- **Google Fonts** - Pacifico & Quicksand

## 📱 Test trên Mobile

### Cách test responsive:
1. **Chrome DevTools**: F12 > Toggle Device Toolbar (Ctrl+Shift+M)
2. **Firefox**: F12 > Responsive Design Mode (Ctrl+Shift+M)
3. **Safari**: Develop > Enter Responsive Design Mode

### Test trên thiết bị thật:
1. Upload lên hosting (GitHub Pages, Netlify, Vercel)
2. Hoặc dùng local server và truy cập qua IP

## 🌈 Tùy chỉnh nâng cao

### Thêm ảnh vào Gallery:
```html
<div class="gallery-item" data-aos="flip-left" data-aos-delay="700">
    <img src="your-image.jpg" alt="Description">
    <div class="gallery-overlay">
        <p>Caption</p>
    </div>
</div>
```

### Thêm Timeline Item:
```html
<div class="timeline-item" data-aos="fade-right">
    <div class="timeline-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="timeline-content">
        <h3>19:00</h3>
        <h4>Tiêu đề</h4>
        <p>Mô tả hoạt động</p>
    </div>
</div>
```

## 💡 Tips

- Sử dụng ảnh có kích thước phù hợp (khuyến nghị < 500KB/ảnh)
- Nén ảnh trước khi upload để website load nhanh hơn
- Test trên nhiều thiết bị khác nhau
- Kiểm tra số điện thoại và link Google Maps

## 🎯 Browser Support

- ✅ Chrome (khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Hỗ trợ

Nếu có vấn đề hoặc câu hỏi, vui lòng kiểm tra:
1. Console trong DevTools (F12) để xem lỗi
2. Đảm bảo tất cả file CSS, JS đều load đúng
3. Kiểm tra kết nối Internet cho external libraries

## 🎊 Chúc bạn có một bữa tiệc sinh nhật vui vẻ!

Made with ❤️ for Birthday Celebrations
