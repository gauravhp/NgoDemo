import {
  CheckCircle2,
  Circle,
  Clock,
  Baby,
  Calendar,
  Stethoscope,
  BookOpen,
  AlertTriangle,
  Info,
  ShieldCheck,
  Zap,
  Activity,
  Server,
  Database
} from 'lucide-react';

export interface DonorProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  totalDonated: number;
  impactScore: number;
  recurringDonation: {
    amount: number;
    frequency: 'monthly' | 'yearly';
    nextDate: string;
  };
  recentDonations: {
    id: string;
    amount: number;
    date: string;
    project: string;
    status: 'completed' | 'pending';
  }[];
}

export interface MotherProfile {
  id: string;
  name: string;
  stage: string;
  dueDate: string;
  avatar: string;
  assignedDoula: string;
  location: string;
  bio: string;
  healthStats: {
    weight: string;
    bloodPressure: string;
    heartRate: string;
  };
  recentSupport?: {
    id: string;
    item: string;
    date: string;
    type: 'product' | 'course' | 'medical';
  }[];
  upcomingAppointments: {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
  }[];
}

export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: any;
}

export interface SystemAlert {
  id: string;
  type: 'urgent' | 'warning' | 'success' | 'info';
  message: string;
  timestamp: string;
  source: string;
}

export interface UserStatus {
  id: string;
  name: string;
  role: 'donor' | 'mother' | 'admin' | 'doula';
  status: 'active' | 'pending' | 'suspended';
  lastActive: string;
}

export interface AdminStats {
  overview: {
    activeUsers: number;
    totalDonations: number;
    mothersSupported: number;
    systemUptime: string;
    cpuLoad: string;
    memoryUsage: string;
  };
  charts: {
    donationsByMonth: { month: string; amount: number }[];
    userGrowth: { month: string; users: number }[];
  };
  pendingApprovals: {
    id: string;
    type: 'donor' | 'mother' | 'resource';
    name: string;
    requestDate: string;
  }[];
  alerts: SystemAlert[];
  userStatuses: UserStatus[];
}

export const mockDonorProfile: DonorProfile = {
  id: 'D-001',
  name: 'Alex Thompson',
  email: 'alex.thompson@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  joinDate: '2025-01-15',
  totalDonated: 12450.00,
  impactScore: 85,
  recurringDonation: {
    amount: 250,
    frequency: 'monthly',
    nextDate: '2026-05-01',
  },
  recentDonations: [
    { id: 'TX-101', amount: 250, date: '2026-04-12', project: 'Nurture Together', status: 'completed' },
    { id: 'TX-102', amount: 100, date: '2026-04-05', project: 'Emergency Fund', status: 'completed' },
    { id: 'TX-103', amount: 500, date: '2026-03-22', project: 'Rural Health Clinic', status: 'completed' },
  ],
};

export const impactData = [
  { month: 'Nov', score: 45 },
  { month: 'Dec', score: 52 },
  { month: 'Jan', score: 48 },
  { month: 'Feb', score: 70 },
  { month: 'Mar', score: 78 },
  { month: 'Apr', score: 85 },
];

export const adoptAMomProfile: MotherProfile = {
  id: 'M-002',
  name: 'Elena Rodriguez',
  stage: '3rd Trimester (Week 32)',
  dueDate: '2026-06-12',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
  assignedDoula: 'Sarah Miller',
  location: 'East Side Community',
  bio: 'Elena is expecting her first child and is currently working part-time while preparing for her new arrival. She is part of our local nutrition and wellness program.',
  healthStats: {
    weight: '162 lbs',
    bloodPressure: '115/75',
    heartRate: '78 bpm',
  },
  recentSupport: [
    { id: 'SUP-01', item: 'Newborn Diapers (Size 1)', date: 'April 12', type: 'product' },
    { id: 'SUP-02', item: 'Infant CPR & Safety Course', date: 'April 15', type: 'course' },
    { id: 'SUP-03', item: 'Prenatal Vitamins (30 Day)', date: 'April 18', type: 'product' },
  ],
  upcomingAppointments: [
    { id: 'APT-101', title: 'Bi-weekly Checkup', date: '2026-04-22', time: '09:00 AM', location: 'Community Clinic' },
  ],
};

