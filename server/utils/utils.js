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
        if (step == "main" && password.replace(/ /g, "").toLowerCase() == passwords[step]) {
            return {
                result: true
            }
        } else if (step != "1" && password.replace(/ /g, "") == passwords[step]) {
            return {
                result: true
            }
        } else {
            return {
                result: false
            }
        }
    } catch (error) {
        throw error
    }

}