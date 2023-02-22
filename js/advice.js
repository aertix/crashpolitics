let advice = ['In today’s political climate, it can be easy to fall into the trap and start to think from a perspective of "us verses them.',

'The reality is that voters are a spectrum of individuals who all have thoughts, fears, dreams, and life experiences that influence their opinions, just like you and me.',

'The reality is that most people have opinions that fall on both sides of the spectrum and that the radicals are few and far between.', 

'The best thing for voters to do is to pay attention to the issues that matter most to them and to research those topics thoroughly.',

"Many people forget to do this and end up basing their votes on party affiliation without stopping to think how they really feel on a matter first.",

              "Perseverance is the hard work you do after you get tired of doing the hard work you already did - Newt Gingrich", 
"Let us not seek the Republican answer or the Democratic answer, but the right answer. Let us not seek to fix the blame for the past. Let us accept our own responsibility for the future. John F. Kennedy", 
"Turn on to politics, or politics will turn on you - Ralph Nader",
"Vote for the man who promises least; he'll be the least disappointing. Bernard Baruch",
"Politics, it seems to me, for years, or all too long, has been concerned with right or left instead of right or wrong. - Richard Armour",
"When I was a boy I was told that anybody could become President; I’m beginning to believe it. – Clarence Darrow", 
"In politics, nothing happens by accident. If it happens, you can bet it was planned that way. - Franklin D. Roosevelt", 
"Mankind will never see an end of trouble until lovers of wisdom come to hold political power, or the holders of power become lovers of wisdom. - Plato",
"In politics, if you want anything said, ask a man; if you want anything done, ask a woman. - Margaret Thatcher",
"When our government is spoken of as some menacing, threatening, foreign entity, it ignores the fact that in our democracy, government is us. - Barack Obama",
"Some men change their party for the sake of their principles; others their principles for the sake of their party. - Winston Churchill",
"It is not in the nature of politics that the best men should be elected. The best men do not want to govern their fellowmen. - George E. MacDonald",
"During a campaign the air is full of speeches — and vice versa. - Anonymous",
"Politics — I don’t know why, but they seem to have a tendency to separate us, to keep us from one another, while nature is always and ever making efforts to bring us together. - Sean O’Casey",




            
             ]

const adv = document.getElementById('advice')

function doAdvice() {
  let choice = Math.floor(Math.random()*5)
  console.log(choice)
  console.log(advice[choice])
  adv.textContent = advice[choice]
}

doAdvice()






// Green shit doesnt do anything

// 'If you can’t bite, better not show your teeth.' 
// 'Many receive advice, only the wise profit from it.
// 'Wise men don’t need advice. Fools won’t take it.' 
// 'Never bet your money on another man’s game.'
// 'Seek advice but use your own common sense.' 
// 'Never miss a good chance to shut up.' 
// 'If you want to go fast, go alone. If you want to go far, go together.'
// 'People who fight fire with fire usually end up with ashes.'
// 'I always advise people never to give advice.'
// 'We give advice by the bucket, but take it by the grain.'
// 'Always and never are two words you should always remember never to use.' 
// 'Keep yourself busy in remembering your own faults, so that you have no time left to remember the faults of others.' 
// 'Don’t let a thief into your house three times. The first time was enough. The second time was a chance. The third time means you’re stupid.' 
// 'All the advice in the world will never help you until you help yourself.'
// 'Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.'
// 'We cannot change the cards we are dealt, just how we play the hand.' 
// 'The best way to succeed in life is to act on the advice we give to others.'