FROM python:3.11-slim
WORKDIR /app
COPY pyproject.toml pyproject.lock ./
RUN pip install poetry && poetry config virtualenvs.create false && poetry install --no-dev
COPY . .
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]