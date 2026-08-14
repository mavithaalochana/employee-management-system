// src/data/dummyData.js

export const dummyProfileData = {
  firstName: "Mavitha",
  lastName: "Alochana",
};

export const dummyAttendanceData = [
  {
    id: 1,
    date: new Date().toISOString(),
    checkIn: new Date(new Date().setHours(9, 5, 0)).toISOString(),
    checkOut: new Date(new Date().setHours(18, 10, 0)).toISOString(),
    status: "PRESENT",
  },
  {
    id: 2,
    date: new Date(Date.now() - 86400000).toISOString(),
    checkIn: new Date(new Date(Date.now() - 86400000).setHours(9, 30, 0)).toISOString(),
    checkOut: new Date(new Date(Date.now() - 86400000).setHours(18, 0, 0)).toISOString(),
    status: "LATE",
  },
  {
    id: 3,
    date: new Date(Date.now() - 2 * 86400000).toISOString(),
    checkIn: new Date(new Date(Date.now() - 2 * 86400000).setHours(9, 0, 0)).toISOString(),
    checkOut: new Date(new Date(Date.now() - 2 * 86400000).setHours(17, 45, 0)).toISOString(),
    status: "PRESENT",
  },
];

export const dummyLeaveData = [
  {
    id: 1,
    type: "SICK",
    startDate: new Date(Date.now() - 5 * 86400000).toISOString(),
    endDate: new Date(Date.now() - 4 * 86400000).toISOString(),
    reason: "Fever and cold",
    status: "APPROVED",
    employee: { firstName: "Mavitha", lastName: "Alochana" },
  },
  {
    id: 2,
    type: "CASUAL",
    startDate: new Date(Date.now() + 2 * 86400000).toISOString(),
    endDate: new Date(Date.now() + 2 * 86400000).toISOString(),
    reason: "Personal work",
    status: "PENDING",
    employee: { firstName: "Mavitha", lastName: "Alochana" },
  },
  {
    id: 3,
    type: "ANNUAL",
    startDate: new Date(Date.now() + 10 * 86400000).toISOString(),
    endDate: new Date(Date.now() + 15 * 86400000).toISOString(),
    reason: "Family vacation",
    status: "REJECTED",
    employee: { firstName: "Mavitha", lastName: "Alochana" },
  },
];