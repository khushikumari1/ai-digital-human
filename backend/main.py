from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
import whisper
from transformers import pipeline

app = FastAPI()
whisper_model = whisper.load_model("base")
emotion_classifier = pipeline("text-classification", model="bhadresh-savani/distilbert-base-uncased-emotion")

class ResponseModel(BaseModel):
    transcript: str
    reply: str
    emotion: str

@app.post("/process", response_model=ResponseModel)
async def process_audio(file: UploadFile = File(...)):
    with open("temp.wav", "wb") as f:
        f.write(await file.read())

    result = whisper_model.transcribe("temp.wav")
    transcript = result['text']

    reply = f"You said: {transcript}. This is a placeholder response."
    emotion = emotion_classifier(transcript)[0]['label']

    return ResponseModel(transcript=transcript, reply=reply, emotion=emotion)