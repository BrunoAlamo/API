document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.getElementById("text");
    const quoteAuthor = document.getElementById("author");
    const newQuoteButton = document.getElementById("new-quote");
    const tweetButton = document.getElementById("tweet-quote");

    async function fetchQuote() {
        try {
            const response = await fetch("http://localhost:3000/quotes"); // Adjust if your API is hosted elsewhere
            const quotes = await response.json();
           console.log(quotes);
            
            if (quotes.length > 0) {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const quote = quotes[randomIndex];
               

                quoteText.textContent = `"${quote.quote}"`;
                quoteAuthor.textContent = ` ${quote.author}`;

                // Update Twitter share button
                tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}"${quote.author}`)}`;
            } else {
                quoteText.textContent = "No quotes available.";
                quoteAuthor.textContent = "";
            }
        } catch (error) {
            console.error("Error fetching quote:", error);
            quoteText.textContent = "Failed to load quote.";
            quoteAuthor.textContent = "";
        }
    }

    newQuoteButton.addEventListener("click", fetchQuote);

    // Fetch a quote on page load
    fetchQuote();
});