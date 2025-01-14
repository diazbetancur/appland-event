export interface EventDay {
  day: string;
  date: string;
  place: string;
  event: EventDaySchedule[];
}

export interface EventDaySchedule {
  time: string;
  description: string;
}
