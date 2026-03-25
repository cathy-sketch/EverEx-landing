"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import type { Post } from "@/lib/store";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    fetch(`/api/posts/${params.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then(setPost)
      .catch(() => router.push("/"))
      .finally(() => setLoading(false));
  }, [params.id, router]);

  async function handleDelete() {
    setDeleting(true);
    await fetch(`/api/posts/${params.id}`, { method: "DELETE" });
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "var(--cds-layer-01)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Carbon inline loading skeleton */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "20rem" }}>
          {[80, 60, 100, 70].map((w, i) => (
            <div key={i} style={{
              height: "1rem",
              width: `${w}%`,
              backgroundColor: "#e0e0e0",
              borderRadius: 0,
              animation: "skeleton-pulse 1.5s ease-in-out infinite",
            }} />
          ))}
        </div>
        <style>{`
          @keyframes skeleton-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
      </div>
    );
  }

  if (!post) return null;

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
        <div style={{ maxWidth: "1584px", width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <svg viewBox="0 0 32 32" width="20" height="20" fill="white">
              <path d="M0 24.772h32v1.783H0zm0-4.454h32v1.786H0zm4.456-4.455h23.091v1.786H4.456zm0-4.455h23.091v1.783H4.456zM0 7.454h32v1.783H0zm0-4.457h32v1.786H0z" />
            </svg>
            <Link href="/" style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 400, textDecoration: "none" }}>
              자유 게시판
            </Link>
          </div>
          <Link
            href="/posts/new"
            style={{
              backgroundColor: "var(--cds-button-primary)",
              color: "#ffffff",
              fontSize: "0.875rem",
              fontWeight: 400,
              padding: "0 1rem",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              letterSpacing: "0.16px",
            }}
          >
            글쓰기
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
          <span>게시글</span>
        </div>
      </div>

      <main style={{ maxWidth: "1584px", margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Content area */}
        <div style={{ backgroundColor: "var(--cds-layer-02)", border: "1px solid var(--cds-border-subtle)" }}>

          {/* Post title section */}
          <div style={{
            padding: "2rem",
            borderBottom: "1px solid var(--cds-border-subtle)",
          }}>
            <h2 style={{
              fontSize: "1.75rem",
              fontWeight: 300,
              color: "var(--cds-text-primary)",
              letterSpacing: 0,
              lineHeight: 1.286,
              marginBottom: "1.5rem",
            }}>
              {post.title}
            </h2>

            {/* Metadata tags */}
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[
                { label: "작성자", value: post.author },
                { label: "작성일", value: formatDate(post.createdAt) },
                { label: "조회수", value: `${post.views}회` },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontSize: "0.75rem", color: "var(--cds-text-secondary)", marginBottom: "0.25rem", letterSpacing: "0.32px" }}>{label}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--cds-text-primary)", fontWeight: 400 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Post content */}
          <div style={{ padding: "2rem", minHeight: "12rem" }}>
            <p style={{
              fontSize: "1rem",
              lineHeight: 1.5,
              color: "var(--cds-text-primary)",
              whiteSpace: "pre-wrap",
              fontWeight: 300,
            }}>
              {post.content}
            </p>
          </div>

          {/* Action bar */}
          <div style={{
            padding: "1rem 2rem",
            borderTop: "1px solid var(--cds-border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Link
              href="/"
              style={{
                fontSize: "0.875rem",
                color: "var(--cds-link-primary)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              ← 목록으로
            </Link>

            <button
              onClick={() => setConfirmOpen(true)}
              style={{
                backgroundColor: "var(--cds-button-danger)",
                color: "#ffffff",
                border: "none",
                fontSize: "0.875rem",
                fontWeight: 400,
                padding: "0 1rem",
                height: "2.5rem",
                cursor: "pointer",
                letterSpacing: "0.16px",
              }}
            >
              삭제
            </button>
          </div>
        </div>
      </main>

      {/* Carbon-style Danger Modal */}
      {confirmOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(22, 22, 22, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9000,
        }}>
          <div style={{
            backgroundColor: "var(--cds-layer-02)",
            width: "100%",
            maxWidth: "28rem",
            boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
          }}>
            <div style={{ padding: "1.5rem 1.5rem 1rem" }}>
              {/* Danger icon */}
              <div style={{
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "var(--cds-support-error)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}>
                <span style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 600 }}>!</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 400, color: "var(--cds-text-primary)", marginBottom: "0.75rem" }}>
                게시글을 삭제하시겠습니까?
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--cds-text-secondary)", lineHeight: 1.5 }}>
                이 작업은 되돌릴 수 없습니다. 삭제된 게시글은 복구할 수 없습니다.
              </p>
            </div>
            <div style={{ display: "flex", borderTop: "1px solid var(--cds-border-subtle)" }}>
              <button
                onClick={() => setConfirmOpen(false)}
                style={{
                  flex: 1,
                  padding: "1rem",
                  backgroundColor: "var(--cds-layer-01)",
                  border: "none",
                  fontSize: "0.875rem",
                  color: "var(--cds-text-primary)",
                  cursor: "pointer",
                  borderRight: "1px solid var(--cds-border-subtle)",
                }}
              >
                취소
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                style={{
                  flex: 1,
                  padding: "1rem",
                  backgroundColor: "var(--cds-button-danger)",
                  border: "none",
                  fontSize: "0.875rem",
                  color: "#ffffff",
                  cursor: deleting ? "not-allowed" : "pointer",
                  opacity: deleting ? 0.5 : 1,
                }}
              >
                {deleting ? "삭제 중..." : "삭제 확인"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
