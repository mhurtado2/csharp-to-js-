// Put your code here

// make an array of all spells
//make array of books


const allSpells = [

        {
            Name : "Turn enemy into a newt",
            IsEvil : true,
            EnergyReqired : 5.1
        },
        {
            Name : "Conjure some gold for a local charity",
            IsEvil : false,
            EnergyReqired : 2.99
        },
        {
            Name : "Give a deaf person the ability to heal",
            IsEvil : false,
            EnergyReqired : 12.2
        },
        {
            Name : "Make yourself emperor of the universe",
            IsEvil : true,
            EnergyReqired : 100.0
        },
        {
            Name : "Convince your relatives your political views are correct",
            IsEvil : false,
            EnergyReqired : 2921.5
        }
]

const books = []


console.log("Do you believe in magic?");
console.log("------------------------");




const MakeEvilSpellBook = () => {
    const evilBook = {}
    evilBook.Title = "Evil Book"
    evilBook.Spells = allSpells.filter(spell => spell.IsEvil === true)
    books.push(evilBook)
}

const MakeGoodSpellBook = () => {
    const goodBook = {}
    goodBook.Title = "Good Book"
    goodBook.Spells = allSpells.filter(spell => spell.IsEvil === false)
    books.push(goodBook)
}


const evilBook = MakeEvilSpellBook()
const goodBook = MakeGoodSpellBook()



const displaySpellBook = () => {
 for(const book of books) {
    console.log(book.Title)
    for(const spell of book.Spells)
    console.log(spell.Name)
 }

}


displaySpellBook()