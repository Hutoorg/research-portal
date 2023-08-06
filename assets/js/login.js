setTimeout(() => {
    netlifyIdentity.on('init');
    netlifyIdentity.open('login');
    setInterval(() => {
        if (netlifyIdentity.currentUser = null) {} else { location.href = '/accounts' }
    }, 1000);
}, 1000);