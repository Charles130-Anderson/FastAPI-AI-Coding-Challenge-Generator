FROM python:3.11-slim

WORKDIR /app

COPY pyproject.toml uv.lock ./

RUN pip install --upgrade pip && \
    pip install poetry && \
    poetry config virtualenvs.create false && \
    poetry install --only main --no-root

COPY . .

CMD ["uv", "server.py"]
