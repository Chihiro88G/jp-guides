type Duration = {
  id: number;
  daysFrom: number;
  daysTo: number;
}

export function getDurations(): Duration[] {
  const durations: Duration[] = [
    {id: 0, daysFrom: 0, daysTo: 1},
    {id: 1, daysFrom: 2, daysTo: 3},
    {id: 2, daysFrom: 4, daysTo: 7},
    {id: 3, daysFrom: 7, daysTo: 14},
  ]
  
  return durations;
};