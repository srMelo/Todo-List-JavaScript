const tasks = []
let index = 0
const btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    let task = document.getElementById('task')
    task = task.value
    

    const tarefa= {}
        tarefa.nome = task
        tarefa.id = index
        tarefa.concluida = false

  
    tasks.push(tarefa)
    index++

    console.log(tasks)

    inner(tarefa)
    let input1 = document.getElementById('task')
    input1.value = ''

})

function inner (tarefa){
    

    let novastarefas = document.getElementById('NewTask')
    
    let tarefas = document.createElement('ol')
        tarefas.innerHTML= `<div class= "blocos">
                                <div id="tarefa ${tarefa.id}" class="novatarefa">${tarefa.nome}</div>
                                <div ><button onclick="alternar(${tarefa.id})" class = "OK" >ok</button></div>
                            </div>`
        novastarefas.appendChild(tarefas)
        

}


function alternar (tarefas){
   let task = document.getElementById(`tarefa ${tarefas}`)
   let tarefaSelecionada = tasks.find(element => {
   return element.id === tarefas
   })
   tarefaSelecionada.concluida = !tarefaSelecionada.concluida
   if(tarefaSelecionada.concluida)
   task.classList.add("tarefa-concluida")
   else 
   task.classList.remove("tarefa-concluida")

}

