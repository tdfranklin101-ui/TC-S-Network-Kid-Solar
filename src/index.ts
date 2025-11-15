import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db, kidSolarSessions, kidSolarMemories } from '@tcs-network/shared';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'kid-solar' });
});

app.get('/api/sessions', async (req, res) => {
  try {
    const sessions = await db.select().from(kidSolarSessions).limit(50);
    res.json(sessions);
  } catch (error) {
    console.error('Error fetching sessions:', error);
    res.status(500).json({ error: 'Failed to fetch sessions' });
  }
});

app.get('/api/memories', async (req, res) => {
  try {
    const memories = await db.select().from(kidSolarMemories).limit(50);
    res.json(memories);
  } catch (error) {
    console.error('Error fetching memories:', error);
    res.status(500).json({ error: 'Failed to fetch memories' });
  }
});

app.listen(PORT, () => {
  console.log(`Kid Solar API running on port ${PORT}`);
});
