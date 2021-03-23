let count = 0;

init();

document.querySelector('.add').addEventListener('click', function() {
    count++;
    document.querySelector('.count').textContent = count;
    if(count > 0){
        document.querySelector('.count').style.color = 'blue';
    }

});

document.querySelector('.reduce').addEventListener('click', function() {
    count--;
    document.querySelector('.count').textContent = count;
    if(count < 0){
         document.querySelector('.count').style.color = 'red';
    }
});

function init(){
    document.querySelector('.count').textContent = count;
}