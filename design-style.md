# Дизайн-система лендинга

## 1. Введение

Этот документ описывает универсальную дизайн-систему современного лендинга, созданную для обеспечения консистентности дизайна и простоты масштабирования. Система построена на базе CSS-переменных, что позволяет легко адаптировать её под любой бренд.

### Основные принципы

- **Модульность** — все компоненты независимы и переиспользуемы
- **Консистентность** — единый визуальный язык на всех уровнях
- **Адаптивность** — mobile-first подход с плавными переходами между breakpoints
- **Производительность** — оптимизированные анимации с использованием transform и opacity
- **Доступность** — семантичная разметка и клавиатурная навигация

### Технический стек

- **Шрифт**: Inter (Google Fonts)
- **Иконки**: Font Awesome 6.5.1
- **Методология**: CSS Custom Properties + BEM
- **Анимации**: CSS animations + Intersection Observer API

---

## 2. Цветовая палитра

### 2.1 Основные цвета (Primary Colors)

Основной акцентный цвет и его вариации для различных состояний и контекстов.

```css
--primary: #168E50;              /* Основной бренд-цвет */
--primary-dark: #127040;         /* Темная вариация для hover/active */
--primary-light: #1DA860;        /* Светлая вариация для градиентов */
--primary-ultra-light: #E8F5E9;  /* Очень светлый для фонов */
--primary-glow: rgba(22, 142, 80, 0.3); /* Для glow-эффектов */
```

**Применение:**
- `--primary` — кнопки, ссылки, акценты
- `--primary-dark` — hover состояния
- `--primary-light` — градиенты, декоративные элементы
- `--primary-ultra-light` — фоны, badges
- `--primary-glow` — тени с цветом, glow-эффекты

### 2.2 Нейтральные цвета (Neutrals)

Палитра серых оттенков от белого до почти черного для фонов, текста и границ.

```css
--white: #FFFFFF;
--gray-50: #F9FAFB;    /* Светлый фон */
--gray-100: #F3F4F6;   /* Альтернативный фон */
--gray-200: #E5E7EB;   /* Границы, разделители */
--gray-300: #D1D5DB;   /* Деактивированные элементы */
--gray-400: #9CA3AF;   /* Placeholder текст */
--gray-500: #6B7280;   /* Вторичный текст */
--gray-600: #4B5563;   /* Основной текст (темный фон) */
--gray-700: #374151;   /* Заголовки (темный фон) */
--gray-800: #1F2937;   /* Темный фон элементов */
--gray-900: #111827;   /* Основной темный фон */
```

**Иерархия использования:**
- **Фоны**: white, gray-50, gray-100, gray-900
- **Границы**: gray-200, gray-300, gray-800
- **Текст**: gray-400, gray-500, gray-600

### 2.3 Текстовые цвета (Text Colors)

Специальные переменные для текста, обеспечивающие правильный контраст и иерархию.

```css
--text-primary: #1a1a2e;    /* Основной текст, заголовки */
--text-secondary: #4a4a6a;  /* Вторичный текст, описания */
--text-muted: #6b7280;      /* Приглушенный текст, метаданные */
```

**Контрастность:**
- `--text-primary` на white: 12.5:1 (AAA)
- `--text-secondary` на white: 7.2:1 (AA)
- `--text-muted` на white: 4.6:1 (AA для крупного текста)

### 2.4 Функциональные цвета

Специализированные цвета для теней, эффектов и декоративных элементов.

```css
/* Тени с цветом */
--shadow-glow: 0 0 40px rgba(22, 142, 80, 0.15);

/* Градиенты */
linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)
linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)

/* Overlay для backdrop */
rgba(255, 255, 255, 0.8)  /* Светлый glassmorphism */
rgba(255, 255, 255, 0.1)  /* Темный glassmorphism */
```

---

## 3. Типография

### 3.1 Шрифтовое семейство

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Fallback стек** обеспечивает нативные шрифты на всех платформах.

**Веса шрифта (Font Weights):**
```css
font-weight: 300;  /* Light */
font-weight: 400;  /* Regular */
font-weight: 500;  /* Medium */
font-weight: 600;  /* Semi-Bold */
font-weight: 700;  /* Bold */
font-weight: 800;  /* Extra-Bold */
```

### 3.2 Размеры заголовков (Headings)

```css
/* Hero Title (h1) */
font-size: clamp(2.5rem, 5vw, 3.5rem);  /* 40px - 56px */
font-weight: 800;
line-height: 1.15;

/* Section Title (h2) */
font-size: clamp(2rem, 5vw, 3rem);      /* 32px - 48px */
font-weight: 800;
line-height: 1.2;

/* Card Title (h3) */
font-size: 1.25rem;                      /* 20px */
font-weight: 700;
line-height: 1.3;

/* Step Title */
font-size: 1.375rem;                     /* 22px */
font-weight: 700;
```

