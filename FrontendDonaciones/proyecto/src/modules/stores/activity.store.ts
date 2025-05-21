import { create } from "zustand";
import { axiosClient } from "../services/axios.service";

interface Activity {
    objetivo: string;
}

type Store = {
    activity: Activity | null;
    createActivity: (objetivo: string) => void;
};

export const useActivityStore = create<Store>()((set) => ({
    activity: null,
    createActivity: async (objetivo: string) => {
        try {
            const { data } = await axiosClient.post<Activity>("/activity", { objetivo });
            set({
                activity: data,
            });
            console.log(data); 
        } catch (e) {
            console.log(e);
        }
    },
}));
