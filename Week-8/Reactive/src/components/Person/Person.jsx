const data ={
    avatar :"bir resim",
    name : "John Wick",
    phoneNumbers: [
        {name: "home", number: "1234"},
        {name: "work", number: "4321"}
    ],
    addresses:[
        {name: "home", address:"369852"},
        {name: "work", address:"258963"}
    ],
    emails:[
        {name: "personal", email:"person@wick.com"},
        {name: "work", email:"johnwick@gmail.com"}
    ]

};


const Person = ()=>{
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}

export default Person