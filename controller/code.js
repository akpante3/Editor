const fs = require('fs');
const path = require('path');
const sh = require('child_process').execSync;


exports.runCode = (req,res,next) => { 
    try {
        const input = `function printHi(name = "Victor") {
            console.log("Hi, " + name + " you are mad!")
            return "mad oooooo"
          }
          const r = 'r'
          console.log(r, printHi("J"))`;
          
    
          // make a tmp dir
    
          sh('mkdir __tmp__');
          // prepare temp file
          const fileName = `${Date.now()}.js`;
          const tmpFilePath = path.join(process.cwd(), '__tmp__', fileName);
          
          console.log(tmpFilePath, '=======')
    
          // create the temp file
          fs.writeFileSync(tmpFilePath, input, { encoding: 'utf8' });
          // execute the file using node bin and get output
          const output = sh(`node ${tmpFilePath}`).toString();
          // clean up tmp dir
          sh('rm -rf __tmp__');
    
          console.log(output, 'output');
    
          return res.status(200).json({
            success: true
          })
    } catch(err) {
       console.log(err, 'error')
    }
}