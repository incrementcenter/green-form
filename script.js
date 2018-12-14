var countries = [{"name": "Afghanistan", "code": "AF"}, {"name": "land Islands", "code": "AX"}, {
    "name": "Albania",
    "code": "AL"
}, {"name": "Algeria", "code": "DZ"}, {"name": "American Samoa", "code": "AS"}, {
    "name": "AndorrA",
    "code": "AD"
}, {"name": "Angola", "code": "AO"}, {"name": "Anguilla", "code": "AI"}, {
    "name": "Antarctica",
    "code": "AQ"
}, {"name": "Antigua and Barbuda", "code": "AG"}, {"name": "Argentina", "code": "AR"}, {
    "name": "Armenia",
    "code": "AM"
}, {"name": "Aruba", "code": "AW"}, {"name": "Australia", "code": "AU"}, {
    "name": "Austria",
    "code": "AT"
}, {"name": "Azerbaijan", "code": "AZ"}, {"name": "Bahamas", "code": "BS"}, {
    "name": "Bahrain",
    "code": "BH"
}, {"name": "Bangladesh", "code": "BD"}, {"name": "Barbados", "code": "BB"}, {
    "name": "Belarus",
    "code": "BY"
}, {"name": "Belgium", "code": "BE"}, {"name": "Belize", "code": "BZ"}, {
    "name": "Benin",
    "code": "BJ"
}, {"name": "Bermuda", "code": "BM"}, {"name": "Bhutan", "code": "BT"}, {
    "name": "Bolivia",
    "code": "BO"
}, {"name": "Bosnia and Herzegovina", "code": "BA"}, {"name": "Botswana", "code": "BW"}, {
    "name": "Bouvet Island",
    "code": "BV"
}, {"name": "Brazil", "code": "BR"}];

function checkCountries(str) {
    var country = false;
    var newStr = capitalizeString(str);
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].name === newStr) {
            country = true;
        }
    }
    return country;
}

checkCountries("Bahrain");

function capitalizeString(str) {

    var res = str.replace(/\b\w/g, function (x) {
        return x.toUpperCase()
    });
    return res;
}

capitalizeString("hello my name is Gugusha");


function validateCountryInput() {
    var countryInput = document.querySelector("input[name='country']");
    countryInput.onchange =
        function changeInputBorder() {
            var data = countryInput.value;
            if (!checkCountries(data)) {
                countryInput.classList.add("red-border");
            }
            else {
                countryInput.classList.remove("red-border");
            }
        };
}

validateCountryInput();

function capitalizeName() {
    var nameInput = document.querySelector("input[name='name']");

    nameInput.onkeyup = function () {

        var data = nameInput.value;
        var result = capitalizeString(data);
        nameInput.value = result;
    };
}

capitalizeName();


function emailValidation() {
    var emailInput = document.querySelector("input[name='email']");
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailInput.onchange = function () {
        emailInput.classList.remove("red-border", "green-border");
        if (!emailInput.value.match(reg)) {
            emailInput.classList.add("red-border");
        }
        else {
            emailInput.classList.add("green-border");
        }
    }
}

emailValidation();

function addSpaces(spaceNum) {
    var cardNumberInput = document.querySelector("input[name='cardNumber']");
    cardNumberInput.onkeyup = function () {
        var data = cardNumberInput.value.replace(/\s*/g, "");
        if (data.length > 16) {
            data = data.slice(0, 16);
        }
        var arr = data.split("");
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (count === spaceNum) {
                arr.splice(i, 0, " ");
                count = 0;
            } else {
                count++;
            }
        }
        return cardNumberInput.value = arr.join("");

    };
}

addSpaces();

function cardType() {

    var cardInput = document.querySelector("input[name='cardNumber']");
    var visa = document.querySelector("input[value='visa']");
    var amex = document.querySelector("input[value='amex']");
    var mastercard = document.querySelector("input[value='mastercard']");

    cardInput.onkeyup = function () {
        addSpaces(4);
        if (cardInput.value == 4) {
            visa.checked = true;
        }
        else if (cardInput.value == 3) {
            amex.checked = true;
        }
        else if (cardInput.value == 5) {
            mastercard.checked = true;
        }
        else {
          //  cardInput.classList.remove("red-border", "green-border");
            cardInput.classList.add("red-border");
        }
        console.log(cardInput.value);
    }
}
cardType();