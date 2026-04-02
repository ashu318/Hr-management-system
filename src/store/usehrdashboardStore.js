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

    charts: {
        department: [],
        employmentType: [],
        status: [],
    },
    chartsLoading: false,
    hasFetchedCharts: false,

    //////////////////////
    // Dashboard Cards Data
    //////////////////////
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

    //////////////////////
    // Ananlysis chats Data
    //////////////////////
    fetchCharts: async () => {
        if (get().hasFetchedCharts) return;

        try {
            set({ chartsLoading: true });

            const res = await fetch("/api/dashboard/hr/chats");

            if (!res.ok) throw new Error("Failed to fetch charts");

            const data = await res.json();

            set({
                charts: data,
                chartsLoading: false,
                hasFetchedCharts: true,
            });

        } catch (error) {
            console.error(error);
            set({ chartsLoading: false });
            toast.error("Failed to load charts");
        }
    },


}));