const element = document.getElementById('btn')

element.addEventListener('click',() => {
    setTimeout(() => {
        document.getElementById('text').textContent = 'ボタンをクリックしました';
    },2000)
})
