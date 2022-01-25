// 默认导出
let n1 = 10; // 定义模块私有成员 n1
let n2 = 20; // 定义模块私有成员，n2（外界访问不到n2,因为它没有被贡献出去）

function show() {}; // 定义模块私有方法 show
export default { // 使用export default 默认导出语法，向外导出n1, 和show两个成员
    n1,
    show,   
} 