export class Init{
    load(){
        if(localStorage.getItem('todos')== null || localStorage.getItem('todos')==undefined){
            console.log('No Todos Found..Creating...');
            var todos = [
                {
                    text: 'Pickup kidds at schools'
                },
                {
                    text: 'Meeting with boss'
                },
                {
                    text: 'Dinner with bos'
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return
        } else{
            console.log('Found todos...')
        }
    }
}