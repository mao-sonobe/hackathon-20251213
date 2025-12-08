# 実行手順

## 仮想環境の実装
python -m venv .venv
. .venv/bin/activate
pip install fastapi uvicorn

## main.py(fastAPI)の実行
uvicorn main:app --reload
[Ctrl] + [Z]
bg

## reactの設定
npx create-react-app my-react-app
cd my-react-app
npm install axios
HTTPS=true npm start


# FastAPI

・FastAPIの起動に必要なライブラリをインストール:
pip install fastapi uvicorn
・webサーバーを起動:
uvicorn main:app --reload

## 基本操作
・操作中のFastAPIを閉じ一時停止
[Ctrl] + [Z]
・再開
bg
・開かれているFastAPIを確認する
lsof -i :8000 
・開かれているFastAPIを閉じる
kill -9 [PID]
`lsof -i :8000 | grep python | awk '{print "kill -9 " $2}'`

## 
@app.get("<path>") : GET
@app.post("<path>") : POST
@app.put("<path>") : PUT
@app.delete("<path>") : DELETE


# react

・reactのパッケージをインストール
npx create-react-app my-react-app
・FastAPIとの連携用のライブラリをインストール
npm install axios
・http通信の有効化*今回は使わないcd
npm start
・SSL通信(https通信)の有効化と実行
HTTPS=true npm start

# ngrok
・ngrokをインストール