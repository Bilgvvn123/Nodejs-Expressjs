// operating system
const os = require("os");

// systeminfo | find "System Boot Time"
// console.log(os.uptime());
// console.log(os.type());
// console.log(os.release());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.userInfo());
// console.log(os.arch());

// 8bit -> 1byte
// 1024byte -> 1kilobyte
// 1024kilobyte -> 1megabyte
// 1024megabyte -> 1gigabye

// const currentOS = {
// 	name: os.type(),
// 	release: os.release(),
// 	totalMem: os.totalmem(),
// 	freeMem: os.freemem(),
// 	userInfo: os.userInfo(),
// 	// cpu: os.cpus(),
// };
// console.log(os.platform());

// console.log(currentOS);

//////////////////////////////////

// console.log(path.sep);
// const filePath = path.join("/content/", "subfolder", "text.txt");
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);
// console.log(path.dirname(filePath));

// const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
// console.log(absolute);

///////////////////////////////////////////

// fs.readFileSync("/content/first", "utf-8");
// fs.readFileSync("/content/second", "utf-8");

// console.log(
// 	fs.readFile(path.resolve(__dirname, "hello.txt"), "utf-8", (err, data) => {
// 		console.log(err);

// 		console.log(data);
// 	})
// );

// console.log(path.resolve());

const path = require("path");
// console.log(path.dirname("C:UsersDellDesktopBookex"));
// console.log(path.basename());

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, "helo"));

// "aa" + 12

// filesystem;
const fs = require("fs");

console.log(__dirname);
console.log(__filename);
fs.readFile(__dirname + "/ss.js", "utf-8", (err, data) => {
	console.log(data);
});

const a = "const a = 10000";
for (let i = 0; i < 100; i++) {
	fs.writeFile(__dirname + "/aa" + `/kkkkk${i}.js`, a, () => {});
}

// console.log(path.resolve(__dirname, "hello.txt"));
