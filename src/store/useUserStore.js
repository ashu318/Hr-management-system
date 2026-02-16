import { create } from "zustand";

export const useUserStore = create((set, get) => ({
    user: null,
    loading: false,
    hasFetched: false, // 🔥 prevents multiple calls

    fetchUser: async () => {
        if (get().hasFetched) return; // 🧠 stop duplicate fetch

        set({ loading: true });

        try {
            const res = await fetch("/api/auth/my-profile");

            if (!res.ok) throw new Error("Failed to fetch");

            const data = await res.json();

            set({
                user: data.user,
                loading: false,
                hasFetched: true,
            });
        } catch (error) {
            set({ loading: false });
        }
    },

    clearUser: () =>
        set({
            user: null,
            hasFetched: false,
        }),
}));