const STUDY_TIME: number = 25;
const REST_TIME: number = 5;

export async function GET() {
    // connect to db and get data
    const studyPomodoros = [
        {
            id: 1,
            title: "Pomodoro block",
            studyTime: STUDY_TIME,
            restTime: REST_TIME,
            done: false,
            erase: false
        },
        {
            id: 2,
            title: "Pomodoro block",
            studyTime: STUDY_TIME,
            restTime: REST_TIME,
            done: false,
            erase: false
        },
        {
            id: 3,
            title: "Pomodoro block",
            studyTime: STUDY_TIME,
            restTime: REST_TIME,
            done: false,
            erase: false
        },
        {
            id: 4,
            title: "Pomodoro block",
            studyTime: STUDY_TIME,
            restTime: REST_TIME,
            done: false,
            erase: false
        }
    ]

    return new Response(JSON.stringify(studyPomodoros), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
}