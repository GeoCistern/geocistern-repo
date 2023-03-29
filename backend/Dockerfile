FROM python:3.8
WORKDIR /api
COPY ./requirements.txt /api/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /api/requirements.txt
COPY . /api
COPY Database.csv/ ./Database.csv
CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000" ]