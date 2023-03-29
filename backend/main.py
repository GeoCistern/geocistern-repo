import re
from typing import List, Optional
from fastapi import FastAPI
from pydantic import BaseModel
import csv

app = FastAPI()


class Text(BaseModel):
    authorID: str
    authorNameOriginal: str
    authorNameTranslit: str
    titleID: str
    titleOriginal: str
    titleTranslit: str
    language: str
    genre: str
    textType: str
    date: str
    originalLocation: str
    publisher: str
    script: str
    pageCount: str
    dimensions: str
    additionalInfo: str
    specificEditionBibliography: str
    contentLocation: str
    generalBibliography: str
    notes: str
    normalizedDate: int


DB: List[Text] = []


def normalizeDate(date: str):
    if "[Not Provided]" in date:
        return -1
    else:
        if "AH" in date:
            return int(re.findall(r'[\d.]+', date)[0])
        elif "CE" in date:
            return round((int(re.findall(r'[\d.]+', date)[0]) - 622) * 1.03)
        else:
            return -1


def parseLineToText(line):
    return Text(authorID=line[0], authorNameOriginal=line[1], authorNameTranslit=line[2], titleID=line[3], titleOriginal=line[5],
                titleTranslit=line[6], language=line[7], genre=line[8], textType=line[9], date=line[10], originalLocation=line[11],
                publisher=line[12], script=line[13], pageCount=line[14], dimensions=line[15], additionalInfo=line[16],
                specificEditionBibliography=line[17], contentLocation=line[18], generalBibliography=line[19], notes=line[20], normalizedDate=normalizeDate(line[10]))


with open('./Database.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    for i, row in enumerate(reader):
        if i != 0:
            DB.append(parseLineToText(row))


@app.get("/api")
def read_root():
    return DB

# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Optional[str] = None):
#     return { "item_id": item_id, "q": q}
