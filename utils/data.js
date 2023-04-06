const names = [
    'AJ',
    'BJ',
    'CJ',
    'Bob',
    'Sue',
    'John',
    'Cam',
    'Newton',
    'Einstien',
    'Bobby',
    'Ed',
    'Edd',
    'Eddie',
    'Eddy',
    'Taylor',
    'Sarah',
    'Hannah',
    'Kris',
    'Summer',
    'Jay',
    'Kam',
    'Johnny',
    'Peter',
    'Paul',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace'
];

const thoughtBody = [
    'Eyes are the windows to the soul',
    'Be the change you wish to see in the world',
    'I have a dream',
    'Green light go, red light stop',
    'Panckaes or waffles',
    'This is the way',
    'Wars not make one great',
    'Do or do not, there is no try'
];

const likelyReactions = [
    'I completely disagree',
    'I moderatley disagree',
    'I am indifferant',
    'I do not care',
    'I moderatly agree',
    'I love this',
    'Just want to play video games',
    'Only in it for the food'
];

// Get a random item from array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Makes a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

//   to make random though with a reaction
const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtContent: getRandomArrItem(thoughtBody),
            reactions: [...getRandomReaction(2)],
        });
    }
    return results;
};

// to generate random reaction
const getRandomReaction = (int) => {
    if (int === 1) {
        return getRandomArrItem(likelyReactions);
    } 
    let results = [];
    for (let i =0; i < int; i++) {
        results.push({
            reactions: getRandomArrItem(likelyReactions),
            username: getRandomName()
        });
    }
    return results;
};

module.exports = {getRandomName, getRandomThought}