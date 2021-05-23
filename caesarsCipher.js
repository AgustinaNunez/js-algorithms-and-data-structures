function rot13(str) {
    const rot = 13;
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const abcRot = abc.substring(rot)+abc.substring(0,rot);

    function toAbc(letterRot) {
        if (abc.split("").includes(letterRot)) {
            const iAbcRot = abcRot.split("").indexOf(letterRot);
            return abc.split("")[iAbcRot];
        }
        return letterRot;
    }
    return str.split("").map(letterRot => toAbc(letterRot)).join("");
}