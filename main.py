from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS設定 (変更なし)
origins = [
    # 以前成功したローカルホストの設定
    "http://localhost:3000",
    "https://localhost:3001",
    # ✅ 今回追加すべき、新しいIPアドレスのオリジン (HTTPS)
    "https://192.168.86.21:3001",  
    "http://192.168.86.21:3001",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn
    # uvicorn.run(app, host="0.0.0.0", port=8000)


# ✅ 追加: ReactがリクエストするAPIエンドポイント
@app.get("/api/data")
async def get_data():
    """ReactフロントエンドにJSONデータを提供するエンドポイント。"""
    return {"message": "Hello from FastAPI Backend!"}

# 起動コードをコメントアウトを解除して実行します
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)