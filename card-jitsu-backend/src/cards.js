const CardType = [
    'Fire',
    'Water',
    'Ice'
];

const CardColor = [
    'Blue',
    'Yellow',
    'Red',
    'Green',
]

const CardNumber = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
]

module.exports = {
    getCard: () => {
        return {
            Type: CardType[Math.floor(Math.random() * CardType.length )],
            Score: CardNumber[Math.floor(Math.random() * CardNumber.length)],
            Color: CardColor[Math.floor(Math.random() * CardColor.length)]
        };
    },
}