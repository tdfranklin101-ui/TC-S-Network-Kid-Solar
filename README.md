# TC-S Network Kid Solar

AI assistant with image analysis and conversational memory system.

## Features

- Image analysis with OpenAI Vision
- Conversational memory
- Session management
- Energy calculation for AI interactions

## Setup

```bash
npm install
cp .env.example .env
# Add OPENAI_API_KEY to .env
npm run dev
```

## API Endpoints

- `GET /api/sessions` - List AI sessions
- `GET /api/memories` - List stored memories

## Environment Variables

- `OPENAI_API_KEY` - OpenAI API key for image analysis

## License

MIT - TC-S Network Foundation
