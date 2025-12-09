interface User {
  email: string;
  subscriptionStatus: 'none' | 'active' | 'cancelled';
  subscriptionPlan?: string;
  subscriptionId?: string;
  walletAddress?: string;
}

const users = new Map<string, User>();

export const db = {
  getUser(email: string): User | undefined {
    return users.get(email);
  },

  createOrUpdateUser(email: string, data: Partial<User>): User {
    const existing = users.get(email) || { 
      email, 
      subscriptionStatus: 'none' 
    };
    const updated = { ...existing, ...data };
    users.set(email, updated);
    return updated;
  },

  getAllUsers(): User[] {
    return Array.from(users.values());
  }
};