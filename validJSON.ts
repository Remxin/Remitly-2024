// ____ IMPLEMENTATION ____


function checkIfMathes(t) {
    if (typeof t === "string") return t !== "*"
    else if (Array.isArray(t)) return validArray(t)  
    else if (typeof t === "object") return validJSON(t) 
    else throw new Error("Unknown JSON data type")
}


function validJSON(json) {
    let valid = true
    for (let el of Object.keys(json)) { // loop through elements
        if (!valid) break   // found asterix -> return false
        valid = checkIfMathes(json[el])  // check if there is an * within this data type
    }

    return valid
}


function validArray(arr) {
    let valid = true
    for (let el of arr) {
        if (!valid) break // found asterix -> return false
        valid = checkIfMathes(el)
    }

    return valid
}


// _____ EXAMPLE ____
const input = {
    "PolicyName": "root",
    "PolicyDocument": {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "IamListAccess",
                "Effect": "Allow",
                "Action": [
                    "iam:ListRoles",
                    "iam:ListUsers"
                ],
                "Resource": "*"
            }
        ]
    }
}

console.log(validJSON(input))