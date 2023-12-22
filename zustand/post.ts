import { create } from 'zustand';

export interface PostStore {
  posts: string[];
  top: string;
  openPost: (path: string) => void;
  closePost: (path: string) => void;
  setPosts: (posts: string[]) => void;
  changeTop: (path: string) => void;
  clear: () => void;
}

const usePost = create<PostStore>((set) => ({
  posts: [],
  top: '',
  openPost: (path: string) =>
    set(({ posts }: PostStore) => {
      if (posts.includes(path)) return { posts, top: path };
      return {
        top: path,
        posts: [...posts, path],
      };
    }),
  closePost: (path: string) =>
    set(({ posts, top }: PostStore) => {
      if (posts.length === 1) return { posts: [], top: '' };
      if (top != path)
        return {
          top,
          posts: [...posts.filter((post) => post != path)],
        };
      else {
        const topIdx = posts.findIndex((post) => post == path);
        const newTop =
          topIdx > 1 || topIdx == posts.length - 1 ? topIdx - 1 : topIdx + 1;
        console.log(topIdx, newTop, posts[newTop]);
        return {
          top: posts[newTop],
          posts: [...posts.filter((post) => post != path)],
        };
      }
    }),
  setPosts: (posts: string[]) => set({ posts }),
  changeTop: (path: string) => set({ top: path }),
  clear: () => set({ posts: [], top: '' }),
}));

export default usePost;
