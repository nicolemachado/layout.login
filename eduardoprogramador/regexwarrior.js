/*
    Copyright 2021. Eduardo Programador
    www.eduardoprogramador.com
    consultoria@eduardoprogramador.com
    All Rights Reserved

    This file contains routines
    for regular expressions and text extractions.

    1) Include it on your HTML File
    Eg.: <stript src="js/regexwarrior.js"></script>

    2) Initiate the class
    Eg.: let reg = new RegexWarrior();

    3)Invoke the methods
    Eg.: reg.isEmail("consultoria@eduardoprogramador.com");
*/

class RegexWarrior {

    /*
        No argument required
    */
    constructor() {

    }

    /*
        Returns true if the param is a valid email.
        False, otherwise
    */
    isEmail(string) {
        const email = /^[A-Za-z0-9-_]+[\.A-Za-z0-9-_]+@[A-Za-z0-9-_]{2,}\.[A-Za-z]{2,}\.*[A-Za-z]*/;
        if(email.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    /*
        Returns true if the param is a valid phone number.
        False, otherwise
    */
    isPhoneNumber(string) {
        const phone = /[\d]{7,15}/;
        if(phone.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    /*
        Returns true if the param is a valid coordinate number.
        False, otherwise
        (latitude, longitude or altitude)
    */
    isCoordinate(string) {
        const coordinate = /-*\d{1,2}\.\d{7}/;
        if(coordinate.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    /*
        For Brazilians only.
        Returns true if the param is a valid CNPJ.
        False, otherwise
    */
    isCnpj(string) {
        const cnpj = /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/;
        if(cnpj.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    /*
        For Brazilians only
        Returns true if the param is a valid cpf.
        False, otherwise
    */
    isCpf(string) {
        const cpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
        if(cpf.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    /*
        For Brazilians Only.
        Returns true if the param is a valid CEP.
        False, otherwise
    */
    isCep(string) {
        const cep = /\d{5}-\d{3}/;
        if(cep.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    /*
        Returns true if the param is a valid ip.
        False, otherwise
    */
    isIp(string) {
        const ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
        if(ip.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    /*
        Returns true if the param is a valid MAC Address.
        False, otherwise
    */
    isMacAddress(string) {
        const mac = /^[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}/;
        if(mac.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    /*
        Extracts all numbers from a string
        The result is an array
    */
    extractNumbers(text) {
        const number = /\d/;
        var result = "";
        var res = [];

        while((result = number.test(text)) != null) {
            res.push(result);
        }

        return res;
    }
    
    /*
        Extracts all strings from a text.
        The result is an array
    */
    extractStrings(text) {
        const string = /\w/;
        var result = "";
        var res = [];

        while((result = string.test(text)) != null) {
            res.push(result);
        }
    }

    /* 
        Extracts all HTML tags from a text
    */
    extractHtmlTags(text) {
        const html = /<!*[*\w\s="-\/]+>/;
        var result = "";
        var res = [];

        while((result = html.test(text)) != null) {

            res.push(text);

        }
    }

    


}