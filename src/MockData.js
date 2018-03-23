const GenericOptions = [
    {
        text: 'Option A',
        value: 'A'
    },
    {
        text: 'Option B',
        value: 'B'
    },
    {
        text: 'Option C',
        value: 'C'
    },
    {
        text: 'Option D',
        value: 'D'
    }
];

export const SimpleQuestionaire = {
    title: 'Simple Questionaire',
    questions: [
        {
            prompt: 'What is the answer to this question?',
            hint: 'heres a hint... jk no hint',
            correctMessage: 'Good job!',
            options: GenericOptions
        }
    ]
}

export const SimpleQuestionaireAnswer = {
    text: 'Option B',
    value: 'B'
};
