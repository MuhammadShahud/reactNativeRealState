import { ENGLISHICON, MATHSICON, BOOKSICON, SCIENCEICON, GEOMETRYICON } from '../assets/images/images'


export const bottomHome = [
    {
        iconName: "lightbulb",
        iconType: "foundation",
        title: "Question of the Day",
        subjectName:'QuestionOfTheDay',
        stacks: 'DirectQuestions',
    },
    {
        iconName: "lightbulb",
        iconType: "foundation",
        title: "10 Quick Questions",
        subjectName:'QuickQuestions',
        stacks: 'DirectQuestions',
    },
    {
        iconName: "lock",
        iconType: "foundation",
        title: "Missed Question Test",
        subjectName:'MissedQuestionTest',
        stacks: 'PracticeQuestion',
    },
    {
        iconName: 'down',
        iconType: "antdesign",
        title: "Weakest Quiz",
        subjectName:'QuestionOfTheDay',
        stacks: 'PracticeQuestion',
    },
    {
        iconName: "heart",
        iconType: "foundation",
        title: "Saved Questions",
        subjectName:'QuestionOfTheDay',
        stacks: 'SavedQuestion',
    }
]

export const bottomHomeFree =[
    {
        iconName: "lightbulb",
        iconType: "foundation",
        title: "Question of the Day",
        subjectName:'QuestionOfTheDay',
        stacks: 'DirectQuestions',
    },
    {
        iconName: "lightbulb",
        iconType: "foundation",
        title: "10 Quick Questions",
        subjectName:'QuickQuestions',
        stacks: 'DirectQuestions',
    },
    {
        iconName: "lock",
        iconType: "foundation",
        title: "Missed Question Test",
        subjectName:'MissedQuestionTest',
        stacks: 'Subscription',
    },
    {
        iconName: 'down',
        iconType: "antdesign",
        title: "Weakest Quiz",
        subjectName:'QuestionOfTheDay',
        stacks: 'Subscription',
    },
    {
        iconName: "heart",
        iconType: "foundation",
        title: "Saved Questions",
        subjectName:'QuestionOfTheDay',
        stacks: 'Subscription',
    }
]

export const HomeTopCardsData = [
    {
        id: 1,
        title: 'Practice Test',
        progress: 90,

    },
    {
        id: 2,
        title: 'Flashcards',
        progress: 32
    }
    , {
        id: 3,
        title: 'Vocabulary',
        progress: 16
    }
]

export const QuestionData = [
    {
        Imageicon: ENGLISHICON,
        title: 'English',
        percentage: 40
    },
    {
        Imageicon: MATHSICON,
        title: 'Maths',
        percentage: 100
    },
    {
        Imageicon: BOOKSICON,
        title: 'Reading',
        percentage: 50
    },
    {
        Imageicon: SCIENCEICON,
        title: 'Science',
        percentage: 10
    },
    {
        Imageicon: GEOMETRYICON,
        title: 'Geometry',
        questions: 15,
        percentage: 30
    }
]

export const Questions = [
    {
        id: 0,
        questions: "There is variations of passanges of lorem ipsum available, but the majority but the majority",
        options: ["All of the above",
                  "None of the above",
                    "All of the above",
                    "None of the above"],
        answer: "All of the above",
        explanation: "There are variations"
    }, {
        id: 1,
        questions: "There are variations",
        options: ["All of the above",
                  "None of the above",
                    "All of the above",
                    "None of the above"],
        answer: "All of the above",
        explanation: "There are variations"
    }, {
        id: 2,
        questions: "but the majority",
        options: ["All of the above",
                  "None of the above",
                    "All of the above",
                    "None of the above"],
        answer: "All of the above",
        explanation: "There are variations"
    }, {
        id: 3,
        questions: "lorem ipsum available",
        options: ["All of the above",
                  "None of the above",
                    "All of the above",
                    "None of the above"],
        answer: "All of the above",
        explanation: "There are variations"
    },
]