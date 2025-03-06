import { create } from "zustand";

// URL - https://api.jsonbin.io/v3/b/67c6bb08ad19ca34f8163bc4
const API_URL = "https://api.jsonbin.io/v3/b/67c6bb08ad19ca34f8163bc4";
const useOfficeDetails = create((set) => ({
  isLoading: false,
  error: null,
  officeDetails: [],
  storeOfficeDetails: (list) => {
    set((prevState) => ({ ...prevState, officeDetails: list }));
  },
  getOfficeDetails: async () => {
    set(() => ({ isLoading: true, error: null }));
    try {
      const data = await fetch(API_URL);
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      const details = await data.json();
      if (details?.record) {
        set(() => ({
          officeDetails: details?.record,
          error: null,
          isLoading: false,
        }));
      }
    } catch (err) {
      set((prevState) => ({
        ...prevState,
        error: err.message || "something went wrong...",
        isLoading: false,
      }));
    }
  },
}));

export default useOfficeDetails;
