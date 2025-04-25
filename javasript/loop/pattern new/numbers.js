//        1
//      1 2
//    1 2 3
//  1 2 3 4
//1 2 3 4 5

for (i = 1; i <= 5; i++) {
    for (j = i; j < 5; j++) {
        document.writeln("&nbsp&nbsp");
    }
    for (k = 1; k <= i; k++) {
        document.writeln(k)
    }
    document.writeln("<br>");
}


//        1
//      2 1
//    3 2 1
//  4 3 2 1
//5 4 3 2 1


for (i = 1; i <= 5; i++) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = i; j >= 1; j--) {
        document.writeln(j);
    }
    document.writeln("<br>");
}

//        5
//      4 5
//    3 4 5
//  2 3 4 5
//1 2 3 4 5

for (i = 5; i >= 1; i--) {
    for (k = i; k > 1; k--) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = i; j <= 5; j++) {
        document.writeln(j);
    }
    document.writeln("<br>");
}



//        5
//      5 4
//    5 4 3
//  5 4 3 2
//5 4 3 2 1

for (i = 5; i >= 1; i--) {
    for (k = 1; k < i; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = 5; j >= i; j--) {
        document.writeln(j);
    }
    document.writeln("<br>");
}


//        1
//      2 2
//    3 3 3
//  4 4 4 4
//5 5 5 5 5

for (i = 1; i <= 5; i++) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = 1; j <= i; j++) {
        document.writeln(i);
    }
    document.writeln("<br>");
}



//        5
//      4 4
//    3 3 3
//  2 2 2 2
//1 1 1 1 1

for (i = 5; i >= 1; i--) {
    for (k = 1; k < i; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = 5; j >= i; j--) {
        document.writeln(i);
    }
    document.writeln("<br>");
}


//1 2 3 4 5
//  1 2 3 4
//    1 2 3
//      1 2
//        1

for (i = 5; i >= 1; i--) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = 1; j <= i; j++) {
        document.writeln(j);
    }
    document.writeln("<br>");
}



//1 2 3 4 5
//  2 3 4 5
//    3 4 5
//      4 5
//        5


for (i = 1; i <= 5; i++) {
    for (k = 1; k < i; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = i; j <= 5; j++) {
        document.writeln(j);
    }
    document.writeln("<br>");
}



//5 4 3 2 1
//  5 4 3 2
//    5 4 3
//      5 4
//        5  

for (i = 1; i <= 5; i++) {
    for (k = 1; k < i; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = 5; j >= i; j--) {
        document.writeln(j);
    }
    document.writeln("<br>");
}




//5 4 3 2 1
//  4 3 2 1
//    3 2 1
//      2 1
//        1

for (i = 5; i >= 1; i--) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = i; j >= 1; j--) {
        document.writeln(j);
    }
    document.writeln("<br>");
}




//* * * * *
//  * * * *
//    * * *
//      * *
//        *

for (i = 5; i >= 1; i--) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = i; j >= 1; j--) {
        document.writeln("*");
    }
    document.writeln("<br>");
}





//        *
//      * *
//    * * *
//  * * * *
//* * * * *

for (i = 1; i <= 5; i++) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = 1; j <= i; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}




//        1
//      1 0
//    1 0 1
//  1 0 1 0
//1 0 1 0 1

for (i = 1; i <= 5; i++) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = 1; j <= i; j++) {
        if (j % 2 == 0) {
            document.writeln("0");
        }
        else {
            document.writeln("1");
        }
    }
    document.writeln("<br>");
}



//        1
//      0 0
//    1 1 1
//  0 0 0 0
//1 1 1 1 1

for (i = 1; i <= 5; i++) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = 1; j <= i; j++) {
        if (i % 2 == 0) {
            document.writeln("0");
        }
        else {
            document.writeln("1");
        }
    }
    document.writeln("<br>");
}




//1 0 1 0 1
//  0 1 0 1
//    1 0 1
//      0 1
//        1

// for (i = 5; i >= 1; i--) {
//     for (k = i; k < 5; k++) {
//         document.writeln("&nbsp&nbsp");
//     }
//     for (j = i; j >= 1; j--) {
//         if (j % 2 == 0) {
//             document.writeln("0");
//         }
//         else {
//             document.writeln("1");
//         }
//     }
//     document.writeln("<br>");
// }





//1 0 1 0 1
//  1 0 1 0
//    1 0 1
//      1 0
//        1

for (i = 5; i >= 1; i--) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = 1; j <= i; j++) {
        if (j % 2 == 0) {
            document.writeln("0");
        }
        else {
            document.writeln("1");
        }
    }
    document.writeln("<br>");
}




//1 1 1 1 1
//  0 0 0 0
//    1 1 1
//      0 0
//        1

for (i = 1; i <= 5; i++) {
    for (k = 1; k < i; k++) {
        document.writeln("&nbsp&nbsp");
    }
    for (j = i; j <= 5; j++) {
        if (i % 2 !== 1) {
            document.writeln("0");
        }
        else {
            document.writeln("1");
        }
    }
    document.writeln("<br>");
}




//- | - | -
//  - | - |
//    - | -
//      - |
//        -

for (let i = 5; i >= 1; i--) {
    for (k = i; k < 5; k++) {
        document.writeln("&nbsp");
    }
    for (let j = i; j >= 1; j--) {
        if (j % 2 !== 1) {
            document.write("| ")
        }
        else {
            document.write("-  ")
        }

    }
    document.write("<br> ")
}




//         |
//       | -
//     | - |
//   | - | -
// | - | - |

for (i = 1; i <= 5; i++) {
    for (j = i; j < 5; j++) {
        document.writeln("&nbsp");
    }
    for (k = 1; k <= i; k++) {
        if (k % 2 !== 1) {
            document.write("- ")
        }
        else {
            document.write("|  ")
        }
    }
    document.writeln("<br>");
}