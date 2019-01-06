function isPalindrome(s) {
    return s == s.split("").reverse().join("") ? true : false;
}


isPalindrome('madam');
