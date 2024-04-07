from fastapi.security import OAuth2PasswordBearer
from fastapi import FastAPI, Depends
from typing import Annotated
from pydantic import BaseModel


app = FastAPI(title="JWT Authentication")


oauth2_schema = OAuth2PasswordBearer(tokenUrl="token")


class User(BaseModel):
    username: str
    email: str | None = None
    full_name: str | None = None
    disabled: bool | None = None


def fake_decode_token(token):
    return User(
        username=token + "fakedecoded", email="john@example.com", full_name="John Doe"
    )


async def get_current_user(token: Annotated[str, Depends(oauth2_schema)]):
    user = fake_decode_token(token)
    return user


@app.get("/user/me")
def get_user_items(current_user: Annotated[str, Depends(get_current_user)]):
    return current_user


@app.get("/")
def get_root():
    return {"Message": "Hello World"}
