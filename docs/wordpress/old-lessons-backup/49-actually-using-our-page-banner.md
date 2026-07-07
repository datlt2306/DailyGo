# Sử Dụng Hàm Biểu Ngữ Trang Trong Tất Cả Các Tệp Mẫu

## Chào các em!

Hôm nay, thầy sẽ hướng dẫn các em cách sử dụng hàm biểu ngữ trang (`pageBanner`) mà thầy trò mình đã tạo trong bài học trước. Thầy trò mình sẽ thay thế mã biểu ngữ trang trùng lặp trong tất cả các tệp mẫu bằng hàm này để làm cho mã của thầy trò mình sạch sẽ và dễ bảo trì hơn.

## Bắt đầu hành động

### 1. Cập nhật tệp `archive-event.php`

#### Trước đây:

```php
<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url('<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>');"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">Tất cả sự kiện</h1>
        <div class="page-banner__intro">
            <p>Xem điều gì đang xảy ra trong thế giới của thầy trò mình.</p>
        </div>
    </div>
</div>
```

#### Sau khi sửa:

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/archive-event.php
<?php
pageBanner(array(
    'title' => 'Tất cả sự kiện',
    'subtitle' => 'Xem điều gì đang xảy ra trong thế giới của thầy trò mình.'
));
?>
```

### 2. Cập nhật tệp `archive-program.php`

#### Trước đây:

```php
<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url('<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>');"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">Tất cả các chương trình</h1>
        <div class="page-banner__intro">
            <p>Khám phá các chương trình học thú vị của chúng tôi.</p>
        </div>
    </div>
</div>
```

#### Sau khi sửa:

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/archive-program.php
<?php
pageBanner(array(
    'title' => 'Tất cả các chương trình',
    'subtitle' => 'Khám phá các chương trình học thú vị của chúng tôi.'
));
?>
```

### 3. Cập nhật tệp `archive.php`

#### Trước đây:

```php
<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url('<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>');"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title"><?php the_archive_title(); ?></h1>
        <div class="page-banner__intro">
            <p><?php the_archive_description(); ?></p>
        </div>
    </div>
</div>
```

#### Sau khi sửa:

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/archive.php
<?php
pageBanner(array(
    'title' => get_the_archive_title(),
    'subtitle' => get_the_archive_description()
));
?>
```

### 4. Cập nhật tệp `index.php`

#### Trước đây:

```php
<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url('<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>');"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">Chào mừng đến với blog của chúng tôi</h1>
        <div class="page-banner__intro">
            <p>Cập nhật tin tức mới nhất của chúng tôi.</p>
        </div>
    </div>
</div>
```

#### Sau khi sửa:

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/index.php
<?php
pageBanner(array(
    'title' => 'Chào mừng đến với blog của chúng tôi',
    'subtitle' => 'Cập nhật tin tức mới nhất của chúng tôi.'
));
?>
```

### 5. Cập nhật tệp `single-event.php`

#### Trước đây:

```php
<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url('<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>');"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title"><?php the_title(); ?></h1>
        <div class="page-banner__intro">
            <p><?php echo get_field('page_banner_subtitle'); ?></p>
        </div>
    </div>
</div>
```

#### Sau khi sửa:

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-event.php
<?php
pageBanner();
?>
```

### 6. Cập nhật tệp `single-program.php`

#### Trước đây:

```php
<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url('<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>');"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title"><?php the_title(); ?></h1>
        <div class="page-banner__intro">
            <p><?php echo get_field('page_banner_subtitle'); ?></p>
        </div>
    </div>
</div>
```

#### Sau khi sửa:

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-program.php
<?php
pageBanner();
?>
```

### 7. Cập nhật tệp `single.php`

#### Trước đây:

```php
<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url('<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>');"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title"><?php the_title(); ?></h1>
        <div class="page-banner__intro">
            <p><?php echo get_field('page_banner_subtitle'); ?></p>
        </div>
    </div>
</div>
```

#### Sau khi sửa:

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single.php
<?php
pageBanner();
?>
```

## Tóm tắt nhanh

- **Hàm `pageBanner`**: Được sử dụng để thay thế mã biểu ngữ trang trùng lặp trong tất cả các tệp mẫu.
- **Cập nhật các tệp mẫu**:
    - `archive-event.php`, `archive-program.php`, `archive.php`, `index.php`, `single-event.php`, `single-program.php`, `single.php`.
- **Lợi ích**: Mã sạch hơn, dễ bảo trì hơn, và giảm thiểu lỗi.

## Kết luận

Các em thấy không, việc sử dụng hàm tái sử dụng như `pageBanner` giúp thầy trò mình tiết kiệm rất nhiều thời gian và công sức. Đây là một kỹ thuật quan trọng khi làm việc với WordPress, giúp mã của thầy trò mình trở nên chuyên nghiệp hơn.

Nếu có thắc mắc, đừng ngại hỏi thầy nhé!  
Chúc các em học tốt! 🚀  
— **Thầy Đạt 🧡**
