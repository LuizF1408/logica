
var moduloMedia = function media(n) {
    var res = 0
    res = (n[0] + n[1] + n[2]) / 3
    console.log(`A media é ${res}`)
    return

}
exports.moduloMedia = moduloMedia

var mediaIdade = function mediaI(med) {

    var resp = (med[0].idade + med[1].idade + med[2].idade) / 3
console.log(`A media de idade é ${resp.toFixed(2)}`)

}
exports.mediaIdade = mediaIdade

