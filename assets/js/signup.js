setTimeout(() => {
    netlifyIdentity.on('init');
    netlifyIdentity.open('signup');
}, 1000);