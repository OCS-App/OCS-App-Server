const memberModel = require('../../models/Member');
const tokenLib = require('../../lib/token');
const validate = require('../../lib/validation');

const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");



exports.login = async (req, res) => {
    console.log('\n' + moment().format('YYYY-MM-DD HH:mm:ss'));
    const { e_mail, pw } = req.body;
    console.log('login');
    console.log(e_mail, pw)

    if (!e_mail) {
        const result = {
            status: 400,
            message: "e_mail을 입력해주세요!",
        }

        res.status(400).json(result);

        return;
    }

    if (!pw) {
        const result = {
            status: 400,
            message: "pw를 입력해주세요!",
        }

        res.status(400).json(result);

        return;
    }

    try {
        const member = await memberModel.findMemberForLogin(e_mail, pw);

        if (!member) {
            const result = {
                status: 403,
                message: "가입이 되지 않은 회원입니다!",
            }

            res.status(403).json(result);

            return;
        }

        const token = await tokenLib.issuedToken(member.e_mail, member);

        const result = {
            status: 200,
            message: "로그인 성공!",
            data: {
                token,
                member
            }
        }

        res.status(200).json(result);


    } catch (error) {
        console.log(error);

        const result = {
            status: 500,
            message: "서버 에러!",
        }

        res.status(500).json(result);
    }
}

exports.register = async (req, res) => {
    console.log('\n' + moment().format('YYYY-MM-DD HH:mm:ss'));
    const { body } = req;
    console.log('register');
    console.log(body.e_mail)

    const validateBody = await validate.validateRegisterUser(body);

    if(validateBody){
        const result = {
          status: 400,
          message: "회원가입 양식을 확인 해주세요!",
        }
    
        res.status(400).json(result);
    }

    try {
        const memberEmail = await memberModel.findMemberEmail(body.e_mail);

        if (memberEmail) {
            const result = {
                status: 302,
                message: "이미 가입이 된 e_mail입니다!",
            }

            res.status(409).json(result);

            return;
        }

        await memberModel.registerAccount(body);

        const result = {
            status: 200,
            message: "회원가입 성공!",
        }

        res.status(200).json(result);
    } catch (error) {

        const result = {
            status: 500,
            message: "서버 에러!",
        }

        res.status(500).json(result);
    }
}
