Dana =[ "Who were they? All these mothers who seem mothers to me still?\n\nMy father, who mothered the concessions of mortality by dying in my childhood, giving birth to me in hospice care, two floors above the maternity ward where my mom, eight years before, saw me into the world.\n\nSo her of course. But she is where this poem’s going.\n\nJune, who was someone to watch over me, desirous of children but childless, she & I lived in a mutual surrogacy. She died with my mother as her daughter, & I as her grandson, recipient of doting forgiveness, flawed inheritor of her one conceptual novel, consisting of the Golden Rule repeated to infinity. Her being was the hotel in The Shining had it been enlivened by impossible benevolence instead. By which I mean she was so nice that it was weird.", "Then the Barry Manilow mother-hood records in the living room which bore my dependence on preposterous emotion & show. His nurturing colluded with the neediness of children as it lived & lives in me. It nursed some pleading chintz my art relies on even now. Julie Andrews mom of me as well when I go big & sweet to get my way.\n\nAlso the Ella Fitzgerald cassette in the Honda, the mother one reveres. Pristine her voices feel for how ebullience to gutter grief & every nuance in between was waiting to be coaxed from the material of life (I mean its music) if intelligence & discipline were paid. To her I would remain a disappointment, & she remained remote in all her generous perfections.\n\nFt. Thomas where we lived, a nursery of whiteness, so plain in being racist it was clear. You could see the white & hateful core through every opaque surface. These orders of transparency were births in their malignancy, of what to be against in one’s becoming. A feel for the structures of division how we’re cut by race & class & sex so then The Father in his local form of hoarding.\n\nChapman, Rex, who I loved with the fervor of a Bieber-ite, who bore what’s called the ‘girl-ish heart aflutter’ in my body. It beat its wings in frenzy as I idolized him so. I wanted to cry like Beatlemania when he dropped 25 on U of L his freshman year. No one told me my performance of idolatry was femme.\n\nThe boys who were my friends found me so weird in this I wonder now if they thought making fun of me redundant. Some of those boys were my mothers as well.\n\nBlake so pretty, shy & duty bound. Jacob von Gunten. He mothered sanity & keel, & too their limits, revealing the harm of normed wellness in the bedtime stories we told one another, 9 or 10 in bed together, mother & child & child & mother.", "Geoff, the mother I would bury in his youth, though then, in the time of his maternity, he gave me life as if he’d stolen it from god on my behalf. His delight & his approval were my joy & aspiration. His charms surpassed the mesmerism Orpheus possessed, deployed in service of whatever’s endless lulz. He had some Mary Poppins & the rarest bedside manner, Lake District with his bandages & ornery soups for spirit. I loved him past the tragedy of Oedipus in puppy ways & chastity still later, sitting shiva with the future we were going to spend together. His mother love was funeral & teen. Now there’s nothing left to know of its exhaustion.\n\nSome mothers only last a season. Or a day. Or the life of the party. There were only two more mothers in Kentucky left for me.\n\nThe first was Allen Ginsberg, who arrived by way of that cultural line I had followed form the Beatles, on to Dylan where I found him, this sort of interesting guy at Bob’s side, sensing he’s the guru but not being quite sure how. Already invested in what I took to be the outlaw canon, Allen was skeleton key, giving not only his art, poetics clear in DIY articulation, & too the queer in factuality, modernity, it’s cosmopolitan glory, experimental & demanding no more fealty to its aspects than what could be accessed for our survival, & the suddenness of vision & of pleasure.","& my mother’s an extraordinary typist by the way. The one who held me in her body, near her body, kept me fed.\n\nI’ll say more about her soon. What’s deep & simple?But now I’ll say I’d nearly left the nest. My last Kentucky mom would see me off into the poem. & though I met her long before I met Allen, the realization didn’t come until much later. That she, more than anyone else, was the matriarch that opened writing’s world.\n\nO Veronica Sawyer, my mother. I was watching Heathers all the time. O Veronica you cared for me so well. Your affected monocle, the way you dove into your journal, an avenging angel coming back from hell at 3pm, flown into acerbic pique by spiritual distress.\n\nYou were young to have been caring for a son three years your junior. You were little more than 17 yourself.\n\nLord I tried to mirror you. I failed. Yet there you were. As reliable as emptiness of metric on the testing day. As sharp as #2’s are for the throat.","These are my Kentucky mothers then. The mothers of my heart.\n\n& I’ve been reading that Yepez book on Olson, The Empire of Neomemory, & good lord it is astonishing. He talks about how Olson attempts to construct an alter-patriarchy on the ruins of an already false one. Part of his martial, nationalist project of mythos. Stacking universe & state & self on Pound-carved Plymouth Rock of cock & balls.\n\nYepez says, in essence, Olson’s thing is an elaborate psycho-social misprision. No less interesting because of that, & perhaps a great deal more. It’s quite revealing.\n\nBut what of this. What I’ve been writing. How to think it?\n\nMany gendered micro-lineage,"]

