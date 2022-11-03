import store from '../store';

function handleStoreSize(width, height, type) {  
  const SIZE = {
    width,
    height,
    type
  };

  store.dispatch('sizeScreen/setSize', SIZE);
} 

function handleResize() {
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  let TYPE = null;

  if (WIDTH >= 0 && WIDTH < 576) {
    TYPE = 'xs';
  }

  if (WIDTH >= 576 && WIDTH < 768) {
    TYPE = 'sm';
  }

  if (WIDTH >= 768 && WIDTH < 992) {
    TYPE = 'md';
  }

  if (WIDTH >= 992 && WIDTH < 1200) {
    TYPE = 'lg';
  }

  if (WIDTH >= 1200) {
    TYPE = 'xl';
  }

  handleStoreSize(WIDTH, HEIGHT, TYPE);
}

handleResize();


window.addEventListener('resize', () => {
  handleResize();
});