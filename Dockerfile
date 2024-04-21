# Use an official Python runtime as a parent image
FROM python:3.9

LABEL maintainer="hashmi633@gmail.com"
# Set the working directory in the container
WORKDIR /code
# Install system dependencies required for potential Python packages
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
# RUN pip install poetry

# Copy the current directory contents into the container at /code
COPY . /code/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Configuration to avoid creating virtual environments inside the Docker container
# RUN poetry config virtualenvs.create false

# Install dependencies including development ones
# RUN poetry install

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV DATABASE_URL postgresql://CRM-DATABASE_owner:PjAbJ7SiYH4r@ep-bold-water-a2xc97cm-pooler.eu-central-1.aws.neon.tech/todo-server?sslmode=require

# Run the app. CMD can be overridden when starting the container
CMD ["uvicorn", "app.main:todo_server", "--host", "0.0.0.0", "--port", "8080"]
