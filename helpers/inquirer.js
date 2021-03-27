const inquirer = require('inquirer');
 require('colors');
 const choices = require('inquirer/lib/objects/choices');
const menu = [

    {
        type: ' list',
        name: 'option',
        message: ' what do you want to do?', 
        choices: [
         {
             value: 1,
             name:`${'1-'.blue } Create Tasks`
         },
         {
             value: 2,
             name:`${'2-'.blue } Get Tasks`
         },
         {
            value: 0,
            name:`${'0-'.blue } Salir`
        },
        

        

        ]  

    }
];  
    const inquirerMenu = async() => {
    console.log('============'.blue);
    console.log('select an option'.white);
    console.log('============='.blue);
    
    const { option } = await inquirer.prompt(menu);
    
    return option;
 



}
const inquirerInput = async( message )=>{

    const question = [
        {
            type: ' input',
            name: 'description',
            message,

        }
    ];
    const {description} = await inquirer.prompt(question);

    return description;
    
}

module.exports = {
    inquirerMenu
    

}
module.exports = {
    inquirerInput
}