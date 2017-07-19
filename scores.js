/**
 * Created by root on 17-7-10.
 */
let collection=
    [
        ["学号","姓名", "数学", "语文","英语","编程"],
        ['201611',"张三", "95", "80", "75", "80"],
        ['201612',"李四", "80", "70", "85", "90"]
    ];

function every_sum(collection) {
    let every_sum_a=[];
    for(let i=1;i<collection.length;i++){
        let sum=0;
        for(let j=2;j<collection[i].length;j++){
            sum+=parseInt(collection[i][j]);
        }
        every_sum_a.push(sum);
    }
    return every_sum_a;
}
/*3:35*/
function all_sum_median(temp_every_sum) {
    for(let i=0;i<temp_every_sum.length-1;i++) {
        for (let j = i + 1; j < temp_every_sum.length; j++) {
            if (temp_every_sum[i] < temp_every_sum[j]) {
                let temp;
                temp = temp_every_sum[i];
                temp_every_sum[i] = temp_every_sum[j];
                temp_every_sum[j] = temp;
            }
        }
    }
    let count=temp_every_sum.length%2;
    let tag;
    let all_sum_median_a;

    if(count===0){
        tag=temp_every_sum.length/2;
        let sum_all_sum_median=temp_every_sum[tag-1]+temp_every_sum[tag];
        all_sum_median_a=sum_all_sum_median/2;
    }
    else{
       let tag=(temp_every_sum.length+1)/2;
       all_sum_median_a=temp_every_sum[tag-1];
    }
    return all_sum_median_a;
}
/*7:36*/
function every_average(all_subject,every_sum) {
    let every_average_a=[];
    for(let i=0;i<every_sum.length;i++)
        every_average_a.push(every_sum[i]/all_subject);
    return every_average_a;
}
/*3:09*/
function all_sum_average(every_average) {
    let sum=0;
    let all_sum_average_a;
    for(let i=0;i<every_average.length;i++){
        sum+=every_average[i];
    }
    all_sum_average_a=sum/every_average.length;
    return all_sum_average_a;
}
/*1:55*/
function print() {
    let everySum=every_sum(collection);
    let temp_every_sum=every_sum(collection);
    let allSumMedian=all_sum_median(temp_every_sum);
    let all_subject=collection[0].length-2;
    let everyAverage=every_average(all_subject,everySum);
    let allSumAverage=all_sum_average(everyAverage);
    let title='成绩单'+'\n';
    let head='';
    for(let i=1;i<collection[0].length;i++){
        head=head+collection[0][i]+'|';
    }
    head=head+'平均分|总分'+'\n';
    let content='';
    for(let i=1;i<collection.length;i++){
        for( let j=1;j<collection[i].length;j++){
            content=content+collection[i][j]+'|';
        }
        content+=everyAverage[i-1]+'|'+everySum[i-1]+'\n';
    }
    let ge='========================'+'\n';
    let str=title+head+ge+content+ge;
    str=str+'全班总平均分：'+allSumAverage+'\n'+'全班总分中位数：'+allSumMedian;
    console.log(str) ;
}
module.exports.print=print;
/*11:47*/