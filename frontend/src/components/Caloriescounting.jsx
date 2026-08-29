import { RingProgress, Text } from '@mantine/core';

export default function CaloriesUI() {
  const calories = 450;
  const goal = 600;
  const percentage = Math.round((calories / goal) * 100);

  return (
    <div className='Caloriesring'>
      <RingProgress
        size={200}
        thickness={16}
        sections={[{ value: percentage, color: 'orange' }]}
        label={
          <Text size="sm" ta="center">
            Calories Burned: {calories}
          </Text>
        }
      />
    </div>
  );
}