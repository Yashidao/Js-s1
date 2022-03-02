// 05-arrays/10-reduce-array/script.js - 5.10: using reducer


(() => {

    let people = [
        {
            firstname: "Grenville",
            lastname: "Stive",
            age: 64,
        },
        {
            firstname: "Luis",
            lastname: "Jedrzejewsky",
            age: 73,
        },
        {
            firstname: "Teodor",
            lastname: "Warrington",
            age: 56,
        },
        {
            firstname: "Danya",
            lastname: "Bigby",
            age: 17,
        },
        {
            firstname: "Jemmy",
            lastname: "Goodbur",
            age: 87,
        },
        {
            firstname: "Vilhelmina",
            lastname: "Fost",
            age: 43,
        },
        {
            firstname: "Igor",
            lastname: "Putson",
            age: 45,
        },
        {
            firstname: "Klement",
            lastname: "Braybrook",
            age: 88,
        },
        {
            firstname: "Trefor",
            lastname: "Le Jean",
            age: 69,
        },
        {
            firstname: "Tarrah",
            lastname: "de Clerc",
            age: 77,
        },
        {
            firstname: "Brad",
            lastname: "Hookes",
            age: 82,
        },
        {
            firstname: "Kippar",
            lastname: "Fancet",
            age: 25,
        },
        {
            firstname: "Jecho",
            lastname: "Hawket",
            age: 87,
        },
        {
            firstname: "Lief",
            lastname: "Blazy",
            age: 80,
        },
        {
            firstname: "Jo-ann",
            lastname: "Sacase",
            age: 81,
        },
    ];

    let sum;
    let arr=[];
    let i=0;

    document.getElementById("run").addEventListener("click", () => {
        
        people.forEach((el)=>{
            arr[i] = el.age;
            i++;
            if(i>=people.length){
                i=0;
            }
        });

        sum = arr.reduce(function(a,b){
            return a + b;
        });
        //console.log(people);
        console.log(arr);
        console.log(sum);
        
    });

})();