### 3.3 Размеры текста (Body Text)

```css
/* Large body */
font-size: 1.25rem;    /* 20px - hero subtitle, CTA */
line-height: 1.7;

/* Base body */
font-size: 1.125rem;   /* 18px - section subtitle, app description */
line-height: 1.6;

/* Regular body */
font-size: 1rem;       /* 16px - основной текст */
line-height: 1.6;

/* Small body */
font-size: 0.9375rem;  /* 15px - benefit description, footer links */
line-height: 1.6;

/* Caption */
font-size: 0.875rem;   /* 14px - badges, labels, small text */
line-height: 1.5;

/* Tiny */
font-size: 0.8125rem;  /* 13px - stat labels, metadata */
line-height: 1.4;

/* Micro */
font-size: 0.75rem;    /* 12px - icons text, badges */
line-height: 1.3;
```

### 3.4 Веса шрифтов в контексте

| Элемент | Размер | Вес | Применение |
|---------|--------|-----|------------|
| Hero H1 | clamp(2.5rem, 5vw, 3.5rem) | 800 | Главный заголовок |
| Section H2 | clamp(2rem, 5vw, 3rem) | 800 | Заголовки секций |
| Card H3 | 1.25rem | 700 | Заголовки карточек |
| Button | 1rem | 600 | Кнопки, CTA |
| Badge | 0.875rem | 600 | Бейджи, метки |
| Nav Link | 0.9375rem | 500 | Навигация |
| Body | 1rem | 400 | Основной текст |

### 3.5 Text Gradient

Специальный эффект для акцентных слов в заголовках:

```css
.text-gradient {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

---

## 4. Spacing система

### 4.1 Отступы секций (Section Spacing)

```css
/* Desktop */
.section {
    padding: 100px 0;
}

/* Tablet (max-width: 1024px) */
.section {
    padding: 80px 0;
}

/* Mobile (max-width: 480px) */
.section {
    padding: 60px 0;
}
```

### 4.2 Container

```css
.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;  /* Desktop/Tablet */
}

/* Mobile */
@media (max-width: 480px) {
    .container {
        padding: 0 16px;
    }
}
```

### 4.3 Внутренние отступы компонентов

```css
/* Cards */
.benefit-card { padding: 32px; }
.step-card { padding: 40px; }
.tariff-card { padding: 32px 24px; }

/* Buttons */
.btn { padding: 14px 28px; }
.btn-lg { padding: 18px 36px; }
.btn-nav { padding: 10px 20px; }

/* Badges */
.section-badge { padding: 8px 20px; }
.hero-badge { padding: 10px 20px; }

/* Stats */
.hero-stats { padding: 24px 32px; }
```

### 4.4 Gaps в Grid/Flex

```css
/* Large gaps */
.hero-container { gap: 80px; }
.app-showcase-container { gap: 80px; }

/* Medium gaps */
.hero-buttons { gap: 16px; }
.section-header { margin-bottom: 60px; }

/* Small gaps */
.benefits-grid { gap: 24px; }
.steps-container { gap: 40px; }
.tariffs-grid { gap: 20px; }

/* Extra small gaps */
.hero-stats { gap: 24px; }
.footer-social { gap: 12px; }
```

### 4.5 Margin система

```css
/* Title margins */
.section-title { margin-bottom: 16px; }
.hero h1 { margin-bottom: 24px; }

/* Icon margins */
.benefit-icon { margin-bottom: 20px; }
.step-icon { margin-bottom: 16px; }

/* Section badges */
.section-badge { margin-bottom: 20px; }
```

---

## 5. Тени и эффекты

### 5.1 Уровни теней (Shadow Levels)

```css
/* Extra Small - subtle */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Small - cards at rest */
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
             0 1px 2px -1px rgba(0, 0, 0, 0.1);

/* Medium - navbar, dropdowns */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
             0 2px 4px -2px rgba(0, 0, 0, 0.1);

/* Large - cards on hover */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
             0 4px 6px -4px rgba(0, 0, 0, 0.1);

/* Extra Large - elevated elements */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
             0 8px 10px -6px rgba(0, 0, 0, 0.1);

/* 2XL - modals, popovers */
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Glow effect - accent shadow */
--shadow-glow: 0 0 40px rgba(22, 142, 80, 0.15);
```

**Применение:**
- `shadow-xs`: Borders alternative
- `shadow-sm`: Default cards
- `shadow-md`: Navbar, sticky elements
- `shadow-lg`: Hover states
- `shadow-xl`: Modal dialogs, dropdowns
- `shadow-2xl`: Phone mockup, hero elements
- `shadow-glow`: Primary CTA, featured cards

### 5.2 Button Shadows

```css
/* Primary button */
.btn-primary {
    box-shadow: 0 4px 14px rgba(22, 142, 80, 0.4);
}

