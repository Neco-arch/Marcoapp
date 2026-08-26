import { Button , Text } from '@mantine/core';

export default function LogFood() {
    return (
    <div className='LogFood'>
        <div>
            <h2>Breakfast</h2>
            <Button variant="light" size="md">Log Breakfast</Button>
        </div>
        <div>
            <h2>Lunch</h2>
            <Button variant="light" size="md">Log Lunch</Button>
        </div>
        <div>
            <h2>Dinner</h2>
            <Button variant="light" size="md">Log Dinner</Button>
        </div>
    </div>
    )
}