from typing import Optional, Annotated
from fastapi import FastAPI, HTTPException, Depends, Query
from sqlmodel import SQLModel, Field, create_engine, Session, select
from contextlib import asynccontextmanager
from app import settings
from pydantic import BaseModel


# database schema
class Todo(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    todo: str = Field(index=True)
    is_complete: bool = Field(default=False)


# database connection
connection_string: str = str(settings.DATABASE_URL).replace(
    "postgresql", "postgresql+psycopg"
)
engine = create_engine(
    connection_string, connect_args={"sslmode": "require"}, pool_recycle=500
)


# creation of table
def create_db_table():
    print("creating table...")
    SQLModel.metadata.create_all(engine)


@asynccontextmanager
async def life_span(server: FastAPI):
    print("server startup")
    create_db_table()
    yield


# creation of application
todo_app: FastAPI = FastAPI(
    lifespan=life_span,
    title="todo app",
    version="0.0.1",
    servers=[{"url": "http:/0.0.0.0:8000", "description": "Development Server"}],
)


def get_session():
    with Session(engine) as session:
        yield session


# class TodoResponse(BaseModel):
#     message: str
#     todo: Todo


@todo_app.post("/todo/", response_model=Todo)
def get_todos(todo: Todo, session: Annotated[Session, Depends(get_session)]):
    # if todo:
    session.add(todo)
    session.commit()
    session.refresh(todo)
    return todo
    # return TodoResponse(message="todo added successfully", todo=todo)


@todo_app.get("/todo/", response_model=list[Todo])
def raed_todos(session: Annotated[Session, Depends(get_session)]):
    todos = session.exec(select(Todo)).all()
    return todos


@todo_app.get("/")
def hello():
    return {"Hello": "World"}


@todo_app.get("/db")
def db_url():
    return {"DB": settings.DATABASE_URL, "connection_string": connection_string}