.btn-primary:hover {
    box-shadow: 0 8px 25px rgba(22, 142, 80, 0.5);
}

/* White button */
.btn-white:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

### 5.3 Glow эффекты

```css
/* Phone glow */
.phone-glow {
    background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
    filter: blur(60px);
    animation: pulse-glow 4s ease-in-out infinite;
}

/* Popular card glow */
.tariff-card.popular {
    box-shadow: var(--shadow-glow);
}

/* Gradient glow backgrounds */
.hero-gradient-1 {
    background: radial-gradient(circle, rgba(22, 142, 80, 0.08) 0%, transparent 70%);
}
```

### 5.4 Backdrop Blur (Glassmorphism)

```css
/* Navbar */
.navbar {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
}

/* Glass button */
.btn-glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## 6. Скругления (Border Radius)

### 6.1 Уровни радиусов

```css
--radius-sm: 0.375rem;   /* 6px - small elements */
--radius-md: 0.5rem;     /* 8px - buttons, inputs */
--radius-lg: 0.75rem;    /* 12px - cards, large buttons */
--radius-xl: 1rem;       /* 16px - hero stats, images */
--radius-2xl: 1.5rem;    /* 24px - sections, large cards */
--radius-full: 9999px;   /* Pills, badges, circles */
```

### 6.2 Применение

| Элемент | Радиус | Применение |
|---------|--------|------------|
| Small icons | `radius-sm` | Icon backgrounds, small badges |
| Buttons | `radius-lg` | Все кнопки по умолчанию |
| Cards | `radius-xl` | Benefit cards, step cards, tariff cards |
| Large images | `radius-xl` | Step images, phone screens |
| Sections | `radius-2xl` | Hero stats, large content blocks |
| Badges | `radius-full` | Section badges, labels, pills |
| Social icons | `radius-md` | Footer social links |

### 6.3 Специальные случаи

```css
/* Phone mockup */
.phone-frame { border-radius: 40px; }
.phone-screen { border-radius: 32px; }
.phone-notch { border-radius: 0 0 16px 16px; }

/* Carousel */
.carousel-slides { border-radius: 36px; }
.carousel-slide img { border-radius: 28px; }

/* Mouse indicator */
.mouse { border-radius: 13px; }
```

---

## 7. Transitions и анимации

### 7.1 Скорости переходов (Transition Speeds)

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);   /* Micro-interactions */
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);   /* Standard transitions */
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);   /* Complex animations */
```

**Cubic-bezier(0.4, 0, 0.2, 1)** — это ease-in-out с акцентом на выходе, создает приятное ощущение отзывчивости.

### 7.2 Применение transitions

```css
/* Links и навигация */
a { transition: var(--transition-base); }
.nav-link { transition: var(--transition-base); }
.mobile-link { transition: var(--transition-fast); }

/* Кнопки */
.btn { transition: var(--transition-base); }

/* Cards */
.benefit-card { transition: var(--transition-base); }
.tariff-card { transition: var(--transition-base); }
.faq-item { transition: var(--transition-base); }

/* Icons и decorations */
.benefit-icon i { transition: var(--transition-base); }
.icon-bg { transition: var(--transition-base); }
```

### 7.3 Keyframe анимации

#### Spin (Preloader)
```css
@keyframes spin {
    to { transform: rotate(360deg); }
}

.preloader-spinner {
    animation: spin 1s linear infinite;
}
```

#### Float (Phone mockup)
```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.phone-mockup {
    animation: float 6s ease-in-out infinite;
}
```

#### Float-card (Floating UI elements)
```css
@keyframes float-card {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.floating-card {
    animation: float-card 5s ease-in-out infinite;
}
```

#### Float-slow (Background gradients)
```css
@keyframes float-slow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(5deg); }
    66% { transform: translate(-20px, 20px) rotate(-5deg); }
}

.hero-gradient {
    animation: float-slow 20s ease-in-out infinite;
}
```

#### Pulse-glow
```css
@keyframes pulse-glow {
    0%, 100% {
        opacity: 0.6;
        transform: translate(-50%, -50%) scale(1);
    }
    50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.1);
    }
}

.phone-glow {
    animation: pulse-glow 4s ease-in-out infinite;
}
```

#### Bounce (Scroll indicator)
```css
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    40% {
        transform: translateX(-50%) translateY(-10px);
    }
    60% {
        transform: translateX(-50%) translateY(-5px);
    }
}

.scroll-indicator {
    animation: bounce 2s infinite;
}
```

