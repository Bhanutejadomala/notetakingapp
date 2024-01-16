const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")
addBtn.addEventListener("click", function () {
    addNote()
})

function addNote() {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = ` 
    <div class="tool">
    <i class="del fa-solid fa-trash"></i>
    <i class="save fa-solid fa-floppy-disk"></i>
    </div>
    <textarea></textarea>`
    
    note.querySelector('.del').addEventListener('click',function(){
        note.remove()
    })
    note.querySelector('.save').addEventListener('click',function(){
        saveNotes()
    })
    main.appendChild(note)

    function saveNotes(){
       const notes=document.querySelectorAll('.note textarea')

       const data=[]
       notes.forEach((note)=>{
        data.push(note.value)
        console.log(data)
        localStorage.setItem('notes',JSON.stringify(data))
       })
    }
}