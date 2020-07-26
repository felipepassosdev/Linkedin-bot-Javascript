setInterval(() => {
    var todos = document.querySelectorAll('.mt2 .ember-view')
    var clicar = document.querySelector('.mt2 .ember-view')

    todos.forEach(item => {
        if (!item.classList.contains('artdeco-button--muted')){
            item.click()
        }
        
    }, 8000)  
}) 

