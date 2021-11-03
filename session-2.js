//bai1
let check= false;
let str_input;
do{
    str_input=prompt("nhap string can chuyen");
    let doa=parseInt(str_input);
    if(isNaN(doa))
    {
        console.log("ban da nhap dung string");
        check=true;
        break;
    }
    else{
        console.log("doc ki de ban oi nhap string dum minhf");
        check=false;
    }

}while(check===false);
var arrchuoi=str_input.split('');
let demmang = 0;
    while (arrchuoi[demmang] != NULL)
    {
        ++demmang;
    }
    
for(let i=0;i<=arr.length;i++)
{
    arrchuoi[i]=arrchuoi[demmang];
    demmang--;
}
console.log(arrchuoi);
//bai 2
let checked= false;
let strt;
do{
    str=prompt("nhap string can chuyen");
    let dooo=parseInt(str);
    if(isNaN(dooo))
    {
        console.log("ban da nhap dung string");
        checked=true;
        break;
    }
    else{
        console.log("doc ki de ban oi nhap string dum minhf");
        checked=false;
    }

} while(checked===false);
var a=strt.toUpperCase();
console.log("a");
//bai 3
//let n=prompt("nhap so luong phan u cho mang");
const arr=[1,2,2,3];
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]!=arr[j])
        {
            const brr=[];
            brr[i]=arr[i];
        }
    }
}
console.log("mang sau khi chuyen");
console.log(brr);
//bai 4
const studens=[
    {
        name:"a";
        age: 18;
        luong: 20;
        chucvu:"hocsinh";
    }
    {
        name:"b";
        age: 20;
        luong: 30;
        chucvu:"hocsinh";
    }
    {
        name:"c";
        age: 21;
        luong: 40;
        chucvu:"hocsinh";
    }
]
for(let i=0;i<studens.length,i++)
{
    const h=studens[i];
    console.log(h);
}
//them
const khanh={
    name:"a";
        age: 21;
        luong: 40;
        chucvu:"hocsinh";

}
studens.push(khanh);
console.log(studens);
//xoa
studens.shift();
console.log(studens);
//bai 5
let ngay, thang, nam;
let checkk=false;
do{
    ngay=prompt("nhap ngay");
    thang=prompt("nhap thang");
    nam=prompt("nhap nam");
    let ngaydo=parseInt(ngay);
    let thangdo=parseInt(thang);
    let namdo=parseInt(nam);
    if(isNaN(ngaydo)&&isNaN(thangdo)&&isNaN(namdo))
    {
        console.log("ban da nhap dung string");
        check=true;
        break;
    }
    else{
        console.log("doc ki de ban oi nhap string dum minhf");
        check=false;
    }

}while(checkk===false);


switch(thang) {

case 1: case 3: case 5: case 7: case 8: case 10:  case 12:

            if( ngay>0 && ngay<=31){

            console.log(`Ngay ${ngay} thang ${thang} nam ${nam} hop le\n`);

            break;

            }

          else

           { console.log(`Ngay ${ngay} thang ${thang} nam ${nam} ko hop le\n`);

            break;

            }

case 4: case 6: case 9: case 11:

            if( ngay<=30 && ngay>0){

                console.log(`Ngay ${ngay} thang ${thang} nam ${nam} hop le\n`);

            break;

            }

            console.log(`Ngay ${ngay} thang ${thang} nam ${nam} ko hop le\n`);

            break;

            }

case 2:

            if( ngay <=28 && ngay > 0){

                console.log(`Ngay ${ngay} thang ${thang} nam ${nam} hop le\n`);

            break;

            }

            else

           { console.log(`Ngay ${ngay} thang ${thang} nam ${nam} ko hop le\n`);

            break;

            }

default: console.log(`Ngay ${ngay} thang ${thang} nam ${nam} ko hop le\n`);

break;

}



