const { inquirerMenu ,inquirerInput } = require('./helpers/inquirer');
const TaskRepository = require('./repositories/TaskRepository');
let option
const main  = async () => {
  const taskRepository = new TaskRepository();

  do {
    const option = await inquirerMenu();

     switch (option) {

        case 1:
        
        console.log('el usuario selecciono la opcion crear tarea')

       const title = await inquirerInput('Tasks Title')
       console.log('title');
        
       taskRepository.createTask(title);

        break;

       case 2:
         const allTasks = tasksRepository.getAllTasks();

         console.log(allTasks);
        //todo: mostrar la lista de tarea de la base de datos
        break;
    }
    

  }while (option !== 0);



}    


main();
