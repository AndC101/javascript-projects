// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", person: "Chinese Proverb" },
    { quote: "Your time is limited, don't waste it living someone else's life.", person: "Steve Jobs" },
    { quote: "If you can dream it, you can achieve it.", person: "Zig Ziglar" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", person: "Roy T. Bennett" },
    { quote: "Don't watch the clock; do what it does. Keep going.", person: "Sam Levenson" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius" },
    { quote: "Everything you've ever wanted is on the other side of fear.", person: "George Addair" },
    { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", person: "Zig Ziglar" },
    { quote: "You are never too old to set another goal or to dream a new dream.", person: "C.S. Lewis" },
    { quote: "Act as if what you do makes a difference. It does.", person: "William James" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", person: "Henry David Thoreau" },
    { quote: "Don't be afraid to give up the good to go for the great.", person: "John D. Rockefeller" },
    { quote: "I find that the harder I work, the more luck I seem to have.", person: "Thomas Jefferson" },
    { quote: "The way to get started is to quit talking and begin doing.", person: "Walt Disney" },
    { quote: "If you really look closely, most overnight successes took a long time.", person: "Steve Jobs" },
    { quote: "Don't be distracted by criticism. Remember, the only taste of success some people have is when they take a bite out of you.", person: "Zig Ziglar" },
    { quote: "Success is not in what you have, but who you are.", person: "Bo Bennett" },
    { quote: "Opportunities don't happen, you create them.", person: "Chris Grosser" },
    { quote: "Success seems to be connected with action. Successful people keep moving.", person: "Conrad Hilton" },
    { quote: "The road to success and the road to failure are almost exactly the same.", person: "Colin R. Davis" },
    { quote: "Don't let yesterday take up too much of today.", person: "Will Rogers" },
    { quote: "People who are crazy enough to think they can change the world, are the ones who do.", person: "Rob Siltanen" },
    { quote: "We may encounter many defeats but we must not be defeated.", person: "Maya Angelou" },
    { quote: "Knowing is not enough; we must apply. Wishing is not enough; we must do.", person: "Johann Wolfgang Von Goethe" },
    { quote: "Whether you think you can or think you can’t, you’re right.", person: "Henry Ford" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.", person: "Barack Obama" }
];
  

function newQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
    console.log("hi");
}

window.addEventListener("load", newQuote)

btn.addEventListener("click", newQuote)