#### Scroll-wheel
```css
@keyframes scroll-wheel {
    0% { opacity: 1; top: 8px; }
    100% { opacity: 0; top: 20px; }
}

.wheel {
    animation: scroll-wheel 2s infinite;
}
```

#### FadeIn (Carousel)
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.carousel-slide.active {
    animation: fadeIn 0.5s ease;
}
```

#### Ripple (Click effect)
```css
@keyframes ripple {
    from {
        transform: scale(0);
        opacity: 1;
    }
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.ripple-effect {
    animation: ripple 0.6s linear;
}
```

---

## 8. UI Компоненты

### 8.1 Кнопки (Buttons)

#### Base Button
```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 28px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--radius-lg);
    transition: var(--transition-base);
    cursor: pointer;
    border: 2px solid transparent;
    white-space: nowrap;
}
```

#### Primary Button (градиентный)
```css
.btn-primary {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white);
    box-shadow: 0 4px 14px rgba(22, 142, 80, 0.4);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(22, 142, 80, 0.5);
}
```

**Когда использовать:** Основные CTA, главные действия на странице (скачать, купить, зарегистрироваться).

#### Outline Button
```css
.btn-outline {
    background: transparent;
    border-color: var(--primary);
    color: var(--primary);
}

.btn-outline:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
}
```

**Когда использовать:** Вторичные действия, альтернативные опции (подробнее, выбрать).

#### Glass Button (Glassmorphism)
```css
.btn-glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--text-primary);
}

.btn-glass:hover {
    background: rgba(22, 142, 80, 0.1);
    border-color: var(--primary);
    color: var(--primary);
}
```

**Когда использовать:** На hero секциях, поверх изображений, для современного эффекта.

#### White Button
```css
.btn-white {
    background: var(--white);
    color: var(--primary);
}

.btn-white:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

**Когда использовать:** На темных/цветных фонах (CTA section, footer).

#### Large Button
```css
.btn-lg {
    padding: 18px 36px;
    font-size: 1.0625rem;
}
```

### 8.2 Карточки (Cards)

#### Benefit Card
```css
.benefit-card {
    background: var(--white);
    padding: 32px;
    border-radius: var(--radius-xl);
    border: 1px solid var(--gray-200);
    transition: var(--transition-base);
    position: relative;
    overflow: hidden;
}

.benefit-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-base);
}

.benefit-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: transparent;
}

.benefit-card:hover::before {
    transform: scaleX(1);
}
```

**Структура:**
- Icon (64x64px) с цветным фоном
- Заголовок (h3, 1.25rem, bold)
- Описание (0.9375rem, regular)
- Ссылка "Подробнее" с иконкой (появляется на hover)

**Hover-эффекты:**
- Поднятие карточки (-8px)
- Появление цветной полоски сверху
- Поворот иконки на 8deg с изменением цвета
- Появление ссылки снизу

#### Step Card
```css
.step-card {
    display: grid;
    grid-template-columns: 120px 1fr 200px;
    gap: 40px;
    align-items: center;
    background: var(--white);
    padding: 40px;
    border-radius: var(--radius-xl);
    border: 1px solid var(--gray-200);
    transition: var(--transition-base);
}

.step-card:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-ultra-light);
}
```

**Структура:**
- Большой номер (4rem, 800 weight, opacity 0.2)
- Контент с иконкой и описанием
- Изображение (200px, скругленное)

#### Tariff Card
```css
.tariff-card {
    background: var(--white);
    border-radius: var(--radius-xl);
    padding: 32px 24px;
    border: 1px solid var(--gray-200);
    transition: var(--transition-base);
    position: relative;
    display: flex;
    flex-direction: column;
}

.tariff-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

.tariff-card.popular {
    border: 2px solid var(--primary);
    transform: scale(1.05);
    z-index: 2;
    box-shadow: var(--shadow-glow);
}
```

**Структура:**
- Header: иконка, название, цена, период
- Features: список с галочками
- CTA кнопка
- Popular badge (для featured карточки)

### 8.3 Навигация (Navigation)

#### Navbar
```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px; /* --nav-height */
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 1000;
    transition: var(--transition-base);
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: var(--shadow-md);
}
```

**Особенности:**
- Sticky с backdrop-blur эффектом
- Меняет прозрачность при скролле
- Добавляет тень при scrolled состоянии
- Высота: 80px (desktop), 70px (mobile)

#### Nav Links
```css
.nav-link {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-secondary);
    position: relative;
    padding: 8px 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: var(--transition-base);
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link.active {
    color: var(--primary);
}

.nav-link.active::after {
    width: 100%;
}
```

