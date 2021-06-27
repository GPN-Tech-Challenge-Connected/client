export default {
    get() {
        return [
            {
                number: 1,
                type: 'Скважина буровая',
                company: {
                    name: 'Газпром',
                    id: 1
                },
                name: 'Василек',
                location: 'Норильск',
                state: 1
            },
            {
                id: 2,
                type: 'Скважина буровая',
                company: {
                    name: 'Газпром',
                    id: 1
                },
                name: 'Василек Ultra',
                location: 'Норильск',
                state: 2
            },
            {
                id: 3,
                type: 'Скважина буровая морская',
                company: {
                    name: 'Газпром 2',
                    id: 2
                },
                name: 'Василек VIP',
                location: 'Анадырь',
                state: 1
            },
        ]
    },
}