opening = "Who were they? All these mothers who seem mothers to me still?"

mothers = ["Dana, who impregnated me with this brain child; a complete stranger just a week ago. Your mothers who have been my mothers, and your mothers who will soon become my mothers. \n\nSo sometimes I put my text on top of your text, sometimes my text is distant from yours, and sometimes they are a coherent body. But, however they are intertwined, this is a poem dedicated to all the mothers whomever your children are.","My mother, of course, who’s body I once made home. ", "Gu Cheng, who’s poem I have suckled on, thus, the seed of romantics sprouted itself in me long before I understood the word romantics. The man who cut up his trousers and wore it as a hat. Gu Cheng, the living strings of Vladimir Mayakovsky’s ‘If you prefer, / I’ll be pure raging meat, / or if you prefer, / as the sky changes tone, / I’ll be absolutely tender, / not a man, but a cloud in trouser!’ \n\nHis wife, killed by an ax to the head. His killing, his fragile heart of a poet that cannot withstand the brutal collision of the ideal and the real. I have worshiped his fragileness, his violence, and his rage; His madness. He gave me the heart of a poet, but not the courage; abandon his children for his own splendid ‘waywardness’. I loved him still, in my own wayward ways.","The girl that used to live 20 floors above me when we were in school together, whose name I now give to the barista every morning at the coffee. Alas, they always wrote it down wrong (Rupi). Ruby, the punk rock girl that I would create in my movies. To this day, I never created any movies about punk rock girls. \n\nBut, if I do. \n\nIt would be about our skinned knees in the mosh pit made of sweaty dudes, and the nihilistic girlfriends, and the chaotic world of your paintings, and our instant poems and long talks nights after nights, and of course, your cat who couldn't even jump on a table." ]

var poem 
var output
var i
var j

function setup() {

    createCanvas(window.innerWidth, 1200)
    poem = makePoem()
    i = 0
    j = 0
    output = ""

    var col = color(0,0,120)
    //read poem
    txt = createDiv('');
    var txt = createDiv("<a href='http://sourpress.org/mothers/yuzhu'target='_blank'>READ MY POEM</a>");
    txt.position(10, 20);
    txt.style('color',col);
    txt.style('font-size', "12px")
    txt.style('font-style', "Italic")
    txt.style('font-family', "times")

//Dana
    txt = createDiv('');
    var txt = createDiv("<a href='http://sourpress.org/mothers/pdf/DanaWard.pdf'target='_blank'>A KENTUCKY OF MOTHERS, Original Poem by Dana Ward</a>");
    txt.position(10, 40);
    txt.style('color',col);
    txt.style('font-size', "12px")
    txt.style('font-style', "Italic")
    txt.style('font-family', "times")
    
}


function draw() {

	createCanvas(window.innerWidth, 1200)
    background(255)
    frameRate(15)



	makeDana()

//my poems 
	fill(145,0,0)
	textStyle(BOLD)
	textFont("times", 15)
	letter = poem[j]
	output = output + letter 
	text (output, 10, 366, width/1.04, 900)

	j++

	if (j > poem.length-1) {
		j = 0
		output = ""
		poem = makePoem()
	}



}


function makePoem(){

	poem = opening + "\n\n" + random(mothers)
	return poem
}




function makeDana(){

	fill(0)
    textStyle(BOLD)
    textFont("times", 25)
    text("A KENTUCKY OF MOTHERS" , 10, 110)
    fill(150)
    textFont("times", 15)
    textStyle(ITALIC)
    text("By: Dana Ward", 10, 140)
    textStyle(BOLD)
    //frameRate(0.05)
    text(Dana[i], 10, 160, width/1.04, 900)

	if (frameCount%150==0 && i< Dana.length-1){  
       i++ ;
}

if (i == Dana.length-1){
	    i = 0
}

}

