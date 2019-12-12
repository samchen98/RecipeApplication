import requests
img_path = './path/to/img'
url = 'http://www.yourwebserver.com/api/img'
files = {'file': ('image.jpg', open(img_path, 'rb'), 'image/jpeg')}
r = requests.post(url, files=files)
print(r.text)
// ImgModel.js
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ImgSchema = new Schema({
    img: { data: Buffer, contentType: String}
}, {
    timestamps: true
});
module.exports = mongoose.model('Img', ImgSchema);
// server.js
const express = require('express');
const fs = require('fs');
var app = express();
var router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    }
});
const multer = require('multer');
const upload = multer({ storage: storage });
router.route('/img_data')
.post(upload.single('file'), function(req, res) {
    var new_img = new Img;
    new_img.img.data = fs.readFileSync(req.file.path)
    new_img.img.contentType = 'image/jpeg';  // or 'image/png'
    new_img.save();
res.json({ message: 'New image added to the db!' });
}).get(function(req, res) {
    Img.findOne({}, 'img createdAt', function(err, img) {
        if (err)
            res.send(err);
        res.contentType('json');
        res.send(img);
    }).sort({ createdAt: 'desc' });
});

// index.js
import React, { Component } from 'react';
class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };
    };
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    componentDidMount() {
        fetch('http://yourserver.com/api/img_data')
        .then((res) => res.json())
        .then((data) => {
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr =
                this.arrayBufferToBase64(data.img.data.data);
            this.setState({
                img: base64Flag + imageStr
            )}
        })
    }
    render() {
        const {img} = this.state;
        return (
            <img
                src={img}
                alt='Helpful alt text'/>
        )
    }
export default Image;