export const mockMotherProfile: MotherProfile = {
  id: 'M-001',
  name: 'Sarah Jenkins',
  stage: '2nd Trimester (Week 14)',
  dueDate: '2026-10-15',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  assignedDoula: 'Maria Garcia',
  location: 'North District',
  bio: 'Sarah is a second-time mother looking to connect with other moms in her area.',
  healthStats: {
    weight: '145 lbs',
    bloodPressure: '110/70',
    heartRate: '72 bpm',
  },
  upcomingAppointments: [
    { id: 'APT-001', title: 'Regular Ultrasound', date: '2026-04-25', time: '10:30 AM', location: 'City General Hospital' },
    { id: 'APT-002', title: 'Nutritional Consultation', date: '2026-05-02', time: '2:00 PM', location: 'Telehealth Call' },
  ],
};

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'First Trimester Screening',
    date: 'March 15, 2026',
    description: 'Initial health checkup and ultrasound completed.',
    status: 'completed',
    icon: Stethoscope,
  },
  {
    id: '2',
    title: 'Nutrition Workshop',
    date: 'April 10, 2026',
    description: 'Learn about healthy eating for you and your baby.',
    status: 'completed',
    icon: BookOpen,
  },
  {
    id: '3',
    title: 'Week 14 Checkup',
    date: 'Today',
    description: 'Regular monthly checkup with your assigned doula.',
    status: 'current',
    icon: Clock,
  },
  {
    id: '4',
    title: 'Anatomy Ultrasound',
    date: 'May 20, 2026',
    description: 'Detailed scan to monitor baby development.',
    status: 'upcoming',
    icon: Baby,
  },
  {
    id: '5',
    title: 'Hospital Tour',
    date: 'June 15, 2026',
    description: 'Visit the delivery ward and meet the staff.',
    status: 'upcoming',
    icon: Calendar,
  },
];

export const mockAdminStats: AdminStats = {
  overview: {
    activeUsers: 4218,
    totalDonations: 842000,
    mothersSupported: 856,
    systemUptime: '99.9%',
    cpuLoad: '24%',
    memoryUsage: '3.2 GB / 8 GB',
  },
  charts: {
    donationsByMonth: [
      { month: 'Jan', amount: 45000 },
      { month: 'Feb', amount: 52000 },
      { month: 'Mar', amount: 48000 },
      { month: 'Apr', amount: 61000 },
      { month: 'May', amount: 55000 },
    ],
    userGrowth: [
      { month: 'Jan', users: 3200 },
      { month: 'Feb', users: 3500 },
      { month: 'Mar', users: 3800 },
      { month: 'Apr', users: 4218 },
    ],
  },
  pendingApprovals: [
    { id: 'REQ-001', type: 'donor', name: 'James Wilson', requestDate: '2026-04-19' },
    { id: 'REQ-002', type: 'mother', name: 'Elena Rodriguez', requestDate: '2026-04-20' },
    { id: 'REQ-003', type: 'resource', name: 'New Health Guide', requestDate: '2026-04-18' },
  ],
  alerts: [
    { id: 'A-01', type: 'urgent', message: 'Database backup failed', timestamp: '14 min ago', source: 'Backend/Cron' },
    { id: 'A-02', type: 'warning', message: 'High CPU utilization', timestamp: '22 min ago', source: 'AWS/EC2' },
    { id: 'A-03', type: 'success', message: 'API V2 deployment complete', timestamp: '1 hour ago', source: 'CI/CD' },
    { id: 'A-04', type: 'info', message: 'New administrative user added', timestamp: '2 hours ago', source: 'IAM' },
  ],
  userStatuses: [
    { id: 'U-01', name: 'Sarah Jenkins', role: 'mother', status: 'active', lastActive: '2 min ago' },
    { id: 'U-02', name: 'Alex Thompson', role: 'donor', status: 'active', lastActive: '14 min ago' },
    { id: 'U-03', name: 'James Wilson', role: 'donor', status: 'pending', lastActive: '1 day ago' },
    { id: 'U-04', name: 'Maria Garcia', role: 'doula', status: 'active', lastActive: '5 min ago' },
    { id: 'U-05', name: 'Robert Fox', role: 'mother', status: 'suspended', lastActive: '3 weeks ago' },
  ]
};

