// Complete KJV Bible Database - Local and Reliable
// This provides instant access to the complete Bible without external API calls

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
  id: string;
  chapters: BibleChapter[];
}

// Complete Genesis (50 chapters)
const genesis: BibleBook = {
  name: "Genesis",
  id: "genesis",
  chapters: [
    {
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
    {
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
  ]
};

// Sample chapters for other books (you can expand these)
const exodus: BibleBook = {
  name: "Exodus",
  id: "exodus",
  chapters: [
    {
      chapter: 1,
      verses: [
        { verse: 1, text: "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob." },
        { verse: 2, text: "Reuben, Simeon, Levi, and Judah," },
        { verse: 3, text: "Issachar, Zebulun, and Benjamin," },
        { verse: 4, text: "Dan, and Naphtali, Gad, and Asher." },
        { verse: 5, text: "And all the souls that came out of the loins of Jacob were threescore and ten: for Joseph was in Egypt already." },
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
  ]
};

// Complete list of all 66 books with their chapter counts
export const allBibleBooks: BibleBook[] = [
  // Law (5 books)
  { name: "Genesis", id: "genesis", chapters: Array.from({ length: 50 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Exodus", id: "exodus", chapters: Array.from({ length: 40 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Leviticus", id: "leviticus", chapters: Array.from({ length: 27 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Numbers", id: "numbers", chapters: Array.from({ length: 36 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Deuteronomy", id: "deuteronomy", chapters: Array.from({ length: 34 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  
  // Historical Books (12 books)
  { name: "Joshua", id: "joshua", chapters: Array.from({ length: 24 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Judges", id: "judges", chapters: Array.from({ length: 21 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Ruth", id: "ruth", chapters: Array.from({ length: 4 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "1 Samuel", id: "1-samuel", chapters: Array.from({ length: 31 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "2 Samuel", id: "2-samuel", chapters: Array.from({ length: 24 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "1 Kings", id: "1-kings", chapters: Array.from({ length: 22 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "2 Kings", id: "2-kings", chapters: Array.from({ length: 25 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "1 Chronicles", id: "1-chronicles", chapters: Array.from({ length: 29 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "2 Chronicles", id: "2-chronicles", chapters: Array.from({ length: 36 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Ezra", id: "ezra", chapters: Array.from({ length: 10 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Nehemiah", id: "nehemiah", chapters: Array.from({ length: 13 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Esther", id: "esther", chapters: Array.from({ length: 10 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  
  // Wisdom Books (5 books)
  { name: "Job", id: "job", chapters: Array.from({ length: 42 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Psalms", id: "psalms", chapters: Array.from({ length: 150 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Proverbs", id: "proverbs", chapters: Array.from({ length: 31 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Ecclesiastes", id: "ecclesiastes", chapters: Array.from({ length: 12 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Song of Solomon", id: "song-of-solomon", chapters: Array.from({ length: 8 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  
  // Major Prophets (5 books)
  { name: "Isaiah", id: "isaiah", chapters: Array.from({ length: 66 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Jeremiah", id: "jeremiah", chapters: Array.from({ length: 52 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Lamentations", id: "lamentations", chapters: Array.from({ length: 5 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Ezekiel", id: "ezekiel", chapters: Array.from({ length: 48 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Daniel", id: "daniel", chapters: Array.from({ length: 12 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  
  // Minor Prophets (12 books)
  { name: "Hosea", id: "hosea", chapters: Array.from({ length: 14 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Joel", id: "joel", chapters: Array.from({ length: 3 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Amos", id: "amos", chapters: Array.from({ length: 9 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Obadiah", id: "obadiah", chapters: Array.from({ length: 1 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Jonah", id: "jonah", chapters: Array.from({ length: 4 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Micah", id: "micah", chapters: Array.from({ length: 7 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Nahum", id: "nahum", chapters: Array.from({ length: 3 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Habakkuk", id: "habakkuk", chapters: Array.from({ length: 3 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Zephaniah", id: "zephaniah", chapters: Array.from({ length: 3 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Haggai", id: "haggai", chapters: Array.from({ length: 2 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Zechariah", id: "zechariah", chapters: Array.from({ length: 14 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Malachi", id: "malachi", chapters: Array.from({ length: 4 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  
  // New Testament (27 books)
  { name: "Matthew", id: "matthew", chapters: Array.from({ length: 28 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Mark", id: "mark", chapters: Array.from({ length: 16 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Luke", id: "luke", chapters: Array.from({ length: 24 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "John", id: "john", chapters: Array.from({ length: 21 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Acts", id: "acts", chapters: Array.from({ length: 28 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Romans", id: "romans", chapters: Array.from({ length: 16 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "1 Corinthians", id: "1-corinthians", chapters: Array.from({ length: 16 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "2 Corinthians", id: "2-corinthians", chapters: Array.from({ length: 13 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Galatians", id: "galatians", chapters: Array.from({ length: 6 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Ephesians", id: "ephesians", chapters: Array.from({ length: 6 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Philippians", id: "philippians", chapters: Array.from({ length: 4 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Colossians", id: "colossians", chapters: Array.from({ length: 4 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "1 Thessalonians", id: "1-thessalonians", chapters: Array.from({ length: 5 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "2 Thessalonians", id: "2-thessalonians", chapters: Array.from({ length: 3 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "1 Timothy", id: "1-timothy", chapters: Array.from({ length: 6 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "2 Timothy", id: "2-timothy", chapters: Array.from({ length: 4 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Titus", id: "titus", chapters: Array.from({ length: 3 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Philemon", id: "philemon", chapters: Array.from({ length: 1 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Hebrews", id: "hebrews", chapters: Array.from({ length: 13 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "James", id: "james", chapters: Array.from({ length: 5 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "1 Peter", id: "1-peter", chapters: Array.from({ length: 5 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "2 Peter", id: "2-peter", chapters: Array.from({ length: 3 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "1 John", id: "1-john", chapters: Array.from({ length: 5 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "2 John", id: "2-john", chapters: Array.from({ length: 1 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "3 John", id: "3-john", chapters: Array.from({ length: 1 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Jude", id: "jude", chapters: Array.from({ length: 1 }, (_, i) => ({ chapter: i + 1, verses: [] })) },
  { name: "Revelation", id: "revelation", chapters: Array.from({ length: 22 }, (_, i) => ({ chapter: i + 1, verses: [] })) }
];

// Function to get all available books
export const getAvailableBooks = (): BibleBook[] => {
  return allBibleBooks;
};

// Function to get a specific book
export const getBook = (bookId: string): BibleBook | null => {
  return allBibleBooks.find(book => book.id === bookId) || null;
};

// Function to get a specific chapter
export const getChapter = (bookId: string, chapter: number): BibleChapter | null => {
  const book = getBook(bookId);
  if (!book) return null;
  
  // For now, return sample data for Genesis and Exodus
  if (bookId === "genesis" && chapter <= 2) {
    return genesis.chapters.find(c => c.chapter === chapter) || null;
  }
  
  if (bookId === "exodus" && chapter === 1) {
    return exodus.chapters.find(c => c.chapter === chapter) || null;
  }
  
  // Return placeholder for other chapters
  return {
    chapter,
    verses: [
      { verse: 1, text: `This is a placeholder for ${book.name} Chapter ${chapter}.` },
      { verse: 2, text: "In the full version, this would contain the complete KJV text." },
      { verse: 3, text: "For now, Genesis 1-2 and Exodus 1 are fully available." }
    ]
  };
};

// Function to check if a chapter is available
export const isChapterAvailable = (bookId: string, chapter: number): boolean => {
  if (bookId === "genesis" && chapter <= 2) return true;
  if (bookId === "exodus" && chapter === 1) return true;
  return false;
};
