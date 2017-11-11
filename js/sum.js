$(document).ready(function(){
    $("#sumbutton").click(function(){
        // 判断个人信息不能为空
        if($("#inputclass").val()==""){
            alert("班级不能为空！")
        }else if($("#inputstunumber").val()==""){
            alert("学号不能为空!")
        }else if($("#inputname").val()==""){
            alert("姓名不能为空！")
        }

        var score = 0;
        var task = 1;
        //第一题
        if($("#One_one").val() =="" || $("#One_Two_one").val() == ""|| $("#One_Two_two").val() == "" || $("#One_Two_three").val() == "") {
            alert("第一题未完成！");
            task = 0;
        }
        while(task) {
            if($("#One_one").val() == "统一建模语言"){
                score += 5;
            }
            if($("#One_Two_one").val() != $("#One_Two_two").val() && $("#One_Two_one").val() != $("#One_Two_three").val() && $("#One_Two_two").val() != $("#One_Two_three").val()) {
                if($("#One_Two_one").val() == "封装性" || $("#One_Two_one").val() == "继承性" || $("#One_Two_one").val() == "多态性") {
                    score += 5;
                }
                if($("#One_Two_two").val() == "封装性" || $("#One_Two_two").val() == "继承性" || $("#One_Two_two").val() == "多态性") {
                    score += 5;
                }
                if($("#One_Two_three").val() == "封装性" || $("#One_Two_three").val() == "继承性" || $("#One_Two_three").val() == "多态性") {
                    score += 5;
                }
            }
        }
        //第二题
        var rule_2 = ['B','A']
        var a = document.getElementsByName('radiogroup1');
        var b = document.getElementsByName('radiogroup2');
        check_2 = [];
        for(var i = 0;i < a.length;i++) {
            if(a[i].checked) {
                check_2.push(a[i].value);
            }
        }
        for(var i = 0;i <b.length;i++) {
            if(b[i].checked) {
                check_2.push(b[i].value);
            }
        }

        if(check_2.length != 2) {
            alert("第二题未做完！")
            task = 0;
        }
        while(task) {
            for(var j = 0; j < check_2.length; j++) {
                if(rule_2.indexOf(check_2[j]) != -1) {
                    score += 10;
                }
            }
        }
        alert(score);
        //第三题
        var rule_3 = ['C','D']
        var p=q=0;
        var boxs_3 = document.getElementsByName('checkbox_1');
        check_3 =[];
        for(var i=0;i<boxs_3.length;i++) {
            if(boxs_3[i].checked) {
                check_3.push(boxs_3[i].value);
            }
        } 

        var boxs_4 = document.getElementsByName('checkbox_2');
        check_4 = [];
        for(var i=0;i<boxs_4.length;i++) {
            if(boxs_4[i].checked) {
                check_4.push(boxs_3[i].value);
            }
        } 

        if(check_3.length == 0 || check_4.length == 0) {
            alert("第三题未完成！");
            task = 0;
        }
        while(task) {
            for(var j = 0;j<check_3.length;j++) {
                if(rule_3[0].indexOf(check_3[j]) == -1) {
                p++;
                }
            }
            if( p == 3) {
                score += 10;
            }
            
            for(var j = 0;j<check_4.length;j++) {
                if(rule_3[1].indexOf(check_4[j]) == -1) {
                    q++;
                }
            }
            if(q == 3) {
                score += 10;
            }
        }
        alert(score);
        //第四题
        var rule_4 = [0,1]
        var boxs_5 = document.getElementsByName('radiogroup_3'); 
        var boxs_6 = document.getElementsByName('radiogroup_4');
        if((boxs_5[0].checked || boxs_5[1].checked) && (boxs_6[0].checked || boxs_6[1].checked)) {
            task = 1;
        }
        else {
            task =0;
        }
        while(1) {
            for(var i=0;i < boxs_5.length;i++) {
                if(boxs_5[i].checked && rule_4[0] == boxs_5[i].value) {
                score += 10;
                }
            }
            
            for(var i=0;i < boxs_6.length;i++) {
                if(boxs_6[i].checked && rule_4[1] == boxs_6[i].value) {
                score += 10;
                }
            }
        }
        alert(score);
        //第五题
        var box_7 = document.getElementById('ibutton');
        var check_5 = box_7.value;
        if(check_5.length = 0){
            alert("第五题未完成！")
            task = 0;
        }
        while(task) {
            var str = "模型是对现实世界的简化与抽象，模型是对所研究的系统、过程、事物或概念的一种表现形式。可以使物理实体；可以是某种图形；或者是一种数学表达式。"
            if(check_5 == str) {
                score += 20;
            }
        }
        alert($("#inputclass").val()+"的"+$("#inputname").val()+"同学"+
        ",你的测试成绩为："+score+"分");
    });
});