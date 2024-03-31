from fastapi import FastAPI
from app import settings

# Connection to the database
# Creation of table
# Data save in table


todo_server: FastAPI = FastAPI()


@todo_server.get("/")
def hello():
    return {"hello": "world"}


@todo_server.get("/db")
def db_var():
    return {"DB": settings.DATABASE_URL}
