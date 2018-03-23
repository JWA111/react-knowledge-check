export const SimpleQuestionaire = {
    questions: [
        {
            prompt: 'What state is shown in the image below?',
            hint: 'Hint: west-coast best-coast',
            correctMessage: 'Good job! That is California.',
            content: {
                type: 'image',
                options: {
                    imageSrc: 'https://www.50states.com/images/redesign/maps/ca-largemap.png'
                }
            },
            options: [
                {
                    text: 'Texas',
                    value: 'tx'
                },
                {
                    text: 'Arizona',
                    value: 'az'
                },
                {
                    text: 'California',
                    value: 'ca'
                },
                {
                    text: 'Oregan',
                    value: 'or'
                }
            ],
            correctOption: {
                text: 'California',
                value: 'ca'
            }
        },
        {
            prompt: 'What is the fastest animal mentioned in the video?',
            hint: 'Hint: It ain\'t a superman or a plane',
            correctMessage: 'The Peregrine Falcon flys lickety-split!',
            content: {
                type: 'youtube',
                options: {
                    videoId: 'js_Y4erhdPE',
                    playerOptions: {
                        width: '100%'
                    }
                }
            },
            options: [
                {
                    text: 'Peregrine Falcon',
                    value: 'pf'
                },
                {
                    text: 'Cheetah',
                    value: 'ch'
                },
                {
                    text: 'Sword Fish',
                    value: 'sf'
                },
                {
                    text: 'Ostrich',
                    value: 'os'
                }
            ],
            correctOption: {
                text: 'Peregrine Falcon',
                value: 'pf'
            }
        },
        {
            prompt: 'What is 2 + 4?',
            hint: '2 + 4 = 6',
            correctMessage: '2 + 4 = 6',
            options: [
                {
                    text: '10',
                    value: '10'
                },
                {
                    text: '4',
                    value: '4'
                },
                {
                    text: '7',
                    value: '7'
                },
                {
                    text: '6',
                    value: '6'
                }
            ],
            correctOption: {
                text: '6',
                value: '6'
            }
        }
    ]
}
