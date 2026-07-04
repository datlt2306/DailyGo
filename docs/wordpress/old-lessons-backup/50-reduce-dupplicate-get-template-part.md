# Giảm Mã Trùng Lặp Với `get_template_part` Trong WordPress

## Chào các em!

Hôm nay, thầy sẽ hướng dẫn các em cách sử dụng hàm `get_template_part` để giảm mã trùng lặp trong dự án WordPress. Đây là một công cụ mạnh mẽ giúp chúng ta tái sử dụng các khối mã HTML và PHP một cách dễ dàng.


## Vấn đề

Chúng ta đang hiển thị các sự kiện ở bốn nơi khác nhau trên website:
1. Trang chủ.
2. Trang lưu trữ tất cả sự kiện.
3. Trang sự kiện trong quá khứ.
4. Trang chương trình.

Mỗi nơi đều sử dụng cùng một khối mã để hiển thị sự kiện, dẫn đến việc sao chép mã. Điều này không chỉ làm cho mã khó bảo trì mà còn dễ gây lỗi.


## Giải pháp: Sử dụng `get_template_part`

### Bước 1: Tạo tệp mẫu

1. Trong thư mục chủ đề, tạo một thư mục con mới có tên `template-parts`.
2. Trong thư mục `template-parts`, tạo một tệp mới có tên `event-content.php`.
3. Dán khối mã HTML và PHP hiển thị sự kiện vào tệp này.

```php
<!-- filepath: /Users/ken/Folders/Projects/polytuts-5/theme/template-parts/event-content.php -->
<div class="event-summary">
    <a class="event-summary__date t-center" href="<?php the_permalink(); ?>">
        <span class="event-summary__month"><?php echo get_the_date('M'); ?></span>
        <span class="event-summary__day"><?php echo get_the_date('d'); ?></span>
    </a>
    <div class="event-summary__content">
        <h5 class="event-summary__title headline headline--tiny">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h5>
        <p><?php echo wp_trim_words(get_the_content(), 18); ?>
            <a href="<?php the_permalink(); ?>" class="nu gray">Read more</a>
        </p>
    </div>
</div>
```


### Bước 2: Sử dụng `get_template_part` trong các tệp mẫu

#### Trang chủ (`front-page.php`)

```php
<!-- filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php -->
<?php
// ...existing code...
get_template_part('template-parts/event-content');
// ...existing code...
?>
```

#### Trang lưu trữ sự kiện (`archive-event.php`)

```php
<!-- filepath: /Users/ken/Folders/Projects/polytuts-5/theme/archive-event.php -->
<?php
// ...existing code...
get_template_part('template-parts/event-content');
// ...existing code...
?>
```

#### Trang sự kiện trong quá khứ (`past-events.php`)

```php
<!-- filepath: /Users/ken/Folders/Projects/polytuts-5/theme/past-events.php -->
<?php
// ...existing code...
get_template_part('template-parts/event-content');
// ...existing code...
?>
```

#### Trang chương trình (`single-program.php`)

```php
<!-- filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-program.php -->
<?php
// ...existing code...
get_template_part('template-parts/event-content');
// ...existing code...
?>
```


## Tóm tắt nhanh

- **Vấn đề**: Mã hiển thị sự kiện bị trùng lặp ở nhiều nơi.
- **Giải pháp**: Sử dụng hàm `get_template_part` để tái sử dụng mã.
- **Các bước thực hiện**:
    1. Tạo tệp mẫu `event-content.php` trong thư mục `template-parts`.
    2. Sử dụng `get_template_part` để gọi tệp mẫu trong các tệp như `front-page.php`, `archive-event.php`, `past-events.php`, và `single-program.php`.


## Kết luận

Các em thấy không, việc sử dụng `get_template_part` giúp chúng ta giảm mã trùng lặp và làm cho dự án dễ bảo trì hơn. Đây là một kỹ thuật quan trọng khi làm việc với WordPress, giúp mã của chúng ta trở nên chuyên nghiệp và sạch sẽ.

Nếu có thắc mắc, đừng ngại hỏi thầy nhé!  
Chúc các em học tốt! 🚀  
— **Thầy Đạt 🧡**