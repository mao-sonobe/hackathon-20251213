import React, { useState } from 'react';
import './App.css';

function App() {
  // バックエンドからデータが来るまでは、この「ダミーデータ」で画面を作ります
  const [songs, setSongs] = useState([
    { id: 1, title: 'Pretender', artist: 'Official髭男dism', sharedBy: 'Taro', distance: '10m' },
    { id: 2, title: 'アイドル', artist: 'YOASOBI', sharedBy: 'Hanako', distance: '50m' },
    { id: 3, title: '怪獣の花唄', artist: 'Vaundy', sharedBy: 'Jiro', distance: '120m' },
  ]);

  return (
    <div className="App" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      {/* スマホアプリっぽく、幅を狭めて中央寄せにしています */}
      
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #eee' }}>
        <h1>Music Radar 📡</h1>
        <p>近くで聴かれている曲: {songs.length}曲</p>
      </header>

      <main>
        {songs.map((song) => (
          <div key={song.id} style={styles.card}>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{song.title}</h3>
              <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>{song.artist}</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#888' }}>
                Shared by {song.sharedBy} • {song.distance}
              </p>
            </div>
            <button style={styles.playButton}>▶</button>
          </div>
        ))}
      </main>

      {/* 画面下部に固定されたシェアボタン */}
     <div style={styles.floatingButtonArea}>
        {/* onClickイベントを追加し、setSongsを使って新しい曲をリストに追加します */}
        <button 
          style={styles.mainButton}
          onClick={() => {
            const newSong = { 
              id: songs.length + 1, 
              title: '新しい曲', 
              artist: 'New Artist', 
              sharedBy: 'Me', 
              distance: '0m' 
            };
            // 既存のsongs配列を展開し、新しい曲を末尾に加える
            setSongs([...songs, newSong]);
          }}
        >
           + シェアする
        </button>
      </div>
    </div>
  );
}

// 簡単なスタイル定義（CSSファイルに書いてもOK）
const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f9f9f9',
    padding: '15px',
    borderRadius: '12px',
    marginBottom: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  },
  playButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    background: '#333',
    color: 'white',
    cursor: 'pointer',
    marginLeft: '10px'
  },
  floatingButtonArea: {
    position: 'fixed',
    bottom: '30px',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'center'
  },
  mainButton: {
    padding: '12px 30px',
    borderRadius: '25px',
    border: 'none',
    background: '#007bff',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0,123,255,0.3)',
    cursor: 'pointer'
  }
};

export default App;