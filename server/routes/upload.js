const multer = require("multer");
const fileStorageEngine = multer.diskStorage({
    destination: "./public/images/projects",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        if (!Array.isArray(req.image)) {
            req.image = []
        }
        req.image.push(file.originalname);
    }
})

const upload = multer({storage: fileStorageEngine });

module.exports = upload;