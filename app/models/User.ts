export interface User {
  id: string;
  username: string;
  password: string;
}

// 這只是一個模擬的用戶數據庫，實際應用中應該使用真實的數據庫
export const users: User[] = [
  {
    id: '1',
    username: 'test@example.com',
    // 這是 "password" 的哈希值
    password: '$2a$10$8Ux.TkCGgGGT/BxVjuXX8.X5zZ1zB3q9qTr0z9K3GPoFvZYX5Xfxu'
  }
];

