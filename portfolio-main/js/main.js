'use strict';

// menu
{
  const spMenu = document.querySelector('.sp-menu');
  const burgers = document.querySelectorAll('.burger')
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const lists = document.querySelectorAll('.sp-menu ul li');
  const header = document.querySelector('.sp');
  const home = document.querySelector('.home');

  home.addEventListener('click', () => {
    spMenu.classList.remove('show');
    open.classList.add('show');
    close.classList.remove('show');
    header.classList.remove('show');
  });

  burgers.forEach(burger => {
    burger.addEventListener('click', () => {
    spMenu.classList.toggle('show');
    open.classList.toggle('show');
    close.classList.toggle('show');
    header.classList.toggle('show');
    });
  });

  lists.forEach(list => {
    list.addEventListener('click', () => {
      spMenu.classList.toggle('show');
      open.classList.toggle('show');
      close.classList.toggle('show');
      header.classList.toggle('show');
    });
  });
}

// Skills
{
  const skills = document.querySelectorAll('.skill');
  const details = document.querySelectorAll('.detail');
  const more = document.querySelectorAll('.skill-content button');
  const close = document.querySelectorAll('.detail button');

  for (let i = 0; i < skills.length; i++) {

    more[i].addEventListener('click', () => {
      details[i].classList.add('appear');
    });

    close[i].addEventListener('click', () => {
      details[i].classList.remove('appear');
      });
    }

    {
      const targets = document.querySelectorAll('#works img');
    
      function callback(entries, obs) {
    
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }
      
          entry.target.classList.add('appear');
          obs.unobserve(entry.target);
        });
      }
    
      const options = {
        threshold: 1,
      };
    
      const observer = new IntersectionObserver(callback, options);
    
      targets.forEach(target => {
        observer.observe(target);
      });
    }

    // modal
{
  const modalLinks = document.querySelectorAll('.modal-link');
  const closes = document.querySelectorAll('.modal-close');
  const mask = document.getElementById('mask');
  const modals = document.querySelectorAll('.modal-window');
  const html = document.querySelector('html');
  const body = document.querySelector('body');

  for (let i = 0; i < modalLinks.length; i++) {

    modalLinks[i].addEventListener('click', () => {
      mask.classList.remove('hidden');
      html.classList.add('hidden');
      body.classList.add('hidden');
      modals[i].classList.remove('hidden');
      });

      closes.forEach(close => {
        close.addEventListener('click', () => {
          modals[i].classList.add('hidden');
          html.classList.remove('hidden');
          body.classList.remove('hidden');
          mask.classList.add('hidden');
      });

      mask.addEventListener('click', () => {
        close.click();
      });
    });
  };
}

//footer
{
  function onScrollCallback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }
  
  const header = document.querySelector('.sp');
  const toTop = document.getElementById('to_top');
  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));
  
  toTop.addEventListener('click', e => {
    e.preventDefault();
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  }
}