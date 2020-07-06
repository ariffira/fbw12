//comment
let users = [
    {
        id: 1,
        name: 'Arif',
        address: {
            street: 'Twingenberg 7',
            city: 'Essen',
            country: 'BD'
        },
        fullname() {
            return 'arif'
        },
        fruits: ['apple', 'orange']

    },
    {
        id: 2,
        name: 'Joumah'
    },
    {
        name: "Harry Potter",
        movies: 8,
        movieTitles: [  
            "Harry Potter and the Philosopher's Stone (2001)",
            "Harry Potter and the Chamber of Secrets (2002)",
            "Harry Potter and the Prisoner of Azkaban (2004)",
            "Harry Potter and the Goblet of Fire (2005)",
            "Harry Potter and the Order of the Phoenix (2007)",
            "Harry Potter and the Half-Blood Prince (2009)",
            "Harry Potter and the Deathly Hallows – Part 1 (2010)",
            "Harry Potter and the Deathly Hallows – Part 2 (2011)"
        ]
    },
    {
        test: 'Function Test',
        myFunction: () => {return 'Hello World'},
        test2: myFunction = () => {return 'Hello World'},
        result: "Functions are ignored"
    }
]

let json = JSON.stringify(users)
console.log(json)