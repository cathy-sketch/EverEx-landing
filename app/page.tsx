import Link from "next/link";
import { getPosts } from "@/lib/store";

export const dynamic = "force-dynamic";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export default function HomePage() {
  const posts = getPosts();

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
        <div style={{
          maxWidth: "1584px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* IBM logo area */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <svg viewBox="0 0 32 32" width="20" height="20" fill="white" aria-label="IBM logo">
              <path d="M0 24.772h32v1.783H0zm0-4.454h32v1.786H0zm4.456-4.455h23.091v1.786H4.456zm0-4.455h23.091v1.783H4.456zM0 7.454h32v1.783H0zm0-4.457h32v1.786H0z" />
            </svg>
            <span style={{
              color: "#ffffff",
              fontSize: "0.875rem",
              fontWeight: 400,
              letterSpacing: "0.1px",
            }}>
              자유 게시판
            </span>
          </div>

          {/* Write button */}
          <Link
            href="/posts/new"
            className="carbon-btn-primary"
          >
            글쓰기
          </Link>
        </div>
      </header>

      {/* Page title bar (Carbon "page header") */}
      <div style={{
        backgroundColor: "var(--cds-layer-02)",
        borderBottom: "1px solid var(--cds-border-subtle)",
        padding: "2rem 1rem 1.5rem",
      }}>
        <div style={{ maxWidth: "1584px", margin: "0 auto" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--cds-text-secondary)",
            marginBottom: "0.5rem",
            letterSpacing: "0.32px",
          }}>
            게시판
          </p>
          <h1 style={{
            fontSize: "2rem",
            fontWeight: 300,
            color: "var(--cds-text-primary)",
            letterSpacing: 0,
            lineHeight: 1.25,
          }}>
            자유 게시판
          </h1>
        </div>
      </div>

      {/* Main content */}
      <main style={{ maxWidth: "1584px", margin: "0 auto", padding: "0 1rem 4rem" }}>

        {/* Toolbar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 0",
          borderBottom: "1px solid var(--cds-border-subtle)",
          marginBottom: "0",
        }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--cds-text-secondary)",
            letterSpacing: "0.32px",
          }}>
            {posts.length}개의 항목
          </p>
        </div>

        {/* Data Table */}
        {posts.length === 0 ? (
          <div style={{
            backgroundColor: "var(--cds-layer-02)",
            border: "1px solid var(--cds-border-subtle)",
            borderTop: "none",
            padding: "5rem 1rem",
            textAlign: "center",
            color: "var(--cds-text-secondary)",
          }}>
            <p style={{ fontSize: "1.125rem", fontWeight: 400, marginBottom: "1rem" }}>
              게시글이 없습니다
            </p>
            <Link href="/posts/new" style={{
              color: "var(--cds-link-primary)",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}>
              첫 번째 글을 작성해 보세요 →
            </Link>
          </div>
        ) : (
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "var(--cds-layer-02)",
          }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--cds-border-strong)" }}>
                {["번호", "제목", "작성자", "작성일", "조회"].map((h, i) => (
                  <th key={h} style={{
                    padding: "0.875rem 1rem",
                    textAlign: i === 0 || i >= 2 ? "center" : "left",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--cds-text-primary)",
                    letterSpacing: "0.16px",
                    whiteSpace: "nowrap",
                    borderBottom: "1px solid var(--cds-border-subtle)",
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr
                  key={post.id}
                  style={{ borderBottom: "1px solid var(--cds-border-subtle)" }}
                  className="carbon-table-row"
                >
                  <td style={{
                    padding: "0.875rem 1rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    color: "var(--cds-text-secondary)",
                  }}>
                    {posts.length - index}
                  </td>
                  <td style={{ padding: "0.875rem 1rem" }}>
                    <Link
                      href={`/posts/${post.id}`}
                      style={{
                        color: "var(--cds-text-primary)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        display: "block",
                      }}
                      className="carbon-link"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td style={{
                    padding: "0.875rem 1rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    color: "var(--cds-text-secondary)",
                  }}>
                    {post.author}
                  </td>
                  <td style={{
                    padding: "0.875rem 1rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    color: "var(--cds-text-secondary)",
                    whiteSpace: "nowrap",
                  }}>
                    {formatDate(post.createdAt)}
                  </td>
                  <td style={{
                    padding: "0.875rem 1rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    color: "var(--cds-text-secondary)",
                  }}>
                    {post.views}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>

      <style>{`
        .carbon-btn-primary {
          background-color: var(--cds-button-primary);
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 400;
          padding: 0 1rem;
          height: 3rem;
          display: flex;
          align-items: center;
          text-decoration: none;
          letter-spacing: 0.16px;
          transition: background-color 70ms cubic-bezier(0,0,.38,.9);
        }
        .carbon-btn-primary:hover {
          background-color: var(--cds-button-primary-hover);
        }
        .carbon-table-row:hover {
          background-color: var(--cds-layer-hover) !important;
          cursor: pointer;
        }
        .carbon-link:hover {
          color: var(--cds-link-primary) !important;
          text-decoration: underline !important;
        }
      `}</style>
    </div>
  );
}
