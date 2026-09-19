# NextQuiz

A modern quiz app built with Next.js and the QuizAPI. Users can choose a category and difficulty, then answer a 10-question round and see their score.

## Features

- category-based quiz selection
- difficulty selection
- dynamic question loading from QuizAPI
- modern dark UI
- no login or registration flow

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file if you want to override the default API key:

```bash
cp .env.example .env.local
```

If you do not create a file, the app will fall back to the bundled demo key used for the project.

Example `.env.local`:

```bash
QUIZ_API_KEY=your_quizapi_key_here
```

3. Run the app:

```bash
npm run dev
```

4. Open http://localhost:3000

## Project structure

- `src/app/page.tsx` — landing page
- `src/app/api/fetchCategory.tsx` — category and difficulty selector
- `src/app/(routes)/questions/[category]/[difficulty]/page.tsx` — quiz page
- `src/app/components/QuizExperience/QuizExperience.tsx` — question rendering and score calculation

## Notes

- The app uses the QuizAPI categories endpoint and flattens the nested group data into usable quiz categories.
- The quiz page requests questions using the selected category slug and difficulty level.
- The project intentionally removes authentication screens and keeps the app focused on quiz flow.
