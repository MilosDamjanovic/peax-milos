export const MOCK_ACCOUNTS: Account[] = [
  {
    id: 1,
    name: "John Doe",
    createdAt: new Date("2023-01-15T08:00:00Z"),
    avatarUrl: "https://example.com/avatar1.png",
    status: "ACTIVE"
  },
  {
    id: 2,
    name: "Alice Smith",
    createdAt: new Date("2023-02-20T10:30:00Z"),
    avatarUrl: "https://example.com/avatar2.png",
    status: "DEACTIVATED"
  },
  {
    id: 3,
    name: "Bob Johnson",
    createdAt: new Date("2023-03-25T12:45:00Z"),
    avatarUrl: "https://example.com/avatar3.png",
    status: "INCOMPLETE"
  },
];

export const accountSingle: Account =   {
  id: 4,
  name: "Michael Jordan",
  createdAt: new Date("2023-03-25T12:45:00Z"),
  avatarUrl: "https://example.com/avatar4.png",
  status: "ACTIVE"
};
