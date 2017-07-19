/**
 * Created by root on 17-7-19.
 */
const Print=require('./scores');
let baseInfo=
    [
        ["学号","姓名", "数学", "语文","英语","编程"],
        ['201611',"张三", "95", "80", "75", "80"],
        ['201612',"李四", "80", "70", "85", "90"]
    ];

const readline=require('../readline-sync');
function IndexWeb() {
    let getNum=readline.question('1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：\n');
    return getNum;
}
function Add() {
    let addInfo=readline.question('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：');
    return addInfo;
}
function FirstJudge(info){
    let myRe=/^[a-zA-Z]||[\u4e00-\u9fa5],d{4},[a-zA-Z]||[\u4e00-\u9fa5],d{1,3},[[0-9a-zA-Z\u4e00-\u9fa5_]:d{1,100},]{4}$/;
    let MyArray=myRe.exec(info);
    if(MyArray!==null){
        return true;
    }else{
        return false;
    }
}
function FirstErrorInput() {
    let FirstNextInput=readline.question(' 请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n');
    return FirstNextInput;
}
function printGetId() {
    let getId=readline.question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n');
    return getId;
}
function SecondJudge(inputInfo,baseInfo) {
    for (let input_info of inputInfo) {
        if (baseInfo.indexOf(input_info) !== -1) {
            return true;
        }
    }
    return false;

}
function SecondBehavior(inputInfo,baseInfo) {
    let needInfo;
    if (inputInfo.length > 1) {
        needInfo = baseInfo.reduce(function (accumulator, currentValue) {
            for (let input_info of inputInfo) {
                if (input_info === currentValue[0]) {
                    accumulator.push(currentValue);
                    break;
                }
            }
            return accumulator;
        }, []);

    }else{
        needInfo=baseInfo.filter(function (number) {
            return number[0]===inputInfo;
        });
    }
    return needInfo;
}
function SecondErrorInput() {
    let secondNextInput=readline.question('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
    return secondNextInput;
}
function start() {
    let getNum=IndexWeb();
    if(getNum==='1'){
        let addNum=Add();
        let firstJudge=FirstJudge(addNum);
        console.log(firstJudge);
        while(firstJudge===false) {
           let nextInput=FirstErrorInput();
           addNum=nextInput;
           firstJudge=FirstJudge(nextInput);
        }
        addNum=addNum.split(',');
        console.log('学生'+addNum[0]+'的成绩被添加');
        start();
   }else if(getNum==='2'){
        let getId=printGetId();
        let secondJudge=SecondJudge(getId,baseInfo);
        while(secondJudge===false){
            let nextInput=SecondErrorInput();
            getId=nextInput;
            secondJudge=SecondJudge(nextInput,baseInfo);
        }
        let needInfo=SecondBehavior(getId,baseInfo);
        Print.print(needInfo);
        start();
        }else{
        return false;
    }
}
start();