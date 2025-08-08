export type FormDataIO = {
  cardId: string;
  tutorName: string;
  timingSlab: string;
  lastDate: Date;
  urgent: boolean;
  phoneNumber: string;
  requirements: string[];
}

export type BookingIO = {
  cardId: string;
  tutorName: string;
  requirements: string[];
  timingSlab: string;
  lastDate: string;
  urgent: boolean;
  phoneNumber: string;
}

export type EarningHistoryIO = {
  cardId: string;
  studentName: string;
  phoneNumber: string;
  subject: string;
  topicsCovered: string[];
  duration: string;
  sessionsCompleted: number;
  amount: number;
  paymentDate: string;
  urgent: boolean;
  hasRated: boolean;
  studentRating: number;
}

export type PendingRequestIO = {
  cardId: string;
  studentName: string;
  requirements: string[];
  timingSlab: string;
  paymentDate: string;
  urgent: boolean;
  phoneNumber: string;
  paymentStatus: string;
  totalSessions: number;
  rating: number | null;
  status: string;
}

export type TuitionHistoryIO = {
  cardId: string;
  tutorName: string;
  requirements: string[];
  timingSlab: string;
  paymentDate: string;
  urgent: boolean;
  phoneNumber: string;
  paymentStatus: string;
}

export type PlanIO = {
  title: string;
  duration: string;
  price: string;
  features: string[];
  button: string;
  color: string;
}

export type ReviewIO = {
  message: string;
}

export type UserIO = {
  profilePic?: string;
  username: string;
  fullName: string;
  category: string;
  email: string;
  star?: number;
  review?: ReviewIO[];
}

export type CardBookingIO = {
  heading: string;
  username: string;
  details: string;
  board: string;
  topic: string;
  language: string;
  preferredMode: string;
  address: string;
  payment: number;
  status: string;
  cardId: string;
}