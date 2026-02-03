const HISTORY_KEY = 'calc_history';

export type HistoryItem = {
    id: string;
    date: string;
    type: 'tbm' | 'imc' | 'water' | 'creatine' | 'ideal-weight';
    details: any;
    result: any;
};

export const historyService = {
    add: (item: Omit<HistoryItem, 'id' | 'date'>) => {
        try {
            const history = historyService.list();
            const newItem: HistoryItem = {
                ...item,
                id: crypto.randomUUID(),
                date: new Date().toISOString(),
            };

            const updated = [newItem, ...history].slice(0, 10); // Keep last 10
            localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
            return newItem;
        } catch (e) {
            console.error('Failed to save history', e);
            return null;
        }
    },

    list: (): HistoryItem[] => {
        try {
            const data = localStorage.getItem(HISTORY_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    },

    clear: () => {
        localStorage.removeItem(HISTORY_KEY);
    }
};
