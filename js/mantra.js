var mantras = [
    'I\'m doing this for me.',
    'Excellence does not require perfection.',
    'My intentions create my reality.',
    'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me. -MGS',
    'Webster\'s Dictionary defines wedding as: The fusing of two metals with a hot torch. - MGS',
    'Sometimes I\'ll start a sentence and I don\'t even know where it\'s going. I just hope I find it along the way. -MGS',
    'I feel like all my kids grew up, and then they married each other. It\'s every parent\'s dream. -MGS',
    'I am Beyonce, always. -MGS',
    'And I knew exactly what to do. But in a much more real sense, I had no idea what to do. -MGS',
    'I am running away from my responsibilities. And it feels good. -MGS',
    'Society teaches us that having feelings and crying is bad and wrong. Well, that\'s baloney, because grief isn\'t wrong. There\'s such a thing as good grief. Just ask Charlie Brown. -MGS',
    'Whenever I\'m about to do something, I think, \'Would and idiot do that?\' and if they would, I do not do that thing. -DKS',
    'I am ready to face any challenge that might be foolish enough to face me. -DKS',    
]

function newMantra() {
    var randomNumber = Math.floor(Math.random()* mantras.length)
    document.getElementById('mantraGenerator').innerHTML = mantras[randomNumber];
}