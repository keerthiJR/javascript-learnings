function fun(){
    var a=parseInt(document.getElementById("text1").value);
    var b=parseInt(document.getElementById("text2").value);
    var c=parseInt(document.getElementById("text3").value);
    var d=document.getElementById("text4").value;
    var e=document.getElementById("text5").value;
    var f=document.getElementById("date1").value;
    var g=document.getElementById("date2").value;

    function one(a,b,c){
        var res=a+b+c;
        console.log("sum : "+res);
    }

    function two(a,b,c){
        var res=(a+b+c)/3;
        console.log("average : "+res);
    }

    function three(a){
        let r= a;
        if(isNaN(r)){
            if(r=="true" || r=="false"){
                console.log("type of : boolean");
            }else if(r==='null'){
                console.log("type of : object")
            }else{
                console.log("type of : string")
            }
        }else{
            console.log("type of : number");
        }
    }

    function four(a){
        (a%2==0) ? console.log("odd or even : even") : console.log("odd or even : odd");
    }

    function five(a,b,c){
        function hcf(a,b){
            if(b==0){
                return a;
            }return hcf(b,a%b);
        }
        let flag = false;
        let lcm = 0;
        for(let i= 1;!flag; i++){
            flag = (a < b)?(b*i)%a==0:(a*i)%b==0;
            lcm = a<b?b*i:a*i;
        }
        console.log("HCF : "+hcf(hcf(a,b),c)+" LCM : "+lcm);
    }

    function six(a){
        let number=a;
        let res;
        let isPrime = true;
        if (number === 1) {
            console.log("prime or not: neither prime nor composite number");
        }
        else if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        if (isPrime) {
            console.log("prime or not : prime number");
        } else {
            console.log("prime or not : not a prime number");
        }
    }
    else {
            console.log("prime or not : not a prime number");
        }
    }

    function seven(a){
        console.log("splitting a number : "+a.toString().split('').join(' '));
    }

    function eight(d){
        console.log("remove first character :" +d.slice(1));
    }

    function nine(d){
        console.log("last 3 digits of a string : "+ d.slice(d.length - 3));
    }

    function ten(e,d){
        let count =0;
        for(let i=0;i<d.length;i++){
            if(d.charAt(i)===e){
                count+=1;
            }
        }
        console.log("char repetead : "+count);
    }

    function eleven(num,str){
        console.log("skipping "+num+" chars : "+str.slice(num));
    }

    function twelve(myString){
        if(myString.length%2==0){
            let part1 = myString.substring(0, myString.length/2);
            let part2 = myString.substring(myString.length/2, myString.length);
            console.log("divide into halves : "+ part1+" "+part2);
        }else{
            console.log("divide into halves : "+myString);
        }
    }

    function thirteen(hour,min){
        let a=hour*3600;
        let b=min*60;
        console.log("total num of sec : "+(a+b));
    }

    function fourteen(f){
        let arr=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        // let s=parseInt(f.split('/'));
        var b = f.split('/').map(Number);
        console.log("year in words : "+arr[b[1]-1]);
    }

    function fifteen(f){
        let s=f.split('/');
        console.log("year alter : "+s[0]+"/"+s[1]+"/"+s[2].slice(2));
    }

    function sixteen(f){
        let s=f.split('/');
        console.log("year in new lines : ")
        s.forEach((i)=>{
            console.log(i);
        })
    }

    function seventeen(f){
        let day = [ "Sunday",    "Monday",   "Tuesday",
        "Wednesday", "Thursday", "Friday",
        "Saturday" ];
        function dayofweek(d, m, y)
        {
            let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
            y -= (m < 3) ? 1 : 0;
            return ( y + y/4 - y/100 + y/400 + t[m-1] + d) % 7;
        }
        let s=f.split('/').map(Number);
        console.log("day in a year : "+day[Math.round(dayofweek(s[0],s[1],s[2]))]);
    }


    function eighteen(f,g){
        let a=f.split('/');
        let b=g.split('/');
        let c=a[1]+'/'+a[0]+'/'+a[2];
        let d=b[1]+'/'+b[0]+'/'+b[2];
        var date1 = new Date(c);
        var date2 = new Date(d);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        console.log("no. of days : "+Difference_In_Time / (1000 * 3600 * 24));
    }

    function nineteen(f,g){
        let a=f.split('/');
        let b=g.split('/');
        if(a[2]===b[2] && a[1]===b[1]){
            console.log("same month or year : same month and year");
        }else if(a[1]==b[1]){
            console.log("same month or year : same month");
        }else if(a[2]===b[2]){
            console.log("same month or year : same year");
        }else{
            console.log("same month or year : different month/year");
        }
    }

    function twenty(d){  
        let word='';
        for(let i=0;i<d.length;i++){
            let a= d.charCodeAt(i);
            word+= String.fromCharCode(a+1);
        }console.log("incrementing string positions : "+word);
    }

    function twentyone(){
        const fruits = [5,8,3,9,1,0];
        console.log("ascending order : "+fruits.sort());
    }

    function twentytwo(){
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.sort();
        console.log("desending order : "+fruits.reverse());
    }

    function twentythree(){
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log("alphabetical order : "+fruits.sort());
    }

    function twentyfour(arr,a){
        console.log("index value : "+arr[a]);
    }

    function twentyfive(arr,a){
        let sum=0;
        arr.forEach((i)=>{
            sum+=i;
        });
            console.log("average : "+ (sum/arr.length));
    }

    function twentysix(arr){
        let sum=0;
        arr.forEach((i)=>{
            sum+=i;
        });
        console.log("sum : "+sum);
    }

    function twentyseven(arr){
        if(arr.length%2===0){
            let arr1=arr.slice(0,arr.length/2);
            let arr2=arr.slice(arr.length/2,arr.length);
            console.log("splitting the array : "+arr1,arr2);
        }else{
            console.log("spliiting the array : "+arr);
        }
    }

    function twentyeight(arr){
        function compareName(a, b) {

            const name1 = a.name.toUpperCase();
            const name2 = b.name.toUpperCase();
        
            let comparison = 0;
        
            if (name1 > name2) {
                comparison = 1;
            } else if (name1 < name2) {
                comparison = -1;
            }
            return comparison;
        }

        console.log(arr.sort(compareName));
    }

   function twentynine(arr){

    function compareName(a,b){
        return a.value - b.value;
    }
    console.log(arr.sort(compareName));
   }

   function thirty(a,b){
       let res= '{' + '"'+a+'"'+':'+'"'+b+'"'+'}';
       console.log(JSON.parse(res));
   }

   function thirtyone(arr){
       arr.forEach((obj)=>{
        obj.name=(obj.name*5);
       })
       console.log(arr);
   };

   function thirtytwo(arr){
       arr.forEach((a)=>{
           if(a.value===null){
               a.value='india';
           }
       })
       console.log(arr);
   }

   function thirtythree(arr){

    // const a=Object.assign({}, arr);
    let a=12;
    var result = arr.map(person => 
        ({ value: a++, text: person}));
        console.log(result);
   }

   function thirtyfour(){
       let a=document.getElementById('id').innerHTML="i am id"
   }

   function thirtyfive(){
    document.getElementsByClassName("class")[0].innerHTML="i am class"
    
  }

  function thirtysix(){
    document.getElementsByName("name")[0].innerHTML="i am name"
  }

  function thirtyseven(){
    console.log(document.getElementById('id').tagName)
  }

  function thirtyeight(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ] ;

    let names1 = studentRecords.map( stu => stu.name.toUpperCase());
    console.log(names1);
    let names2 = studentRecords.filter(stu => stu.marks > 50);
    console.log(names2);
    let totalMarks = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
    console.log(totalMarks);
    let finding = studentRecords.find(ele=> ele.id > 11)
    console.log(finding);

  }

  function thirtynine(){
        let a= { key: "value"};
        console.log(JSON.stringify(a));

  }

  function forty(){
    var j ='{"name": "value"}';
      var a=JSON.parse(j);
      console.log(a);
  }






    one(a,b,c);
    two(a,b,c);
    three(d);
    four(a);
    five(a,b,c);
    six(a);
    seven(a);
    eight(d);
    nine(d);
    ten(e,d);
    eleven(a,d);
    twelve(d);
    thirteen(a,b);
    fourteen(f);
    fifteen(f);
    sixteen(f);
    seventeen(f);
    eighteen(f,g);
    nineteen(f,g);
    twenty(d);
    twentyone();
    twentytwo();
    twentythree();
    twentyfour([5,3,5,6,7],2);
    twentyfive([5,3,5,6,6],2);
    twentysix([5,3,5,6,6]);
    twentyseven([5,3,5,6,6,2]);
    twentyeight([
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 13 },
        { name: 'Zeros', value: 37 }
      ]);
    twentynine([
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 13 },
        { name: 'Zeros', value: 37 }
      ]);
    thirty('name','keerthi vasan');
    thirtyone([
        { name: 1, value: 21 },
        { name: 2, value: 37 },
        { name: 3, value: 45 },
        { name: 4, value: -12 },
        { name: 5, value: 13 },
        { name: 6, value: 37 }
      ]);
    thirtytwo([
        { name: 1, value: null },
        { name: 2, value: 37 },
        { name: 3, value: 45 },
        { name: 4, value: null },
        { name: 5, value: 13 },
        { name: 6, value: 37 }
      ])
    thirtythree(['india','canada','usa','uk','paris']);
    thirtyfour();
    thirtyfive();
    thirtysix();
    thirtyseven();
    thirtyeight();
    thirtynine();
    forty();



}