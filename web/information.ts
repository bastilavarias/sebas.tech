
const getRandomQuote = () => {
    const quotes = [
        "Code is like humor. When you have to explain it, it’s bad. — Cory House",
        "The only way to do great work is to love what you do. — Steve Jobs",
        "Simplicity is the soul of efficiency. — Austin Freeman",
        "In the middle of difficulty lies opportunity. — Albert Einstein",
        "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
        "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
        "The best way to predict the future is to create it. — Abraham Lincoln",
        "It always seems impossible until it's done. — Nelson Mandela",
        "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
        "Dream big. Start small. Act now. — Robin Sharma",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
        "The journey of a thousand miles begins with one step. — Lao Tzu",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
        "Believe you can and you're halfway there. — Theodore Roosevelt",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. — Ralph Waldo Emerson",
        "Life is what happens when you’re busy making other plans. — John Lennon",
        "A person who never made a mistake never tried anything new. — Albert Einstein",
        "Success is not the key to happiness. Happiness is the key to success. — Albert Schweitzer",
        "The harder you work for something, the greater you’ll feel when you achieve it. — Unknown",
        "It does not matter how slowly you go as long as you do not stop. — Confucius",
        "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
        "If you want to go fast, go alone. If you want to go far, go together. — African Proverb",
        "The future depends on what we do in the present. — Mahatma Gandhi",
        "Opportunities are like sunrises. If you wait too long, you miss them. — William Arthur Ward",
        "To live a creative life, we must lose our fear of being wrong. — Joseph Chilton Pearce",
        "It is never too late to be what you might have been. — George Eliot",
        "Happiness depends upon ourselves. — Aristotle",
        "Do not wait to strike till the iron is hot, but make it hot by striking. — William Butler Yeats",
        "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. — Ralph Waldo Emerson",
        "The best revenge is massive success. — Frank Sinatra",
        "To succeed in life, you need two things: ignorance and confidence. — Mark Twain",
        "Don’t wait for opportunity. Create it. — Unknown",
        "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
        "In the middle of every difficulty lies opportunity. — Albert Einstein",
        "Do what you can with all you have, wherever you are. — Theodore Roosevelt",
        "Everything you can imagine is real. — Pablo Picasso",
        "The best way to get started is to quit talking and begin doing. — Walt Disney",
        "Success is how high you bounce when you hit bottom. — George S. Patton",
        "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
        "The secret of getting ahead is getting started. — Mark Twain",
        "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
        "Doubt kills more dreams than failure ever will. — Suzy Kassem",
        "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
        "Life is short, and it is up to you to make it sweet. — Sarah Louise Delany",
        "The purpose of life is to contribute in some way to making things better. — Robert F. Kennedy",
        "Success is not in what you have, but who you are. — Bo Bennett",
        "A life spent making mistakes is not only more honorable but more useful than a life spent doing nothing. — George Bernard Shaw",
        "Try not to become a man of success, but rather try to become a man of value. — Albert Einstein",
        "You only live once, but if you do it right, once is enough. — Mae West",
        "Be yourself; everyone else is already taken. — Oscar Wilde",
        "The road to success and the road to failure are almost exactly the same. — Colin R. Davis"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);

    return quotes[randomIndex];
}
export const BASIC_INFO = {
    name: 'Sebastian Curtis Lavarias',
    quote: getRandomQuote(),
    socials: [
        {
            text: 'github,',
            url: 'https://github.com/bastilavarias',
        },
        {
            text: 'and youtube',
            url: 'https://www.youtube.com/@bastilavarias',
        }
    ],
    technologies: {
        languages: [
            'JavasScript', 'TypeScript', 'PHP', 'Go', 'Dart'
        ],
        web: [
            'HTML', 'CSS', 'SCSS', 'React', 'NextJs', 'Vue'
        ],
        backend: [
            'Laravel', 'NodeJs', 'Gin', 'AdonisJs', 'SQL', 'MySQL',
        ],
        server: [
            'Docker', 'Linux Servers',
        ],
        mobile: [
            'React Native', 'CapacitorJS', 'Flutter'
        ],
    }
};