export const mockCourses = [
  { id: 'C-01', title: 'Infant CPR & Safety', date: 'April 22', time: '10:00 AM', category: 'Health', instructor: 'Dr. Emily Chen' },
  { id: 'C-02', title: 'Newborn Nutrition', date: 'April 24', time: '2:00 PM', category: 'Nutrition', instructor: 'Sarah Miller' },
  { id: 'C-03', title: 'Stress Management', date: 'April 26', time: '11:00 AM', category: 'Mental Health', instructor: 'Dr. James Lee' },
];

export const mockServiceAssignments = [
  { id: 'S-01', title: 'Weekly Groceries Drop-off', date: 'April 21', time: 'Morning', type: 'Service', status: 'assigned' },
  { id: 'S-02', title: 'Doula Consultation', date: 'April 23', time: '3:30 PM', type: 'Meeting', status: 'confirmed' },
];

export const mockHousingStatus = {
  status: 'waiting', // 'resident' or 'waiting'
  position: 4,
  totalInList: 12,
  estimatedWait: '2-3 weeks',
  homeVacancies: [
    { name: 'Grace Haven', vacancies: 2, location: 'North District' },
    { name: 'Hope House', vacancies: 0, location: 'East Side' }
  ]
};

export const mockEntitlements = [
  { id: 'E-01', item: 'Newborn Diapers (Size 1)', quantity: '1 Box', status: 'Ready for Pickup' },
  { id: 'E-02', item: 'Prenatal Vitamins', quantity: '30 Day Supply', status: 'Ready for Pickup' },
  { id: 'E-03', item: 'Infant Formula', quantity: '2 Tins', status: 'In Stock' }
];

export const mockInventory = [
  { id: 'INV-01', item: 'Diapers Size 1', category: 'Baby Care', stock: 450, unit: 'packs', status: 'Healthy', minStock: 200, lastRestocked: '2026-04-10' },
  { id: 'INV-02', item: 'Infant Formula', category: 'Nutrition', stock: 120, unit: 'tins', status: 'Low Stock', minStock: 150, lastRestocked: '2026-03-25' },
  { id: 'INV-03', item: 'Prenatal Vitamins', category: 'Medical', stock: 800, unit: 'bottles', status: 'Healthy', minStock: 300, lastRestocked: '2026-04-15' },
  { id: 'INV-04', item: 'Baby Wipes', category: 'Baby Care', stock: 15, unit: 'packs', status: 'Critical', minStock: 100, lastRestocked: '2026-02-10' },
  { id: 'INV-05', item: 'Baby Blankets', category: 'Supplies', stock: 65, unit: 'units', status: 'Healthy', minStock: 20, lastRestocked: '2026-04-01' },
  { id: 'INV-06', item: 'Onesies (Newborn)', category: 'Clothing', stock: 110, unit: 'units', status: 'Healthy', minStock: 50, lastRestocked: '2026-04-05' },
  { id: 'INV-07', item: 'Pacifiers', category: 'Baby Care', stock: 45, unit: 'units', status: 'Low Stock', minStock: 60, lastRestocked: '2026-03-15' },
  { id: 'INV-08', item: 'Baby Bottles', category: 'Nutrition', stock: 200, unit: 'units', status: 'Healthy', minStock: 80, lastRestocked: '2026-04-12' },
];

