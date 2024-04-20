from fastapi.testclient import TestClient
from app.main import todo_app

client = TestClient(app=todo_app)


def test_fastapi_hello():
    response = client.get("/")
    assert response.json() == {"Hello": "World"}
