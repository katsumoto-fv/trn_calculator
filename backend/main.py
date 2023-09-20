from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORSミドルウェアを有効化して、異なるポートからのリクエストを許可
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ReactアプリケーションのURLに合わせて変更
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CalculationRequest(BaseModel):
    x: float
    y: float
    operator: str

@app.post("/calculate/")
async def calculate(request: CalculationRequest):
    x = request.x
    y = request.y
    operator = request.operator

    if operator == "+":
        result = x + y
    elif operator == "-":
        result = x - y
    elif operator == "*":
        result = x * y
    elif operator == "/":
        if y == 0:
            return {"error": "ゼロで割ることはできません"}
        result = x / y
    else:
        return {"error": "無効な演算子"}

    return {"result": result}
