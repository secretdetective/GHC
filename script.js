const year = document.getElementById('year');
    const date = new Date().getFullYear();
    year.textContent = date;
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      window.location.href = '#trending';
    });      
    const wait = document.getElementById('wait');

    let index = 6;

    function timer(){
      index--;
      wait.textContent = index;
    }
   
    let int = setInterval(timer, 800);
    if(index <= 0 ){
      clearInterval(int);
    }
        

        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }
        
        function writeText(text){
          let index = 0;
          const display = document.querySelector('.display');
          const wait = document.getElementById('wait');
          function writeNextLetter(){
            if(index < text.length){
              document.getElementById('header').innerHTML += text.charAt(index);
              index++;
            } else {
              clearInterval(interval);
              display.style.display = 'block';
              wait.style.display = 'none';
            }
          }
          let interval = setInterval(writeNextLetter, 180);
        }
        writeText('All Grace Household Ministry');
        const allSongs = document.getElementById('allSongs');
        allSongs.addEventListener('click', () => {
          const tracks = document.getElementById('tracks');
          tracks.textContent = 'All Songs';
        });
   