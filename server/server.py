from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from config.Database import DataBase
from classes.Collection_Request import Collection_Request
from classes.Resource_Request import Resource_Request



DataBase()

app = FastAPI()

origins = [
    "http://localhost:3000", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)


@app.get("/api/collection")
def root():
    return Collection_Request().read()



@app.post("/api/resource")
def create_item(
    title: str = Form(...),
    location: str = Form(...),
    start: int = Form(...),
    end: int = Form(...),
    notes: str = Form(...),
    date: str = Form(...)

):
    return Resource_Request().create(date, title, location, start, end, notes);


@app.get("/api/resource/{_id}")
def get_item(_id):
    return Resource_Request().read(_id)


@app.delete("/api/resource/{_id}")
def delete_item(_id):
    return Resource_Request().delete(_id)