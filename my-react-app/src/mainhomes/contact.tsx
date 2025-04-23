// src/pages/Contact.tsx
import React, { useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";  // ★YOUR_FORM_IDを置き換えてください

const Contact: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });

    setSending(false);
    setSent(true);
  };

  return (
    <main style={styles.fullBleed}>
      <h1 style={styles.pageTitle}>霧島お問い合わせフォーム</h1>

      {/* 送信後メッセージ */}
      {sent ? (
        <p style={styles.thanks}>お問い合わせありがとうございました！</p>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          {/* entry.XXXXX は実際のフォームHTMLを開発者ツールで確認して置き換えてください */}
          <label style={styles.label}>
            お名前<span style={styles.required}>*</span>
            <input
              type="text"
              name="entry.1234567890"
              required
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            企業名・団体名（任意）
            <input
              type="text"
              name="entry.0987654321"
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            お問い合わせ内容<span style={styles.required}>*</span>
            <textarea
              name="entry.1122334455"
              required
              rows={6}
              style={styles.textarea}
            />
          </label>

          <button type="submit" style={styles.button} disabled={sending}>
            {sending ? "送信中…" : "送信する"}
          </button>
        </form>
      )}
    </main>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  fullBleed: {
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    width: "100vw",
    boxSizing: "border-box",
    backgroundColor: "#607d8b",
    marginTop: "60px",
    minHeight: "calc(100vh - 60px)",
    padding: "3rem 1rem",
  },
  pageTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: "2.5rem",
    margin: "0 0 2rem",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1rem",
    color: "#333",
    fontWeight: "bold",
  },
  required: {
    color: "#e91e63",
    marginLeft: "4px",
  },
  input: {
    marginTop: "0.5rem",
    padding: "0.6rem 0.8rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  textarea: {
    marginTop: "0.5rem",
    padding: "0.6rem 0.8rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    resize: "vertical",
  },
  button: {
    marginTop: "1rem",
    padding: "0.8rem",
    fontSize: "1.1rem",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  thanks: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#fff",
  },
};

export default Contact;
