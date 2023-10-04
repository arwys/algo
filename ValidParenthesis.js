let parenthesis = ["[]", "()", "{}"];
const input = ["()", "()[]{}", "(]", "(){}}{","{[]}"];
undefined
    {



const isValid = function (s) {

    const stack = []
    let start = 0
    while (start < s.length ){
        stack.push(s[start])
        start ++
        const open = stack[stack.length-2]
        const close = stack[stack.length-1]
        const match = open + close
        console.log(open,close,start)
        if( parenthesis.includes(match)){
            stack.pop()
            stack.pop()
        }
    }
    return stack.length === 0
};

// const response = input.map(i=>isValid(i))

const response = isValid(input[4]);
console.log(response);
