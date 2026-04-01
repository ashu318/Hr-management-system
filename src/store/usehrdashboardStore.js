import { create } from "zustand";
import { toast } from "react-hot-toast";

export const usehrdashboardStore = create((set, get) => ({
    dashboard: null,
    cardsinfo: null, // ✅ NEW
    birthdayinfo: [],
    anniversaryinfo: [],
    loading: false,
    error: null,
    hasFetched: false,

    fetchDashboard: async () => {
        if (get().hasFetched) return;

        try {
            set({ loading: true, error: null });

            const res = await fetch("/api/dashboard/hr");

            if (!res.ok) throw new Error("Failed to fetch dashboard");

            const data = await res.json();

            if (!data.success) throw new Error(data.message);

            set({
                dashboard: data,
                cardsinfo: data.cardsinfo, // ✅ IMPORTANT
                birthdayinfo: data.birthdayinfo || [],
                anniversaryinfo: data.anniversaryinfo || [],
                loading: false,
                hasFetched: true,
            });

        } catch (error) {
            console.error(error);
            set({ loading: false, error: error.message });
            toast.error("Failed to load dashboard");
        }
    },
}));