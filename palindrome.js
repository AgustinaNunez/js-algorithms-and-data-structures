function palindrome(str) {
    const strCleaned = str.toLowerCase().replace(/[^a-z0-9]/ig,"").split("")
    return strCleaned.join("") == strCleaned.reverse().join("")
}