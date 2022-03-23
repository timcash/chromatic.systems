// serve a list of static files
import * as express from "express";
import * as path from "path";
import * as fs from "fs";

function renameFile(oldPath: string, newPath: string) {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function hostFilesOnPort8080(app: express.Express) {
    // serve static files on url /public
    app.use("/public", express.static(path.join(__dirname, "public")));

    app.listen(8080, () => {
        console.log("Listening on port 8080");
    });
}
