# Steps
1. To create new project `poetry new todo-server --name app`
2. now create main.py in app folder.
3. install fastapi and uvicorn using `poetry add fastapi uvicorn`
4. to run server `poetry run uvicorn app.main:todo_app --reload --port=8000`
5. `poetry add sqlmodel`
6. `poetry add "psycopg[binary]"` 

# Code
1. Creation of object of the application
2. creation of base routes
3. database schema
4. connection to the database
    * connection string using database url
5. creation of table when application startup (using contextlib)
6. insert data in database
 

## Test
1. `poetry add pytest`
2. `poetry add httpx`
