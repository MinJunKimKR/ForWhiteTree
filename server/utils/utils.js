const { MAIN_PW, PAGE_1_PW, PAGE_2_PW, PAGE_3_PW, PAGE_4_PW } = require('../config/constant')
const passwords = {
    "main": MAIN_PW,
    "1": PAGE_1_PW,
    "2": PAGE_2_PW,
    "3": PAGE_3_PW,
    "4": PAGE_4_PW
}

exports.passwordChecker = function (password, step) {
    try {
        console.log(password)
        if (!password) {
            return 'blank password'
        }
        if (step == "main" && password.replace(/ /g, "").toLowerCase() == passwords[step]) {
            return true
        } else if (step != "main" && password.replace(/ /g, "") == passwords[step]) {
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error
    }

}