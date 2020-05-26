const companyModel = require('../../models/Company');

exports.testupload = async (req, res) => {
    const image = req.file.filename;
    const { userData } = req.decoded;

    console.log(userData.name);
    console.log(image);

    const result = {
        status: 200,
        data: {
            userName: userData.name,
            image: image
        }
    }

    res.status(200).json(result);
}