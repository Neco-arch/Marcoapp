import { RingProgress , Text  } from '@mantine/core';
import '@mantine/core/styles.css';

export default function Progress({ Calories, WeightGoal  }) {
    return (
        <>
        <div className='Cal_wrapper'>
        <h2>Calories</h2>
        <div className='Cal_section'>
        <RingProgress
        size={200} 
            label={<>
            <Text size='s' ta="center" >
                Calories 
                </Text>
            </>
            }
            sections={[
                { value: 10, color: 'cyan' },
            ]}
        />
        <div>
            <h2>Remaining :</h2>
            <h2>1980</h2>
        </div>
        </div>
        </div>
        <div className='Marco_wrapper'>
            <h2>Marco</h2>
        <div className='Marco_Section'>
                    <RingProgress
        size={200} 
            label={<>
            <Text size='s' ta="center" >
                    Carb
                </Text>
            </>

            }
            sections={[
                { value: 10, color: 'cyan' },
            ]}
        />        <RingProgress
        size={200} 
            label={<>
            <Text size='s' ta="center" >
                    Protein
                </Text>
            </>

            }
            sections={[
                { value: 10, color: 'cyan' },
            ]}
        />        <RingProgress
        size={200} 
            label={<>
            <Text size='s' ta="center" >
                    Fat
                </Text>
            </>

            }
            sections={[
                { value: 10, color: 'cyan' },
            ]}
        />
        </div>
        </div>
        </>
    );
}