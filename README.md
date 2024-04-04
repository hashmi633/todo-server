1. `poetry add fastapi uvicorn`
1. to run server `poetry run uvicorn app.main:todo_app --reload --port=8000`
2. `poetry add sqlmodel`
3. `poetry add "psycopg[binary]"` 

# Code
1. Creation of object of the application
2. creation of base routes
2. database schema
3. connection to the database
    * connection string using database url
4. creation of table when application startup (using contextlib)
5. insert data in database
6. 