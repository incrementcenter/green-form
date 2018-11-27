function capitalizeString(str) {

    var res = str.replace(/\b\w/g, function (x) {
        return x.toUpperCase()
    });
    console.log(res);
}

capitalizeString("hello my name is Booba");