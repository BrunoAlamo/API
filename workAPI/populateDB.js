const mongoose = require('mongoose');
const Quote = require('./models/quote');

mongoose.connect('mongodb+srv://sliskebaggins:zaros1415926535@cluster0.iwtwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const quotes = [
    {quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "- Thomas A. Edison"},
    {quote: "Hunger is the first element of self-discipline. If you can control what you eat and drink, you can control everything else.", author: "- Dr. Umar Faruq Abd-Allah"},
    {quote: "A superior man is modest in his speech but exceeds in his actions", author: "- Confucis"},
    {quote: "The worst enemy to creativity is self-doubt", author: "- Sylvia Plath"},
    {quote: "You'll never be criticized by someone who's doing more than you", author: "- Unknown"},
    {quote: "Man cannot remake himself without suffering, for he is both the marble and the sculptor", author: "- Alexis Carrel"},
    {quote: "The scariest moment is always just before you start", author: "- Stephen King"},
    {quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage", author: "- Lao Tzu"},
    {quote: "Optimism is the faith that leads to achievment. Nothing can be done without hope and confidence", author: "- Hellen Keller"},
    {quote: "The best revenge is massive success", author: "- Frank Sinatra"},
    {quote: "Do not speak bad of yourself. For the warrior within hears your words and is lessened by them.", author: "- Old japanese samurai proverb"},
    {quote: "Punctuality is not about being on time, it's basically about respecting your own commitments", author: ""},
    {quote: "An arrogant person considers himself perfect. This is the chief harm of arrogance. It interferes with a person's main task in life - becoming a better person.", author: "- Leo Tolstoy"},
    {quote: "Every battle is won before it's ever fought.", author: "- Sun Tzu"},
    {quote: "To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.", author: "- Johann Wolfgang von Goethe"},
    {quote: "A man must elevate himself by his own mind, not degrade himself. The mind is the friend of the conditioned soul, and his enemy as well", author: "- Bhagavad Gita"},
    {quote: "Failure is the condiment that give success its flavor", author: "- Truman Capote"},
    {quote: "False words are not only evil in themselves, but they infect the soul with evil.", author: "- Plato"},
    {quote: "Change your conception of yourself and you will automatically change the world in which you live. Do not try to change people, they are only messengers telling you who you are. Revalue yourself and they will confirm the change.", author: "- Naville Goddard"},
    {quote: "When we are asleep in this world, we are awake in another.", author: "- Salvador Dali"},
    {quote: "You can map out a fight plan or a life plan, but when the action starts, it may not go the way you planned, and you're down to your reflexes and preparation. That's where yor roadwork show. If you cheated on that in the dark, you're going to get found now, under the bright lights", author: "Joe Fraizer"},
    {quote: "When you have something in life that you want to accomplish greatly, you have to be willing to give up your happiness... I've lost all my sensitivity as far as being embarrassed, being shy, you just have to lose that.", author: "- Mike Tyson"},
    {quote: "Only those who will risk going too far can possibly find out how far one can go.", author: "- Ts Eliot"},
    {quote: "The fears we don't face become our limits", author: "- Robin Sharma"},
    {quote: "How long are you going to wait before you demand the best of you", author: "- Epictetus"},
    {quote: "When a person can't find a deep sense of meaning, they distract themselves with pleasure.", author: "- Viktor Frankl"},
    {quote: "Absence, the highest form of presence.", author: "- James Joyce"},
    {quote: "First say to yourself what you would be, and then do what you have to do", author: "- Epictetus"},
    {quote: "If you gotta tell them who you are, you ain't nobody", author: "- Joe Louis"},
    {quote: "By falling to prepare, you are preparing to fail.", author: "- Bejamin Franklin"},
    {quote: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love", author: "- Marcus Aurelius"},
    {quote: "The most difficult thing is the decision to act. The rest is merely tenacity", author: "- Amelia Earhart"},
    {quote: "We don't rise to the level of our expectations, we fall to the level of our training", author: "- Archilochus"},
    {quote: "Inaction breeds doubt and fear. Action breeds confidence and courage", author: "- Dale Carnegie"},
    {quote: "You can mesure the size of a person by what makes him or her angry", author: "- Dale Carnegie"},
    {quote: "Nothing is so indecent that it cannot be said to another person if the proper words are used to convey it", author: "- Giovanni Boccaccio"},
    {quote: "If you're going to make it to the top of your field, you've got to be obsessed. You have to live it on daily basis. It must consume you.", author: "- Muhammad Ali"},
    {quote: "People do not seem to realize that their opinion of the world is also a confession of character", author: "- Ralph Waldo Emerson"},
    {quote: "The whole future lies in uncertainity: Live immediately", author: "- Seneca"},
    {quote: "A person who won't read has no advantage over one who can't read.", author: "- Mark Twain"},
    {quote: "", author: ""},
];

async function populateDB() {
    try {
        await Quote.insertMany(quotes);
        console.log("Quotes added successfully!");
        mongoose.connection.close();
    } catch (error) {
        console.log("Error inserting quotes:", error);
    }
}

populateDB();