setTimeout(() => {
    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.open('signup');
}, 1000);