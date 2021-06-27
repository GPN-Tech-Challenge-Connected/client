export default {
    get() {
        return [
            {
                id: 1,
                equipmentId: 1,
                type: {
                    id: 1,
                    name: 'Дебет'
                },
                location: 'Мурманск',
                date: '29.07.2020',
                performer: 'Test Performer',
                doc: {
                    id: 1,
                    url: 'https://google.com'
                }
            },
            {
                id: 2,
                equipmentId: 1,
                type: {
                    id: 2,
                    name: 'Кредит'
                },
                location: 'Мурманск',
                date: '22.07.2020',
                performer: 'Test Performer',
                doc: {
                    id: 1,
                    url: 'https://google.com'
                }
            },
            {
                id: 3,
                equipmentId: 2,
                type: {
                    id: 2,
                    name: 'Кредит'
                },
                location: 'Норильск',
                date: '22.07.2020',
                performer: 'Test Performer',
                doc: {
                    id: 1,
                    url: 'https://google.com'
                }
            },
            {
                id: 4,
                equipmentId: 3,
                type: {
                    id: 1,
                    name: 'Дебет'
                },
                location: 'Норильск',
                date: '22.07.2020',
                performer: 'Test Performer',
                doc: {
                    id: 1,
                    url: 'https://google.com'
                }
            },
        ]
    }
}