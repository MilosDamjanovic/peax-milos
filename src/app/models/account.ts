export interface Account {
  id: number;
  name: string;
  createdAt: string;
  avatarUrl: string;
  status: 'INCOMPLETE'| 'ACTIVE'| 'DEACTIVATED'| 'DELETED';
}

