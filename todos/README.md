# Todo Application with AI Summarization

A full-stack todo application built with Node.js, Express, React, and Supabase, featuring AI-powered todo summarization using Google's Generative AI.

## Features

- Create, read, and delete todos
- AI-powered todo summarization
- Modern and responsive UI
- Real-time database with Supabase
- Secure authentication

## Tech Stack

### Backend
- Node.js
- Express.js
- Supabase (Database)
- Google Generative AI (for summarization)
- dotenv (environment variables)

### Frontend
- React
- Vite
- Modern CSS with responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account
- Google AI API key

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd todos
```

### 2. Backend Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
GOOGLE_API_KEY=your_google_ai_api_key
PORT=3000
```

3. Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

### 4. Supabase Setup

1. Create a new project in [Supabase](https://supabase.com)
2. Create a new table called `todos` with the following schema:
```sql
create table todos (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

3. Get your Supabase URL and anon key from the project settings
4. Add these credentials to your backend `.env` file

### 5. Google AI Setup

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add the API key to your backend `.env` file

## Project Structure

```
todos/
├── frontend/           # React frontend
│   ├── src/
│   │   ├── App.jsx    # Main application component
│   │   ├── App.css    # Styles
│   │   └── main.jsx   # Entry point
│   └── package.json
├── controllers/        # Backend controllers
├── config/            # Configuration files
├── index.js          # Backend entry point
└── package.json
```

## Available Scripts

### Backend
- `npm run dev`: Start development server with nodemon
- `npm start`: Start production server

### Frontend
- `npm run dev`: Start Vite development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache-2.0 License - see the LICENSE file for details.

## Acknowledgments

- Google Generative AI for the summarization feature
- Supabase for the database and authentication
- React and Vite for the frontend framework
