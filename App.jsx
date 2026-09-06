import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #111827 0%, #312e81 50%, #7c3aed 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>VIRA</h1>

        <p style={{ fontSize: "20px", opacity: 0.9 }}>
          Fotoğraflarını Instagram Reels videolarına dönüştür.
        </p>

        <div
          style={{
            marginTop: "40px",
            padding: "40px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <h2>Fotoğrafını yükle</h2>

          <p style={{ opacity: 0.8 }}>
            Fotoğrafını seç, VIRA ile profesyonel içerik oluşturmaya başla.
          </p>

          <label
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "14px 28px",
              borderRadius: "14px",
              background: "white",
              color: "#312e81",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            📸 Fotoğraf Seç
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              style={{ display: "none" }}
            />
          </label>

          {image && (
            <div style={{ marginTop: "30px" }}>
              <img
                src={image}
                alt="VIRA önizleme"
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  borderRadius: "18px",
                  objectFit: "contain",
                }}
              />

              <p style={{ marginTop: "15px" }}>
                Fotoğraf başarıyla yüklendi. 🎬
              </p>
            </div>
          )}
        </div>

        <p style={{ marginTop: "35px", opacity: 0.65 }}>
          VIRA • Instagram Reels Video Oluşturucu
        </p>
      </div>
    </div>
  );
}
