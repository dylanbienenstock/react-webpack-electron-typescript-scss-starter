const { exec } = require("child_process");
const { unlink } = require("fs");
const { join } = require("path");


console.log("Compiling web content...");
exec("webpack --mode development --watch");


console.log("Launching Electron application...")
exec("tsc ./src/electron/main.ts && electron ./src/electron/main.js", () => {
    exit();
});


function exit() {
    console.log("Cleaning up...")
    unlink(join(__dirname, "../src/electron/main.js"))

    console.log("Goodbye!\n")
    process.exit();
}


process.on("SIGINT", exit);