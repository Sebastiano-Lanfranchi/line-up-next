import create from "zustand";
import { devtools, persist } from 'zustand/middleware'

const useStore = create<any>()(
    devtools(
      persist((set) => ({
        mode: '',
        color: '',
        setMode: (mode: any) => set({mode}),
        setColor: (color: any) => set({color}),
      }))
    )
)

export default useStore;