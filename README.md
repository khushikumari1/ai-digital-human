# 🧠 AI-Powered Digital Human

A real-time open-source AI human that interacts using natural speech, emotions, and expressions — built with FastAPI, LLaMA 2, Whisper, and 3D avatar animation. It simulates lifelike conversations with an expressive digital companion using cutting-edge AI models and web technologies.

---

## 🚀 Features

- 🎙️ Real-time speech-to-text (Whisper)
- 🧠 LLaMA 2  for conversational response generation
- ❤️ Emotion detection using DistilBERT
- 🗣️ Human-like speech synthesis using Bark / Coqui TTS
- 👤 Talking avatar integration with DeepFaceLive / Blender
- ⚙️ FastAPI backend + React frontend
- 📦 Open-source and runs on free platforms like Colab, HuggingFace, Railway

---

## 🛠️ Tech Stack

| Component            | Technology                                  |
|----------------------|---------------------------------------------|
| Speech-to-Text       | Whisper (openai-whisper)                   |
| NLP & Response       | LLaMA 2 (via llama.cpp or HuggingFace)     |
| Emotion Detection    | DistilBERT (HuggingFace)                   |
| Text-to-Speech       | Bark by Suno / Coqui.ai                    |
| Backend              | FastAPI (Python)                           |
| Frontend             | ReactJS                                    |
| 3D Animation         | Blender                                    |
| Deployment           | Vercel                                     |

---

## 🧪 Demo (MVP Flow)

1. 🎤 User speaks → Microphone captures voice
2. 📄 Whisper converts speech → text
3. 🤖 LLaMA/GPT generates a response
4. 😃 Emotion is detected from user speech
5. 🗣️ TTS synthesizes a voice reply
6. 👤 Avatar animates lips and expressions

---

## 🔧 Backend Setup (MVP)

### 📦 Install Requirements

```bash
pip install fastapi uvicorn openai-whisper transformers pydantic python-multipart
