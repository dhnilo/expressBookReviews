// Utilized ChatGPT to generate reviews for testing purposes

let books = {
    1: {
        "author": "Chinua Achebe", 
        "title": "Things Fall Apart", 
        "reviews": {
            1: { "rating": 5, "comment": "A powerful exploration of cultural clash and the impact of colonialism. Achebe's writing is vivid, and Okonkwo's story is unforgettable." },
            2: { "rating": 4, "comment": "Things Fall Apart offers deep insights into African tribal life and the disruption caused by Western colonization. A must-read for those interested in postcolonial literature." }
        }, 
        "ISBN": "1"
    },
    2: {
        "author": "Hans Christian Andersen", 
        "title": "Fairy tales", 
        "reviews": {
            1: { "rating": 4, "comment": "Timeless tales that are a bit darker than expected, but still magical. Andersen's stories have layers that reveal themselves with every reading." },
            2: { "rating": 5, "comment": "These fairy tales have endured for a reason. They evoke a sense of wonder while offering important life lessons." }
        }, 
        "ISBN": "2"
    },
    3: {
        "author": "Dante Alighieri", 
        "title": "The Divine Comedy", 
        "reviews": {
            1: { "rating": 5, "comment": "An epic journey through the afterlife, blending theology, philosophy, and personal reflection. Dante’s imagination and poetic skill are unparalleled." },
            2: { "rating": 4, "comment": "Dense and challenging, but highly rewarding. The imagery of Hell, Purgatory, and Paradise is breathtaking." }
        }, 
        "ISBN": "3"
    },
    4: {
        "author": "Unknown", 
        "title": "The Epic Of Gilgamesh", 
        "reviews": {
            1: { "rating": 4, "comment": "One of the oldest surviving stories, Gilgamesh's search for immortality is both ancient and timeless. A fascinating look into early human civilization." },
            2: { "rating": 3, "comment": "The story is intriguing but can be difficult to follow. Still, it’s a cornerstone of literature and mythology." }
        }, 
        "ISBN": "4"
    },
    5: {
        "author": "Unknown", 
        "title": "The Book Of Job", 
        "reviews": {
            1: { "rating": 5, "comment": "A profound and philosophical exploration of suffering and faith. Job's patience and questioning of God make this one of the Bible’s most compelling books." },
            2: { "rating": 4, "comment": "A story that resonates on many levels, especially for those grappling with the problem of evil. Beautifully written." }
        }, 
        "ISBN": "5"
    },
    6: {
        "author": "Unknown", 
        "title": "One Thousand and One Nights", 
        "reviews": {
            1: { "rating": 5, "comment": "A mesmerizing collection of stories within stories, full of adventure, romance, and moral lessons. Scheherazade’s tale is unforgettable." },
            2: { "rating": 4, "comment": "Some stories are more engaging than others, but the overall structure and themes are captivating." }
        }, 
        "ISBN": "6"
    },
    7: {
        "author": "Unknown", 
        "title": "Njál's Saga", 
        "reviews": {
            1: { "rating": 4, "comment": "A gripping saga that blends history and legend, offering a window into Viking culture and society. Complex characters and intense drama." },
            2: { "rating": 3, "comment": "The names and details can be hard to keep track of, but the story of honor and revenge is compelling." }
        }, 
        "ISBN": "7"
    },
    8: {
        "author": "Jane Austen", 
        "title": "Pride and Prejudice", 
        "reviews": {
            1: { "rating": 5, "comment": "A delightful and sharp social commentary, with a love story that never gets old. Austen’s wit and Elizabeth Bennet’s character are timeless." },
            2: { "rating": 4, "comment": "Though it starts slow, once it picks up, it’s an engaging critique of class and gender dynamics, with plenty of humor." }
        }, 
        "ISBN": "8"
    },
    9: {
        "author": "Honoré de Balzac", 
        "title": "Le Père Goriot", 
        "reviews": {
            1: { "rating": 4, "comment": "A brilliant examination of ambition, greed, and family relationships in Paris. Balzac paints a vivid picture of society during the early 19th century." },
            2: { "rating": 3, "comment": "The characters are well-developed, but the pacing can be slow at times. Still, it’s a masterclass in realism." }
        }, 
        "ISBN": "9"
    },
    10: {
        "author": "Samuel Beckett", 
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy", 
        "reviews": {
            1: { "rating": 5, "comment": "A deeply existential and experimental work that challenges conventional narrative. Beckett’s minimalist style pushes the boundaries of literature." },
            2: { "rating": 4, "comment": "Difficult to follow at times, but the exploration of identity and consciousness is profound. Not for everyone, but worth the effort." }
        }, 
        "ISBN": "10"
    }
};

module.exports = books;
