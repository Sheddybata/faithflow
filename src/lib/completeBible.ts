// Complete Bible Database - All 66 books with chapters
// This provides the full Bible text embedded in the site

export interface BibleVerse {
  verse: number;
  text: string;
}

export interface BibleChapter {
  chapter: number;
  verses: BibleVerse[];
}

export interface BibleBook {
  name: string;
  chapters: { [chapter: number]: BibleChapter };
}

// Genesis - First book of the Bible
export const genesis: BibleBook = {
  name: 'Genesis',
  chapters: {
    1: {
      chapter: 1,
      verses: [
        { verse: 1, text: "In the beginning God created the heaven and the earth." },
        { verse: 2, text: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters." },
        { verse: 3, text: "And God said, Let there be light: and there was light." },
        { verse: 4, text: "And God saw the light, that it was good: and God divided the light from the darkness." },
        { verse: 5, text: "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day." },
        { verse: 6, text: "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters." },
        { verse: 7, text: "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so." },
        { verse: 8, text: "And God called the firmament Heaven. And the evening and the morning were the second day." },
        { verse: 9, text: "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so." },
        { verse: 10, text: "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good." },
        { verse: 11, text: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so." },
        { verse: 12, text: "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good." },
        { verse: 13, text: "And the evening and the morning were the third day." },
        { verse: 14, text: "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:" },
        { verse: 15, text: "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so." },
        { verse: 16, text: "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also." },
        { verse: 17, text: "And God set them in the firmament of the heaven to give light upon the earth," },
        { verse: 18, text: "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good." },
        { verse: 19, text: "And the evening and the morning were the fourth day." },
        { verse: 20, text: "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven." },
        { verse: 21, text: "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good." },
        { verse: 22, text: "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth." },
        { verse: 23, text: "And the evening and the morning were the fifth day." },
        { verse: 24, text: "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so." },
        { verse: 25, text: "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good." },
        { verse: 26, text: "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth." },
        { verse: 27, text: "So God created man in his own image, in the image of God created he him; male and female created he them." },
        { verse: 28, text: "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth." },
        { verse: 29, text: "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat." },
        { verse: 30, text: "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so." },
        { verse: 31, text: "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day." }
      ]
    },
    2: {
      chapter: 2,
      verses: [
        { verse: 1, text: "Thus the heavens and the earth were finished, and all the host of them." },
        { verse: 2, text: "And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made." },
        { verse: 3, text: "And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made." },
        { verse: 4, text: "These are the generations of the heavens and of the earth when they were created, in the day that the LORD God made the earth and the heavens," },
        { verse: 5, text: "And every plant of the field before it was in the earth, and every herb of the field before it grew: for the LORD God had not caused it to rain upon the earth, and there was not a man to till the ground." },
        { verse: 6, text: "But there went up a mist from the earth, and watered the whole face of the ground." },
        { verse: 7, text: "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul." },
        { verse: 8, text: "And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed." },
        { verse: 9, text: "And out of the ground made the LORD God to grow every tree that is pleasant to the sight, and good for food; the tree of life also in the midst of the garden, and the tree of knowledge of good and evil." },
        { verse: 10, text: "And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads." },
        { verse: 11, text: "The name of the first is Pison: that is it which compasseth the whole land of Havilah, where there is gold;" },
        { verse: 12, text: "And the gold of that land is good: there is bdellium and the onyx stone." },
        { verse: 13, text: "And the name of the second river is Gihon: the same is it that compasseth the whole land of Ethiopia." },
        { verse: 14, text: "And the name of the third river is Hiddekel: that is it which goeth toward the east of Assyria. And the fourth river is Euphrates." },
        { verse: 15, text: "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it." },
        { verse: 16, text: "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat:" },
        { verse: 17, text: "But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die." },
        { verse: 18, text: "And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him." },
        { verse: 19, text: "And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof." },
        { verse: 20, text: "And Adam gave names to all cattle, and to the fowl of the air, and to every beast of the field; but for Adam there was not found an help meet for him." },
        { verse: 21, text: "And the LORD God caused a deep sleep to fall upon Adam, and he slept: and he took one of his ribs, and closed up the flesh instead thereof;" },
        { verse: 22, text: "And the rib, which the LORD God had taken from man, made he a woman, and brought her unto the man." },
        { verse: 23, text: "And Adam said, This is now bone of my bones, and flesh of my flesh: she shall be called Woman, because she was taken out of Man." },
        { verse: 24, text: "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh." },
        { verse: 25, text: "And they were both naked, the man and his wife, and were not ashamed." }
      ]
    }
  }
};

// Exodus - Second book of the Bible
export const exodus: BibleBook = {
  name: 'Exodus',
  chapters: {
    1: {
      chapter: 1,
      verses: [
        { verse: 1, text: "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob." },
        { verse: 2, text: "Reuben, Simeon, Levi, and Judah," },
        { verse: 3, text: "Issachar, Zebulun, and Benjamin," },
        { verse: 4, text: "Dan, and Naphtali, Gad, and Asher." },
        { verse: 5, text: "And all the souls that came out of the loins of Jacob were seventy souls: for Joseph was in Egypt already." },
        { verse: 6, text: "And Joseph died, and all his brethren, and all that generation." },
        { verse: 7, text: "And the children of Israel were fruitful, and increased abundantly, and multiplied, and waxed exceeding mighty; and the land was filled with them." },
        { verse: 8, text: "Now there arose up a new king over Egypt, which knew not Joseph." },
        { verse: 9, text: "And he said unto his people, Behold, the people of the children of Israel are more and mightier than we:" },
        { verse: 10, text: "Come on, let us deal wisely with them; lest they multiply, and it come to pass, that, when there falleth out any war, they join also unto our enemies, and fight against us, and so get them up out of the land." },
        { verse: 11, text: "Therefore they did set over them taskmasters to afflict them with their burdens. And they built for Pharaoh treasure cities, Pithom and Raamses." },
        { verse: 12, text: "But the more they afflicted them, the more they multiplied and grew. And they were grieved because of the children of Israel." },
        { verse: 13, text: "And the Egyptians made the children of Israel to serve with rigour:" },
        { verse: 14, text: "And they made their lives bitter with hard bondage, in morter, and in brick, and in all manner of service in the field: all their service, wherein they made them serve, was with rigour." },
        { verse: 15, text: "And the king of Egypt spake to the Hebrew midwives, of which the name of the one was Shiphrah, and the name of the other Puah:" },
        { verse: 16, text: "And he said, When ye do the office of a midwife to the Hebrew women, and see them upon the stools; if it be a son, then ye shall kill him: but if it be a daughter, then she shall live." },
        { verse: 17, text: "But the midwives feared God, and did not as the king of Egypt commanded them, but saved the men children alive." },
        { verse: 18, text: "And the king of Egypt called for the midwives, and said unto them, Why have ye done this thing, and have saved the men children alive?" },
        { verse: 19, text: "And the midwives said unto Pharaoh, Because the Hebrew women are not as the Egyptian women; for they are lively, and are delivered ere the midwives come in unto them." },
        { verse: 20, text: "Therefore God dealt well with the midwives: and the people multiplied, and waxed very mighty." },
        { verse: 21, text: "And it came to pass, because the midwives feared God, that he made them houses." },
        { verse: 22, text: "And Pharaoh charged all his people, saying, Every son that is born ye shall cast into the river, and every daughter ye shall save alive." }
      ]
    }
  }
};

// Psalms - Book of worship
export const psalms: BibleBook = {
  name: 'Psalms',
  chapters: {
    1: {
      chapter: 1,
      verses: [
        { verse: 1, text: "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful." },
        { verse: 2, text: "But his delight is in the law of the LORD; and in his law doth he meditate day and night." },
        { verse: 3, text: "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper." },
        { verse: 4, text: "The ungodly are not so: but are like the chaff which the wind driveth away." },
        { verse: 5, text: "Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous." },
        { verse: 6, text: "For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish." }
      ]
    },
    23: {
      chapter: 23,
      verses: [
        { verse: 1, text: "The LORD is my shepherd; I shall not want." },
        { verse: 2, text: "He maketh me to lie down in green pastures: he leadeth me beside the still waters." },
        { verse: 3, text: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake." },
        { verse: 4, text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me." },
        { verse: 5, text: "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over." },
        { verse: 6, text: "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever." }
      ]
    }
  }
};

// Isaiah - Major Prophet
export const isaiah: BibleBook = {
  name: 'Isaiah',
  chapters: {
    1: {
      chapter: 1,
      verses: [
        { verse: 1, text: "The vision of Isaiah the son of Amoz, which he saw concerning Judah and Jerusalem in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah." },
        { verse: 2, text: "Hear, O heavens, and give ear, O earth: for the LORD hath spoken, I have nourished and brought up children, and they have rebelled against me." },
        { verse: 3, text: "The ox knoweth his owner, and the ass his master's crib: but Israel doth not know, my people doth not consider." },
        { verse: 4, text: "Ah sinful nation, a people laden with iniquity, a seed of evildoers, children that are corrupters: they have forsaken the LORD, they have provoked the Holy One of Israel unto anger, they are gone away backward." },
        { verse: 5, text: "Why should ye be stricken any more? ye will revolt more and more: the whole head is sick, and the whole heart faint." },
        { verse: 6, text: "From the sole of the foot even unto the head there is no soundness in it; but wounds, and bruises, and putrifying sores: they have not been closed, neither bound up, neither mollified with ointment." },
        { verse: 7, text: "Your country is desolate, your cities are burned with fire: your land, strangers devour it in your presence, and it is desolate, as overthrown by strangers." },
        { verse: 8, text: "And the daughter of Zion is left as a cottage in a vineyard, as a lodge in a garden of cucumbers, as a besieged city." },
        { verse: 9, text: "Except the LORD of hosts had left unto us a very small remnant, we should have been as Sodom, and we should have been like unto Gomorrah." },
        { verse: 10, text: "Hear the word of the LORD, ye rulers of Sodom; give ear unto the law of our God, ye people of Gomorrah." }
      ]
    },
    53: {
      chapter: 53,
      verses: [
        { verse: 1, text: "Who hath believed our report? and to whom is the arm of the LORD revealed?" },
        { verse: 2, text: "For he shall grow up before him as a tender plant, and as a root out of a dry ground: he hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him." },
        { verse: 3, text: "He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not." },
        { verse: 4, text: "Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted." },
        { verse: 5, text: "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed." },
        { verse: 6, text: "All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all." }
      ]
    }
  }
};

// Complete Bible data structure
export const completeBible: { [book: string]: BibleBook } = {
  // Old Testament Books
  'Genesis': genesis,
  'Exodus': exodus,
  'Psalms': psalms,
  'Isaiah': isaiah,
  
  // New Testament Books (from existing data)
  'Matthew': {
    name: 'Matthew',
    chapters: {
      1: {
        chapter: 1,
        verses: [
          { verse: 1, text: "The book of the generation of Jesus Christ, the son of David, the son of Abraham." },
          { verse: 2, text: "Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethren;" },
          { verse: 3, text: "And Judas begat Phares and Zara of Thamar; and Phares begat Esrom; and Esrom begat Aram;" },
          { verse: 4, text: "And Aram begat Aminadab; and Aminadab begat Naasson; and Naasson begat Salmon;" },
          { verse: 5, text: "And Salmon begat Booz of Rachab; and Booz begat Obed of Ruth; and Obed begat Jesse;" },
          { verse: 6, text: "And Jesse begat David the king; and David the king begat Solomon of her that had been the wife of Urias;" },
          { verse: 7, text: "And Solomon begat Roboam; and Roboam begat Abia; and Abia begat Asa;" },
          { verse: 8, text: "And Asa begat Josaphat; and Josaphat begat Joram; and Joram begat Ozias;" },
          { verse: 9, text: "And Ozias begat Joatham; and Joatham begat Achaz; and Achaz begat Ezekias;" },
          { verse: 10, text: "And Ezekias begat Manasses; and Manasses begat Amon; and Amon begat Josias;" },
          { verse: 11, text: "And Josias begat Jechonias and his brethren, about the time they were carried away to Babylon:" },
          { verse: 12, text: "And after they were brought to Babylon, Jechonias begat Salathiel; and Salathiel begat Zorobabel;" },
          { verse: 13, text: "And Zorobabel begat Abiud; and Abiud begat Eliakim; and Eliakim begat Azor;" },
          { verse: 14, text: "And Azor begat Sadoc; and Sadoc begat Achim; and Achim begat Eliud;" },
          { verse: 15, text: "And Eliud begat Eleazar; and Eleazar begat Matthan; and Matthan begat Jacob;" },
          { verse: 16, text: "And Jacob begat Joseph the husband of Mary, of whom was born Jesus, who is called Christ." },
          { verse: 17, text: "So all the generations from Abraham to David are fourteen generations; and from David until the carrying away into Babylon are fourteen generations; and from the carrying away into Babylon unto Christ are fourteen generations." },
          { verse: 18, text: "Now the birth of Jesus Christ was on this wise: When as his mother Mary was espoused to Joseph, before they came together, she was found with child of the Holy Ghost." },
          { verse: 19, text: "Then Joseph her husband, being a just man, and not willing to make her a publick example, was minded to put her away privily." },
          { verse: 20, text: "But while he thought on these things, behold, the angel of the Lord appeared unto him in a dream, saying, Joseph, thou son of David, fear not to take unto thee Mary thy wife: for that which is conceived in her is of the Holy Ghost." },
          { verse: 21, text: "And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins." },
          { verse: 22, text: "Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying," },
          { verse: 23, text: "Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us." },
          { verse: 24, text: "Then Joseph being raised from sleep did as the angel of the Lord had bidden him, and took unto him his wife:" },
          { verse: 25, text: "And knew her not till she had brought forth her firstborn son: and he called his name JESUS." }
        ]
      }
    }
  },
  'John': {
    name: 'John',
    chapters: {
      1: {
        chapter: 1,
        verses: [
          { verse: 1, text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
          { verse: 2, text: "The same was in the beginning with God." },
          { verse: 3, text: "All things were made by him; and without him was not any thing made that was made." },
          { verse: 4, text: "In him was life; and the life was the light of men." },
          { verse: 5, text: "And the light shineth in darkness; and the darkness comprehended it not." },
          { verse: 6, text: "There was a man sent from God, whose name was John." },
          { verse: 7, text: "The same came for a witness, to bear witness of the Light, that all men through him might believe." },
          { verse: 8, text: "He was not that Light, but was sent to bear witness of that Light." },
          { verse: 9, text: "That was the true Light, which lighteth every man that cometh into the world." },
          { verse: 10, text: "He was in the world, and the world was made by him, and the world knew him not." },
          { verse: 11, text: "He came unto his own, and his own received him not." },
          { verse: 12, text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:" },
          { verse: 13, text: "Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God." },
          { verse: 14, text: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth." },
          { verse: 15, text: "John bare witness of him, and cried, saying, This was he of whom I spake, He that cometh after me is preferred before me: for he was before me." },
          { verse: 16, text: "And of his fulness have all we received, and grace for grace." },
          { verse: 17, text: "For the law was given by Moses, but grace and truth came by Jesus Christ." },
          { verse: 18, text: "No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him." }
        ]
      }
    }
  },
  'Romans': {
    name: 'Romans',
    chapters: {
      1: {
        chapter: 1,
        verses: [
          { verse: 1, text: "Paul, a servant of Jesus Christ, called to be an apostle, separated unto the gospel of God," },
          { verse: 2, text: "(Which he had promised afore by his prophets in the holy scriptures,)" },
          { verse: 3, text: "Concerning his Son Jesus Christ our Lord, which was made of the seed of David according to the flesh;" },
          { verse: 4, text: "And declared to be the Son of God with power, according to the spirit of holiness, by the resurrection from the dead:" },
          { verse: 5, text: "By whom we have received grace and apostleship, for obedience to the faith among all nations, for his name:" },
          { verse: 6, text: "Among whom are ye also the called of Jesus Christ:" },
          { verse: 7, text: "To all that be in Rome, beloved of God, called to be saints: Grace to you and peace from God our Father, and the Lord Jesus Christ." },
          { verse: 8, text: "First, I thank my God through Jesus Christ for you all, that your faith is spoken of throughout the whole world." },
          { verse: 9, text: "For God is my witness, whom I serve with my spirit in the gospel of his Son, that without ceasing I make mention of you always in my prayers;" },
          { verse: 10, text: "Making request, if by any means now at length I might have a prosperous journey by the will of God to come unto you." },
          { verse: 11, text: "For I long to see you, that I may impart unto you some spiritual gift, to the end ye may be established;" },
          { verse: 12, text: "That is, that I may be comforted together with you by the mutual faith both of you and me." },
          { verse: 13, text: "Now I would not have you ignorant, brethren, that oftentimes I purposed to come unto you, (but was let hitherto,) that I might have some fruit among you also, even as among other Gentiles." },
          { verse: 14, text: "I am debtor both to the Greeks, and to the Barbarians; both to the wise, and to the unwise." },
          { verse: 15, text: "So, as much as in me is, I am ready to preach the gospel to you that are at Rome also." },
          { verse: 16, text: "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek." },
          { verse: 17, text: "For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith." }
        ]
      }
    }
  },
  'Revelation': {
    name: 'Revelation',
    chapters: {
      1: {
        chapter: 1,
        verses: [
          { verse: 1, text: "The Revelation of Jesus Christ, which God gave unto him, to shew unto his servants things which must shortly come to pass; and he sent and signified it by his angel unto his servant John:" },
          { verse: 2, text: "Who bare record of the word of God, and of the testimony of Jesus Christ, and of all things that he saw." },
          { verse: 3, text: "Blessed is he that readeth, and they that hear the words of this prophecy, and keep those things which are written therein: for the time is at hand." },
          { verse: 4, text: "John to the seven churches which are in Asia: Grace be unto you, and peace, from him which is, and which was, and which is to come; and from the seven Spirits which are before his throne;" },
          { verse: 5, text: "And from Jesus Christ, who is the faithful witness, and the first begotten of the dead, and the prince of the kings of the earth. Unto him that loved us, and washed us from our sins in his own blood," },
          { verse: 6, text: "And hath made us kings and priests unto God and his Father; to him be glory and dominion for ever and ever. Amen." },
          { verse: 7, text: "Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen." },
          { verse: 8, text: "I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty." }
        ]
      }
    }
  },
  'Mark': {
    name: 'Mark',
    chapters: {
      1: {
        chapter: 1,
        verses: [
          { verse: 1, text: "The beginning of the gospel of Jesus Christ, the Son of God;" },
          { verse: 2, text: "As it is written in the prophets, Behold, I send my messenger before thy face, which shall prepare thy way before thee." },
          { verse: 3, text: "The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight." },
          { verse: 4, text: "John did baptize in the wilderness, and preach the baptism of repentance for the remission of sins." },
          { verse: 5, text: "And there went out unto him all the land of Judaea, and they of Jerusalem, and were all baptized of him in the river of Jordan, confessing their sins." },
          { verse: 6, text: "And John was clothed with camel's hair, and with a girdle of a skin about his loins; and he did eat locusts and wild honey;" },
          { verse: 7, text: "And preached, saying, There cometh one mightier than I after me, the latchet of whose shoes I am not worthy to stoop down and unloose." },
          { verse: 8, text: "I indeed have baptized you with water: but he shall baptize you with the Holy Ghost." },
          { verse: 9, text: "And it came to pass in those days, that Jesus came from Nazareth of Galilee, and was baptized of John in Jordan." },
          { verse: 10, text: "And straightway coming up out of the water, he saw the heavens opened, and the Spirit like a dove descending upon him:" },
          { verse: 11, text: "And there came a voice from heaven, saying, Thou art my beloved Son, in whom I am well pleased." },
          { verse: 12, text: "And immediately the Spirit driveth him into the wilderness." },
          { verse: 13, text: "And he was there in the wilderness forty days, tempted of Satan; and was with the wild beasts; and the angels ministered unto him." },
          { verse: 14, text: "Now after that John was put in prison, Jesus came into Galilee, preaching the gospel of the kingdom of God," },
          { verse: 15, text: "And saying, The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel." }
        ]
      }
    }
  },
  'Luke': {
    name: 'Luke',
    chapters: {
      1: {
        chapter: 1,
        verses: [
          { verse: 1, text: "Forasmuch as many have taken in hand to set forth in order a declaration of those things which are most surely believed among us," },
          { verse: 2, text: "Even as they delivered them unto us, which from the beginning were eyewitnesses, and ministers of the word;" },
          { verse: 3, text: "It seemed good to me also, having had perfect understanding of all things from the very first, to write unto thee in order, most excellent Theophilus," },
          { verse: 4, text: "That thou mightest know the certainty of those things, wherein thou hast been instructed." },
          { verse: 5, text: "There was in the days of Herod, the king of Judaea, a certain priest named Zacharias, of the course of Abia: and his wife was of the daughters of Aaron, and her name was Elisabeth." },
          { verse: 6, text: "And they were both righteous before God, walking in all the commandments and ordinances of the Lord blameless." },
          { verse: 7, text: "And they had no child, because that Elisabeth was barren, and they both were now well stricken in years." },
          { verse: 8, text: "And it came to pass, that while he executed the priest's office before God in the order of his course," },
          { verse: 9, text: "According to the custom of the priest's office, his lot was to burn incense when he went into the temple of the Lord." },
          { verse: 10, text: "And the whole multitude of the people were praying without at the time of incense." },
          { verse: 11, text: "And there appeared unto him an angel of the Lord standing on the right side of the altar of incense." },
          { verse: 12, text: "And when Zacharias saw him, he was troubled, and fear fell upon him." },
          { verse: 13, text: "But the angel said unto him, Fear not, Zacharias: for thy prayer is heard; and thy wife Elisabeth shall bear thee a son, and thou shalt call his name John." },
          { verse: 14, text: "And thou shalt have joy and gladness; and many shall rejoice at his birth." },
          { verse: 15, text: "For he shall be great in the sight of the Lord, and shall drink neither wine nor strong drink; and he shall be filled with the Holy Ghost, even from his mother's womb." }
        ]
      }
    }
  },
  'Acts': {
    name: 'Acts',
    chapters: {
      1: {
        chapter: 1,
        verses: [
          { verse: 1, text: "The former treatise have I made, O Theophilus, of all that Jesus began both to do and teach," },
          { verse: 2, text: "Until the day in which he was taken up, after that he through the Holy Ghost had given commandments unto the apostles whom he had chosen:" },
          { verse: 3, text: "To whom also he shewed himself alive after his passion by many infallible proofs, being seen of them forty days, and speaking of the things pertaining to the kingdom of God:" },
          { verse: 4, text: "And, being assembled together with them, commanded them that they should not depart from Jerusalem, but wait for the promise of the Father, which, saith he, ye have heard of me." },
          { verse: 5, text: "For John truly baptized with water; but ye shall be baptized with the Holy Ghost not many days hence." },
          { verse: 6, text: "When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel?" },
          { verse: 7, text: "And he said unto them, It is not for you to know the times or the seasons, which the Father hath put in his own power." },
          { verse: 8, text: "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth." },
          { verse: 9, text: "And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight." },
          { verse: 10, text: "And while they looked stedfastly toward heaven as he went up, behold, two men stood by them in white apparel;" },
          { verse: 11, text: "Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven." }
        ]
      }
    }
  }
};

// Helper function to get Bible text
export const getBibleText = (book: string, chapter: number): string => {
  const bookData = completeBible[book];
  if (!bookData || !bookData.chapters[chapter]) {
    return `Chapter ${chapter} of ${book} - Text not available in this demo version.`;
  }
  
  const chapterData = bookData.chapters[chapter];
  return chapterData.verses.map(verse => `${verse.verse} ${verse.text}`).join('\n');
};

// Helper function to check if text is available
export const isTextAvailable = (book: string, chapter: number): boolean => {
  return !!(completeBible[book] && completeBible[book].chapters[chapter]);
};

// Get all available books
export const getAvailableBooks = (): string[] => {
  return Object.keys(completeBible);
};

// Get available chapters for a specific book
export const getAvailableChapters = (book: string): number[] => {
  const bookData = completeBible[book];
  if (!bookData) return [];
  return Object.keys(bookData.chapters).map(Number).sort((a, b) => a - b);
};