export const mockHouses = [
  { 
    id: 'H-01', 
    name: 'Grace Haven', 
    totalBeds: 10, 
    occupied: 8, 
    location: 'North District', 
    manager: 'Sarah J.',
    residents: [
      { id: 'M-101', name: 'Angela M.', donor: 'John Smith', room: '101A', status: 'Stable' },
      { id: 'M-102', name: 'Lucia R.', donor: 'Sarah Wilson', room: '101B', status: 'Near Term' },
      { id: 'M-104', name: 'Elena S.', donor: 'Michael Brown', room: '102A', status: 'Postpartum' },
    ]
  },
  { 
    id: 'H-02', 
    name: 'Hope House', 
    totalBeds: 6, 
    occupied: 6, 
    location: 'East Side', 
    manager: 'Michael R.',
    residents: [
      { id: 'M-103', name: 'Fatima K.', donor: 'David Brown', room: 'R1', status: 'Stable' },
      { id: 'M-105', name: 'Sofia L.', donor: 'Emily Davis', room: 'R2', status: 'High Risk' },
    ]
  },
  { 
    id: 'H-03', 
    name: 'Faith Manor', 
    totalBeds: 12, 
    occupied: 5, 
    location: 'West End', 
    manager: 'Elena B.',
    residents: [
      { id: 'M-106', name: 'Maria G.', donor: 'Chris Evans', room: 'A1', status: 'New Intake' },
    ]
  },
];

export const mockWaitingList = [
  { id: 'W-01', name: 'Maria G.', daysWaiting: 45, priority: 'High', needs: 'Housing, Baby Care' },
  { id: 'W-02', name: 'Elena S.', daysWaiting: 12, priority: 'Medium', needs: 'Baby Care, Medical' },
  { id: 'W-03', name: 'Sofia L.', daysWaiting: 8, priority: 'Low', needs: 'Housing' },
];

export const mockMothers = [
  { id: 'M-101', name: 'Angela M.', status: 'Active', donor: 'John Smith', package: 'Holistic Care', joined: 'Jan 2026', location: 'Grace Haven', email: 'angela.m@example.com' },
  { id: 'M-102', name: 'Lucia R.', status: 'Active', donor: 'Sarah Wilson', package: 'Full Family', joined: 'Feb 2026', location: 'Grace Haven', email: 'lucia.r@example.com' },
  { id: 'M-103', name: 'Fatima K.', status: 'Active', donor: 'David Brown', package: 'Essential Care', joined: 'Mar 2026', location: 'Hope House', email: 'fatima.k@example.com' },
  { id: 'M-104', name: 'Elena S.', status: 'Active', donor: 'Michael Brown', package: 'Holistic Care', joined: 'Jan 2026', location: 'Grace Haven', email: 'elena.s@example.com' },
  { id: 'M-105', name: 'Sofia L.', status: 'Active', donor: 'Emily Davis', package: 'Full Family', joined: 'Apr 2026', location: 'Hope House', email: 'sofia.l@example.com' },
  { id: 'M-106', name: 'Maria G.', status: 'Active', donor: 'Chris Evans', package: 'Essential Care', joined: 'Apr 2026', location: 'Faith Manor', email: 'maria.g@example.com' },
];

export const mockAdminCourses = [
  { id: 'C-501', title: 'Financial Literacy 101', instructor: 'Dr. Jane Cooper', scheduledDate: 'May 10, 2026', time: '10:00 AM', enrolled: 15, capacity: 20 },
  { id: 'C-502', title: 'Postnatal Health & Wellness', instructor: 'Nurse Sarah', scheduledDate: 'May 12, 2026', time: '2:00 PM', enrolled: 8, capacity: 15 },
];

