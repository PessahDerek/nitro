
exports.handleErrors = (error) => {
    console.log("Unhandled Exception: \n\t", error)
    process.exit(1)
}