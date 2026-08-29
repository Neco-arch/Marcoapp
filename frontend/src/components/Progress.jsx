import { RingProgress , Text } from '@mantine/core';
import '@mantine/core/styles.css';

export default function Progress({ Calories, Protein, Carb, Fat }) {
    return (
        <>
        <RingProgress
        size={200} 
            label={<>
            <Text size='s' ta="center" >
                    Calories :
                </Text>
                <Text size='s' ta="center">
                    {Calories}
                </Text>
            </>

            }
            sections={[
                { value: 10, color: 'cyan' },
            ]}
        />

        <RingProgress
        size={200} 
            label={<>
            <Text size='s' ta="center">
                    Carb :
                </Text>
                <Text size='s' ta="center">
                    {Carb}
                </Text>
            </>
            }
            sections={[
                { value: 10, color: 'cyan' },
            ]}
        />

        <RingProgress
        size={200} 
            label={<>
            <Text size='s' ta="center">
                    Protein :
                </Text>
                <Text size='s' ta="center">
                    {Protein}
                </Text>
            </>
            }
            sections={[
                { value: 10, color: 'cyan' },
            ]}
        />
        <RingProgress
        size={200} 
        label={<>
            <Text size='s' ta="center">
                    Fat :
                </Text>
                <Text size='s' ta="center">
                    {Fat}
                </Text>
            </>
            }
            sections={[
                { value: 10, color: 'cyan' },
            ]}
        />
        </>
    );
}