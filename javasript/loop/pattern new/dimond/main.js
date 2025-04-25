//          *
//         * *
//        *   *
//       *     *
//      *       *
//     *         *
//    *           *
//   *             *
//  *               *
// *                 *
//  *               *
//   *             *
//    *           *
//     *         *
//      *       *
//       *     *
//        *   *
//         * *
//          *


x = 10
y = 10
for (i = 1; i <=10; i++) {
    for (j = 1; j <=20; j++) {
        if (j == x || j == y) {
            document.writeln("*");
        }
        else {
            document.writeln("&nbsp&nbsp");
        }
        
    }
    
        x--;
        y++;
    document.writeln("<br>");
}
a=2
b=18
for (i = 1; i <=9; i++) {
    for (j = 1; j <=20; j++) {
        if (j == a || j == b) {
            document.writeln("*");
        }
        else {
            document.writeln("&nbsp&nbsp");
        }
        
    }
    
        a++;
        b--;
    document.writeln("<br>");
}