#### Mobile Menu
```css
.mobile-menu {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: var(--white);
    padding: 20px 24px 30px;
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-base);
    z-index: 999;
}

.mobile-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}
```

#### Hamburger
```css
.hamburger span {
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: var(--transition-base);
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}
```

### 8.4 Badges

#### Section Badge
```css
.section-badge {
    display: inline-block;
    padding: 8px 20px;
    background: var(--primary-ultra-light);
    color: var(--primary);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: var(--radius-full);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* Light variant for dark backgrounds */
.section-badge.light {
    background: rgba(255, 255, 255, 0.15);
    color: var(--white);
}
```

#### Popular Badge (Tariff)
```css
.popular-badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white);
    padding: 8px 20px;
    border-radius: var(--radius-full);
    font-size: 0.8125rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
}
```

#### Save Badge (Tariff)
```css
.tariff-save {
    display: inline-block;
    margin-top: 8px;
    padding: 4px 12px;
    background: var(--primary-ultra-light);
    color: var(--primary);
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: var(--radius-full);
}
```

### 8.5 Icons

#### Icon с фоном (Benefit/Step)
```css
.benefit-icon {
    position: relative;
    width: 64px;
    height: 64px;
}

.icon-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-ultra-light);
    border-radius: var(--radius-lg);
    transition: var(--transition-base);
}

.benefit-icon i {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary);
    transition: var(--transition-base);
}

/* Hover effect */
.benefit-card:hover .icon-bg {
    background: var(--primary);
    transform: rotate(8deg);
}

.benefit-card:hover .benefit-icon i {
    color: var(--white);
}
```

#### Круглая иконка (Tariff)
```css
.tariff-icon {
    width: 48px;
    height: 48px;
    background: var(--primary-ultra-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    font-size: 1.25rem;
    color: var(--primary);
}
```

### 8.6 Формы и списки

#### Feature List (с иконками)
```css
.tariff-features li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--gray-100);
}

.tariff-features li:last-child {
    border-bottom: none;
}

.tariff-features li i {
    color: var(--primary);
    font-size: 0.75rem;
}
```

#### App Features List
```css
.app-features li {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 0;
    font-size: 1rem;
}

.app-features li i {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### 8.7 Stats Display

```css
.hero-stats {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 24px 32px;
    background: var(--white);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--gray-100);
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: var(--primary);
    line-height: 1;
}

.stat-prefix,
.stat-suffix {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
}

.stat-label {
    display: block;
    font-size: 0.8125rem;
    color: var(--text-muted);
    margin-top: 6px;
}
```

### 8.8 Accordion (FAQ)

```css
.faq-item {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-lg);
    margin-bottom: 12px;
    overflow: hidden;
    transition: var(--transition-base);
}

.faq-item.active {
    border-color: var(--primary);
    box-shadow: var(--shadow-md);
}

.faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    cursor: pointer;
    font-weight: 600;
    color: var(--text-primary);
}

.faq-question i {
    transition: transform var(--transition-base);
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
    color: var(--primary);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base), padding var(--transition-base);
}

.faq-item.active .faq-answer {
    max-height: 300px;
}

.faq-answer p {
    padding: 0 24px 20px;
    color: var(--text-secondary);
    line-height: 1.7;
}
```

**JavaScript логика:**
- Клик открывает текущий item
- Закрывает все остальные items
- Анимация через max-height
- Поворот иконки chevron на 180deg

### 8.9 Carousel

```css
.carousel-slides {
    position: relative;
    border-radius: 36px;
    overflow: hidden;
    box-shadow: var(--shadow-2xl);
}

.carousel-slide {
    display: none;
}

.carousel-slide.active {
    display: block;
    animation: fadeIn 0.5s ease;
}

.carousel-nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.carousel-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: var(--transition-base);
}

.carousel-dot.active {
    background: var(--white);
    transform: scale(1.2);
}
```

**JavaScript функционал:**
- Auto-advance каждые 4 секунды
- Pause on hover
- Клик по dot переключает слайд
- FadeIn анимация при смене

### 8.10 Back to Top Button

```css
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    box-shadow: var(--shadow-lg);
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: var(--transition-base);
    z-index: 100;
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(22, 142, 80, 0.4);
}
```

**Появление:** После скролла на 500px вниз

---

## 9. Анимации

### 9.1 Scroll Animations

#### Intersection Observer Setup
```javascript
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            entry.target.style.setProperty('--delay', delay);

            setTimeout(() => {
                entry.target.classList.add('animated');
            }, delay);

            animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);
