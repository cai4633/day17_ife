window.onload=function() {
    var operator_add=document.getElementById('add-btn'), operator_minus=document.getElementById('minus-btn'), operator_times=document.getElementById('times-btn'), operator_divide=document.getElementById('divide-btn'), first_number=document.getElementById('first-number'), second_number=document.getElementById('second-number'), result1=document.getElementById('result1'), dec_number=document.getElementById('dec-number'), bin_bit=document.getElementById('bin-bit'), trans_btn=document.getElementById('trans-btn'), result2=document.getElementById('result2');
    attachEvent(operator_add, '+');
    attachEvent(operator_minus, '-');
    attachEvent(operator_times, '*');
    attachEvent(operator_divide, '/');

    trans_btn.addEventListener('click', function() {
        result2.innerHTML='运算结果: '+dec2bin(dec_number.value, bin_bit.value)
    }

    );

    //抽象出一个绑定事件的函数；
    function attachEvent(obj, operator) {
        obj.onclick=function(event) {
            var firstNum=parseFloat(first_number.value), secondNum=parseFloat(second_number.value);
            result1.innerHTML="运算结果: ";

            //判断输入是否是number；
            if(typeof(firstNum)!=='number'||isNaN(firstNum)) {
                alert("第一个输入不是一个数字！")
                return null;
            }

            else if(typeof(secondNum)!=='number'||isNaN(secondNum)) {
                alert("第二个输入不是一个数字！")
                return null;
            }

            //通过不同的操作符来选择不同的运算函数；
            switch(operator) {
                case '+': {
                    result1.innerHTML+=add(firstNum, secondNum).toFixed(6);
                    break;
                }

                case '-': {
                    result1.innerHTML+=minus(firstNum, secondNum).toFixed(6);
                    break;
                }

                case '*': {
                    result1.innerHTML+=times(firstNum, secondNum).toFixed(6);
                    break;
                }

                case '/': {
                    result1.innerHTML+=divide(firstNum, secondNum).toFixed(6);
                    break;
                }

                default: {
                    alert('你输入的操作符有误!');
                }

            }

        }

    }

    //加法函数
    function add(num1, num2) {
        return num1+num2;
    }

    //减法函数
    function minus(num1, num2) {
        return num1-num2;
    }

    //乘法函数；
    function times(num1, num2) {
        return num1*num2;
    }

    //除法函数；
    function divide(num1, num2) {
        if(num2===0) {
            alert('注意除数不能为0！')
            return NaN;
            //修改当return null时，tofixed报错；
        }

        else {
            return num1/num2;
        }

    }

    //dec2bin函数
    function dec2bin(decNumber, binBit) {
        var dN=parseInt(decNumber), bB=parseInt(binBit), remainder=[], //存储余数的容器；
        len;
        console.log(dN);

        if(!isNaN(dN)&&dN>0) {
            while(dN>0) {
                remainder.push(dN%2);
                dN=Math.floor(dN/2);
            }

            len=remainder.length;

            if(!isNaN(bB)&&bB>=len) {
                for(var i=1;
                i<=bB-len;

                i++) {
                    remainder.push(0);
                }

                remainder.reverse();
                return remainder.join('');
            }

            else if(!isNaN(bB)&&len>bB>0) {
                remainder.reverse();
                console.log('你输入的bin-bit位数偏小');
                return remainder.join('');
            }

            else {
                remainder.reverse();
                console.log('你输入的bin-bit位数有误或者没有输入！');
                return remainder.join('');
            }

        }

        else {
            alert('请输入正确的decNumber!');
            return '';
        }

    }
    // 实现党点击转化按钮时，将输入的十进制数字转化为二进制，并显示在result的p标签内
    // 新的需求是，转化显示后的二进制数为bin-bit中输入的数字宽度，例如
    // dec-number为5，bin-bit为5，则转化后数字为00101
    // 如果bin-bit小于转化后的二进制本身位数，则使用原本的位数，如dec-number为5，bin-bit为2，依然输出101，但同时在console中报个错

    //乘法表生成函数generator；
    function generator(){
        var str='',
            table=document.getElementById('funcList');
        for(var i=1;i<=9;i++){
            table.insertRow(i-1);
            for(var j=1;j<=i;j++){
                str=""+j+'×'+i+'='+i*j;
                table.rows[i-1].insertCell(j-1);
                table.rows[i-1].cells[j-1].innerHTML=str;

                str='';
            }
        }

    }

    generator();

}
