const companyModel = require('../../models/Company');
const validate = require('../../lib/validation');

exports.SharingCompany = async (req, res) => {
    const image = req.file.filename;
    const { name, location, instructions, requirement, additions, annualSalary, welfare } = req.body;
    // const { userData } = req.decoded;

    console.log(name);
    console.log(image);


    try{
        const companyName = await companyModel.findCompanyName(name)

        if(companyName) {
            const result = {
                status: 302,
                message: "이미 등록된 회사명 입니다.",
            }

            res.status(409).json(result);

            return;
        }
        
        const sharingResult = await companyModel.sharing(name, image, location, instructions, requirement, additions, annualSalary, welfare)

        const result = {
            status: 200,
            data: sharingResult
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

exports.GetCompanyData = async(req, res) =>{
    const { name } = req.body
    try{
        const companyData = await companyModel.findCompanyName(name)

        if (!companyData) {
            const result = {
                status: 403,
                message: "기업이 존재하지 않습니다.",
            }

            res.status(403).json(result);

            return;
        }

        const result = {
            status: 200,
            data: companyData
        }

        res.status(200).json(result);

    } catch (error){
        const result = {
            status: 500,
            message: "서버 에러!",
        }
        console.log(error)
        res.status(500).json(result);
    }
}

exports.GetAllCompanyData = async(req, res) => {
    try{
        const companyData = await companyModel.findCompanyAllInfo()

        if (!companyData) {
            const result = {
                status: 403,
                message: "기업이 존재하지 않습니다.",
            }

            res.status(403).json(result);

            return;
        }

        const result = {
            status: 200,
            data: companyData
        }

        res.status(200).json(result);

    } catch (error){
        const result = {
            status: 500,
            message: "서버 에러!",
        }
        console.log(error)
        res.status(500).json(result);
    }
}
