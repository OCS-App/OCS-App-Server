const companyModel = require('../../models/Company');
const validate = require('../../lib/validation');

exports.SharingCompany = async (req, res) => {
    const image = req.file.filename;
    const { companyData } = req.body;
    const { userData } = req.decoded;

    console.log(companyData.name);
    console.log(image);


    try{
        const companyName = await companyModel.findCompanyName(companyData.name)

        if(companyName) {
            const result = {
                status: 302,
                message: "이미 등록된 회사명 입니다.",
            }

            res.status(409).json(result);

            return;
        }
        
        const sharingResult = await companyModel.sharing(companyData)

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

        res.status(500).json(result);
    }
}