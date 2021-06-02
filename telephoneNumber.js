function telephoneCheck(str) {
    const found = str.match(/(\d{10})|(^[1]\s?\d{3}\s\d{3}\s\d{4})|([1]?\s?\(\d{3}\)?\s?\d{3}-\d{4})|(([1]\s)?\d{3}-\d{3}-\d{4})/g);
    if (found == null) return false;
    return found[0] == str;
}

telephoneCheck("555-555-5555")
telephoneCheck("(555)555-5555")
telephoneCheck("(555) 555-5555")
telephoneCheck("555 555 5555")
telephoneCheck("5555555555")
telephoneCheck("1 555 555 5555")