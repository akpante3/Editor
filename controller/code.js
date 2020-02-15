const fs = require('fs');
const path = require('path');
const sh = require('child_process').execSync;


exports.runCode = async (req,res,next) => { 
    try {

        console.log(req.body.code, '======>>>')
        const input = req.body.code
          
        const filePath = './__tmp__'
        
        // make a tmp dir
        if (fs.existsSync(filePath)) {
            sh('rm -rf __tmp__')
        }

        sh('mkdir __tmp__');

        // prepare temp file
        const fileName = `${Date.now()}.js`;
        const tmpFilePath = path.join(process.cwd(), '__tmp__', fileName);
        
        console.log(tmpFilePath, '=======')

        // create the temp file
        fs.writeFileSync(tmpFilePath, input, { encoding: 'utf8' });
        // execute the file using node bin and get output
        let output;
        output = sh(`node ${tmpFilePath}`).toString();
        // clean up tmp dir
        // sh('rm -rf __tmp__');

        console.log(output, 'output');

        return res.json({
            success: true,
            data: output
        })

    } catch(err) {

        return res.json({
            success: false,
            data: err.toString()
        })
    }
}