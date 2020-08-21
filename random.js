let quote = [
  'In your eyes, is the city where the essence of love dwells',
  'The excitement might dwindle, the euphoria might reduce, but, the essence of the love I have for you transcends excitement and euphoria.',
  'Till every shouts be drowned in the sea of my profession of love for you, till every fears be stilled, till the next day after eternity, I wont stop loving you babe.',
  'Imagine an island faraway from the sounds of the crowd, imagine a place where desires are fulfilled without restrictions, imagine a lifetime together.',
  'Like the village air that percolates the skin at the eventide, so your love percolates my whole being Feyisola.',
  'See why you should date a developer?...Lol',
  'Which physical attribute do you think I love most about you? Dont worry, let me just say I love your intelligence...Lol',
  'Okay, So, tonight, you said we are going to be role model couples...I like the sound of that.',
  'Butterball, your presence here adds color, brings out the beauty of love in me, Thanks for happening to me babe.',
  'Ermm... Be eating well jhor..Lol',
  'I made this random quote for you, today 21st August,2020 at 9:59pm, I used JavaScript language to develop this.',
  'I love you babe...',
  'Know the beauty of the web? We can show our kids this quote generator I made for you.',
  'Moonbeam, In the temple of your love is where i want to continually burn the incense of love.'
  
];

const quoteDisplay = document.getElementById('quote');
const quoteBtn = document.getElementById('get-quote');

quoteBtn.addEventListener('click', function(){
  let randomQuote = Math.floor(Math.random()*(quote.length));
  quoteDisplay.textContent = quote[randomQuote];
})