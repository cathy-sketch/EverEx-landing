"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewPostPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", author: "", content: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ title: true, author: true, content: true });

    if (!form.title.trim() || !form.author.trim() || !form.content.trim()) {
      setError("필수 항목을 모두 입력해주세요.");
      return;
    }
    setSubmitting(true);
    setError("");

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const post = await res.json();
      router.push(`/posts/${post.id}`);
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "오류가 발생했습니다.");
      setSubmitting(false);
    }
  }

  const fieldError = (field: keyof typeof form) =>
    touched[field] && !form[field].trim();

  const inputStyle = (field: keyof typeof form): React.CSSProperties => ({
    width: "100%",
    padding: "0.6875rem 1rem",
    border: "none",
    borderBottom: `2px solid ${fieldError(field) ? "var(--cds-support-error)" : "var(--cds-border-strong)"}`,
    borderRadius: 0,
    backgroundColor: "var(--cds-layer-01)",
    color: "var(--cds-text-primary)",
    fontSize: "0.875rem",
    fontFamily: "var(--cds-font-family)",
    outline: "none",
    lineHeight: 1.5,
    transition: "border-color 70ms cubic-bezier(0,0,.38,.9)",
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--cds-layer-01)" }}>

      {/* Carbon Global Header */}
      <header style={{
        backgroundColor: "#161616",
        borderBottom: "1px solid #393939",
        height: "3rem",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}>
        <div style={{ maxWidth: "1584px", width: "100%", margin: "0 auto", display: "flex", alignItems: "center" }}>
          <svg viewBox="0 0 32 32" width="20" height="20" fill="white" style={{ marginRight: "1rem" }}>
            <path d="M0 24.772h32v1.783H0zm0-4.454h32v1.786H0zm4.456-4.455h23.091v1.786H4.456zm0-4.455h23.091v1.783H4.456zM0 7.454h32v1.783H0zm0-4.457h32v1.786H0z" />
          </svg>
          <Link href="/" style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 400, textDecoration: "none" }}>
            자유 게시판
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div style={{
        backgroundColor: "var(--cds-layer-02)",
        borderBottom: "1px solid var(--cds-border-subtle)",
        padding: "0.75rem 1rem",
      }}>
        <div style={{ maxWidth: "1584px", margin: "0 auto", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--cds-text-secondary)" }}>
          <Link href="/" style={{ color: "var(--cds-link-primary)", textDecoration: "none" }}>게시판</Link>
          <span>/</span>
          <span>새 글 작성</span>
        </div>
      </div>

      {/* Page title */}
      <div style={{
        backgroundColor: "var(--cds-layer-02)",
        borderBottom: "1px solid var(--cds-border-subtle)",
        padding: "2rem 1rem 1.5rem",
      }}>
        <div style={{ maxWidth: "1584px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--cds-text-secondary)", marginBottom: "0.5rem", letterSpacing: "0.32px" }}>
            게시판
          </p>
          <h1 style={{ fontSize: "2rem", fontWeight: 300, color: "var(--cds-text-primary)", lineHeight: 1.25 }}>
            새 글 작성
          </h1>
        </div>
      </div>

      <main style={{ maxWidth: "1584px", margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ maxWidth: "40rem" }}>

          {/* Error notification (Carbon inline notification) */}
          {error && (
            <div style={{
              backgroundColor: "#fff1f1",
              borderLeft: "4px solid var(--cds-support-error)",
              padding: "0.875rem 1rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}>
              <span style={{ color: "var(--cds-support-error)", fontWeight: 600, marginTop: "1px" }}>⚠</span>
              <p style={{ fontSize: "0.875rem", color: "var(--cds-text-primary)" }}>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Author field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "var(--cds-text-secondary)",
                marginBottom: "0.5rem",
                letterSpacing: "0.32px",
              }}>
                작성자 <span style={{ color: "var(--cds-support-error)" }}>*</span>
              </label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                onBlur={() => setTouched({ ...touched, author: true })}
                onFocus={(e) => {
                  e.currentTarget.style.borderBottom = "2px solid var(--cds-border-interactive)";
                  e.currentTarget.style.outline = "2px solid var(--cds-focus)";
                  e.currentTarget.style.outlineOffset = "-2px";
                }}
                onBlurCapture={(e) => {
                  e.currentTarget.style.outline = "none";
                  e.currentTarget.style.borderBottom = `2px solid ${fieldError("author") ? "var(--cds-support-error)" : "var(--cds-border-strong)"}`;
                }}
                placeholder="이름을 입력하세요"
                maxLength={20}
                style={{ ...inputStyle("author"), maxWidth: "20rem" }}
              />
              {fieldError("author") && (
                <p style={{ fontSize: "0.75rem", color: "var(--cds-support-error)", marginTop: "0.25rem" }}>
                  작성자를 입력해주세요.
                </p>
              )}
            </div>

            {/* Title field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "var(--cds-text-secondary)",
                marginBottom: "0.5rem",
                letterSpacing: "0.32px",
              }}>
                제목 <span style={{ color: "var(--cds-support-error)" }}>*</span>
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                onBlur={() => setTouched({ ...touched, title: true })}
                onFocus={(e) => {
                  e.currentTarget.style.borderBottom = "2px solid var(--cds-border-interactive)";
                  e.currentTarget.style.outline = "2px solid var(--cds-focus)";
                  e.currentTarget.style.outlineOffset = "-2px";
                }}
                onBlurCapture={(e) => {
                  e.currentTarget.style.outline = "none";
                  e.currentTarget.style.borderBottom = `2px solid ${fieldError("title") ? "var(--cds-support-error)" : "var(--cds-border-strong)"}`;
                }}
                placeholder="제목을 입력하세요"
                maxLength={100}
                style={inputStyle("title")}
              />
              {fieldError("title") && (
                <p style={{ fontSize: "0.75rem", color: "var(--cds-support-error)", marginTop: "0.25rem" }}>
                  제목을 입력해주세요.
                </p>
              )}
            </div>

            {/* Content field */}
            <div style={{ marginBottom: "2rem" }}>
              <label style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "var(--cds-text-secondary)",
                marginBottom: "0.5rem",
                letterSpacing: "0.32px",
              }}>
                내용 <span style={{ color: "var(--cds-support-error)" }}>*</span>
              </label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                onBlur={() => setTouched({ ...touched, content: true })}
                onFocus={(e) => {
                  e.currentTarget.style.borderBottom = "2px solid var(--cds-border-interactive)";
                  e.currentTarget.style.outline = "2px solid var(--cds-focus)";
                  e.currentTarget.style.outlineOffset = "-2px";
                }}
                onBlurCapture={(e) => {
                  e.currentTarget.style.outline = "none";
                  e.currentTarget.style.borderBottom = `2px solid ${fieldError("content") ? "var(--cds-support-error)" : "var(--cds-border-strong)"}`;
                }}
                placeholder="내용을 입력하세요"
                rows={12}
                style={{
                  ...inputStyle("content"),
                  resize: "vertical",
                  fontFamily: "var(--cds-font-family)",
                  lineHeight: 1.5,
                }}
              />
              {fieldError("content") && (
                <p style={{ fontSize: "0.75rem", color: "var(--cds-support-error)", marginTop: "0.25rem" }}>
                  내용을 입력해주세요.
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: 0 }}>
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "3rem",
                  padding: "0 1.5rem",
                  backgroundColor: "var(--cds-layer-02)",
                  border: "1px solid var(--cds-border-strong)",
                  color: "var(--cds-text-primary)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  letterSpacing: "0.16px",
                }}
              >
                취소
              </Link>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  height: "3rem",
                  padding: "0 1.5rem",
                  backgroundColor: submitting ? "#8d8d8d" : "var(--cds-button-primary)",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "0.16px",
                  cursor: submitting ? "not-allowed" : "pointer",
                  fontFamily: "var(--cds-font-family)",
                }}
              >
                {submitting ? "등록 중..." : "등록하기"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
