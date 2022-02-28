const allArrove = document.querySelectorAll('arrow')
const playingField = document.querySelector('.square-body')
const blocks = document.querySelectorAll('.block')
const btnReset = document.querySelector('.btn-reset')

let numBlock
let temp
let nextIndex

blocks.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if(e.target.closest('.arrow')) {
            numBlock = item.querySelector('.block-number').textContent
            if(e.target.closest('.arrow.top')) {
                nextIndex = index-5

                if(nextIndex >= 0) {
                    temp = item.innerHTML
                    item.innerHTML = blocks[index-5].innerHTML
                    blocks[index-5].innerHTML = temp
                }
            }
            if(e.target.closest('.arrow.right')) {
                nextIndex = index+1

                if(nextIndex <= blocks.length) {
                    temp = item.innerHTML
                    item.innerHTML = blocks[index+1].innerHTML
                    blocks[index+1].innerHTML = temp
                }
            }
            if(e.target.closest('.arrow.bottom')) {
                nextIndex = index+5

                if(nextIndex <= blocks.length) {
                    temp = item.innerHTML
                    item.innerHTML = blocks[index+5].innerHTML
                    blocks[index+5].innerHTML = temp
                }
            }
            if(e.target.closest('.arrow.left')) {
                nextIndex = index-1

                if(nextIndex >= 0) {
                    temp = item.innerHTML
                    item.innerHTML = blocks[index-1].innerHTML
                    blocks[index-1].innerHTML = temp
                }
            }
        }
    })
})

btnReset.addEventListener('click', () => {
    for(let i = 0; i < blocks.length; i++) {
        blocks[i].querySelector('.block-number').textContent = i+1
    }
})