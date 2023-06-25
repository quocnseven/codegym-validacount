
function isValidAccount(str){
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)){
        console.log(`Tên tài khoản: ${str} khả dụng, bạn có thể sử dụng tên này.`)
    }else{
        console.log(`Tên tài khoản: ${str} không khả dụng, vui lòng chọn tên khác.`)
    }
}
let name1 = "123abc_";
let name2= "_abc123";
let name3= "______";
let name4= "123456";
let name5 = "abcdefg";
let name6 = ".@";
let name7= "12345";
let name8 = "1234_";
let name9 = "abcde ";
isValidAccount(name1);
isValidAccount(name2);
isValidAccount(name3);
isValidAccount(name4);
isValidAccount(name5);
isValidAccount(name6);
isValidAccount(name7);
isValidAccount(name8);
isValidAccount(name9);