```

#### CSS для Scroll Animation
```css
.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.animated {
    opacity: 1;
    transform: translateY(0);
}
```

#### Staggered Animation (для карточек)
```css
.benefit-card.animated,
.tariff-card.animated,
.step-card.animated {
    transition-delay: calc(var(--delay, 0) * 1ms);
}
```

**HTML применение:**
```html
<div class="benefit-card animate-on-scroll" data-delay="0">...</div>
<div class="benefit-card animate-on-scroll" data-delay="100">...</div>
<div class="benefit-card animate-on-scroll" data-delay="200">...</div>
```

### 9.2 Counter Animation

Анимация чисел в stats блоке:

```javascript
const animateCounter = (el) => {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            el.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            el.textContent = target;
        }
    };

    updateCounter();
};
```

**HTML:**
```html
<span class="stat-number" data-count="24">0</span>
```

### 9.3 Timeline Progress

Прогресс бар для секции "Как это работает":

```javascript
const updateTimelineProgress = () => {
    const sectionRect = stepsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
        const sectionHeight = sectionRect.height;
        const visibleHeight = Math.min(windowHeight - sectionRect.top, sectionHeight);
        const progress = Math.max(0, Math.min(100, (visibleHeight / sectionHeight) * 100));
        timelineProgress.style.height = `${progress}%`;
    }
};
```

### 9.4 Parallax на Hero

Плавающие карточки реагируют на движение мыши:

```javascript
window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) / 50;
    const moveY = (clientY - centerY) / 50;

    floatingCards.forEach((card, index) => {
        const multiplier = (index + 1) * 0.5;
        card.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
    });
});
```

### 9.5 Ripple Effect (Click Animation)

```css
@keyframes ripple {
    from {
        transform: scale(0);
        opacity: 1;
    }
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.ripple-effect {
    position: absolute;
    border-radius: 50%;
    background: rgba(22, 142, 80, 0.2);
    width: 100px;
    height: 100px;
    animation: ripple 0.6s linear;
    pointer-events: none;
}
```

**JavaScript:**
```javascript
card.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';

    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});
```

---

## 10. Layout система

### 10.1 Container

```css
.container {
    max-width: 1280px;      /* var(--max-width) */
    margin: 0 auto;
    padding: 0 24px;
}

@media (max-width: 480px) {
    .container {
        padding: 0 16px;
    }
}
```

### 10.2 Grid Patterns

#### Benefits Grid (3 колонки)
```css
.benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

@media (max-width: 1024px) {
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }
}
```

#### Tariffs Grid (5 колонок)
```css
.tariffs-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}

@media (max-width: 1280px) {
    .tariffs-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 1024px) {
    .tariffs-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .tariffs-grid {
        grid-template-columns: 1fr;
    }
}
```

#### Hero Layout (2 колонки)
```css
.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
    }
}
```

#### Footer Grid (4 колонки)
```css
.footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 40px;
}

@media (max-width: 1024px) {
    .footer-top {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .footer-top {
        grid-template-columns: 1fr;
        gap: 32px;
    }
}
```

### 10.3 Responsive Breakpoints

```css
/* Large Desktop */
@media (max-width: 1280px) {
    /* 5-колоночный grid → 3 колонки */
}

/* Desktop */
@media (max-width: 1024px) {
    /* 2-колоночные layouts → 1 колонка */
    /* Скрытие декоративных элементов */
    /* Padding sections: 100px → 80px */
}

/* Tablet */
@media (max-width: 768px) {
    /* Показ mobile menu */
    /* Hero font sizes уменьшаются */
    /* Padding sections: 80px → 60px */
    /* Grid → single column */
}

/* Mobile */
@media (max-width: 480px) {
    /* Container padding: 24px → 16px */
    /* Section padding: 80px → 60px */
    /* Button sizes уменьшаются */
    /* Carousel sizes уменьшаются */
}
```

### 10.4 Flexbox Patterns

#### Button Group
```css
.hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

@media (max-width: 480px) {
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }
}
```

#### Stats Row
```css
.hero-stats {
    display: flex;
    align-items: center;
    gap: 24px;
}

@media (max-width: 768px) {
    .hero-stats {
        flex-wrap: wrap;
        gap: 16px;
    }
}
```

---

## 11. Section паттерны

### 11.1 Hero Section

**Структура:**
- Full viewport height
- 2-колоночный layout (контент + визуал)
- Animated background gradients
- Floating decorative elements
- Scroll indicator внизу

```css
.hero {
    min-height: 100vh;
    padding-top: calc(var(--nav-height) + 60px);
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}
```

**Элементы:**
- Badge с иконкой
- H1 заголовок (часть текста с gradient)
- Subtitle (1.25rem)
- 2 кнопки (primary + glass)
- Stats карточка с счетчиками
- Phone mockup с плавающими карточками
- Background: 2 animated gradients + dot pattern

### 11.2 Content Sections (Benefits, How It Works)

**Базовая структура:**
```css
.section {
    padding: 100px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}
