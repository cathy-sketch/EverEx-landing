export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  views: number;
}

// In-memory store (resets on server restart)
let posts: Post[] = [
  {
    id: 1,
    title: "Next.js 게시판에 오신 것을 환영합니다!",
    content: "이 게시판은 Next.js App Router와 Tailwind CSS로 만들어졌습니다. 자유롭게 글을 작성해 보세요.",
    author: "관리자",
    createdAt: new Date().toISOString(),
    views: 0,
  },
  {
    id: 2,
    title: "게시판 이용 안내",
    content: "글 작성, 조회, 삭제 기능을 사용할 수 있습니다. 우측 상단의 '글쓰기' 버튼을 눌러 새 글을 작성해 보세요.",
    author: "관리자",
    createdAt: new Date().toISOString(),
    views: 0,
  },
];

let nextId = 3;

export function getPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getPost(id: number): Post | undefined {
  return posts.find((p) => p.id === id);
}

export function createPost(data: Omit<Post, "id" | "createdAt" | "views">): Post {
  const post: Post = {
    ...data,
    id: nextId++,
    createdAt: new Date().toISOString(),
    views: 0,
  };
  posts.push(post);
  return post;
}

export function deletePost(id: number): boolean {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return false;
  posts.splice(index, 1);
  return true;
}

export function incrementViews(id: number): void {
  const post = posts.find((p) => p.id === id);
  if (post) post.views += 1;
}
