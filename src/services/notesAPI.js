import axios from 'axios';

const API_URL = 'https://kmvhxhxnoqsvtbhcvqon.supabase.co/rest/v1/notes';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imttdmh4aHhub3FzdnRiaGN2cW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzUyMzYsImV4cCI6MjA2NTgxMTIzNn0.dmn9I4HIGvoj1pMlmTLIxaokNmqakSCDbfJPMP54ku8';

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

export const notesAPI = {
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async deleteNote(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