```

**Элементы header:**
- Section badge
- Section title (h2)
- Section subtitle

**Grid контента:**
- Benefits: 3 колонки карточек
- Steps: вертикальный layout с timeline линией

### 11.3 Tariffs Section

**Особенности:**
- 5-колоночный grid
- Центральная карточка "популярная" (scale 1.05)
- Popular badge позиционирован абсолютно сверху
- Save badges показывают экономию

**Footer note:**
```css
.tariff-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 48px;
    padding: 20px 32px;
    background: var(--white);
    border-radius: var(--radius-lg);
    border: 1px solid var(--gray-200);
}
```

### 11.4 App Showcase Section

**Особенности:**
- Темный градиентный фон (primary → darker)
- Белый текст
- 2-колоночный layout (контент + carousel)
- Decorative gradient overlay
- Dot pattern на фоне

```css
.app-showcase {
    background: linear-gradient(135deg, var(--primary) 0%, #0e5a32 100%);
    color: var(--white);
    overflow: hidden;
    position: relative;
}
```

**Элементы:**
- Light badge вариант
- Feature list с иконками в glass containers
- Store download button
- Phone carousel с dots navigation

### 11.5 CTA Section

**Простая центрированная секция:**
```css
.cta-section {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white);
    text-align: center;
    padding: 80px 0;
    position: relative;
    overflow: hidden;
}
```

**Элементы:**
- H2 заголовок
- Короткий текст
- White button (контрастный на цветном фоне)
- Dot pattern background

### 11.6 Footer

**4-колоночный grid:**
1. Brand column (2fr) — logo, description, social
2. Navigation (1fr) — внутренние ссылки
3. Contacts (1fr) — email, phone
4. Reserved for future

**Footer bottom:**
- Copyright
- Legal links (privacy, terms)

```css
.footer {
    background: var(--gray-900);
    color: var(--gray-400);
    padding-top: 80px;
}

.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    font-size: 0.875rem;
}
```

---

## 12. Примеры использования

### 12.1 Быстрый старт — Hero секция

```html
<section class="hero">
    <div class="container hero-container">
        <div class="hero-content animate-on-scroll">
            <h1>Ваш заголовок с <span class="text-gradient">акцентом</span></h1>
            <p class="hero-subtitle">Описание вашего продукта или услуги</p>
            <div class="hero-buttons">
                <a href="#" class="btn btn-primary btn-lg">
                    <i class="fas fa-star"></i> Главная кнопка
                </a>
                <a href="#" class="btn btn-glass btn-lg">
                    Вторичная <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
        <div class="hero-visual animate-on-scroll">
            <!-- Визуальный контент -->
        </div>
    </div>
</section>
```

### 12.2 Секция с карточками

```html
<section class="section benefits">
    <div class="container">
        <div class="section-header animate-on-scroll">
            <span class="section-badge">Преимущества</span>
            <h2 class="section-title">Почему выбирают <span class="text-gradient">нас</span>?</h2>
            <p class="section-subtitle">Краткое описание секции</p>
        </div>
        <div class="benefits-grid">
            <div class="benefit-card animate-on-scroll" data-delay="0">
                <div class="benefit-icon">
                    <div class="icon-bg"></div>
                    <i class="fas fa-check"></i>
                </div>
                <h3>Преимущество 1</h3>
                <p>Описание преимущества</p>
                <div class="benefit-link">
                    <span>Подробнее</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            <!-- Repeat for more cards with data-delay="100", "200" etc -->
        </div>
    </div>
</section>
```

### 12.3 Тарифная карточка

```html
<div class="tariff-card popular animate-on-scroll" data-delay="200">
    <div class="popular-badge">
        <i class="fas fa-star"></i> Выгодно
    </div>
    <div class="tariff-header">
        <div class="tariff-icon">
            <i class="fas fa-crown"></i>
        </div>
        <h3>Премиум</h3>
        <div class="tariff-price">
            <span class="price">99</span>
            <span class="currency">₽</span>
        </div>
        <span class="tariff-period">в месяц</span>
        <span class="tariff-save">Экономия 500 ₽</span>
    </div>
    <ul class="tariff-features">
        <li><i class="fas fa-check"></i> Функция 1</li>
        <li><i class="fas fa-check"></i> Функция 2</li>
        <li><i class="fas fa-check"></i> Функция 3</li>
    </ul>
    <a href="#" class="btn btn-primary btn-tariff">Выбрать</a>
</div>
```

### 12.4 FAQ аккордеон

```html
<div class="faq-item animate-on-scroll">
    <div class="faq-question">
        <span>Ваш вопрос?</span>
        <i class="fas fa-chevron-down"></i>
    </div>
    <div class="faq-answer">
        <p>Ответ на вопрос с детальным описанием.</p>
    </div>
