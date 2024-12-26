from fastapi import FastAPI
from config.Database import DataBase
from classes.Collection_Request import Collection_Request
from classes.Resource_Request import Resource_Request
from pydantic import BaseModel

DataBase()

app = FastAPI()

class Item(BaseModel):
    title: str
    location: str
    day: int
    month: int
    year: int
    start: int
    end: int
    notes: str

@app.get("/api/collection")
def collection_request():
    response = {"message": "test collection"}

    return response

@app.get("/api/resource/{_id}")
def resource(_id):
    return {"testid": _id}

@app.post("/api/resource")
def create_item(item: Item):
    print(item)