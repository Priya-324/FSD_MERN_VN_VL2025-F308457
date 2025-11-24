function downloadFile(filename, callback) {
    setTimeout(() => {
        console.log(`Downloading ${filename}...`);
        callback();
    }, 2000);
}
downloadFile("assignment.pdf", () => console.log("Download complete!"));