export const mockNewsletters = [
  { id: 'NL-01', title: 'Monthly Impact Report - April', segment: 'All Donors', scheduled: 'May 1, 2026', status: 'Scheduled', reach: '1,248' },
  { id: 'NL-02', title: 'Spring Gala Invitation', segment: 'High-Value Donors', scheduled: 'May 5, 2026', status: 'Draft', reach: '156' },
  { id: 'NL-03', title: 'Community Update: New Housing Opening', segment: 'All Mothers', scheduled: 'May 10, 2026', status: 'Scheduled', reach: '412' },
];

export const mockAdminMessages = [
  { id: 'MSG-01', sender: 'Angela M. (Mother)', subject: 'Grocery Pickup Question', time: '10m ago', unread: true },
  { id: 'MSG-02', sender: 'John Smith (Donor)', subject: 'Impact Report Feedback', time: '2h ago', unread: true },
  { id: 'MSG-03', sender: 'Lucia R. (Mother)', subject: 'Waitlist Inquiry', time: '5h ago', unread: false },
];

export const mockAdminEvents = [
  { id: 'EVT-01', title: 'Spring Gala 2026', date: 'June 15, 2026', goal: '$50,000', raised: '$32,450', ticketsSold: 145, status: 'Active' },
  { id: 'EVT-02', title: 'Community Car Wash', date: 'May 20, 2026', goal: '$5,000', raised: '$1,200', ticketsSold: 45, status: 'Active' },
  { id: 'EVT-03', title: 'Winter Auction', date: 'Dec 10, 2025', goal: '$100,000', raised: '$112,000', ticketsSold: 320, status: 'Completed' },
];

export const mockRecentPayments = [
  { id: 'PAY-01', donor: 'John Smith', amount: '$150.00', type: 'Recurring', package: 'Holistic Care', date: 'Today, 10:45 AM', status: 'Success' },
  { id: 'PAY-02', donor: 'Sarah Wilson', amount: '$350.00', type: 'One-time', package: 'Full Family', date: 'Today, 09:12 AM', status: 'Success' },
  { id: 'PAY-03', donor: 'Michael Brown', amount: '$50.00', type: 'Recurring', package: 'Essential Care', date: 'Yesterday', status: 'Success' },
  { id: 'PAY-04', donor: 'Emily Davis', amount: '$1,000.00', type: 'Event Ticket', package: 'Spring Gala', date: 'Yesterday', status: 'Success' },
];

export const mockAdminUsers = [
  { id: 'ADM-01', name: 'Gaurav Parmar', role: 'Super Admin', email: 'gaurav@netseeds.tech', lastLogin: '2 mins ago', status: 'Active' },
  { id: 'ADM-02', name: 'Sarah Miller', role: 'Logistics Manager', email: 'sarah.m@netseeds.org', lastLogin: '4h ago', status: 'Active' },
  { id: 'ADM-03', name: 'David Chen', role: 'Finance Lead', email: 'david.c@netseeds.org', lastLogin: 'Yesterday', status: 'Inactive' },
];

export const mockAuditLogs = [
  { id: 'LOG-01', action: 'Inventory Restock', user: 'Sarah Miller', details: 'Added 500 units of Diapers Size 1', timestamp: '2026-04-20 10:15 AM' },
  { id: 'LOG-02', action: 'Resident Transfer', user: 'Gaurav Parmar', details: 'Moved Angela M. from Grace Haven to Hope House', timestamp: '2026-04-20 09:45 AM' },
  { id: 'LOG-03', action: 'New Mother Enrolled', user: 'Gaurav Parmar', details: 'Enrolled Maria G. into Holistic Care package', timestamp: '2026-04-19 04:20 PM' },
  { id: 'LOG-04', action: 'Security Policy Update', user: 'Super Admin', details: 'Updated password rotation policy to 90 days', timestamp: '2026-04-18 11:00 AM' },
];

export const mockSystemConfig = {
  maintenanceMode: false,
  autoMatching: true,
  donorPrivacyLevel: 'High',
  warehouseAlertThreshold: 15,
};
