const companyModel = require('../../models/Company');
const validate = require('../../lib/validation');

const 이익현 = 1;

exports.testupload = async (req, res) => {
    const image = req.file.filename;
    const { companyData } = req.decoded;

    console.log(companyData.name);
    console.log(image);

    const validateUserData = await validate.vaildateSharingCompany(companyData);

    if(validateUserData){
        const result = {
            status: 400,
            message: "공유 양식을 확인 해주세요!",
        }

        res.status(400).json(result);
    }

    try{
        const companyName = await companyModel.sharing(name);

        if(companyName) {
            const result = {
                status: 302,
                message: "이미 등록된 회사명 입니다.",
            }

            res.status(409).json(result);

            return;
        }
    
        const result = {
            status: 200,
            data: {
                companyName: companyData.name,
                image: image, // 여기도 다른 것들처럼 바꿔야 하나 놔두어도 되나
                location: companyData.location,
                instructions: companyData.instructions,
                requirement: companyData.require,
                additions: companyData.additions,
                annualSalary: companyData.annualSalary,
                welfare: companyData.welfare
            }
        }

        res.status(200).json(result);
    } catch (error){
        const result = {
            status: 500,
            message: "서버 에러!",
        }

        res.status(500).json(result);
    }
}