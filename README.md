Інформація про проект

# Проект групи №5

## Посилання

- **GitHub репозиторій:**
  [english-excellence](https://github.com/StudentVlad5/english-excellence)
- **Проект (Kanban):**
  [Project Board](https://github.com/users/StudentVlad5/projects/11/views/1)
- **Жива сторінка:**
  [Live Demo](https://studentvlad5.github.io/english-excellence/)

## Учасники команди (7)

- Оксана Дика - проектний ментор,
- Влад - Team lead,
- Іван - Developer,
- Олег - Developer,
- Дмитро - Developer,
- Сергій - Developer,
- Ігор - Developer,
- Влад - Developer

## Завдання

[Макет](https://www.figma.com/file/MrdZUmIfeT1bKd8u5GWLRt/English-Excellence-2.0?type=design&node-id=0%3A1&mode=design&t=ABsxLoZAXhbRJT6P-1)

[ТЗ](https://docs.google.com/spreadsheets/d/1JRDqMMRgQ6RbukIpl-18NuXQFMjm8HqGAQwZ553ykHU/edit#gid=0)

[Презентацiя](https://docs.google.com/presentation/d/1Os-inDRvhyZPdDR6bvJT6CjLYk9wUNn_/edit#slide=id.p1)

## Технології

- HTML;
- CSS;
- JS;
- Vite;
- GitHab;
- Google Meet;
- Figma;

## Встановлення

# Clone repository

```bash
git clone
https://github.com/StudentVlad5/english-excellence

```

# Install dependencies

```bash
npm install
```

# Run development server

```bash
npm run dev
```

# Build for production

```bash
npm run build
```

## Загальний manual проекту:

1. Використано sprite з наступними назвами:

- camera
- facebook
- fi-rr-angle-small-left
- Nav
- Nav_small
- x (close)
- youtube

2. Використано normalize та "анульування" css-правил та шаблонізація загальних
   компонентів (контейнер, кнопки).

3. Структура папок сфоромована по використанню файлів:

```bush
.
├── src/            # Contains all source files for the project.
│   ├── css/        # Stores modular CSS files for different components and sections.
│   ├── img/        # Contains all image assets, including JPG, PNG, and SVG sprites.
│   ├── partials/   # Holds reusable HTML components, such as headers, footers, and sections.
│   ├── public/     # Contains static assets, like favicons, that are not processed by the build tool.
│   └── index.html  # The main entry point of the application.
├── .editorconfig   # Configuration file for consistent coding styles across different editors.
├── vite.config.js  # Configuration file for Vite build tool.
├── .gitignore      # Specifies files and directories to ignore in version control.
├── package.json    # Lists project dependencies and scripts.
└── README.md       # Project overview and documentation.
```

4. Файл base.css утримує всі загальні залежності по дизайну:

- Значення кольорів,
- Значення Breakpoints,
- Значення Animations,
- Значення .visually-hidden,
- Логіку "underline word"

5. Для оптимізації параметрів сайту використовується loading="lazy" та файли
   avif з альтернативним використанням jpg фбо png.

6. Прослуховувачі подій прописані у файлах папки JS.

7. Використані мега теги, описи та файл robot.txt, sitemap.xml

8. Дата : серпень 2025 року
