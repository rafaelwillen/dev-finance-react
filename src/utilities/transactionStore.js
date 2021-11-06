const STORAGE_KEY = "transactions";

const transactionStore = {
  set(transactions) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  },
  getAll() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  },
};

export { transactionStore };