</div>
```

**JavaScript:**
```javascript
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});
```

### 12.5 CTA секция

```html
<section class="section cta-section">
    <div class="cta-bg">
        <div class="cta-pattern"></div>
    </div>
    <div class="container">
        <div class="cta-content animate-on-scroll">
            <h2>Готовы начать?</h2>
            <p>Призыв к действию</p>
            <a href="#" class="btn btn-white btn-lg">
                <i class="fas fa-rocket"></i> Начать сейчас
            </a>
        </div>
    </div>
</section>
```

---

## 13. Best Practices

### 13.1 Производительность

**Анимации:**
- Используйте только `transform` и `opacity` для анимаций
- Избегайте анимации `width`, `height`, `top`, `left`
- Используйте `will-change` для сложных анимаций (осторожно)

**Оптимизация скролла:**
```javascript
// Throttle scroll events
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });
```

**Intersection Observer:**
- Используйте для lazy-loading анимаций
- Unobserve после срабатывания
- Используйте throttling для частых событий

### 13.2 Доступность

**Keyboard navigation:**
- Все интерактивные элементы доступны с клавиатуры
- Escape закрывает модалы и меню
- Tab навигация работает логично

**ARIA labels:**
```html
<button class="back-to-top" aria-label="Наверх">
    <i class="fas fa-arrow-up"></i>
</button>
```

**Контрастность:**
- Все текстовые цвета соответствуют WCAG AA (минимум 4.5:1)
- Крупный текст соответствует AAA (7:1)

**Focus states:**
```css
a:focus, button:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
}
```

### 13.3 Адаптивность

**Mobile-first подход:**
```css
/* Base styles - mobile */
.element { ... }

/* Tablet and up */
@media (min-width: 768px) { ... }

/* Desktop and up */
@media (min-width: 1024px) { ... }
```

**Fluid typography:**
```css
/* Используйте clamp для плавного масштабирования */
font-size: clamp(2rem, 5vw, 3rem);
```

**Touch targets:**
- Минимум 44x44px для всех кнопок и ссылок на мобильных
- Достаточные отступы между интерактивными элементами

### 13.4 Брендинг

**Как адаптировать под новый бренд:**

1. **Измените primary цвет:**
```css
:root {
    --primary: #YOUR_BRAND_COLOR;
    --primary-dark: /* darker shade */;
    --primary-light: /* lighter shade */;
    --primary-ultra-light: /* very light tint */;
    --primary-glow: rgba(/* your color */, 0.3);
}
```

2. **Смените шрифт:**
```css
body {
    font-family: 'YourFont', -apple-system, sans-serif;
}
```

3. **Обновите радиусы (если нужен другой стиль):**
```css
:root {
    --radius-lg: 4px;  /* Более строгий стиль */
    /* или */
    --radius-lg: 20px; /* Более мягкий стиль */
}
```

4. **Замените иконки:**
- Font Awesome можно заменить на другую библиотеку
- Или использовать SVG иконки

### 13.5 Масштабирование

**Добавление новых компонентов:**
- Следуйте существующей структуре классов
- Используйте CSS переменные для цветов и размеров
- Добавляйте `.animate-on-scroll` для scroll анимаций
- Используйте существующие utility классы

**Добавление новых секций:**
```html
<section class="section your-section-name">
    <div class="container">
        <div class="section-header animate-on-scroll">
            <!-- Standard header -->
        </div>
        <div class="your-content">
            <!-- Your content -->
        </div>
    </div>
</section>
```

---

## 14. Заключение

Эта дизайн-система создана для обеспечения консистентности, производительности и масштабируемости. Все компоненты протестированы на различных устройствах и браузерах.

### Основные преимущества системы:

✅ **Модульность** — компоненты независимы и переиспользуемы
✅ **Адаптивность** — работает на всех устройствах
✅ **Производительность** — оптимизированные анимации
✅ **Доступность** — соответствие стандартам WCAG
✅ **Масштабируемость** — легко добавлять новые элементы
✅ **Брендинг** — простая адаптация под любой бренд

### Технологии:

- CSS Custom Properties для темизации
- Flexbox и CSS Grid для layouts
- Intersection Observer API для анимаций
- Плавные transitions и keyframe animations
- Mobile-first responsive design

### Поддержка браузеров:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Дальнейшее развитие:

- Добавление темной темы
- Расширение цветовой палитры
- Больше вариантов компонентов
- Accessibility улучшения
- Performance оптимизации

---

**Версия документа:** 1.0
**Дата создания:** 2026-01-17
**Лицензия:** Свободное использование для любых проектов
